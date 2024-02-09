import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./providers/themeProvider";
const queryClient = new QueryClient();
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/logIn/login";
import SingUp from "./components/signup";
import AuthProvider from "./providers/userProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SingUp />} />
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
