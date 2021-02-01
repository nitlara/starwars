const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			characters: [],
			planets: [],
			starships: [],
			favorites: [],
			fill: false,
			characters2: "",
			planets2: "",
			starships2: ""
		},

		actions: {
			getCharacters: () => {
				var url = "https://www.swapi.tech/api/people/";

				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ characters: data.results, characters2: data.next }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getCharactersMore: () => {
				let store = getStore();
				var url = store.characters2;

				fetch(url)
					.then(resp => resp.json())
					.then(data =>
						setStore({ characters: store.characters.concat(data.results), characters2: data.next })
					)
					.catch(error => console.log("Error loading message from backend", error));
			},
			getPlanets: () => {
				// fetching data from the backend
				fetch("https://www.swapi.tech/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results, planets2: data.next }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getPlanetsMore: () => {
				let store = getStore();
				var url = store.planets2;

				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ planets: store.planets.concat(data.results), planets2: data.next }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getStarships: () => {
				// fetching data from the backend
				fetch("https://www.swapi.tech/api/starships/")
					.then(resp => resp.json())
					.then(data => setStore({ starships: data.results, starships2: data.next }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getStarshipsMore: () => {
				let store = getStore();
				var url = store.starships2;

				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ starships: store.starships.concat(data.results), starships2: data.next }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			addFavs: favorite => {
				//get the store
				let store = getStore(); //traes store disponible
				store.favorites.push(favorite);
				setStore({ favorites: store.favorites });
			},
			deleteFavs: favorite => {
				let store = getStore();
				let newStore = store.favorites.filter(element => element != favorite);
				setStore({
					favorites: newStore
				});
			}
		}
	};
};

export default getState;
