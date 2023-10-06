import { useState } from 'react';
import { Outlet } from "react-router-dom"
import { Main } from "../shared/components/Main";
import PersistentDrawerLeft, { DrawerHeader } from "../shared/components/Drawer";

const Layout = () => {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Main open={open}>
			<DrawerHeader />
			<PersistentDrawerLeft
				handleDrawerClose={handleDrawerClose}
				handleDrawerOpen={handleDrawerOpen}
				open={open}
			/>
			<Outlet />
		</Main>
	)
}

export default Layout;