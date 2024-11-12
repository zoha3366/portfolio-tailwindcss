
import Link from "next/link"
export default function Header(){
return(
    <div>
        <ul className="flex gap-20 justify-center border border-pink-300">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>       
        <li>
          <Link href="/contact-us">Contact-us</Link>
        </li>
       
      </ul>
    </div>
)
};
