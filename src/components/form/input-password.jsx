export default function InputPassword() {
  return (
    <>
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
    </>
  );
}
