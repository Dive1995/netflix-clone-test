import React from 'react'
import "./Nav.css"
import {useState,useEffect} from 'react'
import { useHistory } from 'react-router'

function Nav() {
    const [show,setShow] = useState(false)
    const history = useHistory();

    const transitionNavbar = ()=>{
        if(window.scrollY > 100){
            // console.log('hi');
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar)
        return () => {
            window.removeEventListener("scroll",transitionNavbar)
        }
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>

            <div className="nav__contents">
                <img 
                    className="nav__logo" 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="logo"
                    onClick={() => history.push("/")}
                />
                <img 
                    onClick={() => history.push("/profile")}
                    className="nav__avatar" 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="avatar"
                />
            </div>
            
        </div>
    )
}

export default Nav
