import { HashRouter } from 'react-router-dom';
import { Menu } from './components';
import { AuthProvider, PostsProvider, ThemeProvider, UserProvider } from './providers';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <>
      <HashRouter>
        <UserProvider>
          <AuthProvider>
            <PostsProvider>
              <ThemeProvider>
                <Menu />
                <AppRoutes />
              </ThemeProvider>
            </PostsProvider>
          </AuthProvider>
        </UserProvider>
      </HashRouter>
    </>
  );
}

export default App;
