var username = document.getElementById(username);
var password = document.getElementById(password);

const url = 'http://127.0.0.1/api/v2/products';
const postData = {
  "username": username,
  "password": password
}

function loginUser(){
  return fetch(url)
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    }
    .then(function(response) {
      return response.json();
    })
    .catch(function(error){
      console.log(error);
    })
}
