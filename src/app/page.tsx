import Image from 'next/image'
import Link from 'next/link'
import hero from '@/app/logo.svg'
import Header from '@/ui/header'
import Footer from '@/ui/footer'
import { blogs } from '@/lib/blogs'


export default function Home() {
 
  return (
        <>
          <Header />
          <section className='container mx-auto px-6 py-10'>
            <div className='flex flex-wrap'>

            <div className='w-full md:w-1/2'>
              <h3 className='text-2xl lg:text-3xl font-bold'>Hi! I am Yaw Twumasi Acheampong.</h3>
              <p className='py-3'>
                A self taught fullstack developer with special interest in 
                <span className='text-violet-500'> Backend development </span>
                 using NodeJS technologies
              </p>
              
              
              <div className='py-10'>
                <Link className='inline-block py-3 px-5 bg-violet-500 text-white font-bold uppercase' href='#'>Download Cv</Link>
              </div>
            </div>
            <div className='w-full md:w-1/2'><Image className='h-50' src={hero} alt='Hero image'/></div>
            </div>

          </section>
          <section className='container mx-auto py-10 px-6'>
            <h2 className='font-bold text-3xl mb-3'>Projects</h2>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-1/3 mb-3 '> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum minima doloribus animi soluta repellat qui at modi excepturi tempora eos. Laborum iure dolorum expedita at labore, unde dolores optio quisquam!
              Sequi nemo nesciunt distinctio placeat autem? Explicabo debitis tempora, repellat similique assumenda architecto dolor voluptatem, deleniti totam, ducimus qui molestiae fuga. Ipsum eos veniam minima sunt, sequi accusamus similique porro.</div>
              <div className='w-full md:w-1/3 mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium delectus possimus iusto voluptatibus molestiae alias dolorum, iure autem? Eum suscipit quidem nesciunt voluptate optio numquam perferendis neque aut sit dolore.
              Officia aliquid in alias doloribus rem voluptate quidem odio autem nemo! Maiores iure fugiat cum itaque, voluptatum explicabo sint recusandae exercitationem dolor illum temporibus, ullam ex corporis, delectus fuga quidem!</div>
              <div className='w-full md:w-1/3 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolorum at? Earum quod ipsam dolorem? Nobis deserunt veniam consectetur suscipit officia iusto, saepe itaque voluptatum aliquid incidunt, ducimus architecto nam.
              Non voluptatem corrupti laborum pariatur asperiores, suscipit maiores impedit assumenda laboriosam! Molestiae recusandae delectus consequuntur repellat numquam iusto? Assumenda in sit maxime nam dolores nisi inventore sed minima. Quisquam, nulla.</div>
            </div>
          </section>

          <section className='container mx-auto py-10 px-6'>
            <div className='flex flex-wrap'>
              <h2 className='font-bold text-3xl mb-3 w-full md:w-1/2'> Latest Blog Articles </h2>
              <div className='w-full md:w-1/2'>
                {blogs.map((blog) => <Link key={blog.id} className='block' href={blog.title}>How This site is made</Link>)}
              </div>
            </div>
          </section>
        
        <Footer />
        </>
  )
}
