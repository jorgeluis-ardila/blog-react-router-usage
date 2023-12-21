import { Button } from '../../components';
import { useAuth } from '../../providers/context';
import { ContentWrapper } from './style';

const LogOut = () => {
  const { logout } = useAuth();

  const handleClick = e => {
    logout();
  };

  return (
    <>
      <h1>LogOut</h1>

      <ContentWrapper>
        <p className="message">Seguro que quieres salir?</p>
        <Button onClick={handleClick}>Salir</Button>
      </ContentWrapper>
    </>
  );
};

export { LogOut };
