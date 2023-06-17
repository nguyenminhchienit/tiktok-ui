import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
