import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';

const CreateRoutes = () => {
	return (
		<BrowserRouter>
			<h1>teste</h1>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default CreateRoutes;
