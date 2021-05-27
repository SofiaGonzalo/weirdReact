import React from "react";
import "./signup.css";

class signUp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="login-form col-5">
          <div className="loginForm m-5">
            <form>
              <div className="form-group mb-2">
                <label className="mb-1">Name</label>
                <input type="text" className="form-control" name="name" />
              </div>

              <div className="form-group mb-2">
                <label className="mb-1">Funny ID</label>
                <input type="text" className="form-control" name="id" />
              </div>

              <div className="form-group mb-2">
                <label className="mb-1">Email</label>
                <input type="email" className="form-control" name="email" />
              </div>

              <div className="form-group mb-2">
                <label className="mb-1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />

                <button type="submit" className="Submit__button" Link={"/log"}>
                  I am ready
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default signUp;
