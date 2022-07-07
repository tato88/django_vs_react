import React from 'react';
// import AutoParks from "./components/AutoParks/AutoParks";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";

const App = () => {

    return (
        <div>
            {/*All Auto Parks:*/}
            {/*<AutoParks/>*/}
            <Authorization/>
            <Registration/>
        </div>

    );
};

export default App;