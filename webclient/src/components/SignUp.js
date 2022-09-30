import React, { useRef } from 'react';
import brn from '../assets/logobrn.png';
import img from '../assets/noImage.png';
import { Link } from 'react-router-dom';

function SignUp() {

    
    let nameInput = useRef();
    let maleInput = useRef();
    let emailInput = useRef();
    let passwordInput = useRef();
    let countryInput = useRef();
    let mobileInput = useRef();
    let femaleInput = useRef();
    let genderInput = useRef();
    let profilePic = useRef();
    let stateInput= useRef();
    let singleInput= useRef();
    let marriedInput =useRef();
    let divorceInput= useRef();
    let maritalStatus= useRef();
    let cityInput = useRef();
   



   

   
       let signUpDetails= async ()=>{

        let myHeader= new Headers()
        
          let sendData = new FormData();

          
        
            sendData.append("name", nameInput.current.value);
            sendData.append("gen", genderInput.current.value);
            sendData.append("email" , emailInput.current.value);
            sendData.append("pass", passwordInput.current.value);
            sendData.append("country", countryInput.current.value);
            sendData.append("mob", mobileInput.current.value);
            sendData.append("marital", maritalStatus.current.value);
            sendData.append("city", cityInput.current.value);
            sendData.append("state", stateInput.current.value);
            sendData.append("profilePic", profilePic.current.files[0]);
          

        let reqOptions= {
            method : "POST",
            headers : myHeader,
            body : sendData,
           
        }
        let rawData= await fetch(`http://localhost:9797/signUp`, reqOptions);
        let convertedData= await rawData.json();
        
        console.log(convertedData);
    };
       

        return (

        <form>
            <img className='brn' src={brn}></img>
        <fieldset className='signup'>
        <label className='login'>Sign Up</label>
        
            
            <label className='remember' htmlFor='name'>
			 Enter your name exactly as per your educational certificates.:
		</label>
            <input className='inputwidth'  id='name' ref={nameInput} placeholder='Name as per certificates'></input>
        
    
            
            <input  className='inputdesign' ref={genderInput}></input>


            <input  className='inputdesign' ref={maritalStatus}></input>
            
            <div  className='image'><img  className='img1' src={img}></img></div>
       <div className='img2'><input  className='imgbtn' type='file' ref={profilePic}></input></div>
       
       
       
       <label>Enter your account details below:</label>
            
            
            <input className='inputwidth' id='mail' ref={emailInput} placeholder='Email'></input>
           
           
            <input className='inputwidth' id='passwrd' type="password" placeholder='Password' ref={passwordInput}></input>
           
            
            <input className='inputwidth' id='countryName' ref={countryInput} placeholder='country'></input>


            <input className='inputwidth' id='stateName' ref={stateInput} placeholder='state'></input>


            <input className='inputwidth' id='cityName' ref={cityInput} placeholder='city'></input>
            
            
            <input className='inputwidth' id='cell' ref={mobileInput} placeholder='mobile'></input>
        
            <div className='gender'>
            <input id='male' type='radio' ref={maleInput} name='userGender' onChange={()=>{
                if(maleInput.current.checked==true){
                    genderInput.current.value="male";
                    genderInput.current.style.display ="none"
                }
            }}></input>
            <label  className='gendesign' htmlFor='male'>Male</label></div>
            <div className='gender'><input id='female' type='radio' ref={femaleInput} name='userGender' onChange={()=>{
                if(femaleInput.current.checked==true){
                    genderInput.current.value= "female";
                    genderInput.current.style.display ="none"
                }
            }}></input>
            <label htmlFor='female' className='gendesign'>Female</label></div>


            <div className='ms'>
            <input id='single' type='radio' ref={singleInput} name='marital' onChange={()=>{
                if(singleInput.current.checked==true){
                   maritalStatus.current.value="single";
                    maritalStatus.current.style.display ="none"
                }
            }}></input>
            <label  className='gendesign' htmlFor='single'>Single</label></div>
            <div className='ms'><input id='married' type='radio' ref={marriedInput} name='marital' onChange={()=>{
                if(marriedInput.current.checked==true){
                    maritalStatus.current.value= "married";
                    maritalStatus.current.style.display ="none"
                }
            }}></input>
            <label htmlFor='married' className='gendesign'>Married</label></div>

            <div className='ms'><input id='divorcee' type='radio' ref={divorceInput} name='marital' onChange={()=>{
                if(divorceInput.current.checked==true){
                    maritalStatus.current.value= "divorced";
                    maritalStatus.current.style.display ="none"
                }
            }}></input>
            <label htmlFor='divorcee' className='gendesign'>Divorced</label></div> 
            
            <br></br>
            <input type="checkbox"></input>
       <label className='remember' id='terms'>I agree to the <a className='acolor' href='https://docs.google.com/document/d/1UNc8jOJtjQJttCxogPfFQcXFl6gNm8iuOwiRfbkmXcw/edit'>Terms of Service & Privacy Policy</a></label><br></br>
            
                <button className='signupbt' type='button' onClick={()=>{
                    signUpDetails();
                }}>Sign Up</button>
            
            <Link to='/'><button className='signupbtn' type='button'>Log In</button></Link>
         
            </fieldset>
            <a href='https://www.brninfotech.com/'>2022  © BRN Infotech Pvt. Ltd.</a>
        </form>
    
        )
    }
    
    export default SignUp;