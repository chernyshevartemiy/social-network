import s from './Users.module.css'
import userImg from '../../img/profile.png'
import * as axios from 'axios'

const Users = (props) => {
	if (props.users.length === 0){
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setUsers(response.data.items)
		})
		props.setUsers([
		{id: 1, followed: false, photoUrl: userImg, name: 'Boris', status: 'I have been learning programming for 2 years', location: {city: 'London', country: 'UK'}},
		{id: 2, followed: true, photoUrl: userImg, name: 'Nathan', status: 'I like travelling', location: {city: 'New York', country: 'US'}}]
	)
	}

	return (
		<div>
			{props.users.map((e) => {
				return <div className = {s.User} key = {e.id}>
							<div className = {s.User__profile}>
								<img className = {s.User__img} src={e?.photos?.small || userImg} alt="#"/>
								{e.followed ? <button className = {s.User__button} onClick = {() => { props.unfollow(e.id) }}>Unfollow</button> : <button className = {s.User__button} onClick = {() => { props.follow(e.id) }}>Follow</button>}
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


export default Users
