import { blogs } from "@/lib/blogs";
import Link from "next/link";



export default async function Page(){
   
    
    return(
        <>
            {blogs.map((blog)=> <Link key={blog.id} href={`/blog/${blog.link}`}>{blog.title}</Link>)}
        </>
    )
}