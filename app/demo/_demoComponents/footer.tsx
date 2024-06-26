import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = ()=>{
    return(
        <div className="w-full flex p-6 items-center bg-background dark:bg-[#1f1f1f]">
            <Logo />
            <div  className="flex md:ml-auto  items-center text-muted-foreground gap-x-2 justify-between w-full md:justify-end ">
                <Button variant='ghost' size='sm' >Privacy Policy</Button>
                <Button variant='ghost' size='sm' >Terms & Conditions</Button>
            </div>
        </div>
    )
}