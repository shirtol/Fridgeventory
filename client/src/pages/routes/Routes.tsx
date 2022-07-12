import { Route, Switch } from "react-router-dom";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainAreaGrid } from "../../components/layouts/StyledMainAreaGrid";
import Navbar from "../../components/navbar/Navbar";
import WebsiteBanner from "../../components/websiteBanner/WebsiteBanner";
import Fridge from "../fridge/Fridge";
import Home from "../home/Home";
import HoodPage from "../hood/HoodPage";
import Login from "../login/Login";
import Logout from "../logout/Logout";
import MyHood from "../myHood/MyHood";
import Registration from "../registration/Registration";
import ShoppingList from "../shoppingList/ShoppingList";
import Statistics from "../statistics/Statistics";

const Routes = () => {
    return (
        <StyledMainAreaGrid>
            <WebsiteBanner></WebsiteBanner>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/fridge" component={Fridge}></Route>
                <Route
                    exact
                    path="/shopping-list"
                    component={ShoppingList}
                ></Route>
                <Route exact path="/hood" component={HoodPage}></Route>
                <Route exact path="/statistics" component={Statistics}></Route>
                <Route exact path="/register" component={Registration}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/logout" component={Logout}></Route>
                <Route exact path="/my-hood" component={MyHood}></Route>
            </Switch>
        </StyledMainAreaGrid>
    );
};

export default Routes;
