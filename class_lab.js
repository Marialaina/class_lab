class BasicHost {
    constructor(name, occupation){
        this.name = name
        this.occupation = occupation
    }
        saySpecs(){
            console.log(`My name is ${this.name}. My occupation is ${this.occupation}`);
        }
}


// let host1 = new BasicHost("Charlie");
// let host2 = new BasicHost("Misa" );

// console.log(host1);
// console.log(host2);
// host1.saySpecs();
// host2.saySpecs();

const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

const hostArray = [];


for (let i = 0 ; i < 100 ; i++) {
    hostArray.push(new BasicHost(names[Math.floor(Math.random() * names.length)], occupations[[Math.floor(Math.random() * occupations.length)]]));
}


// console.log(hostArray);

// for (let i = 0; i < hostArray.length ; i++ ){
//    console.log(hostArray[i].saySpecs());
// }

// console.log(hostArray);






