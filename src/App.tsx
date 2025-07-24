import "./global.css";
import { Router } from "./routes/sections";
import { Toaster } from "react-hot-toast";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}
