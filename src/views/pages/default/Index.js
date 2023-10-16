import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import SmartItem from 'src/components/SmartItem'
import home from '../../../../src/assets/images/home.png'


const Index = () => {

    const [items, setItems] = useState([
        { img: 'smarthome', title: 'Home' },
        { img: 'smarthospital', title: 'Hospital' },
        { img: 'smartschool', title: 'School' },
        { img: 'smartoffice', title: 'Office' },
        { img: 'smartfactory', title: 'Factory' },
        { img: 'smartsetting', title: 'Setting' },

    ])

    return (
        <div className='wrapper'>
            <div className='title'>

                <img src={home} />
                <h1>Smart Home</h1>
            </div>

            <div className='items'>
                {
                    items.map((item, index) => {
                        return (
                            <SmartItem key={index} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Index