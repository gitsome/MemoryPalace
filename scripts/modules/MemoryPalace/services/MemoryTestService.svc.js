(function () {

    angular.module('MemoryPalace').service('MemoryTestService', [

        function () {

            /*============ SERVICE DECLARATION ============*/

            var MemoryTestService = {};


            /*============ PRIVATE METHODS AND VARIABLES ============*/

            var pad = function (num, size) {
                var s = "000000000" + num;
                return s.substr(s.length-size);
            };

            var memoryGroups = [
                {
                    groupName: 'Jars of Materials, lightest to heaviest',
                    itemsMap: {
                        '00': 'Jar of Air',
                        '01': 'Jar of Feathers',
                        '02': 'Jar of Leaves',
                        '03': 'Jar of Pops Cereal',
                        '04': 'Jar of Rice Krispies',
                        '05': 'Jar of Pete Moss',
                        '06': 'Jar of Dirt',
                        '07': 'Jar of Sand',
                        '08': 'Jar of Coins',
                        '09': 'Jar of Gold Coins'
                    }
                },
                {
                    groupName: 'Video Games, primitive graphics to more advanced graphics',
                    itemsMap: {
                        '10': 'Pong',
                        '11': 'Space Invader',
                        '12': 'Pac Man',
                        '13': 'Metroid',
                        '14': 'Princess From Mario 2',
                        '15': 'Mastermind : DOOM',
                        '16': 'Sonic the Hedgehog',
                        '17': 'Sub Zero : Mortal Kombat',
                        '18': 'Master Chief: Halo',
                        '19': 'Ghost: Call of Duty'
                    }
                },
                {
                    groupName: 'Animals, number of legs, least to most (7 and 9 have substitutions)',
                    itemsMap: {
                        '20': 'Snake',
                        '21': 'Snail',
                        '22': 'Humans',
                        '23': 'Dog (3 legs)',
                        '24': 'Deer',
                        '25': 'Starfish',
                        '26': 'Ant',
                        '27': 'Centipede',
                        '28': 'Spider',
                        '29': 'Millipede'
                    }
                },
                {
                    groupName: 'Planets, by distance from sun',
                    itemsMap: {
                        '30': 'Sun',
                        '31': 'Mercury',
                        '32': 'Venus',
                        '33': 'Earth',
                        '34': 'Mars',
                        '35': 'Jupiter',
                        '36': 'Saturn',
                        '37': 'Uranus',
                        '38': 'Neptune',
                        '39': 'Solar System'
                    }
                },
                {
                    groupName: 'Fruits & Veggies, smallest to largest',
                    itemsMap: {
                        '40': 'Pea',
                        '41': 'Blueberry',
                        '42': 'Grape',
                        '43': 'Tangerine',
                        '44': 'Orange',
                        '45': 'Grapefruit',
                        '46': 'Jicima',
                        '47': 'Cantelope',
                        '48': 'Watermelon',
                        '49': 'Giant Pumpkin'
                    }
                },
                {
                    groupName: 'States I have been to, smallest to largest',
                    itemsMap: {
                        '50': 'Rhode Island',
                        '51': 'Massachussettes',
                        '52': 'Utah',
                        '53': 'Colorado',
                        '54': 'Nevada',
                        '55': 'Arizona',
                        '56': 'New Mexico',
                        '57': 'California',
                        '58': 'Texas',
                        '59': 'Alaska'
                    }
                },
                {
                    groupName: 'My family, youngest to oldest, alternating girl boy',
                    itemsMap: {
                        '60': 'Adri',
                        '61': 'Kaiden',
                        '62': 'Tina',
                        '63': 'John',
                        '64': 'Brandy',
                        '65': 'Mike',
                        '66': 'Jodi',
                        '67': 'Larry',
                        '68': 'Flo',
                        '69': 'Keith'
                    }
                },
                {
                    groupName: 'Well known people, most God like to most devil like',
                    itemsMap: {
                        '70': 'Morgan Freeman',
                        '71': 'Oprah',
                        '72': 'Phil Dunphy',
                        '73': 'Cam',
                        '74': 'Jerry McQuire',
                        '75': 'Dwight Schrute',
                        '76': 'Michael Scott',
                        '77': 'Walter White',
                        '78': 'Frank Underwood',
                        '79': 'Hitler'
                    }
                },
                {
                    groupName: 'Balls, smallest to largest',
                    itemsMap: {
                        '80': 'Marble',
                        '81': 'Rubber Ball',
                        '82': 'Golf Ball',
                        '83': 'Billiard Ball',
                        '84': 'Baseball',
                        '85': 'Football',
                        '86': 'Soccer Ball',
                        '87': 'Basketball',
                        '88': 'Beach Ball',
                        '89': 'Stability Ball'
                    }
                },
                {
                    groupName: 'Cars, smallest to largest',
                    itemsMap: {
                        '90': 'Micro Machine',
                        '91': 'Matchbox Car',
                        '92': 'Remote Control Truck',
                        '93': 'Go Cart',
                        '94': 'Golf Cart',
                        '95': 'Smart Car',
                        '96': 'Toyota Camry',
                        '97': 'Ford 150',
                        '98': 'Super Shuttle',
                        '99': 'Motorhome'
                    }
                }
            ];

            var groupNumber;
            var getItemDetails = function (numberString) {

                var groupNumber = numberString.charAt(0);

                return {
                    numberString: numberString,
                    groupNumber: groupNumber,
                    groupName: memoryGroups[groupNumber].groupName,
                    itemNumber: numberString.charAt(1),
                    title: memoryGroups[parseInt(groupNumber)].itemsMap[numberString],
                    groupItems: []
                };
            };

            var getItemByInteger = function (randomNum) {

                var numberString = pad(randomNum, 2);

                var item = getItemDetails(numberString);

                var minTen = Math.floor(randomNum / 10) * 10;
                var maxTen = minTen + 10;

                for (var i=minTen; i < maxTen; i++) {
                    item.groupItems.push(getItemDetails(pad(i, 2)));
                }

                return item;
            };


            /*============ SERVICE DEFINITION ============*/

            MemoryTestService.getRandomItem = function () {

                var randomNum = Math.round(Math.random()*99);
                return getItemByInteger(randomNum);
            };

            MemoryTestService.getItemByNumberString = function (numberString) {
                return getItemByInteger(parseInt(numberString));
            };


            /*============ LISTENERS ============*/

            /*============ SERVICE PASSBACK ============*/

            return MemoryTestService;
        }
    ]);

})();

