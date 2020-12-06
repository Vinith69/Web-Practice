import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPlayer from "./pages/videoPlayer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import AddLinks from "./pages/AddLinks";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import ProgramInfo from "./pages/ProgramInfo";

function routes() {
	return (
		<Router>
			<Switch>
				<Route path="/about" component={AboutUs} />
				<Route path="/programs/:image" component={ProgramInfo} />
				<Route exact path="/programs" component={Programs} />
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
