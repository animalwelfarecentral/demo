import React from 'react'
import {useState} from 'react'

function Vol() {

  const [small1,setSmall1] = useState(true)
    const [big1,setBig1] = useState(false)
    const [small2,setSmall2] = useState(true)
    const [big2,setBig2] = useState(false)
    const [small3,setSmall3] = useState(true)
    const [big3,setBig3] = useState(false)
    const [small4,setSmall4] = useState(true)
    const [big4,setBig4] = useState(false)

    function tog1(){
        setSmall1(!small1)
        setBig1(!big1)
    }

    function tog2(){
        setSmall2(!small2)
        setBig2(!big2)
    }

    function tog3(){
      setSmall3(!small3)
      setBig3(!big3)
  }

  function tog4(){
      setSmall4(!small4)
      setBig4(!big4)
  }

  return (
    <div className='vol'>
      {small1 && <div className='innervol'>
        <b style={{'marginTop':'2vh','marginBottom':'2vh'}}>Position1 title</b>
        <div style={{'marginTop':'2vh','marginBottom':'2vh','textAlign':'left'}}>
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        <br></br>
        <br></br>
        <button onClick={tog1} style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read more</button>
        </div>
      </div>}
      {big1 && <div className='innervol'>
        <b style={{'marginTop':'2vh','marginBottom':'2vh'}}>Position1 title</b>
        <div style={{'marginBottom':'2vh','textAlign':'left'}}>
        <br></br>
        <b>Role description</b><br></br><br></br>
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        <br></br><br></br>
        <b>Required skills</b>
        <ul>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
        </ul>
        <br></br>
        <br></br>
        <button onClick={tog1}  style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read less</button>
        </div>
      </div>}
      {small2 && <div className='innervol'>
        <b style={{'marginTop':'2vh','marginBottom':'2vh'}}>Position2 title</b>
        <div style={{'marginTop':'2vh','marginBottom':'2vh','textAlign':'left'}}>
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        <br></br>
        <br></br>
        <button onClick={tog2} style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read more</button>
        </div>
      </div>}
      {big2 && <div className='innervol'>
        <b style={{'marginTop':'2vh','marginBottom':'2vh'}}>Position2 title</b>
        <div style={{'marginBottom':'2vh','textAlign':'left'}}>
        <br></br>
        <b>Role description</b><br></br><br></br>
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        <br></br><br></br>
        <b>Required skills</b>
        <ul>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
        </ul>
        <br></br>
        <br></br>
        <button onClick={tog2}  style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read less</button>
        </div>
      </div>}
      {small3 && <div className='innervol'>
        <b style={{'marginTop':'2vh','marginBottom':'2vh'}}>Position3 title</b>
        <div style={{'marginTop':'2vh','marginBottom':'2vh','textAlign':'left'}}>
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        <br></br>
        <br></br>
        <button onClick={tog3} style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read more</button>
        </div>
      </div>}
      {big3 && <div className='innervol'>
        <b style={{'marginTop':'2vh','marginBottom':'2vh'}}>Position3 title</b>
        <div style={{'marginBottom':'2vh','textAlign':'left'}}>
        <br></br>
        <b>Role description</b><br></br><br></br>
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        <br></br><br></br>
        <b>Required skills</b>
        <ul>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
        </ul>
        <br></br>
        <br></br>
        <button onClick={tog3}  style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read less</button>
        </div>
      </div>}
      {small4 && <div className='innervol'>
        <b style={{'marginTop':'2vh','marginBottom':'2vh'}}>Position4 title</b>
        <div style={{'marginTop':'2vh','marginBottom':'2vh','textAlign':'left'}}>
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        <br></br>
        <br></br>
        <button onClick={tog4} style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read more</button>
        </div>
      </div>}
      {big4 && <div className='innervol'>
        <b style={{'marginTop':'2vh','marginBottom':'2vh'}}>Position4 title</b>
        <div style={{'marginBottom':'2vh','textAlign':'left'}}>
        <br></br>
        <b>Role description</b><br></br><br></br>
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. 
        <br></br><br></br>
        <b>Required skills</b>
        <ul>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
          <li>Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. </li>
        </ul>
        <br></br>
        <br></br>
        <button onClick={tog4}  style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read less</button>
        </div>
      </div>}
    </div>
  )
}

export default Vol