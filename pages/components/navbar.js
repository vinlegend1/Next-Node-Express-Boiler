import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg bg-dark d-flex p-2">
            <Link href="/">
            <a className="mr-2" >Back to home</a>
            </Link> 
            <Link href="/about">
            <a className="mr-2" >To about page</a>
            </Link>    
        </div>
    )
}

export default Navbar;