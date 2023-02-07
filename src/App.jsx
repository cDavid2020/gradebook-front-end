import { useState } from "react";
import Button from "./components/button";
import InputText from "./components/form/input-text";

function App() {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <main className="flex flex-col gap-y-4">
      <form className="mt-4 flex flex-col items-center gap-y-2">
        <InputText label="Username" id="username" />
        <InputText label="Password" id="password" type="password" />

        {isRegistering && (
          <InputText
            label="Confirm Password"
            id="confirmPassword"
            type="password"
          />
        )}

        <Button text={isRegistering ? "Sign Up" : "Login"} />
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
