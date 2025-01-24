import { createBrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import Menu from "@/pages/Menu";
import Auth from "@/pages/Auth";
import OrderSuccess from "@/pages/OrderSuccess";
import StartersMenuDisplay from "@/pages/StartersMenuDisplay";
import MainsMenuDisplay from "@/pages/MainsMenuDisplay";
import SidesMenuDisplay from "@/pages/SidesMenuDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/order-success",
    element: <OrderSuccess />,
  },
  {
    path: "/starters-menu",
    element: <StartersMenuDisplay />,
  },
  {
    path: "/mains-menu",
    element: <MainsMenuDisplay />,
  },
  {
    path: "/sides-menu",
    element: <SidesMenuDisplay />,
  },
]);

export default router;
