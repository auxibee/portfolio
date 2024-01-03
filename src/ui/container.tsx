

export default function Container({children} : {children : React.ReactNode}){
    return(
        <div className="container mx-auto py-10 px-6">
                {children}
        </div>
    )
}