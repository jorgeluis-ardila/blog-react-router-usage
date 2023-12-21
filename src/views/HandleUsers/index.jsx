import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth, useUsers } from '../../providers/context';
import { UsersList, UsersWrapper } from './style';
import { Button } from '../../components';

const HandleUsers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { usersList } = useUsers();

  if (!user.permissions.handleUser) return <Navigate to="/" replace />;

  const handleEditUser = (username, user) =>
    navigate(`/${username}/edit-user`, { state: { userData: user, from: location } });

  return (
    <UsersWrapper>
      <h1>GESTION DE USUARIOS</h1>
      <UsersList>
        {usersList.map(user => (
          <li key={user.id}>
            <div>
              <Link className="item-name" to={`/${user.username}`}>
                {user.name}
              </Link>
              <p className="highlight">
                Role: <span className="value">{user.role}</span>
              </p>
            </div>
            <Button className="edit" onClick={() => handleEditUser(user.username, user)}>
              Editar
            </Button>
          </li>
        ))}
      </UsersList>
    </UsersWrapper>
  );
};
export { HandleUsers };
