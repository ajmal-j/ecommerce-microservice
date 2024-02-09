import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className='toaster group z-[10000]'
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-red-600 group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-red-600",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-red-600",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-red-600",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
