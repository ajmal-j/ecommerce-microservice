import { productApi } from "@/utils/axios";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductOverview = () => {
  const productId = useParams()?.id;
  const [product, setProduct] = useState<any>({});
  useEffect(() => {
    window.scrollTo(0, 0);
    productApi
      .get("/product", { params: { id: productId } })
      .then(({ data }) => {
        setProduct(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {product && product?._id ? (
        <section className='overflow-hidden'>
          <div className='mx-auto max-w-5xl px-5 py-24'>
            <div className='mx-auto flex flex-wrap items-center lg:w-4/5'>
              <img
                alt='Nike Air Max 21A'
                className='max-h-96 border shadow-xl shadow-foreground/10 w-full rounded-xl object-cover content-center lg:h-96 lg:w-1/2'
                src={product?.images[0]}
              />
              <div className='mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10'>
                <h1 className='my-4 text-3xl font-semibold capitalize'>
                  {product?.title}
                </h1>
                <div className='my-4 flex items-center'>
                  <span className='flex items-center space-x-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className='text-yellow-500' />
                    ))}
                    <span className='ml-3 inline-block text-xs font-semibold'>
                      4 Reviews
                    </span>
                  </span>
                </div>
                <p className='leading-relaxed'>{product?.description}</p>
                <div className='mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5'>
                  <div className='flex items-center'>
                    <span className='mr-3 text-sm font-semibold'>Color</span>
                    <button className='h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none'></button>
                    <button className='ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none'></button>
                    <button className='ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none'></button>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='title-font text-xl font-bold'>
                    {product?.price}
                  </span>
                  <button
                    type='button'
                    className='rounded-md border bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <span>Product currently not available.</span>
      )}
    </>
  );
};
