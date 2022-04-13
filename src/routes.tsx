import React from "react";
import { Routes as R } from "./constants/routes/public";
import { ProductsList } from "./components/Product/ProductsList";
import { Cart } from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={R.Home.base} component={ProductsList} />
        <Route exact path={R.cart} component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}
