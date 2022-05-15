import React from 'react'
import '../App.css'
import About from './About'
import Adopt from './Adopt'
import Foster from './Foster'
import Stories from './Stories'
import Vol from './Vol'
import {useState} from 'react'

function Profile(props) {

  function setP(){
    props.onClick('home')
  }

  const [which,setWhich] = useState('about')

  function setAbout(){
    setWhich('about')
  }

  function setAdopt(){
    setWhich('adopt')
  }

  function setFoster(){
    setWhich('foster')
  }

  function setStories(){
    setWhich('stories')
  }
  function setVol(){
    setWhich('vol')
  }
  return (
    <div>
    <div onClick={setP} style={{'marginLeft':'4vw','fontSize':'3.5vh','marginTop':'2vh','textDecoration':'underline','pointer':'cursor'}}>
      {'<'}Home
    </div>
    <div className='prof'>{props.val}</div>
    <div className='content'>
      <div className='nav'>
        <button className={which==='about'?'but2':'but'} onClick={setAbout}>About</button>
        <button className={which==='adopt'?'but2':'but'} onClick={setAdopt}>Adopt</button>
        <button className={which==='foster'?'but2':'but'} onClick={setFoster}>Foster</button>
        <button className={which==='stories'?'but2':'but'} onClick={setStories}>Stories</button>
        <button className={which==='vol'?'but2':'but'} onClick={setVol}>Careers</button>
        <button className='but'>More...</button>


      </div>
      {which==='about'?<About />: which==='adopt'?<Adopt />: which==='foster'?<Foster />:which==='stories'?<Stories />:<Vol />}
    </div>
    </div>
  )
}

export default Profile