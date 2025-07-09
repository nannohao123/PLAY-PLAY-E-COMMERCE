import { Route } from "react-router-dom"
import Authlayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminFeatures from "./pages/admin-view/features"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import ShoppingLayout from "./components/shopping-view/layout"
import Notfound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingCheckout from "./pages/shopping-view/checkout"


function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="Register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/features" element={<AdminFeatures />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="*" element={<Notfound/>}/>

          <Route path="/home" element={<ShoppingHome/>}/>
          <Route path="/account" element={<ShoppingAccount/>}/>
          <Route path="/listing" element={<ShoppingListing/>}/>
          <Route path="/checkout" element={<ShoppingCheckout/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
