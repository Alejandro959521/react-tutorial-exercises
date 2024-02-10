import React from "react";
import ReactDOM from "react-dom";

// Create your function here

const BootstrapCard = () => {
	return (
		<div className="card m-5">
			<img className="card-img-top" src="../../.learn/assets/Dylan.png?raw=true" alt="Card image cap" />
			<div className="card-body">
				<h5 clasNameName="card-title">Bob Dylan</h5>
				<p className="card-text">
					Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
					influential figure in popular music and culture for more than five decades.
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};

// Change the syntax of the first parameter to make it <PrintHello /> instead of PrintHello()
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));

// Remember to use ReactDOM.render to include the component into the website
