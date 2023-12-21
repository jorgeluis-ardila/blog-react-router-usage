import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateLocalStorage } from '../../hooks/useStateLocalStorage';
import { anonimous } from '../../data/roles';
import { useUsers } from './user.context';
const AuthContext = createContext();

const INITIAL_USER_STATE = {
  permissions: anonimous,
};

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const { usersList } = useUsers();
  const [user, setUser] = useStateLocalStorage('user', INITIAL_USER_STATE);
  const isLogged = !!user.username;

  const validateUser = username => {
    const searchedUser = usersList.find(user => user.username === username);

    return { searchedUser, exist: !!searchedUser };
  };

  const login = (username, callback) => {
    const userValidation = validateUser(username);
    if (userValidation.exist) {
      setUser(userValidation.searchedUser);
      callback();
    }
  };

  const register = (user, callback) => {
    const userValidation = validateUser(user.username);
    setUser(userValidation.searchedUser);
    callback();
  };

  const logout = () => {
    setUser(INITIAL_USER_STATE);
    navigate('/login');
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLogged, validateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export { AuthProvider, useAuth };
