import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Classes from "./Layout.module.css";
import Toolbar from '../Navignation/Toolbar/Toolbar'

const layout = (props) => (
	<Auxiliary>
		<Toolbar />
		<main className={Classes.Content}>{props.children}</main>
	</Auxiliary>
);

export default layout;
