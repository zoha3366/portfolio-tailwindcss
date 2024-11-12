import Image from "next/image"
import Link from "next/link"
import { TextGenerateEffect } from "@/component/UI/TextGenerateEffect"
import Header from "@/component/Header"
import MagicButton from "@/component/UI/MagicButton"



export default function contact() {
    return(
        <div>
      < TextGenerateEffect
     className='ml-20 text-[20px] md:text-1xl lg:text-2xl '
     words='CONTACT ME'
     duration={2}
     filter = {false}
     />
<form className="m-20 italic lg:">
    <input className="bg-white rounded-lg text-black" type="text" placeholder="Enter Your Name"/>
     <br />
     <input className="mt-5 bg-white rounded-lg text-black " type="text" placeholder="Enter Your Email"/>

     <input className= "w-full p-4  mt-5 h-36 bg-white rounded-lg text-black " type="text" placeholder="type here...." />

<button className="mt-5  ml-40 animate-bounce text-pink-500 italic">Send</button>


</form>


        </div>
    )
}