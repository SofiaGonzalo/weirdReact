import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sinclairoil.com%2Fhistory%2Fimg%2Fdev-sinclairhistory.png&f=1&nofb=1" alt="logo" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;