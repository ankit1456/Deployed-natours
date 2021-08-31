/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://localhost:5000/api/v1/users//updateMyPassword'
        : 'http://localhost:5000/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data: data
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Account updated successfully 🙂');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
