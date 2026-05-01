const questions = {
    sports: {
            easy: [
                { q:"How many players in football?", options:["9","7","11"], answer:2 },
                { q:"Which sport uses a bat?", options:["Cricket","Tennis","Boxing"], answer:0 },
                { q:"Serena Williams is famous for?", options:["Golf","Tennis","Swimming"], answer:1 },
                { q:"2018 FIFA World Cup winner?", options:["Brazil","France","Germany"], answer:1 },
                { q:"NBA game length?", options:["60 min","40 min","48 min"], answer:2 },
                { q:"Sport using a puck?", options:["Ice Hockey","Football","Cricket"], answer:0 },
                { q:"Olympics held every?", options:["2 years","3 years","4 years"], answer:2 },
                { q:"Sport using wickets?", options:["Baseball","Cricket","Soccer"], answer:1 },
                { q:"Usain Bolt sport?", options:["Swimming","Sprinting","Tennis"], answer:2 },
                { q:"Golf played with?", options:["Club","Bat","Racket"], answer:0 },
                
                { q:"Sport using shuttlecock?", options:["Tennis","Badminton","Squash"], answer:1 },
                { q:"Minutes in soccer half?", options:["30","45","60"], answer:1 },
                { q:"Muhammad Ali was?", options:["Runner","Wrestler","Boxer"], answer:2 },
                { q:"Table tennis also called?", options:["Ping Pong","Mini Tennis","Soft Tennis"], answer:0 },
                { q:"Basketball hoop height?", options:["8 ft","10 ft","12 ft"], answer:1 },
                { q:"Sport with touchdowns?", options:["Rugby","Cricket","American Football"], answer:2 },
                { q:"NBA sport?", options:["Football","Basketball","Baseball"], answer:2 },
                { q:"Cricket invented in?", options:["England","India","Australia"], answer:0 },
                { q:"Wimbledon sport?", options:["Cricket","Tennis","Rugby"], answer:1 },
                { q:"Sport with home runs?", options:["Football","Baseball","Tennis"], answer:1 },
                
                { q:"Sport with bowling lane?", options:["Cricket","Golf","Bowling"], answer:2 },
                { q:"Sport using free throws?", options:["Basketball","Soccer","Cricket"], answer:0 },
                { q:"Sport with offsides?", options:["Tennis","Football","Golf"], answer:1 },
                { q:"Sport using helmets & pads?", options:["Golf","Badminton","American Football"], answer:2 },
                { q:"Sport with stumps?", options:["Rugby","Football","Cricket"], answer:2 },
                { q:"Sport using referee whistle?", options:["Football","Golf","Cricket"], answer:0 },
                { q:"Sport using discus?", options:["Football","Athletics","Hockey"], answer:1 },
                { q:"Cricket format 50 overs?", options:["Test","ODI","T20"], answer:1 },
                { q:"Asia Cup 2022 winner?", options:["India","Pakistan","Sri Lanka"], answer:2 },
                { q:"Olympic sport épée?", options:["Fencing","Boxing","Judo"], answer:0 }
            ],

        medium: [
                { q:"NBA stands for?", options:["New Ball Arena","North Basketball Arena","National Basketball Association"], answer:2 },
                { q:"Who scored most World Cup goals?", options:["Miroslav Klose","Pelé","Ronaldo"], answer:0 },
                { q:"2016 Olympics host city?", options:["London","Rio","Beijing"], answer:1 },
                { q:"How many players in rugby union?", options:["13","15","11"], answer:1 },
                { q:"First FIFA World Cup winner?", options:["Brazil","Italy","Uruguay"], answer:2 },
                { q:"Origin of Judo?", options:["Japan","China","Korea"], answer:0 },
                { q:"Tour de France is a?", options:["Car race","Horse race","Cycling race"], answer:2 },
                { q:"Michael Jordan team?", options:["Lakers","Chicago Bulls","Celtics"], answer:1 },
                { q:"Novak Djokovic sport?", options:["Golf","Football","Tennis"], answer:2 },
                { q:"Olympic pool length?", options:["50m","25m","100m"], answer:0 },

                { q:"Which country hosted 2022 World Cup?", options:["Russia","Qatar","USA"], answer:1 },
                { q:"Which sport uses scrums?", options:["Football","Rugby","Hockey"], answer:1 },
                { q:"Which country invented baseball?", options:["Japan","UK","USA"], answer:2 },
                { q:"Which country has most Olympic medals?", options:["USA","China","Russia"], answer:0 },
                { q:"Which sport uses yellow card?", options:["Tennis","Cricket","Football"], answer:2 },
                { q:"How many holes in golf?", options:["9","18","12"], answer:1 },
                { q:"Which boxer known as The Greatest?", options:["Tyson","Frazier","Muhammad Ali"], answer:2 },
                { q:"Which country won 2014 World Cup?", options:["Germany","Brazil","Spain"], answer:0 },
                { q:"Which team won NBA 2020?", options:["Heat","LA Lakers","Warriors"], answer:1 },
                { q:"Which sport uses pommel horse?", options:["Boxing","Gymnastics","Rugby"], answer:1 },

                { q:"Which sport uses a velodrome?", options:["Skating","Running","Cycling"], answer:2 },
                { q:"Which country won Cricket WC 2019?", options:["England","India","Australia"], answer:0 },
                { q:"Which sport uses a bullpen?", options:["Football","Hockey","Baseball"], answer:2 },
                { q:"Which country hosted 2012 Olympics?", options:["USA","UK","China"], answer:1 },
                { q:"Which country won Euro 2016?", options:["France","Spain","Portugal"], answer:2 },
                { q:"Which sport uses triple jump?", options:["Athletics","Football","Tennis"], answer:0 },
                { q:"Which sport has tie-break?", options:["Football","Tennis","Rugby"], answer:1 },
                { q:"Which country won Copa America 2021?", options:["Brazil","Argentina","Chile"], answer:1 },
                { q:"Which sport uses putter?", options:["Cricket","Football","Golf"], answer:2 },
                { q:"Which country hosted 2008 Olympics?", options:["China","Japan","USA"], answer:0 }
                ],

        hard: [
                { q:"First FIFA World Cup year?", options:["1942","1920","1930"], answer:2 },
                { q:"First Super Bowl winner?", options:["Green Bay Packers","Cowboys","Dolphins"], answer:0 },
                { q:"Modern football origin?", options:["Germany","England","Italy"], answer:1 },
                { q:"Max F1 race points?", options:["30","25","20"], answer:1 },
                { q:"Oldest marathon?", options:["London Marathon","NY Marathon","Boston Marathon"], answer:2 },
                { q:"2008 Olympic 100m winner?", options:["Usain Bolt","Tyson Gay","Powell"], answer:0 },
                { q:"Chess 14-time champion?", options:["Carlsen","Fischer","Kasparov"], answer:2 },
                { q:"The Ashes is between?", options:["India & Pakistan","England & Australia","SA & NZ"], answer:1 },
                { q:"Which country hosted 1992 Olympics?", options:["USA","Australia","Spain"], answer:2 },
                { q:"Which NFL team most Super Bowls?", options:["Steelers","Patriots","49ers"], answer:0 },
                
                { q:"Which sport invented in England?", options:["Baseball","Cricket","Basketball"], answer:1 },
                { q:"First NBA champion?", options:["Lakers","Philadelphia Warriors","Bulls"], answer:1 },
                { q:"Which country hosted 1994 World Cup?", options:["France","Brazil","USA"], answer:2 },
                { q:"Which team won UCL 2022?", options:["Real Madrid","Liverpool","City"], answer:0 },
                { q:"First Cricket World Cup winner?", options:["India","Australia","West Indies"], answer:2 },
                { q:"Which F1 driver 7 titles?", options:["Senna","Michael Schumacher","Prost"], answer:1 },
                { q:"Which tennis player 22 Grand Slams?", options:["Federer","Djokovic","Rafael Nadal"], answer:2 },
                { q:"Which city hosted 1900 Olympics?", options:["Paris","London","Athens"], answer:0 },
                { q:"Which sport uses decathlon?", options:["Football","Athletics","Tennis"], answer:1 },
                { q:"Which country won 1998 World Cup?", options:["Brazil","France","Germany"], answer:1 },
                
                { q:"Which cricket format 50 overs?", options:["Test","T20","ODI"], answer:2 },
                { q:"Which boxer known as Iron Mike?", options:["Mike Tyson","Ali","Holyfield"], answer:0 },
                { q:"Which sport has Ryder Cup?", options:["Cricket","Tennis","Golf"], answer:2 },
                { q:"Which country won 2006 World Cup?", options:["France","Italy","Germany"], answer:1 },
                { q:"Which sport uses steeplechase?", options:["Rugby","Hockey","Athletics"], answer:2 },
                { q:"Which country hosted 2010 World Cup?", options:["South Africa","Germany","Brazil"], answer:0 },
                { q:"Which team won EPL 2016?", options:["Arsenal","Leicester City","Chelsea"], answer:1 },
                { q:"Which F1 team has most titles?", options:["Mercedes","Ferrari","McLaren"], answer:1 },
                { q:"Which country won Asia Cup 2022?", options:["India","Pakistan","Sri Lanka"], answer:2 },
                { q:"Which Olympic sport uses épée?", options:["Fencing","Boxing","Judo"], answer:0 }
]
    },

    general: {
        easy: [

                { q:"Capital of Japan?", options:["Beijing","Seoul","Tokyo"], answer:2 },
                { q:"Water freezes at?", options:["0°C","32°C","100°C"], answer:0 },
                { q:"Closest planet to Sun?", options:["Venus","Mercury","Earth"], answer:1 },
                { q:"5 + 7 = ?", options:["11","12","13"], answer:1 },
                { q:"Egypt is in?", options:["Asia","Europe","Africa"], answer:2 },
                { q:"Animal that barks?", options:["Dog","Cat","Cow"], answer:0 },
                { q:"Days in a week?", options:["5","10","7"], answer:2 },
                { q:"Red + White = ?", options:["Purple","Pink","Orange"], answer:1 },
                { q:"Yellow fruit?", options:["Apple","Grapes","Banana"], answer:2 },
                { q:"10 - 4 = ?", options:["6","5","7"], answer:0 },
                
                { q:"Gas we breathe?", options:["CO2","Oxygen","Nitrogen"], answer:1 },
                { q:"Largest ocean?", options:["Atlantic","Pacific","Indian"], answer:1 },
                { q:"After Monday?", options:["Wednesday","Sunday","Tuesday"], answer:2 },
                { q:"Spider legs?", options:["8","6","10"], answer:0 },
                { q:"Primary color?", options:["Pink","Brown","Red"], answer:2 },
                { q:"Which is a mammal?", options:["Shark","Whale","Octopus"], answer:1 },
                { q:"Which shape has 3 sides?", options:["Square","Circle","Triangle"], answer:2 },
                { q:"Which is a vegetable?", options:["Carrot","Apple","Banana"], answer:0 },
                { q:"Which planet do we live on?", options:["Mars","Earth","Venus"], answer:1 },
                { q:"Which is a metal?", options:["Wood","Iron","Plastic"], answer:1 },
                
                { q:"Which is a bird?", options:["Lion","Shark","Eagle"], answer:2 },
                { q:"Which season is coldest?", options:["Winter","Summer","Spring"], answer:0 },
                { q:"How many months in a year?", options:["10","8","12"], answer:2 },
                { q:"Which is a fruit?", options:["Potato","Mango","Onion"], answer:1 },
                { q:"Which is a continent?", options:["California","Paris","Asia"], answer:2 },
                { q:"Which animal says meow?", options:["Cat","Dog","Cow"], answer:0 },
                { q:"How many hours in a day?", options:["12","24","48"], answer:1 },
                { q:"Which is a transport?", options:["Tree","Car","House"], answer:1 },
                { q:"Which is a drink?", options:["Stone","Wood","Water"], answer:2 },
                { q:"Which is a color?", options:["Blue","Dog","Chair"], answer:0 }

                ],

        medium: [

                { q:"Largest planet?", options:["Saturn","Earth","Jupiter"], answer:2 },
                { q:"Who wrote Romeo & Juliet?", options:["Shakespeare","Hemingway","Tolstoy"], answer:0 },
                { q:"Speed of light?", options:["150,000","300,000 km/s","500,000"], answer:1 },
                { q:"Smallest prime number?", options:["1","2","3"], answer:1 },
                { q:"Capital of Australia?", options:["Sydney","Melbourne","Canberra"], answer:2 },
                { q:"Vitamin from sunlight?", options:["Vitamin D","C","A"], answer:0 },
                { q:"15 × 3 = ?", options:["50","40","45"], answer:2 },
                { q:"Red Planet?", options:["Venus","Mars","Mercury"], answer:1 },
                { q:"Boiling point of water?", options:["90°C","120°C","100°C"], answer:2 },
                { q:"Longest river?", options:["Nile","Amazon","Yangtze"], answer:0 },
                
                { q:"Organ that pumps blood?", options:["Lungs","Heart","Liver"], answer:1 },
                { q:"Gas in balloons?", options:["Oxygen","Helium","Nitrogen"], answer:1 },
                { q:"Largest desert?", options:["Gobi","Kalahari","Sahara"], answer:2 },
                { q:"First man on Moon?", options:["Neil Armstrong","Aldrin","Gagarin"], answer:0 },
                { q:"Chemical symbol for Gold?", options:["Ag","Fe","Au"], answer:2 },
                { q:"Square root of 81?", options:["8","9","7"], answer:1 },
                { q:"Which is a renewable energy?", options:["Coal","Oil","Solar"], answer:2 },
                { q:"Which country has Eiffel Tower?", options:["France","Italy","Spain"], answer:0 },
                { q:"Which organ helps breathing?", options:["Heart","Lungs","Brain"], answer:1 },
                { q:"Which is a programming language?", options:["Lion","Python","Tiger"], answer:1 },
                
                { q:"Who painted Mona Lisa?", options:["Van Gogh","Picasso","Leonardo da Vinci"], answer:2 },
                { q:"How many bones in adult body?", options:["206","201","210"], answer:0 },
                { q:"Which is a gas giant?", options:["Mars","Mercury","Jupiter"], answer:2 },
                { q:"Which is a search engine?", options:["Windows","Google","Linux"], answer:1 },
                { q:"Which is an island country?", options:["Germany","Nepal","Japan"], answer:2 },
                { q:"Which metal is liquid?", options:["Mercury","Iron","Copper"], answer:0 },
                { q:"Which is largest continent?", options:["Europe","Asia","Africa"], answer:1 },
                { q:"Which animal is fastest on land?", options:["Lion","Cheetah","Tiger"], answer:1 },
                { q:"Which is a greenhouse gas?", options:["Oxygen","Hydrogen","CO2"], answer:2 },
                { q:"Which instrument measures temperature?", options:["Thermometer","Barometer","Altimeter"], answer:0 }

                ],

        hard: [
        

                { q:"Who proposed relativity?", options:["Newton","Tesla","Einstein"], answer:2 },
                { q:"Speed of sound?", options:["343 m/s","300","400"], answer:0 },
                { q:"Atomic number 1?", options:["Helium","Hydrogen","Oxygen"], answer:1 },
                { q:"Discovered penicillin?", options:["Curie","Fleming","Tesla"], answer:1 },
                { q:"Atmosphere main gas?", options:["Oxygen","CO2","Nitrogen"], answer:2 },
                { q:"Powerhouse of cell?", options:["Mitochondria","Nucleus","Ribosome"], answer:0 },
                { q:"Chemical formula of salt?", options:["KCl","CaCl2","NaCl"], answer:2 },
                { q:"Who wrote 1984?", options:["Huxley","George Orwell","Twain"], answer:1 },
                { q:"Smallest country?", options:["Monaco","San Marino","Vatican City"], answer:2 },
                { q:"DNA stands for?", options:["Deoxyribonucleic Acid","Dynamic Acid","Data Acid"], answer:0 },
                
                { q:"Hardest natural substance?", options:["Gold","Diamond","Iron"], answer:1 },
                { q:"Unit of electric current?", options:["Volt","Ampere","Watt"], answer:1 },
                { q:"Capital of Canada?", options:["Toronto","Vancouver","Ottawa"], answer:2 },
                { q:"Who developed first computer?", options:["Babbage","Turing","Neumann"], answer:0 },
                { q:"Which planet has most moons?", options:["Earth","Mars","Saturn"], answer:2 },
                { q:"Largest internal organ?", options:["Heart","Liver","Lungs"], answer:1 },
                { q:"Heaviest naturally occurring element?", options:["Gold","Lead","Uranium"], answer:2 },
                { q:"Which gas causes acid rain?", options:["SO2","Oxygen","Nitrogen"], answer:0 },
                { q:"Capital of Brazil?", options:["Rio","Brasilia","Sao Paulo"], answer:1 },
                { q:"First Nobel Prize year?", options:["1910","1901","1890"], answer:1 },
            
                { q:"Which layer protects from UV?", options:["Troposphere","Mesosphere","Ozone"], answer:2 },
                { q:"Which scientist discovered gravity?", options:["Newton","Einstein","Galileo"], answer:0 },
                { q:"Which country has most volcanoes?", options:["Japan","USA","Indonesia"], answer:2 },
                { q:"Which is SI unit of force?", options:["Pascal","Newton","Joule"], answer:1 },
                { q:"Which is largest mammal?", options:["Elephant","Rhino","Blue Whale"], answer:2 },
                { q:"Which metal rusts?", options:["Iron","Gold","Silver"], answer:0 },
                { q:"Which blood type is universal donor?", options:["AB+","O-","A+"], answer:1 },
                { q:"Which planet is hottest?", options:["Mars","Venus","Mercury"], answer:1 },
                { q:"Which is hardest rock?", options:["Marble","Limestone","Granite"], answer:2 },
                { q:"Which ocean is smallest?", options:["Arctic","Indian","Atlantic"], answer:0 }
                ]
    },

    movies: {
        easy: [
           
                { q:"Who played Iron Man?", options:["Chris Evans","Tom Holland","Robert Downey Jr."], answer:2 },
                { q:"Which movie has Elsa?", options:["Frozen","Moana","Tangled"], answer:0 },
                { q:"Who is Batman?", options:["Clark Kent","Bruce Wayne","Peter Parker"], answer:1 },
                { q:"Shrek color?", options:["Blue","Green","Red"], answer:1 },
                { q:"Minions appear in?", options:["Cars","Toy Story","Despicable Me"], answer:2 },
                { q:"Spider-Man real name?", options:["Peter Parker","Tony Stark","Steve Rogers"], answer:0 },
                { q:"Lightning McQueen movie?", options:["Planes","Turbo","Cars"], answer:2 },
                { q:"Wizard school movie?", options:["Percy Jackson","Harry Potter","Hunger Games"], answer:1 },
                { q:"Captain America actor?", options:["Hemsworth","Downey","Chris Evans"], answer:2 },
                { q:"Jack Sparrow movie?", options:["Pirates of the Caribbean","Aladdin","Moana"], answer:0 },
                
                { q:"Talking lion movie?", options:["Madagascar","The Lion King","Zootopia"], answer:1 },
                { q:"Woody is from?", options:["Frozen","Toy Story","Cars"], answer:1 },
                { q:"Hulk real name?", options:["Tony Stark","Clint Barton","Bruce Banner"], answer:2 },
                { q:"Main character in Moana?", options:["Moana","Elsa","Ariel"], answer:0 },
                { q:"Black Panther country?", options:["Asgard","Atlantis","Wakanda"], answer:2 },
                { q:"Who is Superman?", options:["Bruce Wayne","Clark Kent","Barry Allen"], answer:1 },
                { q:"Which movie has Olaf?", options:["Coco","Up","Frozen"], answer:2 },
                { q:"Which movie has dinosaurs?", options:["Jurassic Park","Titanic","Avatar"], answer:0 },
                { q:"Which movie has Buzz Lightyear?", options:["Cars","Toy Story","Up"], answer:1 },    
                { q:"Which movie features Nemo?", options:["Shrek","Finding Nemo","Cars"], answer:1 },
                
                { q:"Which movie has Simba?", options:["Tarzan","Aladdin","The Lion King"], answer:2 },
                { q:"Which movie has Lightning?", options:["Cars","Frozen","Coco"], answer:0 },
                { q:"Which superhero uses a hammer?", options:["Iron Man","Batman","Thor"], answer:2 },
                { q:"Which movie has a genie?", options:["Moana","Aladdin","Frozen"], answer:1 },
                { q:"Which movie features a clownfish?", options:["Up","Cars","Finding Nemo"], answer:2 },
                { q:"Which movie has a snowman?", options:["Frozen","Shrek","Cars"], answer:0 },
                { q:"Which movie features talking toys?", options:["Moana","Toy Story","Coco"], answer:1 },
                { q:"Which hero wears red and gold suit?", options:["Thor","Iron Man","Hulk"], answer:1 },
                { q:"Which movie has Rapunzel?", options:["Frozen","Moana","Tangled"], answer:2 },
                { q:"Which movie has talking cars?", options:["Cars","Up","Coco"], answer:0 }

                ],

        medium: [

                { q:"Director of Titanic?", options:["Nolan","Spielberg","James Cameron"], answer:2 },
                { q:"Who directed Inception?", options:["Christopher Nolan","Cameron","Spielberg"], answer:0 },
                { q:"Best Picture 2020?", options:["1917","Parasite","Joker"], answer:1 },
                { q:"Joker actor (2019)?", options:["Ledger","Joaquin Phoenix","Nicholson"], answer:1 },
                { q:"Director of Jurassic Park?", options:["Cameron","Jackson","Steven Spielberg"], answer:2 },
                { q:"Deadpool actor?", options:["Ryan Reynolds","Hugh Jackman","Evans"], answer:0 },
                { q:"Hermione actress?", options:["Emma Stone","Lawrence","Emma Watson"], answer:2 },
                { q:"Dream within dream movie?", options:["Matrix","Inception","Interstellar"], answer:1 },
                { q:"Pixar movie about emotions?", options:["Up","Coco","Inside Out"], answer:2 },
                { q:"Director of Avatar?", options:["James Cameron","Nolan","Spielberg"], answer:0 },
                
                { q:"Movie with DeLorean?", options:["Transformers","Back to the Future","Fast & Furious"], answer:1 },
                { q:"Katniss Everdeen series?", options:["Divergent","Hunger Games","Maze Runner"], answer:1 },
                { q:"Neo actor?", options:["Tom Cruise","Matt Damon","Keanu Reeves"], answer:2 },
                { q:"LOTR director?", options:["Peter Jackson","Nolan","Cameron"], answer:0 },
                { q:"Which MCU movie introduced Black Panther?", options:["Iron Man","Thor","Civil War"], answer:2 },
                { q:"Who played Jack in Titanic?", options:["Brad Pitt","Leonardo DiCaprio","Tom Cruise"], answer:1 },
                { q:"Which movie features Pandora?", options:["Titanic","Jaws","Avatar"], answer:2 },
                { q:"Which movie has Thanos?", options:["Avengers","Batman","Superman"], answer:0 },
                { q:"Which movie won 11 Oscars (tie)?", options:["Joker","Titanic","Frozen"], answer:1 },
                { q:"Who directed The Dark Knight?", options:["Zack Snyder","Christopher Nolan","Cameron"], answer:1 },
                
                { q:"Which movie has Andy Dufresne?", options:["Titanic","Gladiator","Shawshank Redemption"], answer:2 },
                { q:"Which movie features Maximus?", options:["Gladiator","Troy","300"], answer:0 },
                { q:"Which movie has Forrest Gump?", options:["Titanic","Avatar","Forrest Gump"], answer:2 },
                { q:"Which movie features dinosaurs on island?", options:["King Kong","Jurassic Park","Jaws"], answer:1 },
                { q:"Which movie features Pandora?", options:["Coco","Up","Avatar"], answer:2 },
                { q:"Which movie features Simba?", options:["The Lion King","Aladdin","Shrek"], answer:0 },
                { q:"Which movie has Joker and Batman?", options:["Avengers","The Dark Knight","Matrix"], answer:1 },
                { q:"Which movie is about boxing underdog?", options:["Creed","Rocky","Ali"], answer:1 },
                { q:"Which movie features hobbits?", options:["Harry Potter","Narnia","Lord of the Rings"], answer:2 },
                { q:"Which movie has space ranger Buzz?", options:["Toy Story","Up","Cars"], answer:0 }

                ],
           
        hard: [

                { q:"First MCU movie?", options:["Thor","Hulk","Iron Man"], answer:2 },
                { q:"Star Wars composer?", options:["John Williams","Zimmer","Elfman"], answer:0 },
                { q:"First Oscar Best Picture winner?", options:["Sunrise","Wings","Jazz Singer"], answer:1 },
                { q:"Gandalf actor?", options:["Weaving","Ian McKellen","Lee"], answer:1 },
                { q:"Original Star Wars year?", options:["1980","1983","1977"], answer:2 },
                { q:"Schindler's List director?", options:["Spielberg","Cameron","Scorsese"], answer:0 },
                { q:"Woody voice actor?", options:["Tim Allen","Chris Pratt","Tom Hanks"], answer:2 },
                { q:"Joker actor in Dark Knight?", options:["Phoenix","Heath Ledger","Nicholson"], answer:1 },
                { q:"One Ring franchise?", options:["Harry Potter","Narnia","Lord of the Rings"], answer:2 },
                { q:"Pulp Fiction director?", options:["Quentin Tarantino","Spielberg","Scorsese"], answer:0 },
                
                { q:"Which movie has Voldemort?", options:["Narnia","Harry Potter","Percy Jackson"], answer:1 },
                { q:"First animated Best Picture nominee?", options:["Shrek","Beauty and the Beast","Frozen"], answer:1 },
                { q:"Which movie features Rose DeWitt Bukater?", options:["Avatar","Coco","Titanic"], answer:2 },
                { q:"Which movie features HAL 9000?", options:["2001: A Space Odyssey","Matrix","Avatar"], answer:0 },
                { q:"Which movie won Best Picture 1994?", options:["Pulp Fiction","Shawshank","Forrest Gump"], answer:2 },
                { q:"Who directed The Godfather?", options:["Scorsese","Francis Ford Coppola","Spielberg"], answer:1 },
                { q:"Which movie features Travis Bickle?", options:["Joker","Godfather","Taxi Driver"], answer:2 },
                { q:"Which movie features Tyler Durden?", options:["Fight Club","Matrix","Inception"], answer:0 },
                { q:"Which movie features Joker 1989?", options:["Joker","Batman","Dark Knight"], answer:1 },
                { q:"Which movie features Agent Smith?", options:["Avatar","Matrix","Gladiator"], answer:1 },
                
                { q:"Which movie features Vito Corleone?", options:["Scarface","Casino","The Godfather"], answer:2 },
                { q:"Which movie features Jack Torrance?", options:["The Shining","It","Halloween"], answer:0 },
                { q:"Which movie features Ellen Ripley?", options:["Terminator","Predator","Alien"], answer:2 },
                { q:"Which movie features Marty McFly?", options:["Avatar","Back to the Future","Cars"], answer:1 },
                { q:"Which movie features John Wick?", options:["Matrix","Gladiator","John Wick"], answer:2 },
                { q:"Which movie features Tony Montana?", options:["Scarface","Godfather","Casino"], answer:0 },
                { q:"Which movie features Indiana Jones?", options:["Tomb Raider","Raiders of the Lost Ark","Jumanji"], answer:1 },
                { q:"Which movie features Neo?", options:["Avatar","Matrix","Titanic"], answer:1 },
                { q:"Which movie features The Terminator?", options:["Alien","Predator","Terminator"], answer:2 },
                { q:"Which movie features Bruce Willis as John McClane?", options:["Die Hard","Lethal Weapon","Rambo"], answer:0 }

                ]
                }
    };

