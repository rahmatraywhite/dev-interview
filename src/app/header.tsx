'use client';

import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DeleteIcon, LogInIcon, LogOutIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { deleteAccountAction } from './action';
import { ModeToggle } from '@/components/mode-toogle';

function AccountDropdown() {
  const session = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              account and any data your have.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await deleteAccountAction();
                signOut({ callbackUrl: '/' });
              }}>
              Yes, delete my account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'link'}>
            <Avatar className="mr-2">
              <AvatarImage src={session.data?.user?.image ?? ''} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {session.data?.user?.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: '/',
              })
            }>
            <LogOutIcon className="mr-2" /> Sign Out
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}>
            <DeleteIcon className="mr-2" /> Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <header className="bg-gray-100 py-4 dark:bg-gray-900 z-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center font-bold text-xl">
          Devs
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {isLoggedIn && (
              <>
                <Link className="hover:underline" href="/browse">
                  Browse
                </Link>
                <Link className="hover:underline" href="/your-rooms">
                  Your Rooms
                </Link>
              </>
            )}
          </nav>
          {isLoggedIn && <AccountDropdown />}
        </div>
        <div className="flex items-center md:hidden gap-4">
          <ModeToggle />
          {!isLoggedIn && (
            <Button onClick={() => signIn()} variant="link">
              <LogInIcon className="mr-2" /> Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
