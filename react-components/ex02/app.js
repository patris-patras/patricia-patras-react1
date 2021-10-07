const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

let message = '';

console.warn(`Folosind obiectul person si reduce,
afiseaza in consola un string care contine skillurile de pe pozitiile pare ale arrayului, separate prin virgula
`);
message = person.skills.reduce((message, skill, index, skills) => {
  if (index % 2 !== 0) {
    return message;
  }

  return `${message}${index === 0 ? '' : ','}${skill}`;
}, '');
console.log(message);

console.warn(`In mod similar, afiseaza skillurile care NU incep cu j.
`);

message = person.skills.reduce((message, skill, index) => {
  if (skill.startsWith('j')) {
    return message;
  }

  return `${message}${index === 0 ? '' : ','}${skill}`;
}, '');
console.log(message);

console.warn(`Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.
`);
message = person.friends.reduce(
  (message, { name, surname }, index, friends) => {
    const punctuation = index === friends.length - 1 ? '.' : ', ';

    return `${message}${name} ${surname}${punctuation}`;
  },
  'Prietenii mei se numesc ',
);
console.log(message);

console.warn(`Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
doar daca varsta este mai mare sau egala cu 30 de ani.
`);
message = person.friends.reduce((sumYears, friend) => {
  const { age } = friend; // bestP: destructurez aici in functie cand sunt mai multe elem, altfel destructurez direct in parametrii

  return age >= 30 ? sumYears + age : sumYears;
}, 0);
console.log(message);

console.warn(`improv: afiseaza doar skillurile care incep cu j.
`);
let filteredSkills = person.skills.reduce((filteredSkills, skill) => {
  if (skill.startsWith('j')) {
    return filteredSkills;
  }

  filteredSkills.push(skill);

  return filteredSkills;
}, []);
console.log(filteredSkills);

console.warn(`Folosind reduce, afiseaza suma anilor de nastere a persoanelor.
`);

console.log(message);
