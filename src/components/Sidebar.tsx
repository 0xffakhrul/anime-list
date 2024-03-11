import { Bookmark, Film, LayoutDashboard } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export const Sidebar = () => {
  return (
    <header className="bg-primary-foreground m-4 p-4 rounded-2xl flex flex-col fixed items-center justify-between gap-4 w-16 max-h-[700px] inset-y-0">
      <div className="space-y-2 flex flex-col gap-7">
        <div className="flex items-center justify-center h-12 w-12 hover:bg-white hover:rounded-xl transition-all duration-300 ease-linear">
          <Film className="text-red-500" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center h-12 w-12 hover:bg-red-500 hover:rounded-xl transition-all duration-300 ease-linear">
            <LayoutDashboard />
          </div>
          <div className="flex items-center justify-center h-12 w-12 hover:bg-red-500 hover:rounded-xl transition-all duration-300 ease-linear">
            <Bookmark />
          </div>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>DN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
