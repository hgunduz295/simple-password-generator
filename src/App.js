import { useEffect, useState } from 'react';
import './App.css';
import generatePassword  from './passwordUtils';
function App() {
  
  const[passwordLength,setPasswordLength]=useState(6);
const[password,setPassword]=useState("");
const[passwords,setPasswords]=useState([]);
const [btnDisable, setBtnDisabled] = useState(false);

useEffect(() => {

  const savedPasswordsText=localStorage.getItem("Passwords");
  const savedPasswords=JSON.parse(savedPasswordsText);
  if(savedPasswords&&savedPasswords.length>0){
    setPasswords(savedPasswords);
  }

  const generatedPassword = generatePassword(passwordLength);

        setPassword(generatedPassword);

      },[]);

const handleSliderChange=(e)=>{

  setPasswordLength(e.target.value);
  const generatedPassword = generatePassword(e.target.value);
  setPassword(generatedPassword);
  setBtnDisabled(false);

}
const setPasswordLengthColor = (pwLength) =>{
  if(!pwLength) pwLength=passwordLength;
  if(pwLength<11)return"bg-danger";
  else if(pwLength>=11&&pwLength<20) return"bg-warning";
  else{
    return "bg-success";
  }
}
const handleSaveButtonClick=(e)=>{

  const newPasswords=[...passwords,password];
  
  localStorage.setItem("Passwords",JSON.stringify(newPasswords));

  setPasswords(newPasswords);
  setBtnDisabled(true);
}
const handlePasswordInputClick=(e)=>{e.target.select()
document.execCommand("copy");
e.target.focus();
const selectedPassword=passwords.find(p=>p===e.target.value);
if(!selectedPassword){
  const updatedPasswords=[...passwords,e.target.value];
  setPasswords(updatedPasswords);
  setBtnDisabled(true);
}
}
const handleResetPasswordClick=(e)=>{
  setPasswords([]);
  localStorage.setItem("Passwords",JSON.stringify([]));
  //localstorage.removeItem("Passwords");
  setBtnDisabled(false);
}
return (
  <div className="container">
 {/* Container */}

    <div className="col-12">
      <div className="d-flex flex-column justify-content-center align-items-center">
 {/* Card Section */}
       
        <div className="card mt-3">
          <div className="card-body">
            <div className="card-title text-center">
              <h2 className="text-info">Simple Password Generator</h2>
              <p>Create secure passwords with Simple Password Generator</p></div>
 {/* Slider */}
             
              <div className="mt-2">
                <label className="form-label" htmlFor="password-length-slider">Password Length 
                <span className={`badge ${setPasswordLengthColor()}` }>{passwordLength}</span>
                </label>
                <input
                  className="form-range"
                  id="password-length-slider"
                  type="range"
                  min="6"
                  max="40"
                  step="1"
                  value={passwordLength}
                  onChange={(e)=>handleSliderChange(e)}
                />
                <div className='mt-2'>
 {/* text input section */}

                  <input 
                  className="form-control text-center" 
                  type="text"
                  style={{cursor:"pointer"}}
                  value={password}
                  readOnly={true}
                  onClick={(e)=>handlePasswordInputClick(e)}
                  />
 {/* button section */}

<button className='btn btn-info mt-3' disabled={btnDisable} onClick={(e)=>handleSaveButtonClick(e)}>Save</button>
<button onClick={handleResetPasswordClick} className='btn btn-outline-info mt-3 float-end'>Reset Saved Passwords</button>

                </div>
              </div>
            
          </div>
        </div>
 {/* Password List card */}
 <div className='card mt-3'>   
 <div class="card-body"><div class="card-header text-center">
  <h2 class="text-info">Recent Generated Passwords</h2>
  </div>
  <ul class="list-group list-group-flush text-center">
{
  passwords.map((pw,index)=>(
    <li key={index} className="list-group-item"><span
    className="fst-italic float-start">{index + 1}</span>
    <div style={{cursor: 'pointer'}}
         className={ `badge ${ setPasswordLengthColor(pw.length)}`  }>{pw}</div>
</li>
  ))
}
      </ul>
      </div>


      </div>
    </div>
  </div>
  </div>

);  
 }

export default App;
