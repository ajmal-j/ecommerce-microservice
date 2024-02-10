import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./providers/themeProvider";
const queryClient = new QueryClient();
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/logIn/login";
import SingUp from "./components/signup";
import AuthProvider from "./providers/userProvider";
import { Cart } from "./components/cart";
import { Header } from "./components/header/header";
import CartProvider from "./providers/cartProvider";
import { ProductOverview } from "./components/singleProduct";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
              <Routes>
                <Route path='/' element={<Header />}>
                  <Route index element={<Home />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/product' element={<ProductOverview />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SingUp />} />
              </Routes>
            </ThemeProvider>
          </QueryClientProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
