import Image from "next/image"
import Link from "next/link"
import { TextGenerateEffect } from "@/component/UI/TextGenerateEffect"
import Header from "@/component/Header"
import MagicButton from "@/component/UI/MagicButton"



export default function About() {
    return(
        <main>
            <div className="flex flex-col flex-1 gap-4 justify-center w-1/2 h-48"> 
             <br />
             <br />
           < TextGenerateEffect
     className='text-center text-[20px] md:text-1xl lg:text-2xl sm:text-sm'
     words='ABOUT ME'
     duration={2}
     filter = {false}
     />
     < TextGenerateEffect
     className='pl-4 text-center text-[20px] font-normal italic md:text-1xl lg:text-3xl '
     words='Hello, I am ZOHA,
     a new Web Developer passionate about creating
     interactive and user-friendly web applications.

    '
     duration={1}
     filter = {false}
     />
  </div>


  <div className="gap-2 float-right text-center sm:h[200px] w-[200px]">
  <Image 
      src="/Image/aboutsection.jpg" 
      alt="hero picture"
      height= {400}
      width={300}

      />
    </div> 
    <br />
    <button className="mt-20 ml-20 border border-purple-700 rounded-sm text-pink-400 italic animate-bounce"><a href="/contact-us">Contact us</a></button>     
 
           
        </main>
    )
}

