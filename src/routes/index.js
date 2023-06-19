import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

import config from '../component/DefaultLayout/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
