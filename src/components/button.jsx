import PropTypes from "prop-types";

export default function Button({ type, color, text }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500 text-white",
    green: "bg-green-500 hover:bg-green-400 text-white",
    red: "bg-red-500 hover:bg-red-400 text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  };

  return (
    <button type={type} className={`${colorVariants[color]} rounded px-4 py-2`}>
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
