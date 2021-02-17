import React, { useState } from 'react'
import ImgLogo from "../../style/images/coyote-grove.png"

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='click-container'>
        <div className="clickable-header">
                <h1>L</h1>
                <h1>o</h1>
                <h1>g</h1>
                <h1>i</h1>
                <h1>n</h1>
                <h1>H</h1>
                <h1>e</h1>
                <h1>r</h1>
                <h1>e</h1>

        </div>
        <div className='login-container'>
            <div className="login-wrapper">            
                <div className="login-content">
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
                </div>
            </div>
        </div>

        </div>
    )
}

export default Login 