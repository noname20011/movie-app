import './App.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <div className='container'>
            <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/movie/:imdbID' element={<MovieDetail/>} />
              <Route element={<PageNotFound/>}/>
            </Routes>
          </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
