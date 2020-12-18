import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPlayer from "./pages/videoPlayer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
// import Donation from "./pages/Donation";
import AddLinks from "./pages/AddLinks";
import AddImage from "./pages/AddImage";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import ProgramInfo from "./pages/ProgramInfo";
import Test from "./pages/Test";
import Contacts from "./pages/Contacts";

function routes() {
	return (
		<Router>
			<Switch>
				<Route path="/test" component={Test} />
				<Route path="/addlinks" component={AddLinks} />
				<Route path="/addimage" component={AddImage} />
				<Route path="/contact" component={Contacts} />
				<Route path="/donation" component={Contacts} />
				<Route path="/about" component={AboutUs} />
				<Route path="/programs/:image" component={ProgramInfo} />
				<Route exact path="/programs" component={Programs} />
				<Route path="/videos" component={VideoPlayer} />
				<Route exact path="/Web-Practice" component={Home} />
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default routes;
