import { useState } from 'react';
import { useAuth } from '../../providers/context';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Form, Wrapper } from './style';
import { Button, Input, Message } from '../../components';

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, isLogged, validateUser, user } = useAuth();
  const [username, setUsername] = useState('');
  const userValidation = validateUser(username);
  const from = location.state?.from;
  const fromPath = from?.pathname || `/${username}`;

  const handleChange = e => setUsername(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    login(username, () => {
      navigate(fromPath, { replace: true });
    });
  };

  if (isLogged) return <Navigate to={`/${user.username}`} state={{ from: location }} replace />;

  return (
    <>
      <h1>LogIn</h1>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Message>Escribe tu nombre de usuario</Message>
          <Input type="text" value={username} onChange={handleChange} />
          {!userValidation.exist && !!username && <Message>El Usuario no existe, registrate</Message>}
          <Button type="submit" disabled={!username}>
            Entrar
          </Button>
        </Form>

        <Link className="register-link" to="/register" state={{ from }}>
          Registrarse
        </Link>
      </Wrapper>
    </>
  );
};

export { LogIn };
