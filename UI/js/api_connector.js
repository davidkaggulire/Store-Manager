var username = document.getElementById('username');
var password = document.getElementById('password');

const url = 'http://127.0.0.1:5000/api/v2/auth/login'
const postData = {
  "username": username,
  "password": password
};

function loginUser(){
  return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
      console.log("request responded with", data)
    })
    .catch(function(error){
      console.log(error);
    })
}
