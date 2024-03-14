import React from "react";
import Products from "./components/Products";
import Product from "./components/Product";
import SharedComp from "./components/SharedComp";
import Error from "./components/Error"
import { Route, RouterProvider} from "react-router-dom"

import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<SharedComp/>}>
          <Route index element = {<Products/>} />
          <Route path="/users">
          <Route path="/users/user/:id" element={<Product/>}/>
          </Route>
          <Route path="*" element = {<Error/>} />
        </Route>
  )
)

function Router () {
    return(
      <RouterProvider router={router} />
    )
}

export default Router