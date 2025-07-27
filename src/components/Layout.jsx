import { Bounce, ToastContainer } from "react-toastify";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Layout({ categories }) {
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
        <Sidebar>
          <Categories categories={categories} />
        </Sidebar>
      </Main>
      <Footer />
    </div>
  );
}

export default Layout;
