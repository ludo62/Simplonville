import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import {
	HomeIcon,
	MessagesIcon,
	UserIcon,
	SetTweetIcon,
	NotificationsIcon,
} from '../icons/index';
import TwitterIcon from '@material-ui/icons/Twitter';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';


function Sidebar() {
	const [location] = React.useState(useLocation().pathname);
	return (
		<div className='sidebar'>
			<TwitterIcon className='twitter-icon' />
			<Link to='/home' style={{ textDecoration: 'none' }}>
				<SidebarItem text='Accueil' Icon={HomeIcon} active={location === '/home' && true} />
			</Link>

			<Link to='/Notifications' style={{ textDecoration: 'none' }}>
				<SidebarItem
					text='Notifications'
					Icon={NotificationsIcon}
					active={location === '/Notifications' && true}
				/>
			</Link>
			<Link to='/Messages' style={{ textDecoration: 'none' }}>
				<SidebarItem
					text='Alertes'
					Icon={MessagesIcon}
					active={location === '/Messages' && true}
				/>
			</Link>
			<Link to='/Profile' style={{ textDecoration: 'none' }}>
				<SidebarItem
					text='Profil'
					Icon={UserIcon}
					active={location === '/Profile' && true}
				/>
			</Link>
			<div className='tweetButton'>
				<SetTweetIcon className='setTweetIcon' />
				<span>Alertez</span>
			</div>
			<div className='profileCard'>
				<div className='profileCardImage'>
					<Avatar src='' />
				</div>
				<div className='profileCardNameCol'>
					<div className='profileCardNameColName'>
						<span>Fournier</span>
					</div>
					<div className='profileCardNameColuserName'>
						<span>@FounierL</span>
					</div>
				</div>
				<div className='profileCardIcon'>
					<MoreHorizIcon />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
