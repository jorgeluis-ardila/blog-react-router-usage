import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ButtonWrapper, Form, Wrapper } from './style';
import { usePosts } from '../../providers/context';
import { createSlug } from '../../utils/helpers';
import { useState } from 'react';
import { Button, Input, TextArea } from '../../components';

const EditPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { editPost } = usePosts();
  const postData = location.state?.postData;

  const [postInfo, setPostInfo] = useState({
    title: postData?.title,
    content: postData?.content,
  });
  const isFormCompleted = Object.keys(postInfo).every(prop => postInfo[prop] !== '');

  const handleChange = e => {
    setPostInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const post = {
      slug: createSlug(postInfo.title),
      title: postInfo.title,
      content: postInfo.content,
    };
    editPost({ id: postData.id, postInfo: post });
    navigate(`/blog/${post.slug}`);
  };

  const handleCancel = e => {
    navigate(-1);
  };

  if (!postData) return <Navigate to={`/blog`} replace />;

  return (
    <Wrapper>
      <h1>Crea tú Post</h1>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="title">Titulo</label>
          <Input id="title" name="title" value={postInfo.title} onChange={handleChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="content">Contenido</label>
          <TextArea id="content" name="content" value={postInfo.content} onChange={handleChange} />
        </fieldset>
        <ButtonWrapper>
          <Button type="submit" disabled={!isFormCompleted}>
            Guardar
          </Button>
          <Button type="button" onClick={handleCancel} className="negate">
            Cancelar
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export { EditPost };
