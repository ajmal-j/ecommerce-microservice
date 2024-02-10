import { Heart, Trash } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ReactNode } from "react";
import { UserCart } from "@/providers/cartProvider";
import toast from "react-hot-toast";
import { cartApi } from "@/utils/axios";
import { UserAuth } from "@/providers/userProvider";

export function HoverCart({ children }: { children: ReactNode }) {
  const { cart } = UserCart();
  const { user } = UserAuth();
  const handleDelete = async (productId: string) => {
    try {
      await cartApi.delete("/delete", {
        data: { userId: user?._id, productId },
      });
      toast.success("Deleted.");
    } catch (error) {
      console.log(error);
      toast.error("Cannot delete.");
    }
  };
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='w-max'>
        <ul className='flex flex-col divide-y divide-gray-200'>
          {cart?.length > 0 &&
            cart.map(({ product }: any) => (
              <li
                key={product?._id}
                className='flex flex-col py-6 sm:flex-row sm:justify-between'
              >
                <div className='flex w-full space-x-2 sm:space-x-4'>
                  <img
                    className='h-16 w-16 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-24 sm:w-24'
                    src={product?.images[0]}
                  />
                  <div className='flex w-full flex-col justify-between pb-4'>
                    <div className='flex w-full justify-between space-x-2 pb-2'>
                      <div className='space-y-1'>
                        <h3 className='text-lg capitalize font-semibold leading-snug sm:pr-8'>
                          {product?.title}
                        </h3>
                      </div>
                      <div className='text-right'>
                        <p className='text-lg font-semibold'>
                          ₹ {product?.price}
                        </p>
                      </div>
                    </div>
                    <div className='flex divide-x text-sm'>
                      <button
                        onClick={() => handleDelete(product?._id)}
                        type='button'
                        className='flex items-center space-x-2 px-2 py-1 pl-0'
                      >
                        <Trash size={16} />
                        <span>Remove</span>
                      </button>
                      <button
                        type='button'
                        className='flex items-center space-x-2 px-2 py-1'
                      >
                        <Heart size={16} />
                        <span>Add to favorites</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total :{" "}
            <span className='font-semibold'>
              {cart?.reduce(
                (acc, val: any) => (acc += val?.product?.price),
                0
              ) || 0}
            </span>
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
