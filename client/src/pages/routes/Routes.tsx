import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../home/Home";

const Routes = () => {
    return (
        <>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </>
    );
};

export default Routes;
