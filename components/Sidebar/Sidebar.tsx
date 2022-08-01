import { FC, ReactNode } from "react";
import { Container, NavList } from "./styled";

type SidebarProps = {
	showSidebar: boolean;
	children?: ReactNode;
};

const Sidebar: FC<SidebarProps> = ({ showSidebar, children }) => {
	return (
		<Container
			initial={{ x: 300 }}
			animate={{ x: showSidebar ? 0 : 300 }}
			transition={{
				bounceDamping: 1,
			}}
		>
			<NavList>{children}</NavList>
		</Container>
	);
};

export default Sidebar;
