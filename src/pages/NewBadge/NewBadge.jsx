import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import "./NewBadge.css"

class NewBadge extends React.Component{

    state = {
        loading: false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:"",
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge
                            header_picture = {this.state.form.header_picture || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XTup0yLdQam3cMUmk6W4XAHaEK%26pid%3DApi&f=1"}
                            profile_picture = {this.state.form.profile_picture || "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.wikia.nocookie.net%2F__cb20140107172614%2Fsuper-smash-bros-iv-fanfiction%2Fimages%2F9%2F9f%2FYoshi_Egg_Tilted_Artwork.png&f=1&nofb=1"}
                            name = {this.state.form.name || "Jack Jackonson"}
                            age = {this.state.form.age || "7"}
                            city = {this.state.form.city || "Chihuahua"} 
                            followers = {this.state.form.followers || "0"}
                            likes = {this.state.form.likes || "0"}
                            post = {this.state.form.post || "0"}
                        ></Badge>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default NewBadge;