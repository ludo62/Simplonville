import { Avatar } from '@material-ui/core';
import React from 'react';
import { VerifiedIcon } from '../icons';
import './ProfileCard.css';

const ProfileCard = ({ active }) => {
	const [isVisible, setIsVisible] = React.useState(false);
	return (
		<div
			className={active || isVisible ? 'profileDetailCard' : 'profileDetailCardActive'}
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}>
			<div>
				<Avatar src='' />
				<div>
					<span>Follow</span>
				</div>
			</div>
			<div>
				<span>Fournier</span>
				<VerifiedIcon />
			</div>
			<div>
				<span>@FournierL</span>
			</div>
			<div>
				<span>Junior Developer</span>
			</div>
			<div>
				<span>
					<span>167</span>
					<span>Following</span>
				</span>
				<span>
					<span>167</span>
					<span>Followers</span>
				</span>
			</div>
		</div>
	);
};

export default ProfileCard;
