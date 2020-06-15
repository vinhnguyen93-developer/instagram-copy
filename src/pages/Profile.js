import React, { Component } from "react";
import jwt_decode from 'jwt-decode';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      profilePictureUrl: '',
      posts: []
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    this.setState({
      name: decoded.name,
      profilePictureUrl: decoded.profilePictureUrl
    });
  }

  render() {
    console.log(this.state.profilePictureUrl);
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6 row">
            <img 
            src={this.state.profilePictureUrl} 
            class="rounded-circle" width={150} 
            height={150} 
            />
            <div className="ml-5">
              <h4>{this.state.name}</h4>
              <span className="mr-5">2 bai viet</span>
              <span>6 nguoi theo doi</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <img src="https://picsum.photos/250/250" className="rounded" />
          <img src="https://picsum.photos/250/250" className="rounded ml-3" />
          <img src="https://picsum.photos/250/250" className="rounded ml-3" />
          <img src="https://picsum.photos/250/250" className="rounded ml-3" />
        </div>
      </div>
    );
  }
}