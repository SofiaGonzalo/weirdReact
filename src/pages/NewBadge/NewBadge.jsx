import React from "react";
import Hero from "../../components/Hero";
import Badge from "../../components/Badge";
import "./NewBadge.css";
import BadgeForm from "../../components/BadgeForm";
import api from "../../libs/api";

class NewBadge extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      header_img_url: "",
      profile_picture_url: "",
      name: "",
      age: "",
      city: "",
      followers: "",
      likes: "",
      post: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false, error: null });
      this.props.history.push("/");
    } catch (error) {
      this.setState({ laoding: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* <Hero h={"15vh"}></Hero> */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                header_img_url={
                  this.state.form.header_img_url ||
                  "https://data.whicdn.com/images/352297214/original.jpg"
                }
                profile_picture_url={
                  this.state.form.profile_picture_url ||
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1dUw744EIKG9Ur7shsw1EwHaHa%26pid%3DApi&f=1"
                }
                name={this.state.form.name || "Anonymous"}
                age={this.state.form.age || "?"}
                city={this.state.form.city || "Unknown"}
                followers={this.state.form.followers || "0"}
                likes={this.state.form.likes || "0"}
                post={this.state.form.post || "0"}
              ></Badge>
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              ></BadgeForm>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewBadge;
