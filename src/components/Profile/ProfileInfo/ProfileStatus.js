import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};
	activateEditMode = () => {
		// asynchronous request
		this.setState({
			editMode: true,
		});
	};
	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateStatus(this.state.status);
	};
	onStatusChange = (e) => {
		this.setState({ status: e.currentTarget.value });
	};
	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						Status:{" "}
						<span onDoubleClick={this.activateEditMode}>
							{this.props.status || "Click to change status"}
						</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						Status:{" "}
						<input
							onChange={this.onStatusChange}
							autoFocus={true}
							onBlur={this.deactivateEditMode}
							value={this.state.status}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
