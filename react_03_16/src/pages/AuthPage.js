import React from 'react';
import Register from "../components/Register";
import Login from "../components/Login";

const AuthPage = () => {
    return (
        <div className="d-flex mt-100">
            <div className="grow1 j-center d-flex">
                <Register/>
            </div>
            <div className="grow1 j-center d-flex">
                <Login/>
            </div>
        </div>
    );
};

export default AuthPage;