import { useEffect } from "react";
import { Trash, Heart } from "lucide-react";
import Wrapper from "../wrapper";
import { UserCart } from "@/providers/cartProvider";
import { cartApi } from "@/utils/axios";
import { UserAuth } from "@/providers/userProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export type ProductObjectType = {
  _id: string;
  title: string;
  images: string[];
  description: string;
  price: number;
  isDeleted?: boolean;
};
export function Cart() {
  const { cart, setCart } = UserCart();
  const { user } = UserAuth();
  useEffect(() => {
    if (!user?._id) return;
    cartApi
      .post("/carts", { id: user?._id })
      .then(({ data }: any) => {
        setCart(data?.data);
      })
      .catch((error: Error) => {
        console.log(error);
        // toast.error("Error occurred while getting cart.");
      });
  }, [user]);
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
    <Wrapper>
      <div className='mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2'>
        <h2 className='text-3xl font-bold'>Your cart</h2>
        <ul className='flex flex-col divide-y divide-gray-200'>
          {cart?.length ? (
            cart.map(({ product }: { product: ProductObjectType }) => (
              <li
                key={product._id}
                className='flex flex-col py-6 sm:flex-row sm:justify-between'
              >
                <div className='flex w-full space-x-2 sm:space-x-4'>
                  <img
                    className='h-20 rounded-xl shadow-xl shadow-foreground/10 w-20 flex-shrink-0 object-contain outline-none dark:border-transparent sm:h-32 sm:w-32'
                    src={product?.images[0]}
                    alt={product.title}
                  />
                  <div className='flex w-full flex-col justify-between pb-4'>
                    <div className='flex w-full justify-between space-x-2 pb-2'>
                      <div className='space-y-1'>
                        <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                          {product.title}
                        </h3>
                        <p className='text-xs text-foreground/50'>
                          {product.description.length > 15
                            ? [...product.description]
                                .splice(0, 15)
                                .concat("...")
                                .join("")
                            : product.description}
                        </p>
                      </div>
                      <div className='text-right'>
                        <p className='text-lg font-semibold'>{product.price}</p>
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
            ))
          ) : (
            <span className='block text-center text-muted-foreground'>
              you'r cart is empty.
            </span>
          )}
        </ul>
        <div className='space-y-1 text-right'>
          {cart?.length > 0 && (
            <p>
              Total amount:{" "}
              <span className='font-semibold'>
                {cart.reduce(
                  (acc, val: any) => (acc += val?.product?.price),
                  0
                )}
              </span>
            </p>
          )}
        </div>
        <div className='flex justify-end space-x-4'>
          <Link to={"/"}>
            <button
              type='button'
              className='rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
            >
              Back to shop
            </button>
          </Link>
          {/* <button
            type='button'
            className='rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            Checkout
          </button> */}
        </div>
      </div>
    </Wrapper>
  );
}
