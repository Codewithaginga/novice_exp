let names = ['brian', 'mulamba', 'Eunitah'];

for (let i = 0; i < names.length; i++) {

    console.log('Happy valentine  ' + names[i] );
}


let dream = {
    city:"Jacaranda",
    cariour:"Kenya Airways",
    type: "Round Trip"
};


for ( let ls in dream ) {
    console.log(ls + ":" + dream[ls]);
}