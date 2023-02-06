function App() {
  return (
    <form className="mt-4 flex flex-col items-center gap-y-2">
      <label htmlFor="username" className="sr-only">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        className="rounded"
      />

      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className="rounded"
      />

      <label htmlFor="confirmPassword" className="sr-only">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
        className="rounded"
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
