import s from './Users.module.css'
import userImg from '../../img/profile.png'

const Users = (props) => {
	if (props.users.length === 0){
		props.setUsers([
		{id: 1, followed: false, photoUrl: userImg, fullName: 'Boris', status: 'I have been learning programming for 2 years', location: {city: 'London', country: 'UK'}},
		{id: 2, followed: true, photoUrl: userImg, fullName: 'Nathan', status: 'I like travelling', location: {city: 'New York', country: 'US'}}]
	)
	}

	return (
		<div>
			{props.users.map((e) => {
				return <div className = {s.User}>
							<div className = {s.User__profile}>
								<img className = {s.User__img} src={e.photoUrl} alt="#"/>
								{e.followed ? <button className = {s.User__button} onClick = {() => { props.unfollow(e.id) }}>Unfollow</button> : <button className = {s.User__button} onClick = {() => { props.follow(e.id) }}>Follow</button>}
							</div>
							<div className = {s.User__info}>
								<div className = {s.User__initials}>
									<div className = {s.User__name}>Name: {e.fullName}</div>
									<div className = {s.User_description}>Status: {e.status}</div>
								</div>
								<div className = {s.User__area}>
									<div className = {s.User__country}>Country: {e.location.country}</div>
									<div className = {s.User__city}>City: {e.location.city}</div>
								</div>
							</div>
					   </div>
			})}
		</div>
	)
}


export default Users
