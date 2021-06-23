import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar,IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { selectUser,logout } from './features/userSlice';
import { useSelector,useDispatch } from 'react-redux';
import { auth } from './firebase';

function Header() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch();
	const singOut = () => {
		auth.signOut().then(() => {
			dispatch(logout());
		})
		
	}
	return (
		<div className='header'>
			<div className='header__left'>
				<IconButton>
					{' '}
					<MenuIcon />
				</IconButton>
				<img
					src='https://x5m7g5e8.stackpathcdn.com/static/images/pages/integrations/logo/gmail.png'
					alt=''
				/>
			</div>
			<div className='header__middle'>
				<SearchIcon />
				<input type='text' placeholder='Search email' />
				<ArrowDropDownIcon className='header__inputCare' />
			</div>
			<div className='header__right'>
				<IconButton>
					<AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
				<Avatar onClick={singOut}
					src={user?.photoUrl} />
				
			</div>
		</div>
	);
}

export default Header;
