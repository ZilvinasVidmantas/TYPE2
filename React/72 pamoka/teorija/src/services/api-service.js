const fetchCars = async () => {
	try {
		const response = await fetch('http://localhost:5000/cars');
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error('Aprašyta klaida: Kažkas nepasisekė');
	}
};

const API = {
	fetchCars,
};

export default API;
