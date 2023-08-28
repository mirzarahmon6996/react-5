import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Download from "./page/Download";
import Expert from "./page/Expert";
import Lessons from "./page/Lessons";
import Premium from "./page/Premium";
import Home from "./page/Home";
import All from "./routes/All";
import Aritmetic from "./routes/Aritmetic";
import Algebra from "./routes/Algebra";
import Geometry from "./routes/Geometry";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/expert" element={<Expert />}>
          <Route path="/expert/all/" element={<All />}/>
          <Route path="/expert/aritmetic/" element={<Aritmetic/>}/>
          <Route path="/expert/algebra/" element={<Algebra />}/>
          <Route path="/expert/geometry/" element={<Geometry />}/>
        </Route>

        <Route path="/lessons" element={<Lessons />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </>
  );
}

export default App;
