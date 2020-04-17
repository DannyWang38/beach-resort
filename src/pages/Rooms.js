import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'

export default function Rooms() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
        <Hero hero='roomsHero'>
            <Banner title='our room'>
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer/>
        </>
    )
}
