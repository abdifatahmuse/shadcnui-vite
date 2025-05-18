import { createContext, useContext, useEffect, useState } from "react";

// Updated Theme type
export type Theme = "blue" | "green" | "red" | "yellow";
export type Mode = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultMode?: Mode;
  storageKey?: string;
  modeStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
};

const initialState: ThemeProviderState = {
  theme: "blue", // Default theme
  setTheme: () => null,
  mode: "system",
  setMode: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "blue", // Default theme set to blue
  defaultMode = "system",
  storageKey = "vite-ui-theme",
  modeStorageKey = "vite-ui-mode",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem(modeStorageKey) as Mode) || defaultMode
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Apply Mode (light/dark)
    root.classList.remove("light", "dark");
    if (mode === "system") {
      const systemMode = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemMode);
    } else {
      root.classList.add(mode);
    }

    // Apply Theme Color
    root.classList.remove(
      "theme-blue",
      "theme-green",
      "theme-red",
      "theme-yellow"
    );
    root.classList.add(`theme-${theme}`);
  }, [theme, mode]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    mode,
    setMode: (mode: Mode) => {
      localStorage.setItem(modeStorageKey, mode);
      setMode(mode);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
