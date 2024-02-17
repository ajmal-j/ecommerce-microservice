import { Trash } from "lucide-react";
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
import { Link } from "react-router-dom";

export function HoverCart({ children }: { children: ReactNode }) {
  const { cart, setCart } = UserCart();
  const { user } = UserAuth();
  const handleDelete = async (productId: string) => {
    try {
      await cartApi.delete("/delete", {
        data: { userId: user?._id, productId },
      });
      setCart(
        (prev: []) =>
          prev.filter(({ product }: any) => product?._id !== productId) as []
      );

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
        <span className='text-foreground/80 ps-2 pb-2'>Cart </span>
        <div className='mt-6 space-y-6'>
          <ul className='space-y-4'>
            {cart.length &&
              cart.map(({ product }: { product: any }) => (
                <li key={product._id} className='flex items-center gap-4'>
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.images[0]}
                      className='h-16 w-16 rounded object-cover'
                    />
                  </Link>
                  <div className='flex justify-between items-center  w-full'>
                    <div>
                      <h3 className='text-sm text-foreground'>
                        {product.title}
                      </h3>
                      <dl className='mt-0.5 space-y-px text-[10px] text-muted-foreground'>
                        <div>
                          <dd className='inline font-bold'>
                            ₹ {product.price}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <button
                      onClick={() => handleDelete(product?._id)}
                      type='button'
                      className='flex items-center space-x-2 px-2 py-1 pl-0'
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
          <div className='space-y-4 text-center'>
            <Link to={"/cart"}>
              <button
                type='button'
                className='w-full rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
              >
                View Cart ({cart.length})
              </button>
            </Link>
            <button
              type='button'
              className='w-full rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
            >
              Checkout
            </button>
            <a
              href='#'
              className='inline-block text-sm text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4'
            >
              Continue shopping &rarr;
            </a>
          </div>
        </div>
        <div className='space-y-1 text-right text-sm pt-3'>
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
