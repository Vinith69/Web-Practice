import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPlayer from "./pages/videoPlayer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import AddLinks from "./pages/AddLinks";

function routes() {
	return (
		<Router>
			<Switch>
				{/* <Route path="/about" component={About} /> */}
				{/* <Route exact path="/register" component={RegisterComponent} />; */}
				<Route path="/addlinks" component={AddLinks} />
				<Route path="/donation" component={Donation} />
				<Route path="/videos" component={VideoPlayer} />
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default routes;
