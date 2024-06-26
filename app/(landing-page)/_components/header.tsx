"use client"

import { Spinner } from "@/components/spinner"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const Header = ()=>{
    const {isAuthenticated,isLoading} = useConvexAuth()
    return(
        <div className="max-w-3xl  space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl">
                Your Ideas, Documents, & Plans. Unified.Welcome to <span className="underline">Otion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">Otion is the connected workspace where <br /> better fast work happends.</h3>
            {
                isLoading && (
                    <div className="w-full flex items-center justify-center">
                        <Spinner size="lg" />
                    </div>
                )
            }
            {
                isAuthenticated && !isLoading && (
                    
            <Button asChild>
                <Link href='/documents'>
                Enter Otion 
                <ArrowRight className="w-4 ml-2" /> 
                </Link>
            </Button>
                )
            }
            {
                !isAuthenticated && !isLoading && (
                    <SignInButton mode="modal">
                       <Button  >
                        Get Otion Free
                        <ArrowRight className="w-4 ml-2" /> 
                       </Button>
                    </SignInButton>
                )
            }
        </div>
    )
}