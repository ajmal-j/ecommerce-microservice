import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./providers/themeProvider";
const queryClient = new QueryClient();
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/logIn/login";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
