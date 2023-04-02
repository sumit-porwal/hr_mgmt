import { useState } from "react";
import { Router, Route , Link} from "react-router-dom";
import Onboarding from "./Onboarding";

const Hire = ()=>{

	
	return (
		<>

		<nav>
			<ul>
				<li>
				<Link to="/hire/onboard">Onboard</Link>
				</li>
				
			</ul>
		</nav>
		<Router>
			<Route to="/hire/onboard" element={<Onboarding/>}/>

		</Router>
		</>
	)
}
export default Hire
