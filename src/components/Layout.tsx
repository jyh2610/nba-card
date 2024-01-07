import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import Nav from "./common/Nav";
import { store } from "../app/store";

const queryClient = new QueryClient();
function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Nav />
        <Outlet />
      </Provider>
    </QueryClientProvider>
  );
}

export default Layout;
