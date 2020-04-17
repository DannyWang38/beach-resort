import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'


function RoomContainer({context}){
    const {loading,sortedRooms,rooms}=context
    if(loading){
            return <Loading/>
                }
                return(
                        <>
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sortedRooms}/>
                        </>
                )
}

export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import {RoomConsumer, RoomContext} from '../context'
// import Loading from './Loading'

// context api for function base  
// export default function RoomContainer() {
//     return (
//         <RoomContext>
//             {
//                 (value)=>{
//                     console.log(value);
//                     const {loading,sortedRooms,rooms}=value
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return(
//                         <div>
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                     )
//                 }
//             }
//         </RoomContext>
       
//     )
// }
