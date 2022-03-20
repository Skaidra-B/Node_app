import React, {useRef, useState} from 'react';
import http from "../plugins/http"

const Register = () => {
    const emailRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()
    const [error, setError] = useState(null)
    const [trigger, setTrigger] = useState(false)

    async function auth() {
        const user = {
            email: emailRef.current.value,
            passOne: pass1Ref.current.value,
            passTwo: pass2Ref.current.value,
            isAdmin: trigger
        }
        const data = await http.post(user, "/register")
        // console.log(data)
            if(!data.success) {
                setError(data.error)
            } else {
                setError(null)
                console.log(data)
            }

    }

    return (

            <div className="d-flex column">
                <div className="j-center d-flex">
                    <input type="text" ref={emailRef} placeholder="email"/>
                </div>
                <div className="j-center d-flex">
                    <input type="text" ref={pass1Ref} placeholder="password one"/>
                </div>
                <div className="j-center d-flex">
                    <input type="text" ref={pass2Ref} placeholder="password two"/>
                </div>
                <div className="j-center d-flex">
                    <label htmlFor="check" >Is admin</label>
                    <input onChange={() => setTrigger(!trigger)} type="checkbox" id="check"/>
                </div>
                <div className="j-center d-flex">
                    <button onClick={auth}>Register</button>
                </div>
                {error && <div>{error}</div>}
            </div>


    );
};

export default Register;