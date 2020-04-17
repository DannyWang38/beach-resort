import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'Free cocktails',
                info:'Patients with coronavirus often die of ARDS, or acute respiratory distress syndrome. The same syndrome also kills patients who have influenza, pneumonia and other diseases.'
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:'Patients with coronavirus often die of ARDS, or acute respiratory distress syndrome. The same syndrome also kills patients who have influenza, pneumonia and other diseases.'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:'Patients with coronavirus often die of ARDS, or acute respiratory distress syndrome. The same syndrome also kills patients who have influenza, pneumonia and other diseases.'
            },
            {
                icon:<FaBeer/>,
                title:'free Beer',
                info:'Patients with coronavirus often die of ARDS, or acute respiratory distress syndrome. The same syndrome also kills patients who have influenza, pneumonia and other diseases.'
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
    })}
                </div>
            </section>
        )
    }
}
