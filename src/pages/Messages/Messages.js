import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import BottomSidebar from '../../components/BottomSidebar/BottomSidebar';
import Chat from '../../components/Chat/Chat';
import DrawerBar from '../../components/DrawerBar/DrawerBar';
import HomeBox from '../../components/HomeBox/HomeBox';
import { MessagesIcon } from '../../components/icons';
import LastChat from '../../components/LastChat/LastChat';
import NotSelectedMessage from '../../components/NotSelectedMessage/NotSelectedMessage';
import SearchInput from '../../components/Widgets/SearchInput/SearchInput';
import './Messages.css';

const Messages = () => {
	const [isDrawerBar, setIsDrawerBar] = React.useState(false);
	const { messages } = useSelector((state) => state.messages);
	const { users } = useSelector((state) => state.users);
	let path = useLocation().pathname;
	document.title = 'Messages / Simplonville';

	return (
		<HomeBox>
			<div className={`messages ${path !== '/Messages' && 'messagesNone'}`}>
				{isDrawerBar && (
					<div onClick={() => setIsDrawerBar(false)} className='drawerBarPanel' />
				)}
				<DrawerBar active={isDrawerBar} />
				<div className='messagesHeader'>
					<div onClick={() => setIsDrawerBar(true)}>
						<Avatar src='' />
					</div>
					<span>Messages</span>
					<MessagesIcon />
				</div>
				<div className='messagesSearchInput'>
					<SearchInput placeholder='Search for people and groups' />
				</div>
				<div className='lastMessages'>
					{messages.map((message) => {
						let user = users.find(
							(user) => user.username === message.fromto.split('-')[1]
						);
						return (
							<LastChat
								
							/>
						);
					})}
				</div>
				<BottomSidebar />
			</div>
			{path === '/Messages' ? (
				<NotSelectedMessage />
			) : (
				<Chat messages={messages} users={users} />
			)}
		</HomeBox>
	);
};

export default Messages;
