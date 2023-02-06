import InputText from "./components/form/input-text";
import InputPassword from "./components/form/input-password";

function App() {
  return (
    <form className="mt-4 flex flex-col items-center gap-y-2">
      <InputText />

      <InputPassword />
      <InputPassword />

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
