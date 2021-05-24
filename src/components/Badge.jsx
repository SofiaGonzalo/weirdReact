import React, { Component } from 'react';
import HeaderBackground from '../images/badge_header.jpg'
import ProfilePic from '../images/profile.jpg'
import "./style/Badge.css"

class Badge extends React.Component {

    render() {
        return (
        <React.Fragment>
            <div className="Badge m-5 flex-column">
                <div className="Badge__header">
                    <img src={this.props.header_picture} alt="Header background" />
                </div>

                <div className="Badge__userInfo container mt-5 mb-1">
                    <div class="Badge__userImage">
                        <img src="{this.props.profile_picture}" alt="Profile_picture" />
                    </div>
                </div>

                <h4 className="text-center mt-5">
                    {this.props.name} <i> {this.props.age} </i>
                </h4>
                <p className="text-center"> {this.props.city} </p>

                <div class="Badge__info container pt-3">
                    <div>
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.followers}</h4>
                            <p className="text-center">Followers</p>
                        </div>
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.likes}</h4>
                            <p className="text-center">Likes</p>
                        </div>
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.post}</h4>
                            <p className="text-center">Pictures</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default Badge;