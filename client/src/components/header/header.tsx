import { Heart, ShoppingCart, Store, User, UserX } from "lucide-react";
import { ModeToggle } from "../ThemeToggler/themeToggleer";
import Wrapper from "../wrapper";
import { useEffect } from "react";
import { UserAuth } from "@/providers/userProvider";
import { authApiWithToken } from "@/utils/axios";
import { removeLocalStorage } from "@/utils/localStorage";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
        if (error?.message !== "NOTOKENINLOCALSTORAGE") {
          navigate("/login");
          toast.error("Authorization failed.");
          removeLocalStorage();
        }
      });
  }, []);
  return (
    <Wrapper>
      <div className='flex justify-between px-7 py-3 items-center border mb-5 rounded-full'>
        <div>
          <span className='flex gap-3 items-center'>
            <Store className='cursor-pointer size-8' />
            <span className='font-bold'>Urban Grove</span>
          </span>
        </div>
        <div className='flex w-full items-center justify-between max-w-[200px]'>
          <Heart className='cursor-pointer size-5 hover:text-foreground/50' />
          <ShoppingCart className='cursor-pointer size-5 hover:text-foreground/50' />
          {user ? (
            <User className='cursor-pointer size-5 hover:text-foreground/50' />
          ) : (
            <Link to={"/login"}>
              <UserX className='s size-5 hover:text-foreground/50' />
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </Wrapper>
  );
};
