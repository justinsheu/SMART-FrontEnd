import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; /*needed to change from Switch to Routes and change overall structure*/
import './App.css';

import Home  from './components/Home';
import GraphDay from './components/GraphDay';
import LiveData from './components/LiveData';


function App() {
  return (
    <BrowserRouter>
        <Routes> 
            <Route exact path ="/" element={<Home />}/>
            <Route exact path = "/HistoricalData" element={
              <GraphDay
                table={"apollo15int"}
                title={"Magnetic Data 1971-8-01 to 1972-09-20"}
                startingDate={'1971-8-01 PST'}
                maxDate={'1972-09-20 PST'}
              />}
            />
            <Route exact path = "/LiveData" element={
              <LiveData
                table={"apollo15int"}
                title={"Live Data"}
                startingDate={'1971-8-01 11:00:00 PST'}
                maxDate={'1972-09-20 PST'}
              />}
            />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
