let teams = ['Galatasaray', 'Fenerbahçe', 'Beşiktaş']
console.log(teams[0]) //Galatasaray

let ages = [18, 23, 27, 30]
console.log(ages[2]) //27

let random = ['Rıdvan', 29, true]
console.log(random) //(3) ['Rıdvan', 29, true]


//Array methods
console.log(random.length) //3
console.log(teams.join(','))//Galatasaray,Fenerbahçe,Beşiktaş
console.log(teams.indexOf('Beşiktaş')) //2
console.log(teams.concat(['Trabzonspor'])) //(4) ['Galatasaray', 'Fenerbahçe', 'Beşiktaş', 'Trabzonspor']

let addAge=teams.push(40)
console.log(addAge) //(4) return array lenght 

let remove=teams.pop()
console.log(remove) //(40) remove last item and return remove item value

console.log(teams) //(3) ['Galatasaray', 'Fenerbahçe', 'Beşiktaş']


