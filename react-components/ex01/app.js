const person = {
  name: 'Patricia',
  surname: 'Patras',
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

let arr = [];
console.warn(`
1.Folosind metoda map pe arrayul skills, returneaza si
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
2.Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
“Ma numesc {name} {surname} si am {age} ani.
`);

arr = person.friends.map(({ name, surname, age }) => {
  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(arr);

console.warn(`
3.Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
Diferenta de varsa dintre {friendName} si {personName} este {diff}
`);

arr = person.friends.map((friend) => {
  const { age } = friend;

  return `Diferenta de varsa dintre ${friend.name} si ${
    person.name
  } este de ${Math.abs(person.age - age)} ani`;
});
console.log(arr);

console.warn(`
4.Returneaza si afiseaza un array in care fiecare pozitie contine diferenta dintre varsta persoanei si lungimea cuvantului de pe arrayul skill
`);
arr = person.skills.map((skill) => {
  return Math.abs(skill.length - person.age);
});
console.log(arr);

console.warn(`
5.Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele cu prima si ultima litera mari.
`);
arr = person.skills.map((skill) => {
  const lastLetter = skill.slice(-1).toUpperCase();
  console.log(lastLetter);

  return skill.charAt(0).toUpperCase() + skill.slice(1, -1) + lastLetter;
});
console.log(arr);

console.warn(`
6.Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele inversate (exemplu: lmth)
`);

arr = person.skills.map((skill) => {
  return skill.split('').reverse().join('');
});
console.log(arr);

console.warn(`
7.Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”
`);
arr = person.friends.map((friend) => {
  const { name, age } = friend;
  return `${name} are ${age} ani.`;
});
console.log(arr);

console.warn(`
8.Folosind metoda map pe arrayul friends,
returneaza un array care contine numele inversat al prietenilor pe fiecare pozitie (exemplu: Stevenson Steven)
`);
arr = person.friends.map(({ name, surname }) => {
  return `${surname} ${name}`;
});
console.log(arr);

console.warn(`
9.Folosind metoda map pe arrayul friends,
returneaza un array care contine pe fiecare pozitie
diferenta dintre lungimea totala al numelui complet (fara spatii) si varsta prietenului de pe iteratie
`);
arr = person.friends.map(({ name, surname, age }) => {
  const friendFullNameLength = name.length + surname.length;

  return Math.abs(friendFullNameLength - age);
});
console.log(arr);

console.warn(`
10.Folosind metoda map pe arrayul skills returneaza un array care contine
diferenta dintre lungimea fiecarui skill si varsta prietenului
`);
// tre sa am un array de arrays
// [htlm.length - larry, htlm.length - steven, htlm.length - carol], [js.length - larry, js.length - steven, js.length - carol]
arr = person.skills.map((skill) => {
  const skillLength = skill.length;
  let skillAgeDif;
  let skillAgeDifArray;

  const friendsAgeArray = person.friends.map(({ age }) => {
    return age;
  });

  friendsAgeArray.forEach((age) => {
    skillAgeDif = Math.abs(skillLength - age);
  });

  return friendsAgeArray;

  // return Math.abs(skillLength - friendAge);
});
console.log(arr);

// .... nu imi iese.... HELP!!!!
// am ajuns pana aici si nu stiu daca e corect sau nu si cum sa continui
