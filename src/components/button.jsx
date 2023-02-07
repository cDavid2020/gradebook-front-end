import PropTypes from "prop-types";

export default function Button({ type, color, text }) {
  return (
    <button
      type={type}
      className={`rounded bg-${color}-500 px-4 py-2 text-white hover:bg-${color}-600`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "green",
  type: "button",
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};
