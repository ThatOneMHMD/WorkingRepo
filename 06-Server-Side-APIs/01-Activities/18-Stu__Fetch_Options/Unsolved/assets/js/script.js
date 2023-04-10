fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5',{


// this is the asnwer, as to how to use it, idk:
cache: "reload",



})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
