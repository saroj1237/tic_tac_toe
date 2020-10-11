import React from "react";

function Box({value, onClick}) {
return <button onClick={onClick}>{value}</button>;
}

export default Box;
