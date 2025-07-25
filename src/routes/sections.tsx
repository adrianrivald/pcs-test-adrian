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
  <div className="w-[80px] h-[80px] justify-center flex max-w-[768px] mx-auto items-center h-screen">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <radialGradient
        id="a10"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stop-color="#FF156D"></stop>
        <stop offset=".3" stop-color="#FF156D" stop-opacity=".9"></stop>
        <stop offset=".6" stop-color="#FF156D" stop-opacity=".6"></stop>
        <stop offset=".8" stop-color="#FF156D" stop-opacity=".3"></stop>
        <stop offset="1" stop-color="#FF156D" stop-opacity="0"></stop>
      </radialGradient>
      <circle
        transform-origin="center"
        fill="none"
        stroke="url(#a10)"
        stroke-width="15"
        stroke-linecap="round"
        stroke-dasharray="200 1000"
        stroke-dashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="1.5"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
      <circle
        transform-origin="center"
        fill="none"
        opacity=".2"
        stroke="#FF156D"
        stroke-width="15"
        stroke-linecap="round"
        cx="100"
        cy="100"
        r="70"
      ></circle>
    </svg>
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