let currentQuestion = 0;
let score = 0;
let quizSet = [];
let currentTab = "quiz";

if (window.location.pathname.includes("quiz.html")) {

    let selectedCategory = localStorage.getItem("category");
    let selectedDifficulty = localStorage.getItem("difficulty");

    if (!selectedCategory || !selectedDifficulty) {
        window.location.href = "index.html";
    } else {
        quizSet = [...questions[selectedCategory][selectedDifficulty]]
            .sort(() => Math.random() - 0.5)
            .slice(0, 15);

        currentQuestion = 0;
        score = 0;

        loadQuestion();
    }
}

function goToSelection() {
    const username = document.getElementById("username")?.value.trim();

    if (!username) {
        alert("Please enter your name!");
        return;
    }

    localStorage.setItem("username", username);
    window.location.href = "select.html";
}

function goQuiz() {
    window.location.href = "quizcategory.html";
}

function goSnake() {
    window.location.href = "snake.html";
}

function goLeaderboard() {
    window.location.href = "leaderboard.html";
}

function startCategory(category) {
    localStorage.setItem("category", category);
    window.location.href = "difficulty.html";
}

function selectDifficulty(level) {
    localStorage.setItem("difficulty", level);
    window.location.href = "quiz.html";
}

function goHome() {
    localStorage.removeItem("category");
    localStorage.removeItem("difficulty");
    window.location.href = "index.html";
}

