import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
    <div>
     <Hero>
         <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
            <Link to='/rooms' className='btn-primary'>
                our rooms
            </Link>
         </Banner>
     </Hero>
     <Services/>
     <FeaturedRooms/>
    </div>
    )
}
