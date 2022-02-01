const moviesData = [
	{
		title: "Movies",
		paragraph: "We'll be learning how to Read data from a file and show it in the webpage. Next step will be removing one or more parts of the data from the page by clicking on it in the broswer.",
		buttons: ["Delete this element", "Generate movies from the list", "Create something cool", "Let me OUT!", "Edit me please", "Submit my changes"],
		movies: [
			{
				id : "MUIM2008",
				actors: ['Robert Downey Jr.', 'Terrence Howard', 'Jeff Bridges', 'Gwynth Paltrow', 'Leslie Bibb'],
				IMDB: 7.9,
				releaseYear: 2008,
				movieName: "IronMan",
				director: "Jon Favreau",
				genres: ['Action', 'Adventure', 'Sci-Fi'],
				length: 126,
				poster: "https://pics.filmaffinity.com/Ironman-108960873-large.jpg",
				description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
			}, {
				id : "MUT2011",
				actors: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins', 'Stellan Skarsgard'],
				IMDB: 7,
				releaseYear: 2011,
				movieName: "Thor",
				director: "Kenneth Branagh",
				genres: ['Action', 'Adventure', 'Fantasy'],
				length: 115,
				poster: "https://m.media-amazon.com/images/I/91P1wWqX63L._SL1500_.jpg",
				description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."

			}, {
				id : "LEG2003",
				actors: ['Sean Connery', 'Naseeruddin Shah', 'Peta Wilson', 'Tony Curran', 'Stuart Townsend'],
				IMDB: 5.8,
				releaseYear: 2003,
				movieName: "The League of Extraordinary Gentlemen",
				director: "Stephen Norrington",
				genres: ['Action', 'Adventure', 'Fantasy'],
				length: 110,
				poster: "https://i.pinimg.com/736x/fe/18/28/fe1828d116d1eb99f8eebe36873f786c.jpg",
				description: "In an alternate Victorian Age world, a group of famous contemporary fantasy, science fiction, and adventure characters team up on a secret mission."
			}, {
				id : "MUSM2002",
				actors: ['Tobey Maguire', 'Willem Dafoe', 'Kirsten Dunst', 'James Franco', 'Cliff Robertson'],
				IMDB: 7.3,
				releaseYear: 2002,
				movieName: "SpiderMan",
				director: "Sam Raimi",
				genres: ['Action', 'Adventure', 'Sci-Fi'],
				length: 121,
				poster: "https://m.media-amazon.com/images/I/51kzFX8Zr8L._AC_.jpg",
				description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
			}, {
				id : "MUDP2016",
				actors: ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein', 'Michael Benyaer', 'Brianna Hildebrand'],
				IMDB: 8,
				releaseYear: 2016,
				movieName: "Deadpool",
				director: "Tim Miller",
				genres: ['Action', 'Adventure', 'Comedy'],
				length: 108,
				poster: "https://chickflickingreviews.files.wordpress.com/2016/02/deadpool-valentinesday_.jpg",
				description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."
			}, {
				id : "VH2004",
				actors: ['Hugh Jackman', 'Kate Beckinsale', 'Richard Roxburgh', 'David Wenham', 'Shuler Hensley'],
				IMDB: 6.1,
				releaseYear: 2004,
				movieName: "Van Helsing",
				director: "Stephen Sommers",
				genres: ['Action', 'Adventure', 'Fantasy'],
				length: 131,
				poster: "https://m.media-amazon.com/images/I/71DHEagosIL._AC_SY679_.jpg",
				description: "The famed monster hunter is sent to Transylvania to stop Count Dracula, who is using Dr. Frankenstein's research and a werewolf for nefarious purposes."
			}, {
				id : "MUXM2000",
				actors: ['Hugh Jackman', 'Patrick Stewart', 'Ian McKellen', 'Famke Janssen', 'James Marsden'],
				IMDB: 7.4,
				releaseYear: 2000,
				movieName: "X-Men",
				director: "Bryan Singer",
				genres: ['Action', 'Adventure', 'Sci-Fi'],
				length: 104,
				poster: "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
				description: "In a world where mutants (evolved super-powered humans) exist and are discriminated against, two groups form for an inevitable clash: the supremacist Brotherhood, and the pacifist X-Men."
			}, {
				id : "MUAM2015",
				actors: ['Paul Rudd', 'Michael Douglas', 'Evangeline Lilly', 'Corey Stoll', 'Bobby Cannavale'],
				IMDB: 7.3,
				releaseYear: 2015,
				movieName: "Ant-Man",
				director: "Peyton Reed",
				genres: ['Action', 'Adventure', 'Comedy'],
				length: 117,
				poster: "https://m.media-amazon.com/images/I/71E9abm2ayL._AC_SL1111_.jpg",
				description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world."
			}, {
				id : "ME2018",
				actors: ['Hera Hilmar', 'Robert Sheehan', 'Hugo Weaving', 'Jihae', 'Ronan Raftery'],
				IMDB: 6.1,
				releaseYear: 2018,
				movieName: "Mortal Engines",
				director: "Christian Rivers",
				genres: ['Action', 'Adventure', 'Fantasy'],
				length: 128,
				poster: "https://m.media-amazon.com/images/I/91qiKWG+CrL._AC_SY741_.jpg",
				description: "In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy."
			}, {
				id : "ZL2009",
				actors: ['Jesse Eisenberg', 'Woody Harrelson', 'Emma Stone', 'Abigail Breslin'],
				IMDB: 7.6,
				releaseYear: 2009,
				movieName: "Zombieland",
				director: "Ruben Fleischer",
				genres: ['Adventure', 'Comedy', 'Horror'],
				length: 98,
				poster: "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_.jpg",
				description: "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America."
			}, {
				id : "DCUBB2005",
				actors: ['Christian Bale', 'Michael Caine', 'Liam Neeson', 'Katie Holmes', 'Gary Oldman'],
				IMDB: 8.2,
				releaseYear: 2005,
				movieName: "Batman Begins",
				director: "Christopher Nolan",
				genres: ['Action', 'Adventure'],
				length: 140,
				poster: "https://cdn.shopify.com/s/files/1/1416/8662/products/batman_begins_2005_advance_original_film_art_21d23979-c416-4ccf-ab5a-bfc32eefda10_1200x.jpg?v=1607193476",
				description: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption."
			}, {
				id : "MEULotR2001",
				actors: ['Sean Astin', 'Orlando Bloom', 'Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
				IMDB: 8.8,
				releaseYear: 2001,
				movieName: "The Lord of the Rings: The Fellowship of the Ring",
				director: "Peter Jackson",
				genres: ['Action', 'Adventure', 'Drama'],
				length: 178,
				poster: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY741_.jpg",
				description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
			}, {
				id : "MEUHUJ2012",
				actors: ['Ian McKellen', 'Martin Freeman', 'Richard Armitage', 'Ken Stott', 'Graham McTavish'],
				IMDB: 7.8,
				releaseYear: 2012,
				movieName: "The Hobbit: An Unexpected Journey",
				director: "Peter Jackson",
				genres: ['Fantasy', 'Adventure'],
				length: 169,
				poster: "https://m.media-amazon.com/images/I/71E9rZRPOLL._AC_SL1333_.jpg",
				description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug."
			}, {
				id : "UUU2003",
				actors: ['Kate Beckinsale', 'Scott Speedman', 'Michael Sheen', 'Shane Brolly', 'Bill Nighy'],
				IMDB: 7.0,
				releaseYear: 2003,
				movieName: "Underworld",
				director: "Len Wiseman",
				genres: ['Action', 'Fantasy', 'Thriller'],
				length: 121,
				poster: "https://m.media-amazon.com/images/M/MV5BMTk1OTc2ZmUtODU0Yy00NGJiLWJmNmQtODI0MzBjODk3MjI4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
				description: "Selene, a vampire warrior, is entrenched in a conflict between vampires and werewolves, while falling in love with Michael, a human who is sought by werewolves for unknown reasons."
			}, {
				id : "DWP001",
				actors: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci', 'Simon Baker'],
				IMDB: 6.9,
				releaseYear: 2006,
				movieName: "The Devil Wears Prada",
				director: "David Frankel",
				genres: ['Comedy', 'Drama'],
				length: 109,
				poster: "https://m.media-amazon.com/images/I/41gKuNG0YEL._AC_.jpg",
				description: "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine."
			}, {
				id : "PF001",
				actors: ['Tim Roth', 'Amanda Plummer', 'Laura Lovelace', 'John Travolta', 'Samuel L. Jackson'],
				IMDB: 8.9,
				releaseYear: 1994,
				movieName: "Pulp Fiction",
				director: "Quentin Tarantino",
				genres: ['Crime', 'Drama'],
				length: 154,
				poster: "https://cdn.europosters.eu/image/750/posters/pulp-fiction-cover-i1288.jpg",
				description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
			}, {
				id : "GUG001",
				actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard S. Castellano', 'Robert Duvall'],
				IMDB: 9.2,
				releaseYear: 1972,
				movieName: "The Godfather",
				director: "Francis Ford Coppola",
				genres: ['Crime', 'Drama'],
				length: 175,
				poster: "https://m.media-amazon.com/images/I/61MwEEt+NXL._AC_SY741_.jpg",
				description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son."
			}
		]
	}
];