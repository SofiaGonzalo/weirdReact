import React from "react"
import "./Main.css"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"

const Main = (props) => {
    return(
        <React.Fragment>
            <div className="Main">

                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Welcome"}</h1>
                    <Button contentText={"Don't click here"} Link={"/new"}></Button> {/* Button */} 
                </div>

                <Hero h={"88vh"}></Hero>  {/* Image  */}
                
            </div>
        </React.Fragment>
    );
}

export default Main
