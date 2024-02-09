import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import Wrapper from "../wrapper";
import { Eye, EyeOff, Store } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../utils/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters." }),
  name: z.string().min(5, {
    message: "Username must be at least 3 characters.",
  }),
});

export default function SingUp() {
  const navigate = useNavigate();
  const [passState, setPassState] = useState<boolean>(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await authApi.post("signup", { ...values });
      toast.success("Signed up.");
      navigate("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message ?? "Sign up failed");
    }
  }
  return (
    <Wrapper>
      <div className='min-h-screen flex justify-center items-center flex-grow'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4 max-w-[400px] w-full'
          >
            <div className='flex flex-col'>
              <div>
                <span className='flex gap-3 flex-col items-center justify-center mb-8'>
                  <Store className='cursor-pointer size-11' />
                  <span className='font-bold text-2xl'>Urban Grove</span>
                </span>
              </div>
            </div>
            <div className='space-y-6 border px-3 py-4 rounded-2xl'>
              <span className='font-bold text-2xl pb-3 block pt-5 ps-1'>
                Sign Up
              </span>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type={passState ? "password" : "text"}
                        placeholder='password'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className='flex justify-end pe-2'
                     onClick={() => setPassState(!passState)}
                    >
                      {passState ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex flex-col gap-3'>
                <span className='text-xs text-foreground/50'>
                  Do you have an account?.
                  <span className='text-foreground/90 underline'>
                    <Link to={"/login"}> Log In</Link>
                  </span>
                </span>
                <Button type='submit' className=''>
                  continue
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </Wrapper>
  );
}
