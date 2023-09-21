import { useState } from "react";
import AuthHeader from "./AuthHeader";
import Gallery from "./Gallery";
import Footer from "./Footer";

const AuthPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <AuthHeader setSearchQuery={setSearchQuery} />
      <Gallery searchQuery={searchQuery} />
      <Footer />
    </>
  );
};

export default AuthPage;
