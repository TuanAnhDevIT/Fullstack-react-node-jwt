import { useEffect } from "react";
import Header from "./components/layout/header";
import axios from "./util/axios.customize";

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
    </div>
  );
}

export default App;
