import React from "react";

import {
	ErrorImageContainer,
	ErrorImageText,
	ErrorImageOverlay,
} from "./error-boundary.styles";

export default class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasErrored: false,
		};
	}

	static getDerivedStateFromError() {
		// process the error
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
					<ErrorImageText>
						Sorry, this page unavailable
					</ErrorImageText>
				</ErrorImageOverlay>
			);
		}

		return this.props.children;
	}
}
