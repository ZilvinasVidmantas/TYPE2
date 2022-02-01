const data = [
  {
    title: "Mona Lisa",
    paragraph: "Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
    image: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
    classes: ["", "", "", ""] // galima pridėti daugiau klasių
  }, {
    title: "Leonardo da Vinci paintings",
    images: [
      "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
      "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
      "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg"
    ],
    classes: ["", "", "", ""] // galima pridėti daugiau klasių
  }, {
    title: "Works of Greatests of Artists",
    imagesTitles: ["Mona Lisa", "Last Supper", "Lady With An Ermine", "David", "The Creation of Adam", "Venus de Milo"],
    images: [
      "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
      "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
      "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg",
      "https://cdn.britannica.com/06/60906-050-FECBBC51/David-marble-sculpture-Michelangelo-Accademia-Florence.jpg",
      "https://www.michelangelo.org/images/artworks/the-creation-of-adam.jpg",
      "https://cdn.britannica.com/02/222202-050-40E1A83B/Statue-of-Venus-de-Milo-Louvre-Paris-France.jpg"
    ],
    paragraphs: [
      "Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
      "Last Supper, Italian Cenacolo, one of the most famous artworks in the world, painted by Leonardo da Vinci probably between 1495 and 1498 for the Dominican monastery Santa Maria delle Grazie in Milan. It depicts the dramatic scene described in several closely connected moments in the Gospels, including Matthew 26:21–28, in which Jesus declares that one of the Apostles will betray him and later institutes the Eucharist. According to Leonardo’s belief that posture, gesture, and expression should manifest the “notions of the mind,” each one of the 12 disciples reacts in a manner that Leonardo considered fit for that man’s personality. The result is a complex study of varied human emotion, rendered in a deceptively simple composition.",
      "Lady with an Ermine is a painting by Leonardo da Vinci, from around 1489-1490. That stunning picture is 40.3 cm wide and 54.8 cm high, oil on walnut board. Unfortunately, the original background has been overlaid probably in the 17th c. The subject of the portrait is identified as Cecilia Gallerani, and was probably painted at a time when she was the mistress of Lodovico Sforza, Duke of Milan and Leonardo was in the service of the Duke.",
      "David, marble sculpture executed from 1501 to 1504 by the Italian Renaissance artist Michelangelo. The statue was commissioned for one of the buttresses of the cathedral of Florence and was carved from a block of marble that had been partially blocked out by other sculptors and left outdoors. After Michelangelo completed the sculpture, the Florentine government decided instead to place it in front of the Palazzo Vecchio. The original is now in the Accademia, and copies have been installed in the Piazza della Signoria and the Piazzale Michelangelo, which overlooks Florence.",
      "Of all the marvelous images that crowd the immense complex of the Sistine Ceiling, The Creation of Adam is undoubtedly the one which has most deeply impressed posterity. No wonder, for here we are given a single overwhelming vision of the sublimity of God and the potential nobility of man unprecedented and unrivaled in the entire history of visual art. No longer standing upon earth with closed eyes and mantle, the Lord floats through the heavens, His mantle widespread and bursting with angelic forms, and His calm gaze accompanying and reinforcing the movement of His mighty arm. He extends His forefinger, about to touch that of Adam, who reclines on the barren coast of earth, barely able as yet to lift his hand. The divine form is convex, explosive, paternal; the human concave, receptive, and conspicuously impotent. The incipient, fecundating contact about to take place between the two index fingers has often been described as a spark or a current, a modern electrical metaphor doubtless foreign to the sixteenth century, but natural enough considering the river of life which seems about to flow into the waiting body.",
      "Venus de Milo, ancient statue commonly thought to represent Aphrodite, now in Paris at the Louvre. It was carved from marble by Alexandros, a sculptor of Antioch on the Maeander River about 150 BCE. It was found in pieces on the Aegean island of Melos on April 8, 1820, and was subsequently presented to Louis XVIII (who then donated it to the Louvre in 1821). Though it was reconstructed to a standing posture, the statue’s arms were never found. An inscription that is not displayed with the statue states that “Alexandros, son of Menides, citizen of Antioch of Maeander made the statue.” The figure’s origin on the island of Melos has led some to think she may be Amphitrite, the Greek goddess of the sea."
    ],
    classes: ["", "", "", ""] // galima pridėti daugiau klasių
  }, [
    {
      aktoriai: ['Robert Downey Jr.', 'Terrence Howard', 'Jeff Bridges', 'Gwynth Paltrow', 'Leslie Bibb'],
      IMDB: 7.9,
      leidimoMetai: 2008,
      pavadinimas: "IronMan",
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
    }
  ]
];