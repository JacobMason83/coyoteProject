import React, { useState, Fragment } from 'react'
import ImgLogo from "../../style/images/coyote-grove.png"

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isOpen, setIsOpen ] = useState(false)
    const handleClick = () => {
        if(isOpen === false){
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }
    return (
        <div className='click-container'>
           
        <div className="clickable-header" onClick={() => handleClick()}>
        
       
                <h1>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>i</span>
                <span>n</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
                <span>e</span>
                </h1>

        </div>
        {isOpen === true ? (
        <div className='login-container'>
            <div className="login-wrapper">            
                <form className="login-content">
                <img src={ImgLogo} />
                <label>username</label>
                    <input type="text"
                    name='username'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <label>Password</label>
                    <input type="password"
                    name='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>

        ): (<Fragment></Fragment>)}

        </div>
    )
}

export default Login 