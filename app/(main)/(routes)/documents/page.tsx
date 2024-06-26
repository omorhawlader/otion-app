"use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image"

import {api} from '@/convex/_generated/api';
import { toast } from "sonner";




const Documents = ()=>{
    const {user} = useUser();
    const create = useMutation(api.documents.create)
    const onCreate = ()=>{
        const promise = create({title: "untitled!"})
        toast.promise(promise,{
            loading: "Creating a new note...",
            success: "new note created!",
            error:"Failed to create a new note!!"
        })
    }
    return(
        <div className="h-full flex flex-col justify-center items-center space-y-4">
            <Image 
            src='/empty.png'
            alt="Empty"
            height="300"
            width="300"
            className="dark:hidden"
            
            />
            <Image 
            src='/empty-dark.png'
            alt="Empty"
            height="300"
            width="300"
            className="hidden dark:block"
            
            />
            <h2 className="font-medium text-lg">Welcome to {user?.fullName}&apos;s Otion</h2>
            <Button onClick={onCreate}>
                <PlusCircle className="w-4 h-4 mr-2" />
                Create a note
            </Button>
        </div>
    )
}

export default Documents