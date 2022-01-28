import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Philately from "./components/Philately";
import PageBody from "./components/Page-Body";
import StampsView from "./components/Stamps-View";
import Numisma from "./components/Numisma";
import CoinsView from "./components/Coins-View";
import Antiques from "./components/Antiques";
import AntiquesView from "./components/Antiques-View";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<PageBody />}></Route>
          <Route path='/stamps' element={<Philately />}></Route>
          <Route path='stamps-view' element={<StampsView />}></Route>
          <Route path='/coins' element={<Numisma />}></Route>
          <Route path='/coins-view' element={<CoinsView />}></Route>
          <Route path='/antiques' element={<Antiques />}></Route>
          <Route path='/antiques-view' element={<AntiquesView />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
