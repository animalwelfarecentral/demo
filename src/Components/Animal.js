import React from 'react'


function Animal(props) {

  function setC(){
    props.onClick(props.src)
  }

  return (
    <div className='animal' onClick={setC}>
        <img src={props.src} style={{
            'height':'20vh','width':'17vw'
        }}></img><br></br>
       <b> Name:</b> ABC<br></br>
       <b> Age: </b> X years<br></br>
       <b> Size: </b> large/medium/small<br></br>
       <b> Sex: </b> M/F<br></br>
        <button onClick={setC}>View profile</button>
    </div>
  )
}

export default Animal