import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = ()=>{
    return(
        <div className="w-full p-6  flex items-center bg-background dark:bg-[#1f1f1f] z-50">
            <Logo />
            <div className="flex md:justify-end md:ml-auto 
            w-full 
            justify-between items-center gap-x-2 text-muted-foreground  ">
                <Button size='sm' variant='ghost'>Privacy Policy</Button>
                <Button size='sm' variant='ghost'>Terms & Conditions </Button>
            </div>
        </div>
    )
}