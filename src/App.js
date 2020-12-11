import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  return (
    <div className="App">
      <Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Anasayfa</Link>
							</li>							
							<li>
								<Link to="/users">Kullanıcı Yönetimi</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/" exact component={Home} />						
						<Route path="/users" component={Users} />
					</Switch>
				</div>
			</Router>

    
    </div>
  );
}

export default App;
