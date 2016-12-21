(function () {

    angular.module('MemoryPalace').service('MemoryTestService', [

        function () {

            /*============ SERVICE DECLARATION ============*/

            var MemoryTestService = {};


            /*============ PRIVATE METHODS AND VARIABLES ============*/

            var memoryMap = {

                '00': 'Jar of Air',
                '01': 'Jar of Feathers',
                '02': 'Jar of Leaves',
                '03': 'Jar of Pops Cereal',
                '04': 'Jar of GrapeNuts Cereal',
                '05': 'Jar of Flour',
                '06': 'Jar of Dirt',
                '07': 'Jar of Sand',
                '08': 'Jar of Coins',
                '09': 'Jar of Gold Coins',

                '10': 'Pong',
                '11': 'Space Invader',
                '12': 'Pac Man',
                '13': 'Metroid',
                '14': 'Princess From Mario 2',
                '15': 'Sonic the Hedgehog',
                '16': 'Sub Zero : Mortal Kombat',
                '17': 'Mastermind : DOOM',
                '18': 'Master Chief: Halo',
                '19': 'Skull Military: Call of Duty',

                '20': 'Snake (no legs)',
                '21': 'Snail (one foot)',
                '22': 'Humans (two legs) ',
                '23': 'Dog with (three legs)',
                '24': 'Deer',
                '25': 'Starfish',
                '26': 'Ant',
                '27': 'Centipede',
                '28': 'Spider',
                '29': 'Millipede',

                '30': 'Sun',
                '31': 'Mercury',
                '32': 'Venus',
                '33': 'Earth',
                '34': 'Mars',
                '35': 'Jupiter',
                '36': 'Saturn',
                '37': 'Uranus',
                '38': 'Neptune',
                '39': 'Solar System',

                '40': 'Pea',
                '41': 'Blueberry',
                '42': 'Grape',
                '43': 'Tangerine',
                '44': 'Orange',
                '45': 'Grapefruit',
                '46': 'Jicima',
                '47': 'Cantelope',
                '48': 'Watermelon',
                '49': 'Giant Pumpkin',

                '50': 'Rhode Island',
                '51': 'Massachussettes',
                '52': 'Utah',
                '53': 'Colorado',
                '54': 'Nevada',
                '55': 'Arizona',
                '56': 'New Mexico',
                '57': 'California',
                '58': 'Texas',
                '59': 'Alaska',

                '60': 'Adri',
                '61': 'Kaiden',
                '62': 'Tina',
                '63': 'John',
                '64': 'Brandy',
                '65': 'Mike',
                '66': 'Flo',
                '67': 'Keith',
                '68': 'LaLa',
                '69': 'Papa Smoke',

                '70': 'Morgan Freeman',
                '71': 'Oprah',
                '72': 'Phil Dunphy',
                '73': 'Cam From Modern Family',
                '74': 'Jerry McQuire',
                '75': 'Michale Scott',
                '76': 'Dwight Schrute',
                '77': 'Walter White',
                '78': 'Underwood (Kevin Spacey)',
                '79': 'Hitler',

                '80': 'Marble',
                '81': 'Rubber Ball',
                '82': 'Golf Ball',
                '83': 'Billiard Ball (3)',
                '84': 'Baseball',
                '85': 'Football',
                '86': 'Soccer Ball',
                '87': 'Basketball',
                '88': 'Beach Volleyball',
                '89': 'Stability Ball',

                '90': 'Micro Machine',
                '91': 'Matchbox Car',
                '92': 'Remote Control Car',
                '93': 'Go Cart',
                '94': 'Golf Cart',
                '95': 'Smart Car',
                '96': 'Toyota Camry',
                '97': 'Ford 150',
                '98': 'Super Shuttle',
                '99': 'Motorhome'
            };


            /*============ SERVICE DEFINITION ============*/

            MemoryTestService


            /*============ LISTENERS ============*/

            /*============ SERVICE PASSBACK ============*/

            return MemoryTestService;
        }
    ]);

})();

