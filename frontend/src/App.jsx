import { useEffect } from "react";
import axios from "./util/axios.customize";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log(res);
    };

    fetchHelloWorld();
  }, []);

  return <>hello</>;
}

export default App;
