import { Bounce, ToastContainer } from "react-toastify";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Loading from "./Loading";

function Layout({ categories, loading, error }) {
  return (
    <div className="flex h-screen flex-col">
      <ToastContainer
        position="top-center"
        autoClose="3000"
        theme="dark"
        transition={Bounce}
        pauseOnHover={false}
      />
      <Header />
      <Main>
        {loading === false && error === "" && (
          <Sidebar>
            <Categories categories={categories} />
          </Sidebar>
        )}
        {error && <p className="font-bold text-red-500">{error}</p>}
        {loading && <Loading />}
      </Main>
      <Footer />
    </div>
  );
}

export default Layout;
