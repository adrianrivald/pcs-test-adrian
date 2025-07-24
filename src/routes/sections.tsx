import { lazy, Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import Menubar from "../components/layout/menubar";
import { useNotificationStore } from "../store/useNotification";
import Notification from "../components/sections/notification";

// ----------------------------------------------------------------------
export const HomePage = lazy(() => import("../pages/home"));

// ----------------------------------------------------------------------

const renderFallback = (
  <div className="flex items-center justify-center flex-1 min-h-screen">
    <div className="w-full max-w-sm">
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-black animate-pulse rounded"
          style={{ width: "50%" }}
        ></div>
      </div>
    </div>
  </div>
);

export function Router() {
  const { isNotificationOpen } = useNotificationStore();
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={renderFallback}>
          <div className="w-full pb-48 max-w-[768px] mx-auto">
            <Header />
            {isNotificationOpen ? <Notification /> : <Outlet />}
            <Menubar />
          </div>
        </Suspense>
      ),
      children: [
        { path: "/", element: <HomePage />, index: true },

        // {
        //   path: "*",
        //   element: <Navigate to="/404" replace />,
        // },
      ],
    },
  ]);

  return routes;
}
