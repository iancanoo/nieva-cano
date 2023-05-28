import React from "react";
import '../CSS/title.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div  className="container-fluid">
                <a id="title" className="navbar-brand" href="#">Navbar</a>
                <button id="title" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li  className="nav-item">
                    <a id="title" className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a id="title" className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a id="title" className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a id="title" className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Menu;