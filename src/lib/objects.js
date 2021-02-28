const createPerson = (name, age) => {
 return {name: name, age: age};

};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
return property in object;
};

const isOver65 = person => {
 return person.age > 65 ;
};

const getAges = people => {
  return people.map(people => people.age);
};

const findByName = (name, people) => {
 return people.find(people => people.name === name);
};

const findHondas = cars => {
return cars.filter(cars => cars.manufacturer === "Honda");
};

const averageAge = people => {
  let totalAges = 0;
  people.map(ageAv => (totalAges += ageAv.age));
  return totalAges/people.length;

};

const createTalkingPerson = (name, age) => {
  let introduction = {
    name: name,
    age: age,
    introduce: function(newPerson) {
    return "Hi " + newPerson + "," + " my name is " + name + " and I am " + age + "!"; }
    }
  return introduction;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
