import { useState } from "react";
import Button from "./components/button";
import InputText from "./components/form/input-text";
import apiService from "./services/api";

function App() {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <main className="flex flex-col gap-y-4">
      <form
        className="mt-4 flex flex-col items-center gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();

          // TODO: Validate that the passwords match if we're registering.
          // TODO: Consider 'useRef' for the form elements.
          if (
            isRegistering &&
            e.target.password.value === e.target.confirmPassword.value
          ) {
            const newUser = {
              // 'target' is the form element that the event was triggered on.
              username: e.target.username.value,
              password: e.target.password.value,
            };

            apiService
              .register(newUser)
              .then((response) => {
                // TODO: Route the user to...
                console.log(response);
              })
              .error((error) => {
                console.error(error.message);
              });
          } else {
            // TODO: Use an Error component to display this error.
            console.error("Passwords do not match");
          }
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
