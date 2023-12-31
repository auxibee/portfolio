import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
        <>
          <nav>
             <div className='container mx-auto my-2 flex justify-between items-center'>
                <Link href='#' className='font-bold text-2xl lg:text-4xl'>Auxibee</Link>
                <div>
                  <ul className='inline-flex'>
                    <li><a href="#" className='px-4'> Cv </a></li>
                    <li><a href="#" className='px-4'> Projects </a></li>
                    
                    <li className='bg-violet-500  rounded'><a href="#" className='px-6  text-white font-bold'> Blogs </a></li>
                  </ul>
                </div>
             </div>
          </nav>
        </>
  )
}
