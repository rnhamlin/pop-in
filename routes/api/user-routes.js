// call on functions created in the Controllers; those are the "actual" routes. Controllers manage what's happening to data once the route is used.
const router = require("express").Router();
const {/*function names from controller list here*/} = require("../../controllers/user-controller")


router.use("/").get(findallThoughts)






//This is all wrong. Functions in Controllers only. The module was wroooooong. :/
// function getUser() {
//     // get user id.
//     const searchParams = new URLSearchParams(document.location.search.substring(1));
//     const userId = searchParams.get('id');
  
//     // get userInfo
//     fetch(`/api/users/${UserId}`)
//       .then(response => {
//         console.log(response);
//         return response.json();
//       })
//       .then(printUser);
//   };

  