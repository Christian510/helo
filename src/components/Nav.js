import  React from 'react';

function Nav() {
    return (
        <div id="dash-container">
            <div className="flex-container">
                <div id="navigation">
                    <div className="nav-link">
                        <img alt="user"></img>
                        <p>User Name</p>
                    </div>
                    <div className="nav-link" >
                        <img src={ homeLogo } width="50" alt="home"></img>
                    </div>
                    <div className="nav-link" >
                        <img src={ newLogo } width="50" alt="newLogo" ></img>
                    </div>
                </div>
                <div id="shut-down" >
                    <img src={ shutDown } width="50" alt="shutDown" ></img>
                </div>
            </div>
        </div>
    );
}

export default Nav;