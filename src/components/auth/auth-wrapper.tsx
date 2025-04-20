import { GalleryVerticalEnd } from "lucide-react";
import ModeToggle from "../mode-toggle";
import { Label } from "../ui/label";

export default function AuthWrapper({
  children,
  title,
  image,
}: {
  children: React.ReactNode;
  title: string;
  image: string;
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-row justify-between items-center gap-2 ">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            {title}
          </a>
          <ModeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
        <div className="flex flex-row justify-between items-center gap-2 ">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            {title}
          </a>
          <div className="">
            <Label>v1.0(files).0</Label>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={image}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.9] dark:grayscale"
        />
      </div>
    </div>
  );
}
