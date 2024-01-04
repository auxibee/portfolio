import { blogs } from "@/app/lib/blogs";
import Container from "@/app/ui/container";
import Link from "next/link";



export default async function Page(){
   
    
    return(
        <>
            <Container>
                <div className="text-center">
                    {blogs.map((blog)=> <Link className='block my-6 font-light underline' key={blog.id} href={`/blog/${blog.link}`}>{blog.title}</Link>)}
                </div>
            </Container>
        </>
    )
}