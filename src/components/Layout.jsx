import { Link } from "react-router-dom";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Layout({ categories }) {
  return (
    <div className="flex h-screen flex-col">
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
