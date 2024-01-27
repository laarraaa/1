var numbers = [34, 65, 67, 89,8,9,23,21,10,23,28]
for(var i =0; i<numbers.length; i++){
    if (numbers[i] %2 === 0){
        console.log(numbers[i])
    }
}

var films = {
    film1:{
        name: 'The Beekeeper',
        genre: 'action movie, thriller',
        premiere_date: '11.01.24',
        duration: '105 minutes',
        main_actors: 'Jason Statham, Emmy Raver-Lampman, Bobby Naderi, Josh Hutcherson, Jeremy Irons, David Witts, Michael Epp, Taylor James, Phylicia Rashad, Gemma Redgrave',
        ticket_price: '430 som',
        dimension: '3D'
    },
    film2:{
        name: 'The Creeping',
        genre: 'horror',
        premiere_date: '11.01.24',
        duration: '94 minutes',
        main_actors: 'Rianne Steele, Sophie Thompson, Jonathan Nyathi, David Horovitch, Jane Lowe, Phillipa Peake, Thalia Blair, Peter McQueen, Denise Horan, Pauline Hooper',
        ticket_price: '290 som',
        dimension: '3D'
    },
    film3:{
        name: 'Dogman',
        genre: 'action movie',
        premiere_date: '31.12.23',
        duration: '113 minutes',
        main_actors: 'Caleb Landry, Jones , Christopher Denham, Clemens Schick, Michael Garza, JoJo T., Gibbs Avan, Strangel Lincoln, Powell William, Sciortino John, Charles Aguilar',
        ticket_price: '220 som',
        dimension: '3D'
    }
}
console.log(films)
var number = +prompt('Enter number')
switch (number){
    case 1:
        number = '|'
        break;
    case 2:
        number = '||'
        break;
    case 3:
        number = '|||'
        break;
    case 4:
        number = '|V'
        break;
    case 5:
        number = 'V'
        break;
    case 6:
        number = 'V|'
        break;
    case 7:
        number = 'V||'
        break;
    case 8:
        number = 'V|||'
        break;
    case 9:
        number = '|X'
        break;
    case 10:
        number = 'X'
        break
    case 11:
        number = 'X|'
        break
    case 12:
        number = 'X||'
        break
    case 13:
        number = 'X|||'
        break
    case 14:
        number = 'X|V'
        break
    case 15:
        number = 'XV'
        break
    default:
        console.warn('INVALID')
}
console.log(number)




