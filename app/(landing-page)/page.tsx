import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Header } from './_components/header'
import { Heroes } from './_components/heroes'
import { Footer } from './_components/footer'

const Landingpage = ()=>{
  return(
    <div className="flex flex-col min-h-full">
      <div className="flex justify-center items-center  md:justify-start flex-col dark:bg-[#1f1f1f]  flex-1 p-4 text-center select-none">
          <Header/>
          <Heroes />
      </div>
          <Footer />
    </div>
  )
}

export default Landingpage;