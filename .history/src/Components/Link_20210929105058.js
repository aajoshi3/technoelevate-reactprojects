import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contact from './Contact'

const route=(
    <Router>
        <Link to="/">
         Home
        </Link>
        <Link to="/contact"><Contact/></Link>
        <Route path="/" component={Home}>Home</Route>
        <Route path="/contact" component={Contact}>Contact</Route>
    </Router>
)
export default route