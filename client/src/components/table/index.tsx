import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authApi } from "@/utils/axios";
import { useEffect, useState } from "react";

type UserType = {
  name: string;
  _id: string;
  email: string;
};

export function UserTable() {
  const [users, setUsers] = useState<UserType[]>([]);
  
  useEffect(() => {
    authApi
      .get("/users")
      .then(({ data }) => {
        console.log(data.data);
        setUsers(data.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>No :</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={user?._id}>
            <TableCell className='font-medium'>{i + 1}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total user's</TableCell>
          <TableCell className='text-right'>{users.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
