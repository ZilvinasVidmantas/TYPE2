import React from "react";
import styles from './Form.module.css';

class Form extends React.Component {

	rentACar = (e) => {
		e.preventDefault();

		console.log(e.target);
	}

	render() {
		return (
			<div className={styles.form}>
				<form onSubmit={this.rentACar}>
					<h3> Renter Information </h3>

					<label htmlFor="fullName">Name and Surname</label>
					<input type="text" name="fullName" id="fullName" />

					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" />

					<label htmlFor="phone">Phone</label>
					<input type="text" name="phone" id="phone" />

					<label htmlFor="birth">Birth date</label>
					<input type="text" name="birth" id="birth" />


					<h3> Rent Information </h3>
					
					<label htmlFor="pickLocation">Pick-up Location</label>
					<input type="text" name="pickLocation" id="pickLocation" />
					
					<label htmlFor="pickDate">Pick-up Date</label>
					<input type="text" name="pickDate" id="pickDate" />

					<label htmlFor="dropLocation">Drop-off Location</label>
					<input type="text" name="dropLocation" id="dropLocation" />

					<label htmlFor="dropDate">Drop-off Date</label>
					<input type="text" name="dropDate" id="dropDate" />


					<h3> Rental Car Information </h3>

					<label htmlFor="car">Car</label>
					<input type="text" name="car" id="car" />

					<label htmlFor="extraInfo">Additional Requests</label>
					<input type="text" name="extraInfo" id="extraInfo" />


					<button className={styles.formBtn}> Nuomotis mašiną </button>
				</form>
			</div>
		);
	}
}

export default Form;