import React, { useState, Component } from 'react';
import jwt_decode from 'jwt-decode';

import like from '../assets/heart.png';
import comment from '../assets/comment.png';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      profilePictureUrl: ''
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
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6">
            <div class="card card-container">
              <div class="card-header">
                <img src={this.state.profilePictureUrl} className="rounded-circle" width={38} height={38} />
                <span className="ml-3">{this.state.name}</span>
              </div>
              <img src="https://picsum.photos/id/4/400/500" />
              <div class="card-body">
                <img src={like} className="cursor" />
                <img src={comment} className="ml-2 cursor" />
                <p className="card-text">9 lượt thích</p>
                <p class="card-text"><span className="user-name">VinhNguyen</span> Where are you go.</p>
                <p class="card-text"><span className="user-name">LuanDinh</span> So beautiful</p>
                <hr/>
                <form class="form-inline">
                  <div class="form-group mb-2">
                    <input type="text" className="comment" placeholder="Thêm bình luận..." />
                  </div>
                  <button type="submit" class="btn-active ml-auto">Đăng</button>
                </form>
              </div>
            </div>

            <div class="card card-container">
              <div class="card-header">
                <img src={this.state.profilePictureUrl} className="rounded-circle" width={38} height={38} />
                <span className="ml-3">{this.state.name}</span>
              </div>
              <img src="https://picsum.photos/400/500" />
              <div class="card-body">
                <img src={like} className="cursor" />
                <img src={comment} className="ml-2 cursor" />
                <p className="card-text">9 lượt thích</p>
                <p class="card-text"><span className="user-name">VinhNguyen</span> Where are you go.</p>
                <p class="card-text"><span className="user-name">LuanDinh</span> So beautiful</p>
                <hr/>
                <form class="form-inline">
                  <div class="form-group mb-2">
                    <input type="text" className="comment" placeholder="Thêm bình luận..." />
                  </div>
                  <button type="submit" class="btn-active ml-auto">Đăng</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}