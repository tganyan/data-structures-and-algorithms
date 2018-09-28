'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.cats = [];
    this.dogs = [];
  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      this.cats.push(animal);
      return undefined;
    }
    this.dogs.push(animal);
    return undefined;
  }

  dequeue(pref) {
    let longestWait = 0;
    let adoptedPet = null;

    if (this.cats.length >= this.dogs.length) {
      longestWait = this.cats[0]; // eslint-disable-line
    } else {
      longestWait = this.dogs[0]; // eslint-disable-line
    }

    if (pref !== 'cat' && pref !== 'dog') {
      return longestWait;
    }

    if (pref === 'cat') {
      adoptedPet = this.cats[0]; // eslint-disable-line
      return adoptedPet;
    }
    adoptedPet = this.dogs[0]; // eslint-disable-line
    return adoptedPet;
  }
}
