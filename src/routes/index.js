import Home from '../pages/Home';
import Following from '../pages/Following';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
