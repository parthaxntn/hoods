import React,{useState} from 'react'
import {ImCross} from 'react-icons/im'

const Login = (props) => {

    const {setLogged, setUser, password, setPassword, setFlash} = props
  const [userTemp, setUserTemp] = useState('')
  const [passTemp, setPassTemp] = useState('')
  const host = 'https://craig-server.herokuapp.com'
    
  const loginApi = async (endpoints,data_json, method) =>{
    const response = await fetch(`${host}${endpoints}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data_json) // body data type must match "Content-Type" header
    });
    const json = await response.json();

    if (json.status === true){
      setFlash({msg:`Logged in as ${json.username}!`,category:'success'})
      setUser(json.username)
      setLogged(true)
    }
    else{
      setFlash({msg:json.error,category:'danger'})
      console.log(json.error);
      setUser('default')
    }

    return json
  }
  
  const signupApi = async (endpoints,data_json, method) =>{
    const response = await fetch(`${host}${endpoints}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data_json) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    if (json.status === 'success'){
      setFlash({msg:`Logged in as ${json.username}!`,category:'success'})
      setUser(json.username)
    }
    else{
      setFlash({msg:json.error,category:'danger'})
      console.log(json.error);
      setUser('default')
    }
      return json
  }

  const login = (username,pass) =>{
    const data_json = {
      username: username,
      password: pass
    }
    const endpoints = '/api/auth/login'
    loginApi(endpoints,data_json,'POST')
  }

  const signUp = (username) =>{
    const data_json = {
      username: username,
      password: password
    }
    const endpoints = '/api/auth/createuser'
    signupApi(endpoints,data_json,'POST')
  }
  return (
    <>
    <div className="backdrop"></div>
    <div className='container login-section'>
        <button className='close' onClick={()=>{setLogged(true)}}><ImCross/></button>
        <link rel="stylesheet" href="/styles/login.css" />
        <img src="/img/login_illu.png" className="login-img" alt="" />
        <div className="inpts">
          <div class="user-name">
            <input type="text" value={userTemp} onChange={(e)=>{setUserTemp(e.target.value)}} name="User" id="user" placeholder='Enter your username..' />
          </div>  
          <div class="pass">
            <input type="password" value={passTemp} onChange={(e)=>{setPassTemp(e.target.value)}} name="password" id="password" placeholder='Enter your password..' />
          </div>  
            <div className="inpts-btns d-flex my-2">
              <button className='inpts-user' onClick={()=>{login(userTemp,passTemp)}} >Login</button>
              <button className='inpts-user' onClick={()=>{setPassword(passTemp);signUp(userTemp)}} >SignUp</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
