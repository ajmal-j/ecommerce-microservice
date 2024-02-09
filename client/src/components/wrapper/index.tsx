import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className='max-w-[1080px] mx-auto sm:px-2 md:px-3 px-4 py-3'>
      {children}
    </div>
  );
}
