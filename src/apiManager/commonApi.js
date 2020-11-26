import axios from 'axios';

const defaultHeader = {'Content-Type': 'application/json'};


export const postDataApi = (url, headers) => {
  headers = {...defaultHeader};

  return new Promise((resolve, reject) => {
    axios
      .get(url, {headers: headers})
      .then(response => {
        if (response !== null) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};