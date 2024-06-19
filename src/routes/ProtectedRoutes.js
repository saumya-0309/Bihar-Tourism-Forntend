import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/user';



const ProtectedRoutes = () => {
	const { user, status, isLoading } = useUser();
	let auth = !isLoading && user.success && user?.user?.role === 'USER';
	return (
		auth ? 
				<Outlet />
			: 
			status !== 'pending' && user?.user?.role === "ADMIN" ? <Navigate to='/dashboard'/> : status !== 'pending' && <Navigate to='/account/login'/>
	)
}
export default ProtectedRoutes;