export function ProductTwo() {
  return (
    <div className='mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:gap-6 md:space-y-0 grid-cols-1 md:grid-cols-2'>
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className='relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]'
        >
          <img
            src={
              i === 0
                ? "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
                : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            }
            alt='AirMax Pro'
            className='z-0 h-full w-full rounded-md object-cover'
          />
          <div className='absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent'></div>
          <div className='absolute bottom-4 left-4 text-left'>
            <h1 className='text-lg font-semibold text-white'>Nike Airmax v2</h1>
            <p className='mt-2 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>
              Shop Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
