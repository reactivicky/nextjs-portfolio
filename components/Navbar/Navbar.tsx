import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Container, NavList, NavItem, NavToggle } from "./styled";
import Sidebar from "../Sidebar/Sidebar";

const navItems = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Portfolio", link: "/portfolio" },
	{ name: "Contact", link: "/contact" },
];

const NavListComponent = ({
	setNavToggle,
}: {
	setNavToggle: Dispatch<SetStateAction<boolean>>;
}) => (
	<>
		{navItems.map((navItem, i) => (
			<NavItem
				whileHover={{ color: "#eb4a4c" }}
				whileTap={{ scale: 0.8 }}
				key={navItem.name + i}
				onClick={() => setNavToggle(false)}
			>
				<Link href={navItem.link}>{navItem.name}</Link>
			</NavItem>
		))}
	</>
);

const Path = (props: any) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 20.000000000000085%, 96.078431372549%)"
		strokeLinecap="round"
		{...props}
	/>
);

const Navbar = () => {
	const [navToggle, setNavToggle] = useState<boolean>(false);

	return (
		<Container
			className="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div>Logo</div>
			<NavList>
				<NavListComponent setNavToggle={setNavToggle} />
			</NavList>
			<NavToggle
				whileTap={{ scale: 0.8 }}
				onClick={() => setNavToggle((prev) => !prev)}
			>
				<svg width="23" height="23" viewBox="0 0 23 23">
					<Path
						animate={navToggle ? "open" : "closed"}
						variants={{
							closed: { d: "M 2 2.5 L 20 2.5" },
							open: { d: "M 3 16.5 L 17 2.5" },
						}}
					/>
					<Path
						animate={navToggle ? "open" : "closed"}
						d="M 2 9.423 L 20 9.423"
						variants={{
							closed: { opacity: 1 },
							open: { opacity: 0 },
						}}
						transition={{ duration: 0.1 }}
					/>
					<Path
						animate={navToggle ? "open" : "closed"}
						variants={{
							closed: { d: "M 2 16.346 L 20 16.346" },
							open: { d: "M 3 2.5 L 17 16.346" },
						}}
					/>
				</svg>
			</NavToggle>
			<Sidebar showSidebar={navToggle}>
				<NavListComponent setNavToggle={setNavToggle} />
			</Sidebar>
		</Container>
	);
};

export default Navbar;
