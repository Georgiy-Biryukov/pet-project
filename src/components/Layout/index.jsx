import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../Header';

const Layout = () => {
	return (
		<>
			<HeaderComponent />
			<Outlet />
		</>
	);
};

export default Layout;
