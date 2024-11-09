import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/api`);
      console.log(res);
    };

    fetchHelloWorld();
  }, []);

  return <>hello</>;
}

export default App;
