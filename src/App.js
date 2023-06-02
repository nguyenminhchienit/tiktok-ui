import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Layout = route.component;
                        return <Route path={route.path} element={<Layout></Layout>}></Route>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
