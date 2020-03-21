import React from 'react'
import './Service.css'

const Service = ({ name, price}) => {
    return (
        <div className="service">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>
    )
}

export default Service