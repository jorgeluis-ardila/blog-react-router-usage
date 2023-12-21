import { useParams, useNavigate } from 'react-router-dom';
import { useAuth, usePosts } from '../../providers/context';
import { Button } from '../../components';
import { PostWrapper, ButtonWrapper } from './style';

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { user } = useAuth();
  const { posts, deletePost } = usePosts();

  const postData = posts.find(post => post.slug === slug);

  const canDelete = user.permissions.delete || postData.author === user.username;

  const handleBackToBlock = () => {
    // navigate(-1); //VOVER A LA RUTA ANTERIOR
    navigate('/blog');
  };

  const handleDeletePost = () => {
    deletePost(postData?.id);
    navigate('/blog', { replace: true });
  };

  const handleEditPost = () => {
    navigate(`/blog/edit-post`, { state: { postData } });
  };

  return (
    <>
      <Button onClick={handleBackToBlock} className="back-button negate">
        Volver a Blog
      </Button>
      <PostWrapper>
        <h2>{postData?.title}</h2>
        <p className="author">
          Autor: <span className="author__name">{postData?.author}</span>
        </p>
        <p>{postData?.content}</p>
      </PostWrapper>

      {canDelete && (
        <ButtonWrapper>
          <Button onClick={handleEditPost}>Editar Post</Button>
          <Button onClick={handleDeletePost} className="negate">
            Eliminar Post
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};
export { BlogPost };
