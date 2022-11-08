import React from 'react';
import '@styles/NewPassword.scss';

import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src={logo} alt="logo" className="logo" />

				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for your account</p>

				<form action="/" className="form">
					<div className="form-group">
						<input type="password" id="password" required
            /*placeholder="*********"*/ className="input input-password" />
						<label htmlFor="password" className="label">Password</label>
					</div>

					<div className="form-group">
						<input
							type="password"
							id="new-password"
							className="input input-password"
							required
						/>
						<label htmlFor="new-password" className="label">Re-enter Password</label>
					</div>
					<input
						type="submit"
						value="Confirm"
						className="primary-button login-button"
					/>
				</form>
			</div>
		</div>
	);
}

export default NewPassword;
