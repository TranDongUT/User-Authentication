import axios from 'axios';

export const getMessage = async (auth) => {
  const response = await axios.get(
    'https://udemy-rn-76370-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=' +
      auth
  );

  return response.data;
};
