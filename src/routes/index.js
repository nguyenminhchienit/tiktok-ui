import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
