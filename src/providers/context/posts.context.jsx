import { createContext, useContext, useReducer } from 'react';
import { getLocalStorage, setLocalStorage } from '../../hooks/useStateLocalStorage';
import { useAuth } from '.';
import { actionTypesPosts, reducerFnPosts } from './posts.reducer';
import { INITIAL_POSTS } from '../../data';

const PostsContext = createContext();

// setLocalStorage('post', INITIAL_POSTS);

function PostsProvider({ children }) {
  const { user } = useAuth();
  const [posts, dispatch] = useReducer(reducerFnPosts, getLocalStorage('post') || INITIAL_POSTS);
  const userPosts = posts.filter(post => post.author === user.username);

  const createPost = postInfo => {
    const post = {
      title: postInfo.title,
      slug: postInfo.slug,
      content: postInfo.content,
      author: user.username,
    };
    dispatch({ type: actionTypesPosts.createPost, payload: { postInfo: post } });
  };

  const editPost = ({ id, postInfo }) => {
    dispatch({ type: actionTypesPosts.editPost, payload: { postId: id, postInfo } });
  };

  const deletePost = id => {
    dispatch({ type: actionTypesPosts.deletePost, payload: { postId: id } });
  };

  const deleteAllPosts = () => dispatch({ type: actionTypesPosts.deleteAll });

  return (
    <PostsContext.Provider value={{ posts, userPosts, createPost, editPost, deletePost, deleteAllPosts }}>
      {children}
    </PostsContext.Provider>
  );
}

function usePosts() {
  const auth = useContext(PostsContext);
  return auth;
}

export { PostsProvider, usePosts };
