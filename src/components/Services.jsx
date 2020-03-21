import React from 'react'
import services from '../data/services.json'

import './Services.css'
import Service from './Service'

const Services = () => {
    const SERVICES = services.map((service, index) =>
        <Service name={service.name} price={service.price} key={index} />
    )
    return (
        <div className="services">
            {SERVICES}
        </div>
    )
}

export default Services