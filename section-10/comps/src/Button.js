import PropTypes from "prop-types";

function Button({ children }) {
  return <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) 
      + Number(!!warning) + Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one variation (primary, secondary, success, warning, danger) can be used at a time.'
      );
    }
  }
};

export default Button;
