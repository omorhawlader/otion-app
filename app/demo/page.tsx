"use client"

import { Footer } from "./_demoComponents/footer";
import { Header } from "./_demoComponents/header"


const DemoLandingPage = ()=>{
    return(
        <div className="flex min-h-full flex-col justify-center items-center">
            <div className="flex flex-col justify-center md:justify-start items-center text-center flex-1">
                <Header />
            </div>

               <Footer />

        </div>
    )
}
export default DemoLandingPage;