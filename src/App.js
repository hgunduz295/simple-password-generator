import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Ali Veli";
  const isLoading = false;
  const sayMyName =(name)=>{
    console.log(name);
  }
       
return (
  //divsiz paranteze fragment denir div kullanmak istemezsek diye örn:<></>
  <>
  {isLoading ?  
   <img src={logo} className="App-logo" alt="logo" />
  :<h1>{name}</h1>}
</>
);  
 }

export default App;
