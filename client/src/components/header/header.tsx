import { Heart, ShoppingCart, Store, UserRound } from "lucide-react";
import { ModeToggle } from "../ThemeToggler/themeToggleer";
import Wrapper from "../wrapper";

export const Header = () => {
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
          <Heart className='cursor-pointer' />
          <ShoppingCart className='cursor-pointer' />
          <UserRound className='cursor-pointer' />
          <ModeToggle />
        </div>
      </div>
    </Wrapper>
  );
};
