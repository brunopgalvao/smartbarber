import React from 'react'
import Services from './components/Services'
import Header from './components/Header'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Services />
        </div>
    )
}

export default Home