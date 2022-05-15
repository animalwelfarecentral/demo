import React from 'react'
import {useState} from 'react'
import Shelter from './Shelter'

function Homepage(props) {

    const [names,setNames] = useState([
        'We Save Animals', 'Maruthy Dog Shelter', 'CUPPA LARRC', 
        'Sarvoham Foundation','Krupa Loving Animal', 'Animal Rights Fund',
        'VOSD Official','Sudha Shelter Home', 'People for animals'
      ])
    
      const [names2,setNames2] = useState([
        'We Save Animals', 'Maruthy Dog Shelter', 'CUPPA LARRC', 
        'Sarvoham Foundation','Krupa Loving Animal', 'Animal Rights Fund',
        'VOSD Official','Sudha Shelter Home', 'People for animals'
      ])

  return (
    <div className="App">
      <div className="indi">
      Showing shelters (animal clinics/pet services) near you: <br></br>
      (fetch results based on location)
      </div>  
      <div className='sandf'>
        <input style={
          {
            'width':'25vw',
            'height':'5vh',
            'fontSize' : '2vh'
          }
        } type="text" placeholder= 'filter by name' onChange={e=>setNames2(names.filter(name=>name.toLowerCase().includes(e.target.value.toLowerCase())))}/>
        <br></br>(filter by rating/distance/appointment slots etc)
      </div>
      <div className='outer'>
        {names2.map((shelter)=><Shelter name={shelter} onClick={props.onClick}/>)}
      </div> 
    </div>
  )
}

export default Homepage