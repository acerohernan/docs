import { SearchIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  return (
    <nav className="px-4 py-2 w-full border-red border flex items-center justify-between gap-4">
      <div className="hidden md:flex items-center gap-4">
        <Logo />
      </div>
      <div className="w-full md:max-w-[500px]">
        <Input className="w-full" startIcon={SearchIcon} placeholder="Search" />
      </div>
      <div>
        <Avatar>
          <AvatarImage src="/images/user-placeholder.jpg" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
