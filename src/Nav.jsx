
import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import Link from './Link';
const Nav = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];
    const [open,setOpen]=useState(false)

    return (

        <div className='bg-orange-400 text-white'>
            <div onClick={()=>setOpen(!open)} >
                {
                    // open ===true ? 'open' : 'close'
                }
            <HiMenuAlt1 className='md:hidden'></HiMenuAlt1>
            </div>
            <ul className={`flex md:flex-row ${open ? 'top-10':'-top-60'} duration-1000 lg:flex-row flex-col absolute md:sticky `}>
                
                {
                   
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
            
        </div>
    );
};

export default Nav;