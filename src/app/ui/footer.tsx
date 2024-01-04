
export default function Footer(){
    const y = new Date()
    const year = y.getFullYear()
    return (
        <footer className='bg-violet-500' >
            <div className='container mx-auto py-10 px-6 text-center'>
            <h6 className='text-white  font-bold'> Copyright &#169; {year} Auxibee | Yaw Twumasi Acheampong</h6>
            </div>
          </footer>
    )
}

