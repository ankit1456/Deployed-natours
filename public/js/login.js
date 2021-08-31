/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:5000/api/v1/users/signin',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Welcome Logged in successfully 🙂');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', `${err.response.data.message} 😶`);
  }
};

export const signout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:5000/api/v1/users/signout'
    });
    if ((res.data.status = 'success')) location.reload();
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};
