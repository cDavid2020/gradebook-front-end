import InputText from "./components/form/input-text";

function App() {
  return (
    <form className="mt-4 flex flex-col items-center gap-y-2">
      <InputText label="Username" id="username" />

      <InputText label="Password" id="password" type="password" />
      <InputText
        label="Confirm Password"
        id="confirmPassword"
        type="password"
      />

      {/* TODO: Toggle between Register and Login */}
      <button
        type="submit"
        className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
      >
        Register
      </button>
    </form>
  );
}

export default App;
