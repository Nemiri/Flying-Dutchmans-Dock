import React from "react";
import Global from "./global/style";
import Routes from "./router";

const App: React.FC = () => {
    return (
        <>
            <Routes/>
            <Global/>
        </>
    )
}

export default App;
