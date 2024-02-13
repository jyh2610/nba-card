import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import Nav from "./common/Nav";
import { store } from "../app/store";

function Layout() {
  return (
    <Provider store={store}>
      <Nav />
      <Outlet />
    </Provider>
  );
}

export default Layout;
