import Navbar from "./Navbar"
import Sales from "./Sales"
import Recommendations from "./Recommendations"
import Topics from "./Topics"
import Popular from "./Popular"
import Footer from "./Footer"

function App(){
  return(
    <div>
      <Navbar></Navbar>
      <Sales></Sales>
      <Recommendations></Recommendations>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  )
}

export default App