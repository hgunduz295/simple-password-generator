import { useState } from 'react';
import './App.css';

function App() {
  
  const[passwordLength,setPasswordLength]=useState(6);
  
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
                <label className="form-label" htmlFor="password-length-slider">Password Length <span className="badge bg-danger">{passwordLength}</span>
                </label>
                <input
                  className="form-range"
                  id="password-length-slider"
                  type="range"
                  min="6"
                  max="40"
                  step="1"
                  value={passwordLength}
                  onChange={(e)=>setPasswordLength(e.target.value)}
                />
                <div className='mt-2'>
 {/* text input section */}

                  <input 
                  className="form-control text-center" 
                  type="text"
                  style={{cursor:"pointer"}}
                  value="A65i@zfnfvm&h"
                  />
 {/* button section */}

<button className='btn btn-info mt-3'>Save</button>
<button className='btn btn-outline-info mt-3 float-end'>Reset Saved Passwords</button>

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
    <li class="list-group-item">
      <span class="fst-italic float-start">1</span>
      <div class="badge bg-warning" style={{cursor: 'pointer'}}>A65i@zfnfvm&amp;h</div></li></ul></div>


      </div>
    </div>
  </div>
  </div>

);  
 }

export default App;
