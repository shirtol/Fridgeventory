import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Fridge from "../fridge/Fridge";
import Home from "../home/Home";
import Hood from "../hood/Hood";
import ShoppingList from "../shoppingList/ShoppingList";
import Statistics from "../statistics/Statistics";

const Routes = () => {
    return (
        <>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/fridge" component={Fridge}></Route>
                <Route
                    exact
                    path="/shopping-list"
                    component={ShoppingList}
                ></Route>
                <Route exact path="/hood" component={Hood}></Route>
                <Route exact path="/statistics" component={Statistics}></Route>
            </Switch>
        </>
    );
};

export default Routes;
