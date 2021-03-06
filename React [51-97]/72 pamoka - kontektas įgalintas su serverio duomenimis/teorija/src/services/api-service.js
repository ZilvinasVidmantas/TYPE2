const fetchCars = async () => {
	try {
		const response = await fetch('http://localhost:5000/cars');
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error('Aprašyta klaida: Kažkas nepasisekė');
	}
};

const fetchCar = async (id) => {
	try {
		const response = await fetch(`http://localhost:5000/cars/${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error('Aprašyta klaida: Kažkas nepasisekė');
	}
};

const API = {
	fetchCars,
	fetchCar,
};

export default API;
