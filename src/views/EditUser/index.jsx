import { useEffect, useState } from 'react';
import { useAuth, useUsers } from '../../providers/context';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ButtonWrapper, Form, Wrapper } from './style';
import { Button, Input, Select } from '../../components';
import { roles } from '../../data';

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = useParams();
  const { login, user, validateUser } = useAuth();
  const { editUser } = useUsers();
  const currentUser = validateUser(username).searchedUser;
  const isOwner = location.state?.isOwner;
  const userData = location.state?.userData ?? (isOwner || user.permissions.handleUser ? currentUser : null);
  const from = location.state?.from;
  const fromPath = from?.pathname || `/${username}`;

  const [userInfo, setUserInfo] = useState({
    name: userData?.name,
    phone: userData?.phone,
    age: userData?.age,
    city: userData?.city,
    role: userData?.role,
  });
  const isFormCompleted = Object.keys(userInfo).every(prop => userInfo[prop] !== '');

  useEffect(() => {
    setUserInfo({
      name: userData?.name,
      phone: userData?.phone,
      age: userData?.age,
      city: userData?.city,
      role: userData?.role,
    });
  }, [userData]);

  const handleChange = e => {
    setUserInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    editUser({ id: userData.id, userInfo });
    if (isOwner) login(userData.username);
    navigate(fromPath, { replace: true });
  };

  const handleCancel = e => {
    navigate(fromPath);
  };

  if (!userData) return <Navigate to={`/${username}`} replace />;

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Nombre</label>
            <Input
              type="text"
              value={userInfo.name}
              id="name"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Teléfono</label>
            <Input
              type="number"
              value={userInfo.phone}
              id="phone"
              name="phone"
              placeholder="Teléfono"
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="age">Edad</label>
            <Input
              type="text"
              value={userInfo.age}
              id="age"
              name="age"
              placeholder="Edad"
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="city">Ciudad</label>
            <Input
              type="text"
              value={userInfo.city}
              id="city"
              name="city"
              placeholder="Ciudad"
              onChange={handleChange}
              required
            />
          </fieldset>
          {user.permissions.handleUser && (
            <fieldset>
              <label htmlFor="role">Role</label>
              <Select name="role" id="role" value={userInfo.role} onChange={handleChange} required>
                {Object.keys(roles).map(role => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </Select>
            </fieldset>
          )}
          <ButtonWrapper>
            <Button type="submit" disabled={!isFormCompleted}>
              Modificar
            </Button>
            <Button type="button" onClick={handleCancel} className="negate">
              Cancelar
            </Button>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </>
  );
};

export { EditUser };
