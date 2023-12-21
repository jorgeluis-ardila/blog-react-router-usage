import { setLocalStorage } from '../../hooks';
import { getHashId } from '../../utils/helpers';

export const actionTypesPosts = {
  createPost: 'CREATE_POST',
  editPost: 'EDIT_POST',
  deletePost: 'DELETE_POST',
  deleteAll: 'DELETE_ALL_POST',
};

const reducerOptionsPosts = (state, payload) => ({
  [actionTypesPosts.createPost]: () => {
    const newData = [...state];
    const { postInfo } = payload;

    newData.push({ id: getHashId(JSON.stringify(postInfo)), ...postInfo });

    return newData;
  },
  [actionTypesPosts.editPost]: () => {
    const newData = [...state];
    const { postId, postInfo } = payload;
    const postIndex = newData.findIndex(post => post.id === postId);

    newData[postIndex].title = postInfo.title;
    newData[postIndex].slug = postInfo.slug;
    newData[postIndex].content = postInfo.content;

    return newData;
  },
  [actionTypesPosts.deletePost]: () => {
    const newData = [...state];
    const { postId } = payload;
    const postIndex = newData.findIndex(post => post.id === postId);

    newData.splice(postIndex, 1);

    return newData;
  },
  [actionTypesPosts.deleteAll]: () => [],
});

export const reducerFnPosts = (state, action) => {
  const newData = reducerOptionsPosts(state, action.payload)[action.type]() || state;
  setLocalStorage('post', newData);
  return newData;
};
