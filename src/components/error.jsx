import PropTypes from "prop-types";

export default function Error({ message }) {
  return <p className="text-red-500">{message}</p>;
}

Error.defaultProps = {
  message: "An error occurred.",
};

Error.propTypes = {
  message: PropTypes.string,
};
