import { Heart, ShoppingCart, Store } from "lucide-react";
import { ModeToggle } from "../ThemeToggler/themeToggleer";
import Wrapper from "../wrapper";
import { useEffect } from "react";
import { UserAuth } from "@/providers/userProvider";
import { authApiWithToken, cartApi } from "@/utils/axios";
import { Link, Outlet } from "react-router-dom";
import { DropdownProfile } from "../profileDropDown";
import { UserCart } from "@/providers/cartProvider";
import { Footer } from "../footer";
import { HoverCart } from "../hoverCart";

export const Header = () => {
  const { user, setUser } = UserAuth();
  const { cart, setCart } = UserCart();
  useEffect(() => {
    authApiWithToken
      .get("current-user")
      .then((response) => {
        setUser(response.data.data);
        cartApi
          .post("/carts", { id: response?.data?.data?._id })
          .then(({ data }: any) => {
            setCart(data?.data);
          })
          .catch((error: Error) => {
            console.log(error);
            // toast.error("Error occurred while getting cart.");
          });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  return (
    <Wrapper>
      <div className='flex justify-between px-7 py-3 items-center border mb-5 rounded-full'>
        <Link to={"/"}>
          <span className='flex gap-3 items-center'>
            <Store className='cursor-pointer size-8' />
            <span className='font-bold'>Urban Grove</span>
          </span>
        </Link>
        <div className='flex w-full items-center justify-between max-w-[200px]'>
          <Heart className='cursor-pointer size-5 hover:text-foreground/50' />
          
          <HoverCart>
            <Link to={"/cart"}>
              <div className='relative'>
                <ShoppingCart className='cursor-pointer size-5 hover:text-foreground/50' />
                <span className='absolute top-[-2px] font-thin text-xs right-0 bg-background rounded-2xl text-red-600'>
                  {cart.length || null}
                </span>
              </div>
            </Link>
          </HoverCart>

          <DropdownProfile user={user} />
          <ModeToggle />
        </div>
      </div>
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
