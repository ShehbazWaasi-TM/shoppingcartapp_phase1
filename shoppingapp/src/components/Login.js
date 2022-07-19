import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("") 
    const [allEntry, setallEntry] = useState([])

    const submitForm =  (e) =>{
        e.preventDefault()
        if(email==="" || password===""){
            alert("plz fill the form")
        }
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (!password.match(mediumRegex)){
            alert("please enter a strong password")
        }else{
            const newEntry = {id:new Date().getTime.toString(), email: email, password: password};
            setallEntry([...allEntry, newEntry])
            console.log(allEntry)
            setEmail("")
            setPassword("")
            navigate('/Products')
        }
        
    }
  return (
    <>
    <div className='login'>
    <form action="" onSubmit={submitForm}>
        <div className='email'>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" />
        </div>
        <div className='password'>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password" />
        </div>

        <button className='login-btn' type='submit'>Login</button>
      </form>
    </div>   
    </>
  )
}

export default Login
