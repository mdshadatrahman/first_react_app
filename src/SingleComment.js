import React from "react";
import profile1 from './images/1.jpg'

const SingleComment = (props) => {
	return (
		<div className='comment'>
			<a href="/" className='avatar'>
				<img src={props.picture} alt='profile' />
			</a>
			<span className='texts'>
				<div className='content'>
					<a href="/" className='author'>
						{props.name}
					</a>
					<div className='metadata'>
						<span className='date'>
							{props.time}
						</span>
					</div>
					<div className='text'>
						{props.comment}
					</div>
				</div>
			</span>
		</div>
	)
}

export default SingleComment;
