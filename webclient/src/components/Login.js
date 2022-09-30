import React,{ useRef } from 'react';
import logobrn from '../assets/logobrn.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    let emailInput= useRef();
    let passwordInput = useRef();
    let navigate= useNavigate();
   


    let onLogin=async()=>{

        let sendData= new FormData();

        sendData.append("email", emailInput.current.value);
        sendData.append("pass", passwordInput.current.value);

        let reqOptions={
            method: "POST",
            body: sendData
        }

        let rawData = await fetch(`http://localhost:9797/validateLogin`, reqOptions);

        let convertedData= await rawData.json();

        if(convertedData.isLoggedIn==true){
            navigate("/dashboard", {state: convertedData});
        }

        else{
alert(convertedData.status);
        }
        console.log(convertedData);
    }
    
  return (
    <form>
          <img  className='brn' src={logobrn}></img>
          <fieldset>
            <div className='login'>
          <label  className='login'>Sign In</label>
              <div>
                  <input placeholder='Type Your Email' className='inputwidth' ref={emailInput} type="email"></input></div>
                 
              <input className='inputwidth' ref={passwordInput} type="password" placeholder='Type Your Password'></input>
              
              </div>
              
                  <button  className='loginbtn' type= "button" onClick={()=>{
                    onLogin();
                  }}>Login</button>
                 
                  <input type="checkbox"></input>
                  <div className='remember'>
                    <label className='remember' htmlFor='remember'>Remember</label>
                    </div>
                  <a className='acolor' href='https://apps.who.int/healthinfo/systems/surveydata/index.php/auth/forgot_password'>Forgot Password?</a>
                  <Link to='/signup'><button className='create' type='button'>CREATE AN ACCOUNT</button></Link>
                
                  </fieldset>
        
              <fieldset className='copy'>
   <a className='copy' href='https://www.brninfotech.com/'>2022  © BRN Infotech Pvt. Ltd.</a>
   </fieldset>
   </form>
  )
}

export default Login