import Image from 'next/image';
import {Poppins} from 'next/font/google';
import {cn} from '@/lib/utils';

const font = Poppins({
    subsets:['latin'],
    weight:['400','600']
})

export const Logo = ()=>{
    return(
        <div className=" gap-x-2 hidden md:flex items-center">
            <Image
            src='/logo.svg'
            alt='logo'
        
            width='40'
            height='40'
            />
            <p className={cn('font-semibold',font.className)}>Otion</p>
        </div>
    )

}
