import React from "react";
import Message from "./Message";

function App() {
	return <Message text={"42"} />; // Passes a number instead of a string
	// offending code: return <Message text={42} />; // Passes a number instead of a string
	// fixed code: return <Message text={"42"} />; // Now "42" is a string
}

export default App;
