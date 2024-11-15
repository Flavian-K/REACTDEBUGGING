import React from "react";
import PropTypes from "prop-types";

const Message = ({ text }) => {
	return <h1>{text}</h1>;
};

Message.propTypes = {
	text: PropTypes.string.isRequired, // Enforces text must be a string
};

export default Message;
