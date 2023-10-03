import { Outlet } from "react-router-dom"
import MenuAppBar from "../shared/components/MenuAppBar"

import Grid from '@mui/material/Grid';


const Layout = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={12}>
				<MenuAppBar />
			</Grid>
			<Grid item xs={12} md={12}>
				<Outlet />
			</Grid>
		</Grid>
	)
}

export default Layout;