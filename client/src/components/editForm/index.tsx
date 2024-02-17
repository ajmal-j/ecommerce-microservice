import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { productApi } from "@/utils/axios";
import { handleError } from "@/utils/errorHandler";
import { ReactNode, useState } from "react";
import { toast } from "react-hot-toast";
import z, { ZodError } from "zod";

export type ProductObjectType = {
  title: string;
  images: string;
  description: string;
  price: number;
  _id?: string;
};

export function EditProduct({
  children,
  product,
}: {
  children: ReactNode;
  product: ProductObjectType;
}) {
  const productCheck = z.object({
    price: z.number().positive("please enter a correct price"),
    images: z.string().url("please provide a correct url"),
    description: z
      .string()
      .min(10, "Description must be atleast 10 characters"),
    title: z.string().min(4, "Title must be atleast 5 characters"),
  });

  const [updateProduct, setNewProduct] = useState<ProductObjectType>(() => {
    const { images, description, price, title } = product;
    return { description, price, title, images: images[0] };
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setNewProduct((prev) => ({
      ...prev,
      [id]: id === "price" ? Number(value) : value,
    }));
  };
  const handleUpdate = async () => {
    try {
      productCheck.parse(updateProduct);
      await productApi.patch("/edit", {
        id: product._id,
        product: { ...updateProduct },
      });
      toast.success("Updated.");
      location.reload();
    } catch (error: any) {
      if (error instanceof ZodError) {
        handleError(error);
      } else {
        toast.error(error?.response?.data?.message ?? "not updated.");
        console.log(error);
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] rounded-2xl'>
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='title' className='text-left'>
              Title
            </Label>
            <Input
              id='title'
              value={updateProduct.title}
              onChange={handleChange}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-left'>
              Description
            </Label>
            <Input
              id='description'
              value={updateProduct.description}
              onChange={handleChange}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='price' className='text-left'>
              Price
            </Label>
            <Input
              id='price'
              type='number'
              value={updateProduct.price}
              onChange={handleChange}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='images' className='text-left'>
              Image
            </Label>
            <Input
              id='images'
              value={updateProduct.images}
              onChange={handleChange}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit' onClick={handleUpdate}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
