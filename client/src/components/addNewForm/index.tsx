import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { productApi } from "@/utils/axios";
import { handleError } from "@/utils/errorHandler";
import { Plus } from "lucide-react";
import { title } from "process";
import { useState } from "react";
import { toast } from "react-hot-toast";
import z, { ZodError } from "zod";

export type ProductObjectType = {
  title: string;
  images: string;
  description: string;
  price: string;
};

export function DialogDemo() {
  const productCheck = z.object({
    title: z.string().min(5, "title must be atleast 5 characters"),
    images: z.string().url("please provide a correct url"),
    description: z
      .string()
      .min(10, "description must be atleast 10 characters"),
    price: z.number().positive("please enter a correct price"),
  });

  const [newProduct, setNewProduct] = useState<ProductObjectType>({
    description: "",
    images: "",
    price: "",
    title: "",
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
      productCheck.parse(newProduct);
      await productApi.post("/add", { ...newProduct });
      toast.success("Added.");
      setNewProduct(() => ({
        description: "",
        images: "",
        price: "",
        title: "",
      }));
    } catch (error: any) {
      if (error instanceof ZodError) {
        handleError(error);
      } else {
        toast.error(error?.response?.data?.message ?? "no added.");
        console.log();
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] rounded-2xl'>
        <DialogHeader>
          <DialogTitle>Add new product</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='title' className='text-left'>
              Title
            </Label>
            <Input
              id='title'
              value={newProduct.title}
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
              value={newProduct.description}
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
              value={newProduct.price}
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
              value={newProduct.images}
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
