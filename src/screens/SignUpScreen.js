import React, { useRef } from 'react'
import { auth } from '../firebase'
import './SignUpScreen.css'

function SignUpScreen() {

    const emailRef = useRef() //////// consider useRef as a finger wich -
    const passwordRef = useRef() /////  -points the html element on the page

  
    const handleRegister = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(    //takes two arguments (email,password)
                emailRef.current.value,
                passwordRef.current.value
            )
            .then((authUser) => {   ///if success
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const handleSignIn = (e) =>{
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            ).then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button onClick={handleSignIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">
                        New to Netflix? 
                    </span>
                    <span onClick={handleRegister} className="signupScreen__link">
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
