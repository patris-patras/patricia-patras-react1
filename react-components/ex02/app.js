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

console.warn(`5.Folosind reduce, afiseaza suma anilor de nastere a persoanelor.
`);
message = person.friends.reduce((sumYears, { age }) => {
  const date = new Date().getFullYear();
  console.log(sumYears);
  return sumYears + date - age;
}, 0);
console.log(message);

console.warn(`6.Afiseaza fraza:
"Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ",
 doar daca varsta prietenului este impara
`);

message = person.friends.reduce((message, { name, age }) => {
  if (age % 2 === 0) {
    return `${message} Intre ${person.name} si ${name} este o diferenta de ${
      person.age - age
    } ani.`;
  }

  return message;
}, '');
console.log(message);

console.warn(`7.Folosind obiectul person si reduce,
afiseaza in consola un string care contine skillurile persoanei, separate prin virgula
`);
message = person.skills.reduce((message, skill, index) => {
  return `${message}${index === 0 ? '' : ', '} ${skill}`;
}, '');
console.log(message);

console.warn(`8.In mod similar, afiseaza skillurile care incep cu c
`);
message = person.skills.reduce((message, skill, index) => {
  if (skill.startsWith('c')) {
    return `${message}${index === 0 ? '' : ', '} ${skill}`;
  }
}, '');
console.log(message);

console.warn(`9.Folosind reduce afiseaza propozitia:
"Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."
`);
message = person.friends.reduce((message, { surname }, index, friends) => {
  const punctuation = index === friends.length - 1 ? '.' : ', ';

  return `${message} ${surname}${punctuation}`;
}, 'Numele de familie ale prietenilor mei sunt:');
console.log(message);

console.warn(`10.afiseaza numarul total de ani pe care il au persoanele din arrayul friends
`);
message = person.friends.reduce((message, { age }) => {
  return message + age;
}, 0);
console.log(message);

console.warn(`11. Folosind reduce, afiseaza suma anilor persoanelor.

`);
message = person.friends.reduce((sumYears, { age }) => {
  return sumYears + age;
}, 0);
console.log(message + person.age);

console.warn(`12.Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends
`);
message = person.friends.reduce((message, { age }, index) => {
  return `${message}${person.age - age}`;
}, '');
console.log(message);

console.warn(`13.Afiseaza fraza:
"Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ".
Repeta pentru tot arrayul friends`);

message = person.friends.reduce((message, { name, age }, index) => {
  return `${message} Intre ${person.name} si ${name} este o diferenta de ${
    person.age - age
  } ani`;
}, '');
console.log(message);
