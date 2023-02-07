import ky from "ky";

export default {
  loginOrRegister(credentials, isRegistering) {
    return ky
      .post(
        `http://localhost:3000/api/users/${isRegistering ? "create" : "login"}`,
        {
          json: credentials,
        }
      )
      .json();
  },
};
