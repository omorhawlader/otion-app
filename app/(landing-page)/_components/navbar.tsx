"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import {useConvexAuth} from 'convex/react';
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
    const scroll = useScrollTop()
    console.log(scroll)
    const {isAuthenticated,isLoading}  = useConvexAuth()
  return (
    <div
      className={cn("z-50 p-6 w-full flex items-center bg-background dark:bg-[#1f1f1f] fixed top-0", scroll && "border-b")}
    >
      <Logo />
      <div className="w-full flex md:ml-auto md:justify-end justify-between items-center gap-x-2 ">
        {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
           <SignInButton mode="modal">
            <Button variant='ghost' size='sm'>Log In</Button>
          </SignInButton>

          <SignInButton mode="modal">
            <Button size='sm'>Get Otion Free</Button>
          </SignInButton>
          
          </>
         
        )}
        {
         
          isAuthenticated && !isLoading && (
            <>
            <Button variant='ghost' asChild size='sm'>
              <Link href="/documents" >Enter Otion</Link>
            </Button>

            <UserButton afterSignOutUrl="/" />
            </>
          )
        }
        <ModeToggle />
      </div>
    </div>
  );
};
