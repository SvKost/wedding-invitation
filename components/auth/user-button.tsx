"use client";

import { ExitIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import Link from "next/link";
import { UserRole } from "@prisma/client";
import Image from "next/image";
import icon from "@/public/icons/user.svg";
import iconArrowDown from "@/public/icons/arrow-down.svg";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1 outline-none items-center">
        <Image priority src={icon} alt="menu" width={24} height={24} />
        <span className="block max-w-28 truncate text-nowrap text-ellipsis text-mblack font-normal text-lg">
          {user?.name}
        </span>
        <Image priority src={iconArrowDown} alt="menu" width={24} height={24} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem>
          <Link href="/invitations">Invitations</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        {user?.role === UserRole.ADMIN && (
          <>
            <DropdownMenuItem>
              <Link href="/manage">Admin dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}

        <DropdownMenuItem>
          <Link href="/server">Server</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/client">Client</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/admin">Admin</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            <ExitIcon className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
