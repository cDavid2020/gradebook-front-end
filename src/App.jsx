import { useState } from "react";
import Button from "./components/button";
import Error from "./components/error";
import InputText from "./components/form/input-text";
import apiService from "./services/api";

function App() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [error, setError] = useState(null);

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

          // TODO: Consider 'useRef' for the form elements.
          if (isRegistering) {
            if (!e.target.password.value === e.target.confirmPassword.value) {
              setError({ message: "Passwords do not match." });
              return;
            }

            apiService
              .register(submittedUser)
              .then((response) => {
                // TODO: Route the user to...
                console.log(response);
              })
              .catch(async (error) => {
                if (error.response) {
                  // The server sends the message in the response body as JSON.
                  const errorMessage = await error.response.json();

                  // Use the dispatch function to update the state.
                  // This will trigger a re-render of the component.
                  // Since there is now an error, the error component will be CONDITIONALLY RENDERED 👇🏾
                  setError(errorMessage);
                } else {
                  // If there was no server response, then the error is likely a network error.
                  setError({ message: error.message });
                }
              });
          } else {
            apiService
              .login(submittedUser)
              .then((response) => {
                console.log(response);
              })
              .catch(async (error) => {
                if (error.response) {
                  const errorMessage = await error.response.json();
                  setError(errorMessage);
                } else {
                  setError({ message: error.message });
                }
              });
          }
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
