import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Menu from "@/pages/Menu";
import Auth from "@/pages/Auth";
import OrderSuccess from "@/pages/OrderSuccess";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;