import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
import profile1 from './images/1.jpg';
import profile2 from './images/2.jpg';
import profile3 from './images/3.jpg';

const App = () => {
	return (
		<div className='ui comments'>
			<UserCard>
				<SingleComment
					name='Shadat'
					comment="It is amazing"
					picture={profile1}
					time="Today at 5:00PM" />
			</UserCard>

			<UserCard>
				<SingleComment
					name='Shabab'
					comment="It is Cool"
					picture={profile2}
					time="Yesterday at 10:00AM" />
			</UserCard >

			<UserCard>
				<SingleComment
					name='Sharika'
					comment="It is Wow"
					picture={profile3}
					time="Today at 4:30PM" />
			</UserCard>

		</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector("#root")
)
