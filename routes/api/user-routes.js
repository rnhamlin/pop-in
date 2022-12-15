// call on functions created in the Controllers; those are the "actual" routes.

function getUser() {
    // get user id.
    const searchParams = new URLSearchParams(document.location.search.substring(1));
    const userId = searchParams.get('id');
  
    // get pizzaInfo
    fetch(`/api/users/${UserId}`)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(printUser);
  };

  