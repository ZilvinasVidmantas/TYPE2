const data = [
	{
		title: "Search Works of Greatests of Artists by Artwork Name",
		inputPlaceholder : "Name of Artwork...",
		button: "Search",
		errorMessage: "Sorry, we didn't found anything corresponding to your input.",
		imagesTitles: ["Mona Lisa", "Last Supper", "Lady With An Ermine", "David", "The Creation of Adam", "Venus de Milo", "Vitruvian Man", "The Starry Night", "Portrait of a Man in Red Chalk", "Birth of Venus", "The Death of Julius Caesar"],
		images: [
			"https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
			"https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
			"https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg",
			"https://cdn.britannica.com/06/60906-050-FECBBC51/David-marble-sculpture-Michelangelo-Accademia-Florence.jpg",
			"https://www.michelangelo.org/images/artworks/the-creation-of-adam.jpg",
			"https://cdn.britannica.com/02/222202-050-40E1A83B/Statue-of-Venus-de-Milo-Louvre-Paris-France.jpg",
			"https://mymodernmet.com/wp/wp-content/uploads/2018/08/leonardo-da-vinci-vitruvian-man-2.jpg",
			"https://cdn.britannica.com/s:690x388,c:crop/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
			"https://www.leonardodavinci.net/images/gallery/self-portrait.jpg",
			"http://www.italianrenaissance.org/wp-content/uploads/2012/08/Botticelli-Birth-of-Venus-590x370.jpg",
			"https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/GL/GM/GL_GM_318-001.jpg"
		],
		paragraphs: [
			"Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
			"Last Supper, Italian Cenacolo, one of the most famous artworks in the world, painted by Leonardo da Vinci probably between 1495 and 1498 for the Dominican monastery Santa Maria delle Grazie in Milan. It depicts the dramatic scene described in several closely connected moments in the Gospels, including Matthew 26:21–28, in which Jesus declares that one of the Apostles will betray him and later institutes the Eucharist. According to Leonardo’s belief that posture, gesture, and expression should manifest the “notions of the mind,” each one of the 12 disciples reacts in a manner that Leonardo considered fit for that man’s personality. The result is a complex study of varied human emotion, rendered in a deceptively simple composition.",
			"Lady with an Ermine is a painting by Leonardo da Vinci, from around 1489-1490. That stunning picture is 40.3 cm wide and 54.8 cm high, oil on walnut board. Unfortunately, the original background has been overlaid probably in the 17th c. The subject of the portrait is identified as Cecilia Gallerani, and was probably painted at a time when she was the mistress of Lodovico Sforza, Duke of Milan and Leonardo was in the service of the Duke.",
			"David, marble sculpture executed from 1501 to 1504 by the Italian Renaissance artist Michelangelo. The statue was commissioned for one of the buttresses of the cathedral of Florence and was carved from a block of marble that had been partially blocked out by other sculptors and left outdoors. After Michelangelo completed the sculpture, the Florentine government decided instead to place it in front of the Palazzo Vecchio. The original is now in the Accademia, and copies have been installed in the Piazza della Signoria and the Piazzale Michelangelo, which overlooks Florence.",
			"Of all the marvelous images that crowd the immense complex of the Sistine Ceiling, The Creation of Adam is undoubtedly the one which has most deeply impressed posterity. No wonder, for here we are given a single overwhelming vision of the sublimity of God and the potential nobility of man unprecedented and unrivaled in the entire history of visual art. No longer standing upon earth with closed eyes and mantle, the Lord floats through the heavens, His mantle widespread and bursting with angelic forms, and His calm gaze accompanying and reinforcing the movement of His mighty arm. He extends His forefinger, about to touch that of Adam, who reclines on the barren coast of earth, barely able as yet to lift his hand. The divine form is convex, explosive, paternal; the human concave, receptive, and conspicuously impotent. The incipient, fecundating contact about to take place between the two index fingers has often been described as a spark or a current, a modern electrical metaphor doubtless foreign to the sixteenth century, but natural enough considering the river of life which seems about to flow into the waiting body.",
			"Venus de Milo, ancient statue commonly thought to represent Aphrodite, now in Paris at the Louvre. It was carved from marble by Alexandros, a sculptor of Antioch on the Maeander River about 150 BCE. It was found in pieces on the Aegean island of Melos on April 8, 1820, and was subsequently presented to Louis XVIII (who then donated it to the Louvre in 1821). Though it was reconstructed to a standing posture, the statue’s arms were never found. An inscription that is not displayed with the statue states that “Alexandros, son of Menides, citizen of Antioch of Maeander made the statue.” The figure’s origin on the island of Melos has led some to think she may be Amphitrite, the Greek goddess of the sea.",
			"Leonardo drew the Vitruvian Man, known also as “The proportions of the human body according to Vitruvius,” in 1492. Rendered in pen, ink, and metalpoint on paper, the piece depicts an idealized nude male standing within a square and a circle. Ingeniously, Leonardo chose to depict the man with four legs and four arms, allowing him to strike 16 poses simultaneously.",
			"The Starry Night, a moderately abstract landscape painting (1889) of an expressive night sky over a small hillside village, one of Dutch artist Vincent van Gogh’s most celebrated works.",
			"This self portrait was painted in 1512 using red chalk, when Leonardo da Vinci was 50 and living in France. The original painting measures 33.3 x 21.3 cm (13 1/8 x 8 3/8 in). It is now held in the magnificent collection of the Biblioteca Reale, Turin.",
			"Sandro's Botticelli painting known as the “Birth of Venus”, the composition actually shows the goddess of love and beauty arriving on land, on the island of Cyprus, born of the sea spray and blown there by the winds, Zephyr and, perhaps, Aura. The goddess is standing on a giant scallop shell, as pure and as perfect as a pearl. She is met by a young woman, who is sometimes identified as one of the Graces or as the Hora of spring, and who holds out a cloak covered in flowers. Even the roses, blown in by the wind are a reminder of spring. The subject of the painting, which celebrates Venus as symbol of love and beauty, was perhaps suggested by the poet Agnolo Poliziano.",
			"La mort de Cèsar or The Death of Julius Caesar is an 1806 painting by Vincenzo Camuccini depicting the assassination of Julius Caesar. The painting was originally commissioned in 1793 by Frederick Hervey, 4th Earl of Bristol, for whom he had already produced a copy of Raphael's Deposition."
		],
		classes: ["", "", "", ""] // galima pridėti daugiau klasių
	}, {
		title: "Calculator",
		inputPlaceholder: ["Insert first number here.", "Insert second number here."],
		selector: ["", "Add", "Subtract", "Divide", "Multiply", "Raise to a degree of", "Get a degree root of", "Get a remainder of"],
		button: "Calculate",
		answer: "Answer is: ",
		errorMessage: "Please fill all inputs!"
	}, {
		title: "Search movies",
		selector: ["IMDB is higher than", "IMDB is lower than", "Actor", "Director", "Name", "Released before year", "Released after year", "Type"],
		button: "Search",
		errorMessage: "Sorry, we didn't found any movies matching your search input.",
		movies: [
			{
				aktoriai: ['Robert Downey Jr.', 'Terrence Howard', 'Jeff Bridges', 'Gwynth Paltrow', 'Leslie Bibb'],
				IMDB: 7.9,
				leidimoMetai: 2008,
				pavadinimas: "Iron Man",
				rezisierius: "Jon Favreau",
				tipas: ['Action', 'Adventure', 'Sci-Fi'],
				trukme: 126,
				paveiksliukas: "https://pics.filmaffinity.com/Ironman-108960873-large.jpg",
				aprasymas: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
			}, {
				aktoriai: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins', 'Stellan Skarsgard'],
				IMDB: 7,
				leidimoMetai: 2011,
				pavadinimas: "Thor",
				rezisierius: "Kenneth Branagh",
				tipas: ['Action', 'Adventure', 'Fantasy'],
				trukme: 115,
				paveiksliukas: "https://m.media-amazon.com/images/I/91P1wWqX63L._SL1500_.jpg",
				aprasymas: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."

			}, {
				aktoriai: ['Sean Connery', 'Naseeruddin Shah', 'Peta Wilson', 'Tony Curran', 'Stuart Townsend'],
				IMDB: 5.8,
				leidimoMetai: 2003,
				pavadinimas: "The League of Extraordinary Gentlemen",
				rezisierius: "Stephen Norrington",
				tipas: ['Action', 'Adventure', 'Fantasy'],
				trukme: 110,
				paveiksliukas: "https://i.pinimg.com/736x/fe/18/28/fe1828d116d1eb99f8eebe36873f786c.jpg",
				aprasymas: "In an alternate Victorian Age world, a group of famous contemporary fantasy, science fiction, and adventure characters team up on a secret mission."
			}, {
				aktoriai: ['Tobey Maguire', 'Willem Dafoe', 'Kirsten Dunst', 'James Franco', 'Cliff Robertson'],
				IMDB: 7.3,
				leidimoMetai: 2002,
				pavadinimas: "SpiderMan",
				rezisierius: "Sam Raimi",
				tipas: ['Action', 'Adventure', 'Sci-Fi'],
				trukme: 121,
				paveiksliukas: "https://m.media-amazon.com/images/I/51kzFX8Zr8L._AC_.jpg",
				aprasymas: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
			}, {
				aktoriai: ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein', 'Michael Benyaer', 'Brianna Hildebrand'],
				IMDB: 8,
				leidimoMetai: 2016,
				pavadinimas: "Deadpool",
				rezisierius: "Tim Miller",
				tipas: ['Action', 'Adventure', 'Comedy'],
				trukme: 108,
				paveiksliukas: "https://chickflickingreviews.files.wordpress.com/2016/02/deadpool-valentinesday_.jpg",
				aprasymas: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."
			}, {
				aktoriai: ['Hugh Jackman', 'Kate Beckinsale', 'Richard Roxburgh', 'David Wenham', 'Shuler Hensley'],
				IMDB: 6.1,
				leidimoMetai: 2004,
				pavadinimas: "Van Helsing",
				rezisierius: "Stephen Sommers",
				tipas: ['Action', 'Adventure', 'Fantasy'],
				trukme: 131,
				paveiksliukas: "https://m.media-amazon.com/images/I/71DHEagosIL._AC_SY679_.jpg",
				aprasymas: "The famed monster hunter is sent to Transylvania to stop Count Dracula, who is using Dr. Frankenstein's research and a werewolf for nefarious purposes."
			}, {
				aktoriai: ['Hugh Jackman', 'Patrick Stewart', 'Ian McKellen', 'Famke Janssen', 'James Marsden'],
				IMDB: 7.4,
				leidimoMetai: 2000,
				pavadinimas: "X-Men",
				rezisierius: "Bryan Singer",
				tipas: ['Action', 'Adventure', 'Sci-Fi'],
				trukme: 104,
				paveiksliukas: "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
				aprasymas: "In a world where mutants (evolved super-powered humans) exist and are discriminated against, two groups form for an inevitable clash: the supremacist Brotherhood, and the pacifist X-Men."
			}, {
				aktoriai: ['Paul Rudd', 'Michael Douglas', 'Evangeline Lilly', 'Corey Stoll', 'Bobby Cannavale'],
				IMDB: 7.3,
				leidimoMetai: 2015,
				pavadinimas: "Ant-Man",
				rezisierius: "Peyton Reed",
				tipas: ['Action', 'Adventure', 'Comedy'],
				trukme: 117,
				paveiksliukas: "https://m.media-amazon.com/images/I/71E9abm2ayL._AC_SL1111_.jpg",
				aprasymas: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world."
			}, {
				aktoriai: ['Hera Hilmar', 'Robert Sheehan', 'Hugo Weaving', 'Jihae', 'Ronan Raftery'],
				IMDB: 6.1,
				leidimoMetai: 2018,
				pavadinimas: "Mortal Engines",
				rezisierius: "Christian Rivers",
				tipas: ['Action', 'Adventure', 'Fantasy'],
				trukme: 128,
				paveiksliukas: "https://m.media-amazon.com/images/I/91qiKWG+CrL._AC_SY741_.jpg",
				aprasymas: "In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy."
			}, {
				aktoriai: ['Jesse Eisenberg', 'Woody Harrelson', 'Emma Stone', 'Abigail Breslin'],
				IMDB: 7.6,
				leidimoMetai: 2009,
				pavadinimas: "Zombieland",
				rezisierius: "Ruben Fleischer",
				tipas: ['Adventure', 'Comedy', 'Horror'],
				trukme: 98,
				paveiksliukas: "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_.jpg",
				aprasymas: "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America."
			}, {
				aktoriai: ['Christian Bale', 'Michael Caine', 'Liam Neeson', 'Katie Holmes', 'Gary Oldman'],
				IMDB: 8.2,
				leidimoMetai: 2005,
				pavadinimas: "Batman Begins",
				rezisierius: "Christopher Nolan",
				tipas: ['Action', 'Adventure'],
				trukme: 140,
				paveiksliukas: "https://cdn.shopify.com/s/files/1/1416/8662/products/batman_begins_2005_advance_original_film_art_21d23979-c416-4ccf-ab5a-bfc32eefda10_1200x.jpg?v=1607193476",
				aprasymas: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption."
			}, {
				aktoriai: ['Sean Astin', 'Orlando Bloom', 'Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
				IMDB: 8.8,
				leidimoMetai: 2001,
				pavadinimas: "The Lord of the Rings: The Fellowship of the Ring",
				rezisierius: "Peter Jackson",
				tipas: ['Action', 'Adventure', 'Drama'],
				trukme: 178,
				paveiksliukas: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY741_.jpg",
				aprasymas: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
			}, {
				aktoriai: ['Ian McKellen', 'Martin Freeman', 'Richard Armitage', 'Ken Stott', 'Graham McTavish'],
				IMDB: 7.8,
				leidimoMetai: 2012,
				pavadinimas: "The Hobbit: An Unexpected Journey",
				rezisierius: "Peter Jackson",
				tipas: ['Fantasy', 'Adventure'],
				trukme: 169,
				paveiksliukas: "https://m.media-amazon.com/images/I/71E9rZRPOLL._AC_SL1333_.jpg",
				aprasymas: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug."
			}
		]
	}
];