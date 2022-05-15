import React from 'react'
import oned from '../Assets/oned.jpeg'
import twod from '../Assets/twod.jpeg'
import threed from '../Assets/threed.jpeg'
import onec from '../Assets/onec.jpeg'
import twoc from '../Assets/twoc.jpeg'
import threec from '../Assets/threec.jpeg'
import {useState} from 'react'
import Animal from './Animal'
import Pet from './Pet'


function Adopt() {

    const [pics, setPics] = useState([oned, twoc, threed, onec, twod, threec])
    const [curr, setCurr] = useState()
    const [ind, setInd] = useState('all')

    function setC(ele){
      setInd('one')
      setCurr(ele)
    }

    function setB(){
      setInd('all')
    }
  return (
    <div>
    {ind==='one'?<Pet src={curr} reset={setB}/> :
    <div>
      <div style={{'fontSize':'2vh','marginTop':'3vh'}}><b>(Filter based on type/size/age etc.)</b></div>
    <div className='adopt'>
        {pics.map(ele=><Animal src={ele} onClick={setC} />)}     
    </div></div>}
    </div>
  )
}

export default Adopt