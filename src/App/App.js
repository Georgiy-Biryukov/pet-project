import './App.css';
import FormRegistration from '../pages/Login/components/formRegistration';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute/index';
import Home from '../pages/Home';
import UserTable from '../pages/UserTable';
import Machinetable from '../pages/MachineTable';

const pathes = {
	home: '/home',
	login: '/login',
	UserTable: '/usertable',
	machinetable: '/machinetable',
};

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route element={<PrivateRoute component={Home} />} />
					<Route path={pathes.login} element={<PublicRoute component={FormRegistration} />} />
					{/* <Route path={pathes.login} element={!isAuth ? <FormRegistration /> : <Home />} /> */}
					<Route path={pathes.home} element={<PrivateRoute component={Home} />} />
					<Route path={pathes.UserTable} element={<PrivateRoute component={UserTable} />} />
					<Route path={pathes.machinetable} element={<PrivateRoute component={Machinetable} />} />
					<Route path="*" element={<div>page not found</div>} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
