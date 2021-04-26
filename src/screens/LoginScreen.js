import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from "./SignUpScreen"
import { useHistory } from 'react-router'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    const history = useHistory();

    return (
        <div className="loginScreen">
            <div className="login__background">
                <img 
                    onClick={() => history.push("/")}
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="netflix"
                    className="loginScreen__logo"
                />
                <button onClick={() => setSignIn(true)} className="loginScreen__login">Sign In</button>
            </div>
            <div className="loginScreen__gradient"/>
            <div className="loginScreen__body">
            {signIn ? 
            <SignUpScreen/> : (
                <>
                    <h1>Unlimitted films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter uour email to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type="email"
                                placeholder="Email Address"
                            />
                            <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">GET STARETED</button>
                        </form>
                    </div>
                </>
                )
        }
            </div>
        </div>
    )
}

export default LoginScreen
