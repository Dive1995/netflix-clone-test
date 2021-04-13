import React from 'react'
import './SignUpScreen.css'

function SignUpScreen() {
    const handleSignIn = (e) =>{
        e.preventDefault()
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button onClick={handleSignIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">
                        New to Netflix? 
                    </span>
                    <span className="signupScreen__link">
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
