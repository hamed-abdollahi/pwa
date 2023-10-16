import React, { useState } from 'react'
import '../views/pages/default/index.css'
import smarthome from '../../src/assets/images/smart-home.png'
import smarthospital from '../../src/assets/images/smart-hospital.png'
import smartschool from '../../src/assets/images/smart-school.png'
import smartoffice from '../../src/assets/images/smart-office.png'
import smartfactory from '../../src/assets/images/smart-factory.png' 
import smartsetting from '../../src/assets/images/smart-setting.png'
import { useNavigate } from 'react-router-dom'

const SmartItem = ({item}) => {


  const [img, setImg] = useState({
       'smarthome' : smarthome,
       'smarthospital' : smarthospital,
       'smartschool': smartschool,
       'smartoffice': smartoffice,
       'smartfactory': smartfactory,
       'smartsetting': smartsetting
  })

  var navigate = useNavigate()

  return (
    <div className='item' onClick={()=> navigate('/dashboard')}>
         <img src={img[item.img]} />
         <h2>{item.title}</h2>
    </div>
  )
}

export default SmartItem