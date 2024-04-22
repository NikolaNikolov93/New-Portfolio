import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { HamburgerMenuProvider } from "./context/HamburgerMenuContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HamburgerMenuProvider>
      <App />
    </HamburgerMenuProvider>
  </BrowserRouter>
);
