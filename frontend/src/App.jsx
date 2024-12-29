import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./components/context/auth.context";
import Header from "./components/layout/header";
import axios from "./util/axios.customize";

function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);
  useEffect(() => {
    setAppLoading(true);
    const fetchAccount = async () => {
      const res = await axios.get(`/v1/api/account`);

      if (res) {
        setAuth({
          isAuthenticated: true,
          user: {
            email: res.email ?? "",
            name: res.name ?? "",
          },
        });
      }
      setAppLoading(false);
    };

    fetchAccount();
  }, []);

  return (
    <div>
      {appLoading ? (
        <>loading...</>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
