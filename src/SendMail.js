import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './SendMail.css';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (formData) => {
		console.log(formData);
		db.collection('emails').add({
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		dispatch(closeSendMessage());
	};
	return (
		<div className='sendMail'>
			<div className='sendMail__header'>
				<h3>New Message</h3>
				<CloseIcon
					onClick={() => dispatch(closeSendMessage())}
					className='sendMail__close'
				/>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('to', { required: true })}
					id='to'
					name='to'
					type='text'
					placeholder='To'
				/>
				<ErrorMessage
					errors={errors}
					name='to'
					render={() => <p>Please fill to</p>}
				/>

				<input
					{...register('subject', { required: true })}
					name='subject'
					type='text'
					placeholder='Subject'
				/>
				<ErrorMessage
					errors={errors}
					name='subject'
					render={() => <p>Please fill out subject</p>}
				/>
				<input
					{...register('message', { required: true })}
					name='message'
					type='text'
					placeholder='Message...'
					className='sendMail__message'
				/>
				<ErrorMessage
					errors={errors}
					name='message'
					render={() => <p>Please fill out your message</p>}
				/>
				<div className='sendMail__options'>
					<Button
						className='sendMail__send'
						variant='contained'
						color='primary'
						type='submit'
					>
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
