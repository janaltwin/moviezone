import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  
  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=good&apikey=f1dc0e14'
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
  }

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/singlepage/:id' component={SinglePage} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
