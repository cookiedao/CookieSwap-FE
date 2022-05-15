import './App.css';
import Header from './components/Header.js';
import MainPage from './pages/MainPage.js';
import Footer from './components/Footer.js';


function App() {
    return (
        <>
            <div className="container">
                <Header/>
                <MainPage/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
