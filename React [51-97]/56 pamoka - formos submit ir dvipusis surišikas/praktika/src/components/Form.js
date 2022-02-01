import React from "react";
import styles from './Form.module.css';

class Form extends React.Component {

	rentACar = (e) => {
		e.preventDefault();

		const rentData = this.constructData(e.target);
		const isValid = this.isDataValid(rentData);

		if(!isValid.bool){
			document.querySelector("#errorMessage").innerHTML = isValid.message;
		} else {
			document.querySelector("#errorMessage").innerHTML = "";
			console.log(rentData);
		}
	}

	isDataValid = (data) => {
		//let dataIsValid = {bool: true, message: ""};
		let dataIsValid = this.isFullNameValid(data.fullName);
		if(!dataIsValid.bool){
			return dataIsValid;
		}
		
		return dataIsValid;
	}

	isFullNameValid = (fullName) => {
		if(fullName == ""){
			return  {bool: false, message: "Name and Surname is empty!"}
		} else if(fullName.split(" ").length < 2){
			return  {bool: false, message: "Add both Name and Surname!"}
		}
		return {bool: true, message: ""}
	}

	constructData = (info) => {
		const data = {
			fullName : info.querySelector("#fullName").value.trim(),
			email : info.querySelector("#email").value.trim(),
			phone : info.querySelector("#phone").value,
			birthDate : info.querySelector("#birth").value,
			pickLocation : info.querySelector("#pickLocation").selectedOptions[0].innerHTML,
			pickDate : info.querySelector("#pickDate").value,
			dropLocation : info.querySelector("#dropLocation").selectedOptions[0].innerHTML,
			dropDate : info.querySelector("#dropDate").value,
			car : info.querySelector("#car").selectedOptions[0].innerHTML,
			extraRequests : info.querySelector("#extraInfo").value
		}
		return data;
	}

	render() {
		return (
			<div className={styles.form}>
				<form onSubmit={this.rentACar}>
					<h3> Renter Information </h3>

					<label htmlFor="fullName">Name and Surname</label>
					<input  type="text" name="fullName" id="fullName" />

					<label htmlFor="email">Email</label>
					<input  type="email" name="email" id="email" />

					<label htmlFor="phone">Phone</label>
					<input  type="tel" name="phone" id="phone" 
						pattern="86[0-9]{7}" placeholder="866666666"
					/>

					<label htmlFor="birth">Birth date</label>
					<input  type="date" name="birth" id="birth"/>


					<h3> Rent Information </h3>
					
					<label htmlFor="pickLocation">Pick-up Location</label>
					<select  name="pickLocation" id="pickLocation">
						<option value="">---</option>
						<option value="1">Kaunas</option>
						<option value="2">Vilnius</option>
						<option value="3">Klaipėda</option>
						<option value="4">Siesartis</option>
					</select>
					
					<label htmlFor="pickDate">Pick-up Date</label>
					<input  type="datetime-local" name="pickDate" id="pickDate" />

					<label htmlFor="dropLocation">Drop-off Location</label>
					<select  name="dropLocation" id="dropLocation">
						<option value="">---</option>
						<option value="1">Kaunas</option>
						<option value="2">Vilnius</option>
						<option value="3">Klaipėda</option>
						<option value="4">Siesartis</option>
					</select>

					<label htmlFor="dropDate">Drop-off Date</label>
					<input  type="datetime-local" name="dropDate" id="dropDate" />


					<h3> Rental Car Information </h3>

					<label htmlFor="car">Car</label>
					<select  name="car" id="car">
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
				<div id="errorMessage" className={styles.errorMessage}></div>
			</div>
		);
	}
}

export default Form;