import { UserAcccount } from '../components/UserAccount/UserAccount';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import { SearchUsers } from '../components/SearchUsers/SearchUsers';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { UserProfile } from '../components/UserProfile/UserProfile';
import { MyFrends } from '../components/MyFrends/MyFrends';
import { Photo } from '../components/MyPhoto/MyPhoto';
import { Chat } from '../components/Chat/Chat';

export const routes = [
    { path: '/', element: UserAcccount, exact: true },
    { path: '/registration', element: RegistrationForm, exact: true },
    { path: '/login', element: LoginForm, exact: true },
    { path: '/friendslist', element: MyFrends, exact: true },
    { path: '/search', element: SearchUsers, exact: true },
    { path: '/photo', element: Photo, exact: true },
    { path: '/chat', element: Chat, exact: true },
    { path: '/user-profile', element: UserProfile, exact: true },
];
