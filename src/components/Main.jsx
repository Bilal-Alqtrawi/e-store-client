import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";

export default function Main({ children }) {
  return (
    <main className="flex h-screen flex-1 overflow-hidden bg-gray-100 text-gray-800 transition-colors duration-300 dark:bg-[#121212] dark:text-gray-100">
      {children}

      <div className="flex-1 overflow-y-scroll bg-white p-5 shadow-inner dark:bg-[#1e1e1e]">
        <section className="min-h-full grow">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
