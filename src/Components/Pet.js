import React from 'react'

function Pet(props) {
  return (
    <div className='pet'>
        <div style={{'textDecoration':'underline','marginTop':'1.5vh','textAlign':'left','marginLeft':'3vw','fontSize':'2.5vh'}} onClick={props.reset}><b>close</b></div>
        <img src={props.src}></img>
        <div style={{'marginTop':'3vh', 'textAlign':'left','marginLeft':'5vw','marginRight':'5vw'}}>
       <b> Name:</b> ABC<br></br>
       <b> Age: </b> X years<br></br>
       <b> Size: </b> large/medium/small<br></br>
       <b> Sex: </b> M/F<br></br><br></br>
       Fusce nec mauris viverra enim hendrerit convallis aliquam nec nunc. Nam faucibus tellus sit amet ornare volutpat. Nunc malesuada vehicula nunc, at eleifend dolor. Curabitur lobortis iaculis suscipit. Maecenas enim magna, porta non mollis in, lacinia in nulla. Donec risus purus, convallis nec justo et, pretium pretium ipsum. <br></br><br></br>Nunc a tortor efficitur, dignissim nunc tempor, efficitur mauris. Vivamus ante lacus, sollicitudin nec ligula at, dictum scelerisque mauris. Ut vitae pellentesque augue. Maecenas viverra, purus sit amet imperdiet dapibus, massa urna facilisis purus, ut volutpat metus dui eget libero. Ut hendrerit a sem ut blandit. Sed rutrum pretium aliquam. Nulla id tellus vitae ante auctor vehicula.
       <br></br><br></br>
        </div>
    </div>
  )
}

export default Pet