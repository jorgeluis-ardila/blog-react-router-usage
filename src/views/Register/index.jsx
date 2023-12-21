import { useEffect, useState } from 'react';
import { useAuth, useUsers } from '../../providers/context';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Form, Wrapper } from './style';
import { Button, Input, Message } from '../../components';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { register, isLogged, validateUser, user } = useAuth();
  const { createUser, usersList } = useUsers();
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    age: '',
    city: '',
    username: '',
  });
  const userValidation = validateUser(userInfo.username);
  const isFormCompleted = Object.keys(userInfo).every(prop => userInfo[prop] !== '');
  const from = location.state?.from;
  const fromPath = from?.pathname || `/${userInfo.username}`;

  useEffect(() => {
    if (userValidation.exist) {
      register(userInfo, () => {
        navigate(fromPath, { replace: true });
      });
    }
  }, [usersList]);

  const handleChange = e => {
    setUserInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUser(userInfo);
  };

  if (isLogged) return <Navigate to={`/${user.username}`} state={{ from: location }} replace />;

  return (
    <>
      <h1>Register</h1>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Message>Registra tus datos</Message>
          <Input
            type="text"
            value={userInfo.username}
            id="username"
            name="username"
            placeholder="Usuario"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            value={userInfo.name}
            id="name"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            value={userInfo.phone}
            id="phone"
            name="phone"
            placeholder="Teléfono"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            value={userInfo.age}
            id="age"
            name="age"
            placeholder="Edad"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            value={userInfo.city}
            id="city"
            name="city"
            placeholder="Ciudad"
            onChange={handleChange}
            required
          />
          {userValidation.exist && !!userInfo.username && <Message>El Usuario no esta disponible</Message>}
          <Button type="submit" disabled={!isFormCompleted}>
            Entrar
          </Button>
        </Form>

        <Link className="register-link" to="/login" state={{ from }}>
          Iniciar Sesión
        </Link>
      </Wrapper>
    </>
  );
};

export { Register };
