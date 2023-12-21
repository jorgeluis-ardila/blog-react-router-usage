import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import getThemeConfig from './config';
import GlobalStyles from './style';

const ThemeProvider = ({ children }) => {
  const themeConfig = getThemeConfig();
  const globalStyles = GlobalStyles({ theme: themeConfig });

  return (
    <EmotionThemeProvider theme={themeConfig}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};

export { ThemeProvider };
