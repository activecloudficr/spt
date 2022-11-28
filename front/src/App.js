import Router from "./routes/Router";
import GlobalStyle from "./assets/styles/GlobalStyles";
import Theme from "./assets/styles/Theme";

const App = () => {
  return (
      <Theme>
        <GlobalStyle />
        <Router />
      </Theme>
  );
}

export default App;
