import axios from 'axios';

export const register = newUser => {
  return axios
    .post('http://localhost:5000/api/users/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      wrongLoginCount: 0,
      profilePictureUrl: 'https://res.cloudinary.com/vinhnguyen93/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1588557922/samples/bike.jpg'
    })
    .then(res => {
      console.log('Registered!');
    });
}

export const login = user => {
  return axios
    .post('http://localhost:5000/api/users/login', {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem('usertoken', res.data);
      return res.data;
    })
    .catch(err => {
      console.log('Error: ' + err);
    })
}