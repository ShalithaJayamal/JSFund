const axios = require('axios');

function getGithubData() {
  axios.get('https://api.github.com/users/KrunalLathiya')
    .then(res => {
      console.log(res.data.login);
    })
    .catch(err => {
      console.log(err);
    });
}

getGithubData();