function loadQuestion() {

    if (currentQuestion >= quizSet.length) {
        finishQuiz();
        return;
    }

    let q = quizSet[currentQuestion];

    document.getElementById("question").innerText = q.q;

    for (let i = 0; i < 3; i++) {
        document.getElementById("opt" + i).innerText = q.options[i];
    }

    updateProgress();
    updateQuestionCount();
}

function checkAnswer(index) {

    if (index === quizSet[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
}

function updateProgress() {
    let percent = (currentQuestion / quizSet.length) * 100;
    document.getElementById("progressBar").style.width = percent + "%";
}

function updateQuestionCount() {
    const el = document.getElementById("questionCount");
    if (el) el.innerText = (currentQuestion + 1) + " / " + quizSet.length;
}

function finishQuiz() {

    let name = localStorage.getItem("username") || "Player";
    let selectedCategory = localStorage.getItem("category");
    let selectedDifficulty = localStorage.getItem("difficulty");

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    let existing = leaderboard.find(p =>
        p.name === name &&
        p.category === selectedCategory &&
        p.game === "quiz"
    );

    if (existing) {
        if (score > existing.score) {
            existing.score = score;
            existing.correct = score;
            existing.totalQuestions = quizSet.length;
        }
    } else {
        leaderboard.push({
            name: name,
            score: score,
            correct: score,
            totalQuestions: quizSet.length,
            category: selectedCategory,
            difficulty: selectedDifficulty,
            game: "quiz"
        });
    }

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    window.location.href = "leaderboard.html";
}

function showLeaderboard(type = "quiz") {

    currentTab = type;

    const table = document.getElementById("leaderboardTable");
    const podium = document.getElementById("podium");

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    table.innerHTML = "";
    if (podium) podium.innerHTML = "";

    let filtered = leaderboard.filter(player =>
        type === "snake"
            ? player.game === "snake"
            : player.game === "quiz" || !player.game
    );

    if (filtered.length === 0) {
        table.innerHTML = `<tr><td colspan="3">No data yet 🚀</td></tr>`;
        return;
    }

    // Sort by score
    filtered.sort((a, b) => b.score - a.score);

    if (podium) {

        const order = [1, 0, 2]; // second, first, third

        order.forEach((pos) => {

            if (!filtered[pos]) return;

            let player = filtered[pos];

            let card = document.createElement("div");
            card.className = "podium-card";

            if (pos === 0) card.classList.add("first");
            if (pos === 1) card.classList.add("second");
            if (pos === 2) card.classList.add("third");

            let crownClass = "crown-1";
            let crown = "👑";

            if (pos === 1) {
                crown = "👑";
                crownClass = "crown-2";
            }
            if (pos === 2) {
                crown = "👑";
                crownClass = "crown-3";
            }

            card.innerHTML = `
                <div class="crown ${crownClass}">${crown}</div>
                <div class="player-name">${player.name}</div>
                <div class="score">${player.score}</div>
                <div class="rank">${pos + 1}</div>
            `;

            podium.appendChild(card);
        });
    }

    filtered.forEach((player, index) => {

        let row = document.createElement("tr");

        let medal = "";
        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${medal} ${player.name}</td>
            <td>${player.score}</td>
        `;

        if (index === 0) row.classList.add("gold");
        if (index === 1) row.classList.add("silver");
        if (index === 2) row.classList.add("bronze");

        table.appendChild(row);
    });
}

function clearLeaderboard() {
    if (confirm("Clear leaderboard?")) {
        localStorage.removeItem("leaderboard");
        showLeaderboard(currentTab);
    }
}

if (window.location.pathname.includes("leaderboard.html")) {
    showLeaderboard("quiz");
}

document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("game");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const box = 20;

    let snake, direction, food, scoreSnake, game;
    let isPaused = false;
    let isGameOver = false;

    const scoreEl = document.getElementById("score");
    const highScoreEl = document.getElementById("highScore");
    const pauseBtn = document.getElementById("pauseBtn");
    const restartBtn = document.getElementById("restartBtn");
    const gameOverScreen = document.getElementById("gameOverScreen");
    const playAgainBtn = document.querySelector(".play-again");

    let highScore = localStorage.getItem("snakeHighScore") || 0;
    highScoreEl.innerText = highScore;

    const eatSound = new Audio("sounds/Eat_sound.mp3");
    const gameOverSound = new Audio("sounds/Game_Over.mp3");
    const moveSound = new Audio("sounds/Move_sound.mp3");

    eatSound.volume = 0.4;
    gameOverSound.volume = 0.5;
    moveSound.volume = 0.08;

    function playSound(sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }

    document.addEventListener("keydown", () => {
        eatSound.play().then(() => eatSound.pause()).catch(()=>{});
    }, { once: true });


    function initGame() {
        snake = [{ x: 9 * box, y: 9 * box }];
        direction = "RIGHT";
        scoreSnake = 0;
        isPaused = false;
        isGameOver = false;

        scoreEl.innerText = scoreSnake;
        food = randomFood();
        gameOverScreen.style.display = "none";
    }

    function randomFood() {
        return {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    }

    document.addEventListener("keydown", function (e) {

        if (e.key.toLowerCase() === "p") {
            togglePause();
            return;
        }

        if (isPaused || isGameOver) return;

        let moved = false;

        if (e.key === "ArrowLeft" && direction !== "RIGHT") {
            direction = "LEFT"; moved = true;
        }
        if (e.key === "ArrowUp" && direction !== "DOWN") {
            direction = "UP"; moved = true;
        }
        if (e.key === "ArrowRight" && direction !== "LEFT") {
            direction = "RIGHT"; moved = true;
        }
        if (e.key === "ArrowDown" && direction !== "UP") {
            direction = "DOWN"; moved = true;
        }

        if (moved) playSound(moveSound);
    });

    function startGame() {
        clearInterval(game);
        game = setInterval(draw, 100);
    }

    function togglePause() {
        if (isGameOver) return;

        if (isPaused) {
            startGame();
        } else {
            clearInterval(game);
        }

        isPaused = !isPaused;
    }

    pauseBtn.onclick = togglePause;
    restartBtn.onclick = restartGame;
    if (playAgainBtn) playAgainBtn.onclick = restartGame;

    function restartGame() {
        initGame();
        startGame();
    }

    function collision(head, array) {
        return array.some(seg => head.x === seg.x && head.y === seg.y);
    }

    function draw() {

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 400, 400);

        snake.forEach((seg, i) => {
            ctx.fillStyle = i === 0 ? "#00f7ff" : "#00ff9d";
            ctx.fillRect(seg.x, seg.y, box, box);
        });

        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, box, box);

        let headX = snake[0].x;
        let headY = snake[0].y;

        if (direction === "LEFT") headX -= box;
        if (direction === "RIGHT") headX += box;
        if (direction === "UP") headY -= box;
        if (direction === "DOWN") headY += box;

        if (headX === food.x && headY === food.y) {

            playSound(eatSound);

            scoreSnake++;
            scoreEl.innerText = scoreSnake;

            if (scoreSnake > highScore) {
                highScore = scoreSnake;
                localStorage.setItem("snakeHighScore", highScore);
                highScoreEl.innerText = highScore;
            }

            food = randomFood();
        } else {
            snake.pop();
        }

        const newHead = { x: headX, y: headY };

        if (
            headX < 0 || headY < 0 ||
            headX >= 400 || headY >= 400 ||
            collision(newHead, snake)
        ) {
            clearInterval(game);
            isGameOver = true;

            playSound(gameOverSound);

            gameOverScreen.style.display = "flex";

            let name = localStorage.getItem("username") || "Player";
            let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

            let existing = leaderboard.find(p => p.name === name && p.game === "snake");

            if (existing) {
                if (scoreSnake > existing.score) {
                    existing.score = scoreSnake;
                }
            } else {
                leaderboard.push({
                    name: name,
                    score: scoreSnake,
                    game: "snake"
                });
            }

            localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        }

        snake.unshift(newHead);
    }

    initGame();
    startGame();
});