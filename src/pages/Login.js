import React from 'react';

import logo from '../assets/logo.png';

export default function Login() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4">
          <form className="form-container">
            <img src={logo} />
            <div class="form-group mt-3">
              <input type="email" class="form-control" placeholder="Mobile number or email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
            <p className="mt-4">forgot password ?</p>
            <hr/>
            <p>Don't have an account ? <span className="active">Sign up</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}