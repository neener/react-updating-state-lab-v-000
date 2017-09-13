import React from 'react';

export default class YouTubeDebugger extends React.Component {
	constructor() {
		super();

		this.state = {
			errors: [], 
			user: null, 
			settings: { 
				bitrate: 8, 
				video: { resolution: '1080p' } 
			} 
		};

		this.handleBitrateChange = this.handleBitrateChange.bind(this);
		this.handleResolutionChange = this.handleResolutionChange.bind(this);
	}

	handleBitrateChange() {
		this.setState({
			settings: Object.assign({}, this.state.settings, {
				bitrate: 12
			}),
		});
	}

	handleResolutionChange() {
		this.setState({
			settings: Object.assign({}, this.state.settings, {
				video: Object.assign({}, this.state.settings.video, {
					resolution: '720p'
				})
			}),
		});
	}

	render() {
		return (
			<div>
			<button className="bitrate" onClick={this.handleBitrateChange}>Change Bitrate</button>
			<button className="resolution" onClick={this.handleResolutionChange}>Change Resolution</button>
			</div>
		);
	}
}