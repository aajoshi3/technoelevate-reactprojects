import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const route=(
    <Router>
        <Link to="/">
         Home
        </Link>
        <Link to="/contact">Contact</Link>
        <Route path="/">Home</Route>
    </Router>
)
export default route