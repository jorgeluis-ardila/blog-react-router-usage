import { roles } from '../../data';
import { setLocalStorage } from '../../hooks';
import { getHashId } from '../../utils/helpers';

export const actionTypesUsers = {
  createUser: 'CREATE_USER',
  editUser: 'EDIT_USER',
  deleteUser: 'DELETE_USER',
  deleteAll: 'DELETE_USER',
};

const reducerOptionsUsers = (state, payload) => ({
  [actionTypesUsers.createUser]: () => {
    const newData = [...state];
    const { userData } = payload;

    newData.push({
      id: getHashId(JSON.stringify(userData)),
      ...userData,
      permissions: roles[userData.role],
    });

    return newData;
  },
  [actionTypesUsers.editUser]: () => {
    const newData = [...state];
    const { userId, userData } = payload;
    const userIndex = newData.findIndex(user => user.id === userId);

    newData[userIndex].name = userData.name;
    newData[userIndex].phone = userData.phone;
    newData[userIndex].age = userData.age;
    newData[userIndex].city = userData.city;
    newData[userIndex].role = userData.role ?? newData[userIndex].role;
    newData[userIndex].permissions = roles[userData.role];

    return newData;
  },
  [actionTypesUsers.deleteUser]: () => {
    const newData = [...state];
    const { userId } = payload;
    const userIndex = newData.findIndex(post => post.id === userId);

    newData.splice(userIndex, 1);

    return newData;
  },
  [actionTypesUsers.deleteAll]: () => [],
});

export const reducerFnUsers = (state, action) => {
  const newData = reducerOptionsUsers(state, action.payload)[action.type]() || state;
  setLocalStorage('users', newData);
  return newData;
};
