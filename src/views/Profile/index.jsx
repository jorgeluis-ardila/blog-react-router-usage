import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../providers/context';
import { InfoWrapper, PermissionList, ProfileWrapper } from './style';
import { Button } from '../../components';

const Profile = () => {
  // const location = useLocation();
  const { username } = useParams();
  const navigate = useNavigate();
  const { user, validateUser } = useAuth();
  const existUser = validateUser(username).exist;
  const currentUser = validateUser(username).searchedUser;

  const isOwner = user?.id === currentUser?.id;

  const handleEditUser = () => navigate(`/${username}/edit-user`, { state: { userData: currentUser, isOwner } });

  if (!existUser) return <Navigate to="/" replace />;

  return (
    <>
      <h1>ESTO ES EL PROFILE</h1>
      <ProfileWrapper>
        <p className="greeting">
          Hola <span className="username">{currentUser?.name}</span>
        </p>
        <InfoWrapper>
          <h3>Tus Información</h3>
          <ul>
            <li>
              <p className="title">Usuario: </p>
              <p>{currentUser.username}</p>
            </li>
            <li>
              <p className="title">Teléfono: </p>
              <p>{currentUser.phone}</p>
            </li>
            <li>
              <p className="title">Edad: </p>
              <p>{currentUser.age}</p>
            </li>
            <li>
              <p className="title">Ciudad: </p>
              <p>{currentUser.city}</p>
            </li>
          </ul>
        </InfoWrapper>
        <PermissionList>
          <h3>Tus permisos como {currentUser.role}</h3>
          <ul className="permission-list">
            {Object.keys(currentUser.permissions).map(permission => (
              <li key={permission}>
                <span className="permission">{permission.charAt(0).toUpperCase() + permission.slice(1)}: </span>
                <span className="value">{currentUser.permissions[permission] ? 'Concedido' : 'Denegado'}</span>
              </li>
            ))}
          </ul>
        </PermissionList>
        {(isOwner || user.permissions?.handleUser) && <Button onClick={handleEditUser}>Editar Usuario</Button>}
      </ProfileWrapper>
    </>
  );
};
export { Profile };
