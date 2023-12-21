import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, Form, Wrapper } from './style';
import { usePosts } from '../../providers/context';
import { createSlug } from '../../utils/helpers';
import { Button, Input, TextArea } from '../../components';
import { useState } from 'react';

const CreatePost = () => {
  const navigate = useNavigate();
  const { createPost } = usePosts();

  const [postInfo, setPostInfo] = useState({
    title: '',
    content: '',
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
    createPost(post);
    navigate(`/blog/${post.slug}`);
  };

  const handleCancel = e => {
    navigate('/blog');
  };

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
            Crear
          </Button>
          <Button type="button" onClick={handleCancel} className="negate">
            Cancelar
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export { CreatePost };
