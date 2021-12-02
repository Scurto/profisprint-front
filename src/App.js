import React from 'react';
import {Route} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import HeaderContainer from "./components/default/header/HeaderContainer";
import OperaContainer from "./components/opera/OperaContainer";
import ChromeContainer from "./components/chrome/ChromeContainer";
import SimpleTaskContainer from "./components/default/simpleTask/SimpleTaskContainer";
import UtilTaskContainer from "./components/default/utilTask/UtilTaskContainer";

function App() {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <Route path='/simpleTask/' render={
                () => <SimpleTaskContainer />
            }/>
            <Route path='/opera/' render={
                () => <OperaContainer />
            }/>
            <Route path='/chrome/' render={
                () => <ChromeContainer />
            }/>
            <Route path='/utilTask/' render={
                () => <UtilTaskContainer />
            }/>
        </div>
        // <div className="wrapper">
        //     <div className="main-head">The header</div>
        //     <div className="content">
        //         <h1>Main article area</h1>
        //         <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go
        //             to a two column layout, and then to a three column layout by redefining the grid, and the placement
        //             of items on the grid.</p>
        //     </div>
        // </div>
    );
}

export default App;
