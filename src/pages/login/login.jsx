import React from "react";
import "./login.css";
import Hero from "../../components/Hero";

class login extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className="login-form col-5">
          <div className="loginForm m-5">

            <form>
                <div className="form-group mb-2">
                    <label className="mb-1">Email</label>
                    <input 
                        type="email" 
                        className="form-control"
                        name="email"
                    />
                </div>

                <div className="form-group mb-2">
                    <label className="mb-1">Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        name="password"
                    />

                    <button type="submit" className="Submit__button">
                        login
                    </button>   
                </div>
            </form>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default login;
