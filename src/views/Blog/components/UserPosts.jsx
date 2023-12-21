import { PostList } from '.';
import { UserPostWrapper } from './style';
import { useNavigate } from 'react-router-dom';
import { Button, Message } from '../../../components';

const UserPosts = ({ userPost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('create-post');
  };

  return (
    <>
      <UserPostWrapper>
        {userPost.length ? <PostList posts={userPost} title="Tus Posts" /> : <Message> No tiene post creados</Message>}
        <Button onClick={handleClick}>Crear Nuevo Post</Button>
      </UserPostWrapper>
    </>
  );
};

export { UserPosts };
