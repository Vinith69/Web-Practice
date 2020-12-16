// import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import VideoPlayer from "./components/pages/videoPlayer";
import Routes from "./components/routes";
// import  {BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			{/* <BrowserRouter>
			<VideoPlayer />
		 </BrowserRouter> */}
			<Routes />
		</div>
	);
}

export default App;
