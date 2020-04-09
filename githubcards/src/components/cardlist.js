import React from 'react'
import Card from './card'


export default function CardList(props) {
    return (
        <div>
           {props.profile.map(onetest=>{
               return <Card key={onetest.id} {...onetest}/>
           })}
        </div>
    )
}
