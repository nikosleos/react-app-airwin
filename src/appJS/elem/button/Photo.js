import React from "react";

export default class BtnPhoto extends React.Component {
	handleClick = () => {
		alert("Событие есть, скоро появится действие");
	};
	render() {
		return (
			<button className="button" onClick={this.handleClick}>
				{this.props.btnPhoto}
			</button>
		);
	}
}
