import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />

                {children}

			<Footer />
		</>
	);
};

export default Layout;
