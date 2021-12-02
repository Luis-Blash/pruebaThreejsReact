import "./App.css";
import {Navbar} from "./components/Navbar";
import { AppRouter } from "./Router/AppRouter";
function App() {
  return (
    <>
      <div
        className="App grid h-screen"
        style={{ gridTemplateColumns: "20% 80%" }}
      >
        <Navbar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
