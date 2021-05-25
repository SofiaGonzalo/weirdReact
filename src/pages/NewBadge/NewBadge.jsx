import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import "./NewBadge.css"

class NewBadge extends React.Component{

    // state = {
    //     loading: false,
    //     error: null,
    //     form:{
    //         header_picture:"",
    //         profile_picture:"",
    //         name:"",
    //         age:"",
    //         city:"",
    //         followers:"",
    //         likes:"",
    //         post:"",
    //     }
    // }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <h1>New Badge</h1>
            </React.Fragment>
        )
    }

}

export default NewBadge;