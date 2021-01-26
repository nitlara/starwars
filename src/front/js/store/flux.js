const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			favourites: [],
			fill: false
		},

		actions: {
			getInformation: () => {
				// fetching data from the backend
				fetch("https://www.swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			addFavs: () => {
				//get the store
				const store = getStore();

				const favsList = store.favourites.push((elm, i) => {
					fill ? fill : favsList;
				});
			}
			// removeFavs: () => {

			//     const store = getStore();

			//     const removeFav = store.favourites.filter() => {

			//         //metodos filter?? splice?? remove??
			//     }
			// )},
			//reset the global store
			// setStore({ demo: demo });
		}
	};
};

export default getState;
