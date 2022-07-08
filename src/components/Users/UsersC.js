import s from './Users.module.css'
import * as axios from 'axios'
import userImg from '../../img/profile.png'
import React from 'react'

class UserC extends React.Component {
	constructor(props) {
		super(props);
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.setUsers(response.data.items)

		});
	}

	render() {
			return (
		<div>
			{this.props.users.map((e) => {
				return <div className = {s.User} key = {e.id}>
							<div className = {s.User__profile}>
								<img className = {s.User__img} src={e?.photos?.small || userImg} alt="#"/>
								{e.followed ? <button className = {s.User__button} onClick = {() => { this.props.unfollow(e.id) }}>Unfollow</button> : <button className = {s.User__button} onClick = {() => { this.props.follow(e.id) }}>Follow</button>}
							</div>
							<div className = {s.User__info}>
								<div className = {s.User__initials}>
									<div className = {s.User__name}>Name: {e.name}</div>
									<div className = {s.User_description}>Status: {e.status}</div>
								</div>
								<div className = {s.User__area}>
									<div className = {s.User__country}>Country: {"e.location.country"}</div>
									<div className = {s.User__city}>City: {"e.location.city"}</div>
								</div>
							</div>
					   </div>
			})}
		</div>
	)

	}
}

export default UserC
