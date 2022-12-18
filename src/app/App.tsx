import { ThemeProvider } from "styled-components"
import { useAppSelector } from "../common/hooks/appHooks"
import { Routs } from "../common/routes/Routs"
import { GlobalStyle } from "../common/styles/global-styles/GlobalStyle"
import { darkTheme, lightTheme } from "../common/styles/theme/baseTheme"
import "./App.css"

const App = () => {
  const styleThemeApp = useAppSelector((state) => state.app.theme)
  const currentTheme = styleThemeApp === "light" ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Routs />
    </ThemeProvider>
  )
}

export default App
