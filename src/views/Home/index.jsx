import { Message } from '../../components';
import { HomeWrapper, UsersList } from './style';

const Home = () => {
  return (
    <HomeWrapper>
      <h1>ESTO ES EL HOME</h1>
      <Message>
        Puedes probar con los siguientes usuarios, además puedes registrarte donde quedarás con el role de estudiante.
      </Message>
      <UsersList className="permission-list">
        <li>
          <span className="permission">Admin: </span>
          <span className="value">juanperez123</span>
        </li>
        <li>
          <span className="permission">Editor: </span>
          <span className="value">mariagarcia</span>
        </li>
        <li>
          <span className="permission">Estudiante: </span>
          <span className="value">carlosl</span>
        </li>
      </UsersList>
    </HomeWrapper>
  );
};
export { Home };
