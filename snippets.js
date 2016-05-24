console.log('snippets');

console.log('Person Object\n\\\==========/')
var Person = function(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('Person: ', this.firstname, this.lastname);
}
Person('Rick', 'Gomez');

function logPerson(person) {
  console.log(person);
}
var boxer = new Person('Mike', 'Tyson');
logPerson(boxer.firstname + " " +boxer.lastname);
