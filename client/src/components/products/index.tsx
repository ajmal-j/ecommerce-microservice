import { useQuery } from "react-query";
import Wrapper from "../wrapper";
import { productApi } from "@/utils/axios";
import { DialogDemo } from "../addNewForm";
import { UserAuth } from "@/providers/userProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ProductTwo } from "../featured";

export default function Products() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const { data: products = [], isLoading } = useQuery("products", async () => {
    try {
      const response = await productApi.get("products");
      if (response.data && response.data.success) {
        return response.data.data;
      } else {
        throw new Error(response.data.message || "Error");
      }
    } catch (error) {
      throw new Error("Error fetching data");
    }
  });
  return (
    <Wrapper>
      <div className='px-2'>
        <div className='flex justify-between px-3 items-center'>
          <h1 className='text-lg font-medium'>Products</h1>
          <div>
            <DialogDemo />
          </div>
        </div>
        <div>
          <ProductTwo />
        </div>
        <div className='mt-3'>
          {isLoading && "loading..."}
          <div className='mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4'>
            {products.length &&
              products.map((product: any) => (
                <div key={product._id} className='rounded-md border'>
                  <img
                    src={product.images[0]}
                    alt='Laptop'
                    className='aspect-[16/9] object-cover w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]'
                  />
                  <div className='p-4'>
                    <h1 className='inline-flex items-center text-lg font-semibold'>
                      {product.title}
                    </h1>
                    <p className='mt-3 text-sm text-gray-600'>
                      {product.description}
                    </p>

                    <div className='mt-3 flex items-center space-x-2'>
                      <span className='block text-sm font-semibold'>
                        Colors :{" "}
                      </span>
                      <span className='block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400'></span>
                      <span className='block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400'></span>
                      <span className='block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400'></span>
                    </div>
                    <div className='mt-5 flex items-center space-x-2'>
                      <span className='block text-sm font-semibold'>
                        Size :{" "}
                      </span>
                      <span className='block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium'>
                        8 UK
                      </span>
                      <span className='block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium'>
                        9 UK
                      </span>
                      <span className='block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium'>
                        10 UK
                      </span>
                    </div>
                    <button
                      type='button'
                      onClick={(e) => {
                        if (!user) {
                          e.stopPropagation();
                          e.preventDefault();
                          toast.error("Please logIn", { id: "please" });
                          navigate("/login");
                        }
                      }}
                      className='mt-4 border-[2px] w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
