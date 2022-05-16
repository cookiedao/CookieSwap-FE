import './App.css';
import Header from './components/Header.js';
import MainPage from './pages/main/MainPage.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Box} from "@mui/material";
import PoolPage from "./pages/pool/PoolPage";
import FarmPage from "./pages/farm/FarmPage";


function App() {
    return (
        <Router>
            <div className="container">
                <Header/>
                <Switch>
                    <Box sx={{minHeight: "100vh"}}>
                        <Route exact path={["/", "/swap"]} component={MainPage}/>
                        <Route exact path="/pool" component={PoolPage}/>
                        <Route exact path="/farm" component={FarmPage}/>
                        <Route exact path="/liquidity" component={MainPage}/>
                    </Box>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
