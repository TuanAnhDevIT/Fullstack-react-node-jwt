import { useEffect } from "react";
import Header from "./components/layout/header";
import axios from "./util/axios.customize";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log(res);
    };

    fetchHelloWorld();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
