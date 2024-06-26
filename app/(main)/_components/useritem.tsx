"use client"



import {Avatar,AvatarImage} from '@/components/ui/avatar';
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger,
    DropdownMenu
} from '@/components/ui/dropdown-menu';
import { SignOutButton, useUser } from '@clerk/clerk-react';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronsLeftRight } from 'lucide-react';

export const UserItem = ()=>{
    const {user} = useUser()
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div role='button' className="flex items-center text-sm p-3 w-full hover:bg-primary/30">
                    <div className="gap-x-2 flex items-center max-w-[150px]">
                        <Avatar  className='w-5 h-5'>
                            <AvatarImage src={user?.imageUrl} />
                        </Avatar>
                        <span className='text-start font-medium line-clamp-1'>{user?.fullName}&apos;s Otion</span>
                    </div>
                    <ChevronsLeftRight className='text-muted-foreground rotate-90 w-4 h-4 ml-2' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-80'
            align='start'
            alignOffset={11}
            forceMount
            >
                <div className="flex flex-col space-y-4 p-2 ">
                <p className="text-xs leading-none font-medium text-muted-foreground">{user?.emailAddresses[0].emailAddress}</p>
                <div className="flex items-center gap-x-2">
                    <div className="rounded-md p-1 bg-secondary">
                        <Avatar className='h-8 w-8' >
                            <AvatarImage src={user?.imageUrl} />
                        </Avatar>
                    </div>
                    <div className="space-y-1">
                    <p className='text-start font-medium line-clamp-1'>{user?.fullName}&apos;s Otion</p>
                    </div>

                </div>
                </div>
                <DropdownMenuSeparator />  
                <DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
                    <SignOutButton >Log out</SignOutButton>
                </DropdownMenuItem>
                
                
            </DropdownMenuContent>

        </DropdownMenu>
    )
}