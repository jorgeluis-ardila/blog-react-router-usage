import { createContext, useContext, useEffect, useReducer } from 'react';
import { users } from '../../data';
import { getLocalStorage } from '../../hooks';
import { actionTypesUsers, reducerFnUsers } from './user.reducer';
const UserContext = createContext();

// setLocalStorage('users', users);

function UserProvider({ children }) {
  const [usersList, dispatch] = useReducer(reducerFnUsers, getLocalStorage('users') || users);

  const createUser = userInfo => {
    const user = {
      username: userInfo.username,
      name: userInfo.name,
      phone: userInfo.phone,
      age: userInfo.age,
      city: userInfo.city,
      role: userInfo.role ?? 'student',
    };
    dispatch({ type: actionTypesUsers.createUser, payload: { userData: user } });
  };

  const editUser = ({ id, userInfo }) => {
    dispatch({ type: actionTypesUsers.editUser, payload: { userId: id, userData: userInfo } });
  };

  const deleteUser = id => {
    dispatch({ type: actionTypesUsers.deleteUser, payload: { userId: id } });
  };

  return (
    <UserContext.Provider value={{ usersList, createUser, editUser, deleteUser }}>{children}</UserContext.Provider>
  );
}

function useUsers() {
  const auth = useContext(UserContext);
  return auth;
}

export { UserProvider, useUsers };
