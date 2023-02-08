import { useState } from "react";
import Button from "./components/button";
import Error from "./components/error";
import InputText from "./components/form/input-text";
import apiService from "./services/api";

function App() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [error, setError] = useState(null);

  const handleError = (error) => {
    if (error.response) {
      error.response.json().then((json) => {
        setError(json);
      });
    } else {
      setError({ message: error.message });
    }
  };

  return (
    <main className="flex flex-col gap-y-4">
      <form
        className="mt-4 flex flex-col items-center gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();

          const submittedUser = {
            username: e.target.username.value,
            password: e.target.password.value,
          };

          if (isRegistering) {
            if (e.target.password.value !== e.target.confirmPassword.value) {
              setError({ message: "Passwords do not match." });
              return;
            }
          }

          apiService
            .loginOrRegister(submittedUser, isRegistering)
            .then((response) => {
              // TODO: Avoid using localStorage for tokens!
              if (response.token) {
                localStorage.setItem("token", response.token);
              }
            })
            .catch((error) => {
              handleError(error);
            });
        }}
        onFocus={() => {
          setError(null);
        }}
      >
        <InputText label="Username" id="username" />
        <InputText label="Password" id="password" type="password" />

        {isRegistering && (
          <InputText
            label="Confirm Password"
            id="confirmPassword"
            type="password"
          />
        )}

        <Button type="submit" text={isRegistering ? "Sign Up" : "Login"} />

        {/* Conditional rendering: IF error is updated to something truthy (not null)... */}
        {error && <Error message={error.message} />}
      </form>

      <button
        className="text-center text-blue-500"
        onClick={() => {
          setIsRegistering((prev) => !prev);
        }}
      >
        {isRegistering ? "Already have an account?" : "Don't have an account?"}
      </button>
    </main>
  );
}

export default App;
