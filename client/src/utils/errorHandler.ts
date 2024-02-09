import { toast } from "sonner";

export const handleError = (error: any) => {
  error?.errors?.forEach((err: any) => {
    if (typeof err.path[0] === "string") {
      toast.error(err?.message || "Input's are not valid");
    }
  });
};
