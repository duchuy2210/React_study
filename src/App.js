import { Routes, Route } from 'react-router-dom'

import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import New from './Components/New/New'

import './App.css';

function App() {
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                        </li> 
                        <li className="nav-item">
                        <a className="nav-link" href="/news">News</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/news' element={<New/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </div>
    );
}

export default App;
