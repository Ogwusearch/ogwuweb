import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center">
        Welcome to Ogwusearch SPA
      </h1>
      <p className="text-center mt-4">{message || "Loading..."}</p>
    </div>
  );
}
