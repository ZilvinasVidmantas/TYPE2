import React from "react";
import styles from './Form.module.css';

class Form extends React.Component {

	rentACar = (e) => {
		e.preventDefault();

		console.dir(e.target.querySelector("#car").selectedOptions[0].innerHTML);

		const rentData = this.constructData(e.target);
		const isValid = this.isDataValid(rentData);

		console.log(rentData);
	}

	isDataValid = (data) => {
		let dataIsValid = true;

	}

	constructData = (info) => {
		const data = {
			fullname : info.querySelector("#fullName").value,
			email : info.querySelector("#email").value,
			phone : info.querySelector("#phone").value,
			birthDate : info.querySelector("#birth").value,
			pickLocation : info.querySelector("#pickLocation").selectedOptions[0].innerHTML,
			pickDate : info.querySelector("#pickDate").value,
			dropLocation : info.querySelector("#dropLocation").selectedOptions[0].innerHTML,
			dropDate : info.querySelector("#dropDate").value,
			car : info.querySelector("#car").selectedOptions[0].innerHTML,
			extraRequests : info.querySelector("#extraInfo").innerHTML
		}
		return data;
	}

	render() {
		return (
			<div className={styles.form}>
				<form onSubmit={this.rentACar}>
					<h3> Renter Information </h3>

					<label htmlFor="fullName">Name and Surname</label>
					<input required type="text" name="fullName" id="fullName" />

					<label htmlFor="email">Email</label>
					<input required type="email" name="email" id="email" />

					<label htmlFor="phone">Phone</label>
					<input required type="tel" name="phone" id="phone" 
						pattern="86-[0-9]{3}-[0-9]{4}" placeholder="86-666-6666"
					/>

					<label htmlFor="birth">Birth date</label>
					<input required type="date" name="birth" id="birth"/>


					<h3> Rent Information </h3>
					
					<label htmlFor="pickLocation">Pick-up Location</label>
					<select required name="pickLocation" id="pickLocation">
						<option value="">---</option>
						<option value="1">Kaunas</option>
						<option value="2">Vilnius</option>
						<option value="3">Klaipėda</option>
						<option value="4">Siesartis</option>
					</select>
					
					<label htmlFor="pickDate">Pick-up Date</label>
					<input required type="datetime-local" name="pickDate" id="pickDate" />

					<label htmlFor="dropLocation">Drop-off Location</label>
					<select required name="dropLocation" id="dropLocation">
						<option value="">---</option>
						<option value="1">Kaunas</option>
						<option value="2">Vilnius</option>
						<option value="3">Klaipėda</option>
						<option value="4">Siesartis</option>
					</select>

					<label htmlFor="dropDate">Drop-off Date</label>
					<input required type="datetime-local" name="dropDate" id="dropDate" />


					<h3> Rental Car Information </h3>

					<label htmlFor="car">Car</label>
					<select required name="car" id="car">
						<option value="">---</option>
						<option value="1">Audi TT</option>
						<option value="2">VW Golf</option>
						<option value="3">BMW 6</option>
						<option value="4">Fiat Punto</option>
					</select>

					<label htmlFor="extraInfo">Additional Requests</label>
					<textarea name="extraInfo" id="extraInfo" cols="50" rows="6"></textarea>


					<button className={styles.formBtn}> Nuomotis mašiną </button>
				</form>
			</div>
		);
	}
}

export default Form;