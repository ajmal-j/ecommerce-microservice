import { Heart, ShoppingCart, Store, User, UserX } from "lucide-react";
import { ModeToggle } from "../ThemeToggler/themeToggleer";
import Wrapper from "../wrapper";
import { useEffect } from "react";
import { UserAuth } from "@/providers/userProvider";
import { authApiWithToken } from "@/utils/axios";
import { removeLocalStorage } from "@/utils/localStorage";
import { Link, Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { DropdownProfile } from "../profileDropDown";

export const Header = () => {
  const { user, setUser } = UserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    authApiWithToken
      .get("current-user")
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error: any) => {
        console.log(error);
        if (error?.message !== "Not authorized") {
          navigate("/login");
          toast.error("Authorization failed.");
          removeLocalStorage();
        }
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
          <Link to={"/cart"}>
            <ShoppingCart className='cursor-pointer size-5 hover:text-foreground/50' />
          </Link>
          <DropdownProfile user={user} />
          <ModeToggle />
        </div>
      </div>
      <Outlet />
    </Wrapper>
  );
};
