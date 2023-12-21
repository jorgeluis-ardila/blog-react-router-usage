import { Outlet, useParams } from 'react-router-dom';
import { UserPosts } from '.';
import { Content } from './style';
import { Button, Message } from '../../../components';

const BlogContent = ({ isLogged, isWriter, isEditor, userPosts, deletePosts }) => {
  const { slug } = useParams();

  return (
    <Content>
      {!slug &&
        (!isLogged ? (
          <Message>Registrate para poder crear posts</Message>
        ) : (
          isWriter && (
            <>
              <UserPosts userPost={userPosts} />
              {isEditor && (
                <Button className="negate" onClick={deletePosts}>
                  Borrar Todos los Posts
                </Button>
              )}
            </>
          )
        ))}
      <Outlet />
    </Content>
  );
};

export { BlogContent };
