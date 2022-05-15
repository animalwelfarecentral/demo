import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import {useState} from 'react'
import Profile from './Components/Profile';


function App() {

  const [page,setPage] = useState('home') 

  function setP(value){
    setPage(value)
  }

  return (
    <div>
    {page==='home'?<Homepage onClick={setP}/>:<Profile val={page} onClick={setP}/>}
    </div>
  );
}

export default App;
