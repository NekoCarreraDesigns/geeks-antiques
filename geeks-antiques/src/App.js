import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Philately from "./components/Philately";
import PageBody from "./components/Page-Body";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<PageBody />}></Route>
          <Route path='/stamps' element={<Philately />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
