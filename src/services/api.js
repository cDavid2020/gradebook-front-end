import ky from "ky";

export default {
  // TODO: Refactor ♻️ to combine the login and register methods into one method.
  login(credentials) {
    return ky
      .post("http://localhost:3000/api/users/login", {
        json: credentials,
      })
      .json();
  },

  // 'newUser' will come from the form
  register(newUser) {
    return (
      ky
        .post("http://localhost:3000/api/users/create", {
          // This will be the request body (as JSON) that will be sent to the server.
          json: newUser,
        })
        // This method will parse the incoming JSON response and return it.
        .json()
    );
  },
};
