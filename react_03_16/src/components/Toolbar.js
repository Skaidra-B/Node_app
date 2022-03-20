import React from 'react';
import {Link} from "react-router-dom"

const Toolbar = ({logged, setLogged}) => {



    return (
        <div className="toolbar d-flex space-btw">
            <div className="d-flex">
                {logged === null && <Link to="/auth"><div className="mr20">Auth</div></Link>}
                <Link to="/create"><div className="mr20">Create</div></Link>
                <Link to="/"><div className="mr20">Products</div></Link>
                <Link to="/filter"><div className="mr20">Search</div></Link>
            </div>
            {logged && <div className="mr20">
                {logged.email}
            </div>}
            <button onClick={() => setLogged(null)}>Logout</button>
        </div>
    );
};

export default Toolbar;