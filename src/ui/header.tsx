import Link from "next/link";

export default function Header(){
    return (
        <nav>
             <div className='container mx-auto my-2 px-6 flex justify-between items-center'>
                <div><Link href='/' className='font-bold text-2xl lg:text-4xl'>Auxibee</Link></div>
                <div>
                  <ul className='flex'>
                    <li><a href="#" className='px-4'> Cv </a></li>
                    <li><a href="#" className='px-4'> Projects </a></li>
                    
                    <li className='bg-violet-500  rounded'><Link href="/blog" className='px-6  text-white font-bold'> Blogs </Link></li>
                  </ul>
                </div>
             </div>
          </nav>
    )
}