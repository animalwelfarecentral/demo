import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import {useState,useEffect} from 'react'
import Profile from './Components/Profile';
import {isMobile} from 'react-device-detect';


function App() {

  useEffect(() => {
    document.title = "demo"
 }, []);
 

  const [page,setPage] = useState('home') 

  function setP(value){
    setPage(value)
  }

  if(isMobile){
    return(
      <div style={{'marginTop':'2vh', 'textAlign':'center'}}>
        This website is not mobile-friendly.
      </div>
    )
  }

  return (
    <div>
    {page==='home'?<Homepage onClick={setP}/>:<Profile val={page} onClick={setP}/>}
    </div>
  );
}

export default App;
