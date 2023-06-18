import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

import routeConfig from '../component/DefaultLayout/config/routes';

const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.profile, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
