import "./App.css";
import NavBar from "./features/navbar/NavBar.tsx";

function App() {
  return (
    <>
      <div className="site">
        <NavBar />
        <div className="site-info">
          <h1>hello world</h1>
        </div>
      </div>
    </>
  );
}

export default App;
