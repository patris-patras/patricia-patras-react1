const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 34,
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

let arr = [];
console.warn(`
Folosind metoda map pe arrayul skills, returneaza si
afiseaza in consola un array in care fiecare consoana este scrisa cu litera mare (vocalele nu)
`);

arr = person.skills.map((skill) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const letterArray = skill.split('');
  const mutatedLetterArray = [];

  letterArray.forEach((letter) => {
    // mergea si cu map() in loc de forEach
    if (vowels.includes(letter)) {
      mutatedLetterArray.push(letter); // daca este vowel -> baga-l (push) in array ul nou
    } else {
      mutatedLetterArray.push(letter.toLocaleUpperCase());
    }
  });

  return mutatedLetterArray.join(''); // uneste la loc literele in 1 singur cuv
});
console.log(arr);

console.warn(`
Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
“Ma numesc {name} {surname} si am {age} ani.
`);

arr = person.friends.map(({ name, surname, age }) => {
  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(arr);

console.warn(`
Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
Diferenta de varsa dintre {friendName} si {personName} este {diff}
`);

arr = person.friends.map((friend) => {
  const { name, age } = friend;

  return `Diferenta de varsa dintre ${friend.name} si ${
    person.name
  } este de ${Math.abs(person.age - age)} ani`;
});
console.log(arr);

console.warn(`
Returneaza si afiseaza un array in care fiecare pozitie contine diferenta dintre varsta persoanei si lungimea cuvantului de pe arrayul skill
`);
arr = person.skills.map((skill) => {
  return Math.abs(skill.length - person.age);
});
console.log(arr);
