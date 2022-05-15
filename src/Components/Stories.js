import React from 'react'
import {useState} from 'react'
import oned from '../Assets/oned.jpeg'
import onec from '../Assets/onec.jpeg'

function Stories() {

    const [small1,setSmall1] = useState(true)
    const [big1,setBig1] = useState(false)
    const [small2,setSmall2] = useState(true)
    const [big2,setBig2] = useState(false)

    function tog1(){
        setSmall1(!small1)
        setBig1(!big1)
    }

    function tog2(){
        setSmall2(!small2)
        setBig2(!big2)
    }

  return (
    <div className='stories'>
        {small1 && <div className='inner'>
            <img src={oned} style={{'marginLeft':'auto','marginRight':'auto','marginTop':'2vh','marginBottom':'2vh'}}></img>
            <div style={{'marginTop':'2vh','textAlign':'justify'}}>
            Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. Morbi cursus scelerisque leo, non lacinia erat feugiat sit amet. Quisque scelerisque feugiat rhoncus. Proin pulvinar, eros ac tristique faucibus, massa nulla ultricies est, non ultrices nisl nulla id arcu. Duis ultricies, dui et tempus aliquet, tellus nibh pretium odio, sed porta libero mauris ornare turpis. Aliquam efficitur, nisi eu scelerisque tincidunt, velit ex commodo orci, id varius odio orci at ligula. In fringilla risus sit amet est feugiat pretium. Aenean aliquet mauris ac nulla porta, non laoreet lacus mattis. Vivamus porttitor mi vitae viverra placerat. Donec eget ante sed est luctus dictum. Integer ut ornare risus. <br></br>
            <br></br>
            <button onClick={tog1} style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read more</button>
            </div>
        </div>}

        {big1 && <div className='inner'>
            <img src={oned} style={{'marginLeft':'auto','marginRight':'auto','marginTop':'2vh','marginBottom':'2vh'}}></img>
            <div style={{'marginTop':'2vh','textAlign':'justify'}}>
            Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. Morbi cursus scelerisque leo, non lacinia erat feugiat sit amet. Quisque scelerisque feugiat rhoncus. Proin pulvinar, eros ac tristique faucibus, massa nulla ultricies est, non ultrices nisl nulla id arcu. Duis ultricies, dui et tempus aliquet, tellus nibh pretium odio, sed porta libero mauris ornare turpis. Aliquam efficitur, nisi eu scelerisque tincidunt, velit ex commodo orci, id varius odio orci at ligula. In fringilla risus sit amet est feugiat pretium. Aenean aliquet mauris ac nulla porta, non laoreet lacus mattis. Vivamus porttitor mi vitae viverra placerat. Donec eget ante sed est luctus dictum. Integer ut ornare risus. <br></br>
            <br></br>
            Fusce nec mauris viverra enim hendrerit convallis aliquam nec nunc. Nam faucibus tellus sit amet ornare volutpat. Nunc malesuada vehicula nunc, at eleifend dolor. Curabitur lobortis iaculis suscipit. Maecenas enim magna, porta non mollis in, lacinia in nulla. Donec risus purus, convallis nec justo et, pretium pretium ipsum. Nunc a tortor efficitur, dignissim nunc tempor, efficitur mauris. Vivamus ante lacus, sollicitudin nec ligula at, dictum scelerisque mauris. Ut vitae pellentesque augue. Maecenas viverra, purus sit amet imperdiet dapibus, massa urna facilisis purus, ut volutpat metus dui eget libero. Ut hendrerit a sem ut blandit. Sed rutrum pretium aliquam. Nulla id tellus vitae ante auctor vehicula. <br></br><br></br>
            <button onClick={tog1} style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read less</button>
            </div>
        </div>}

        {small2 && <div className='inner'>
            <img src={onec} style={{'marginLeft':'auto','marginRight':'auto','marginTop':'2vh','marginBottom':'2vh'}}></img>
            <div style={{'marginTop':'2vh','textAlign':'justify'}}>
            Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. Morbi cursus scelerisque leo, non lacinia erat feugiat sit amet. Quisque scelerisque feugiat rhoncus. Proin pulvinar, eros ac tristique faucibus, massa nulla ultricies est, non ultrices nisl nulla id arcu. Duis ultricies, dui et tempus aliquet, tellus nibh pretium odio, sed porta libero mauris ornare turpis. Aliquam efficitur, nisi eu scelerisque tincidunt, velit ex commodo orci, id varius odio orci at ligula. In fringilla risus sit amet est feugiat pretium. Aenean aliquet mauris ac nulla porta, non laoreet lacus mattis. Vivamus porttitor mi vitae viverra placerat. Donec eget ante sed est luctus dictum. Integer ut ornare risus. <br></br>
            <br></br>
            <button onClick={tog2} style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read more</button>
            </div>
        </div>}

        {big2 && <div className='inner'>
            <img src={onec} style={{'marginLeft':'auto','marginRight':'auto','marginTop':'2vh','marginBottom':'2vh'}}></img>
            <div style={{'marginTop':'2vh','textAlign':'justify'}}>
            Maecenas non faucibus nibh, nec imperdiet dolor. Maecenas vestibulum ullamcorper lacus, nec venenatis lacus blandit in. Mauris sagittis purus id velit semper iaculis. In augue mi, hendrerit ut tempor non, cursus eu ligula. Morbi cursus scelerisque leo, non lacinia erat feugiat sit amet. Quisque scelerisque feugiat rhoncus. Proin pulvinar, eros ac tristique faucibus, massa nulla ultricies est, non ultrices nisl nulla id arcu. Duis ultricies, dui et tempus aliquet, tellus nibh pretium odio, sed porta libero mauris ornare turpis. Aliquam efficitur, nisi eu scelerisque tincidunt, velit ex commodo orci, id varius odio orci at ligula. In fringilla risus sit amet est feugiat pretium. Aenean aliquet mauris ac nulla porta, non laoreet lacus mattis. Vivamus porttitor mi vitae viverra placerat. Donec eget ante sed est luctus dictum. Integer ut ornare risus. <br></br>
            <br></br>
            Fusce nec mauris viverra enim hendrerit convallis aliquam nec nunc. Nam faucibus tellus sit amet ornare volutpat. Nunc malesuada vehicula nunc, at eleifend dolor. Curabitur lobortis iaculis suscipit. Maecenas enim magna, porta non mollis in, lacinia in nulla. Donec risus purus, convallis nec justo et, pretium pretium ipsum. Nunc a tortor efficitur, dignissim nunc tempor, efficitur mauris. Vivamus ante lacus, sollicitudin nec ligula at, dictum scelerisque mauris. Ut vitae pellentesque augue. Maecenas viverra, purus sit amet imperdiet dapibus, massa urna facilisis purus, ut volutpat metus dui eget libero. Ut hendrerit a sem ut blandit. Sed rutrum pretium aliquam. Nulla id tellus vitae ante auctor vehicula. <br></br><br></br>
            <button onClick={tog2} style={{'marginBottom':'2vh','border':'none','color':'blue','textDecoration':'underline','backgroundColor':'white','fontSize':'2vh'}}>Read less</button>
            </div>
        </div>}
    </div>
  )
}

export default Stories