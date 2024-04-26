import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AuthLayout from "./modules/AuthLayout/AuthLayout";
import UserRoutes from "./UserRoutes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
