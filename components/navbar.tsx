'use client';

import Link from 'next/link';
import { LayoutDashboard, LogOut, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth, useAuthDialogs } from '@/hooks/use-auth';

export function Navbar() {
  const { user, isSignedIn, isLoaded, signOut } = useAuth();
  const { openLogin, openSignup } = useAuthDialogs();

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E3E62]/20 bg-[#FBFBFB] font-sans">
      <div className="mx-auto flex h-16  items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 lg:pl-8">
          <span className="text-lg font-semibold text-[#0B192C]">
            WalkmanJS
          </span>
        </Link>

        {/* Right Section */}
        <nav className="flex items-center gap-3">
          {!isLoaded ? (
            <div className="h-9 w-20 animate-pulse rounded-md bg-[#1E3E62]/10" />
          ) : isSignedIn && user ? (
            <>
              <Button
                asChild
                variant="ghost"
                className="h-9 px-4 text-sm font-medium text-[#0B192C] hover:bg-[#1E3E62]/10"
              >
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="cursor-pointer h-9 w-9 rounded-full p-0 hover:bg-[#1E3E62]/10"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={user.username || 'User'}
                      />
                      <AvatarFallback className="bg-[#1E3E62] text-sm font-medium text-white">
                        {getInitials(user.fullName)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 rounded-lg border-[#1E3E62]/20 bg-white shadow-lg"
                >
                  <div className="flex items-center gap-3 border-b border-[#1E3E62]/10 p-3 cursor-pointer">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={user.fullName || 'User'}
                      />
                      <AvatarFallback className="bg-[#1E3E62] text-sm font-medium text-white">
                        {getInitials(user.fullName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col overflow-hidden">
                      <span className="truncate text-sm font-medium text-[#0B192C]">
                        {user.fullName || 'User'}
                      </span>
                      <span className="truncate text-xs text-[#1E3E62]/60">
                        {user.primaryEmailAddress?.emailAddress}
                      </span>
                    </div>
                  </div>

                  <div className="p-1">
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer rounded-md text-[#0B192C] focus:bg-[#1E3E62]/10"
                    >
                      <Link href="/profile" className="cursor pointer flex items-center gap-2">
                        <User className="h-4 w-4 text-[#1E3E62] cursor-pointer" />
                        Profile
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-[#1E3E62]/10" />

                    <DropdownMenuItem
                      onClick={() => signOut()}
                      className="cursor-pointer rounded-md text-red-600 focus:bg-red-50 focus:text-red-600"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={openLogin}
                className="cursor-pointer h-9 px-4 text-sm font-medium text-[#0B192C] hover:bg-[#1E3E62]/10"
              >
                Sign In
              </Button>
              <Button
                onClick={openSignup}
                className="cursor-pointer h-9 rounded-md bg-[#FF6500] px-5 text-sm font-medium text-white hover:bg-[#FF6500]/90"
              >
                Get Started
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
