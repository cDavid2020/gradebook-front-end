import PropTypes from "prop-types";

export default function InputText({ label, id, type }) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={label}
        className="rounded"
      />
    </>
  );
}

InputText.defaultProps = {
  type: "text",
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
