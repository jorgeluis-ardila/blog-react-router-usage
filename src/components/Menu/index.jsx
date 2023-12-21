import cn from 'classnames';
import { Link, NavBar } from './style';
import { useAuth } from '../../providers/context';

const useGetRoutes = () => {
  const { user } = useAuth();
  return [
    {
      to: '/',
      text: 'Home',
      private: false,
    },
    {
      to: `/${user.username}`,
      text: 'Profile',
      private: true,
    },
    {
      to: '/blog',
      text: 'Blog',
      private: false,
    },
    {
      to: '/handle-users',
      text: 'Handle Users',
      private: true,
      adminOnly: true,
    },
    {
      to: '/login',
      text: 'LogIn',
      publicOnly: true,
      private: false,
    },
    {
      to: '/logout',
      text: 'LogOut',
      private: true,
    },
  ];
};

const Menu = () => {
  const { isLogged, user } = useAuth();
  const routes = useGetRoutes();

  return (
    <NavBar>
      <ul>
        {routes.map(route => {
          if (route.publicOnly && !!isLogged) return null;
          if (route.private && !isLogged) return null;
          if (route.private && route.adminOnly && !user.permissions.handleUser) return null;
          return (
            <li key={route.to}>
              <Link className={isActive => cn({ active: isActive })} to={route.to}>
                {route.text}
              </Link>
            </li>
          );
        })}
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li> */}
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li> */}
      </ul>
    </NavBar>
  );
};

export { Menu };
