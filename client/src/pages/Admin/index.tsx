import { Footer } from "@/components/footer";
import Products from "@/components/products";
import { UserTable } from "@/components/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Wrapper from "@/components/wrapper";

export const Admin = () => {
  return (
    <Wrapper>
      <header className='text-center pb-5 pt-2 font-extralight text-xl'>
        Admin
      </header>
      <Tabs defaultValue='product' className='w-full'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='product'>Product's</TabsTrigger>
          <TabsTrigger value='user'>User's</TabsTrigger>
        </TabsList>
        <TabsContent value='product'>
          <Card>
            <CardHeader>
              <CardTitle>Product's</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <Products
                add={true}
                addToCart={false}
                deleteFeature={true}
                featured={false}
              />
            </CardContent>
            <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value='user'>
          <Card>
            <CardHeader>
              <CardTitle>User's</CardTitle>
            </CardHeader>
            <CardContent className=''>
              <UserTable />
            </CardContent>
            <CardFooter>{/* <Button></Button> */}</CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <Footer />
    </Wrapper>
  );
};
