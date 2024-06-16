import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/user';



const ProtectedRoutes = () => {
	const { user, status, isLoading } = useUser();
	let auth = Boolean(user) && !isLoading;
	return (
		auth ? 
				<Outlet />
			: 
			status !== 'pending' && <Navigate to='/account/login'/>
	)
}
export default ProtectedRoutes;