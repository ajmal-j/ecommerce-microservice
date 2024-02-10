import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserCart } from "@/providers/cartProvider";
import { UserAuth } from "@/providers/userProvider";
import { removeLocalStorage } from "@/utils/localStorage";
import { LogIn, LogOut, User } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export function DropdownProfile({ user }: any) {
  const { setUser } = UserAuth();
  const { setCart } = UserCart();
  const handleLogOut = async () => {
    removeLocalStorage();
    setUser(null);
    setCart([]);
    toast.success("Logged Out.");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <User className='cursor-pointer size-5 hover:text-foreground/50' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>{user?.name || "Hi there !"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user && user.name ? (
          <DropdownMenuItem onClick={handleLogOut}>
            Log out
            <DropdownMenuShortcut>
              <LogOut className='size-4' />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ) : (
          <Link to={"/login"}>
            <DropdownMenuItem>
              Log In
              <DropdownMenuShortcut>
                <LogIn className='size-4' />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
