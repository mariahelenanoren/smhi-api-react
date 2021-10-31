import { createContext, useState } from 'react';

interface Props {
  children: Object;
}

interface IState {
  darkMode: boolean;
}

interface IContext extends IState {
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<IContext>({
  toggleDarkMode: () => {},
  darkMode: true,
});

function ThemeSettingsProvider(props: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleDarkMode,
        darkMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeSettingsProvider;
