import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'; /*needed to change from Switch to Routes and change overall structure*/

import Home  from './components/Home';
import GraphDay from './components/GraphDay';
import LiveData from './components/LiveData';
import LiveDataMQTT from './components/LiveDataMQTT'
import TestGraph from './components/TestGraph'
import TestHistoricalGraph from './components/TestHistoricalGraph';
import AuthProvider from './auth/authConfiguration';
import AuthGuard from './auth/authGuard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="mt-24">
    <HashRouter>
      <AuthProvider>
        <Navbar></Navbar>
        <Routes> 
            <Route exact path ="/" element={<Home />}/>
            <Route 
              exact path = "/TestGraph" 
              element={<AuthGuard component={TestGraph} />}
            />
            <Route 
              exact path = "/TestHistoricalGraph" 
              element={<AuthGuard component={TestHistoricalGraph} />}
            />
            <Route
              exact path="/LiveDataMQTT/:topic/:granularity"
              element={<AuthGuard component={LiveDataMQTT} />}
            />
            <Route 
              exact path = "/LiveDataMQTT/:topic" 
              element={<AuthGuard component={LiveDataMQTT} />}
            />
            <Route 
              exact path = "/HistoricalData"
              element={
                <AuthGuard
                  component={GraphDay}
                  table={"apollo15int"}
                  title={"Magnetic Data 1971-8-01 to 1972-09-20"}
                  startingDate={'1971-8-01 PST'}
                  maxDate={'1972-09-20 PST'}
                />
              }
            />
            <Route exact path = "/LiveData"
              element={
                <AuthGuard
                  component={LiveData}
                  table={"apollo15int"}
                  title={"Live Data"}
                  startingDate={'1971-8-01 11:00:00 PST'}
                  maxDate={'1972-09-20 PST'}
                />
              }
            /> 
        </Routes>
      </AuthProvider>
    </HashRouter>
    </div>
  );
}

export default App;
