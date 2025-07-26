import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";

export default function Main({ children }) {
  return (
    <main className="flex h-screen flex-1 overflow-hidden">
      {children}

      <div className="flex-1 overflow-y-scroll p-5">
        <section className="min-h-full grow">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
