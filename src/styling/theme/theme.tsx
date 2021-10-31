import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { ReactChild, useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import { dark } from './dark';
import { defaultTheme } from './default';
import { light } from './light';

interface IProps {
  children: ReactChild[] | ReactChild;
}

const CustomThemeProvider = (props: IProps) => {
  const { children } = props;
  const { darkMode } = useContext(ThemeContext);
  const themeAttributes = darkMode ? dark : light;

  const themeSettings = {
    ...defaultTheme,
    ...themeAttributes,
  };

  const theme = createTheme({ ...themeSettings });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
