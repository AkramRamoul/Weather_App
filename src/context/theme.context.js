const { createContext, useState, useEffect } = require("react");

const ThemeContext = createContext();
const THEME_KEY = "theme";

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  };

  useEffect(() => {
    try {
      const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
      if (savedTheme !== null) {
        setDark(savedTheme);
      } else {
        const isSystemThemeDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setDark(isSystemThemeDark);
      }
    } catch (error) {
      console.error("Error parsing theme from localStorage", error);
      const isSystemThemeDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDark(isSystemThemeDark);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, setDark, saveThemeToLocalStorage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;
