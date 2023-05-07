import axios from 'axios';

const API_KEY = 'AIzaSyCy-4eHlRUsGJAcn-CdRB5BksiDJqwP54U';

const authenticate = async (mode, email, password) => {
  const URL =
    'https://identitytoolkit.googleapis.com/v1/accounts:' +
    mode +
    '?key=' +
    API_KEY;

  const response = await axios.post(URL, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
};

export const createUser = (email, password) => {
  return authenticate('signUp', email, password);
};

export const loginUser = (email, password) => {
  return authenticate('signInWithPassword', email, password);
};
