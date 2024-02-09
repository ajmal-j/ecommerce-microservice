import { ChevronRight, Store } from "lucide-react";
import Wrapper from "../wrapper";

export function Footer() {
  return (
    <Wrapper>
      <footer className='w-full mt-16 pb-7'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0'>
          <div className='inline-flex items-center'>
            <span className='flex gap-3 items-center'>
              <Store className='cursor-pointer size-8' />
              <span className='font-bold'>Urban Grove</span>
            </span>
          </div>
          <div className='hidden items-center md:inline-flex'>
            <span className='text-sm font-medium text-black'>
              Ready to Get Started ?
            </span>
            <button
              type='button'
              className='ml-2 rounded-md border bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
            >
              Get Started
            </button>
          </div>
        </div>
        <hr className='my-8' />
        <div className='mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row'>
          <div className='w-full px-4 md:w-1/2 lg:px-0'>
            <h1 className='max-w-sm text-3xl font-bold'>
              Subscribe to our Newsletter
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className='mt-4 inline-flex w-full items-center md:w-3/4'
            >
              <input
                className='flex ring ring-foreground/10 h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                type='email'
                placeholder='Email'
              ></input>
              <button
                type='button'
                className='ml-4 border rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
              >
                <ChevronRight className='h-4 w-4' />
              </button>
            </form>
          </div>
          <div className='mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='mb-8 lg:mb-0'>
                <p className='mb-6 text-lg font-semibold text-gray-700 '>
                  Company
                </p>
                <ul className='flex flex-col space-y-4 text-[14px] font-medium text-gray-500'>
                  <li>About us</li>
                  <li>Company History</li>
                  <li>Our Team</li>
                  <li>Our Vision</li>
                  <li>Press Release</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}