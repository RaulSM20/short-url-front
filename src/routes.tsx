import { RouteObject } from "react-router-dom";
import { Layout } from "@/layout";
import { HomePage } from "./pages/HomePage";
import { ShortUrlPage } from "./pages/ShortUrlPage";
export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:shorturl",
        element: <ShortUrlPage />,
      },
    ],
  },
];
