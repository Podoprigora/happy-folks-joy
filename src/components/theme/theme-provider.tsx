import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { EmotionCacheProvider } from "./emotion-cache";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <EmotionCacheProvider options={{ key: "joy" }}>
      <CssVarsProvider>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionCacheProvider>
  );
};
