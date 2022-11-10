import './App.css'
import MyRoutes from './routes'
import {NavBar} from './shared/navbar'
import {Footer} from './shared/footer'


function App() {
  return (
    <div className="app">
      <NavBar/>
      <MyRoutes/>
      <Footer/>
    </div>
  )
}

export default App;
