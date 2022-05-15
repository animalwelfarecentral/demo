import React from 'react'
import '../App.css'
import logo from '../Assets/logo.jpeg';

function Shelter(props) {

  function setParent(){
    props.onClick(props.name)
    window.scrollTo(0, 0)
  }

  return (
    <div className='res' onClick={setParent}>
        <img style={{'marginTop':'1vh','height':'17vh','width':'17vh'}} src={logo}></img>
        <br></br>
        <b>{props.name}</b><br></br>
        Rating: x/y stars <br></br>
        Distance: z kms <br></br>
        <button style={{
            'backgroundColor':'white',
            'border':'solid 1px white',
            'fontSize':'2vh',
            'color':'blue',
            'textDecoration':'underline'
        }} onClick={setParent}>View profile</button>
    </div>
  )
}

export default Shelter