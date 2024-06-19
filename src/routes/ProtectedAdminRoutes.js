import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/user';



const ProtectedAdminRoutes = () => {
	const { user, status, isLoading } = useUser();
	let auth = !isLoading && user.success && user?.user?.role === 'ADMIN';
	return (
		auth ? 
				<Outlet />
			: 
			status !== 'pending' && <Navigate to='/account/login'/>
	)
}
export default ProtectedAdminRoutes;