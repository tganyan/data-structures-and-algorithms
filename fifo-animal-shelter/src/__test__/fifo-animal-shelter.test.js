'use strict';

const AnimalShelter = require('../fifo-animal-shelter');
const Animal = require('../animal');

const shelter = new AnimalShelter();

const dog1 = new Animal();
dog1.type = 'dog';
dog1.name = 'chica';
const cat1 = new Animal();
cat1.type = 'cat';
cat1.name = 'gregor';
const dog2 = new Animal();
dog2.type = 'dog';
dog2.name = 'jazz';
const cat2 = new Animal();
cat2.type = 'cat';
cat2.name = 'hound';
const dog3 = new Animal();
dog3.type = 'dog';
dog3.name = 'kujo';
const cat3 = new Animal();
cat3.type = 'cat';
cat3.name = 'tabs';
const dog4 = new Animal();
dog4.type = 'dog';
dog4.name = 'snicklefritz';

shelter.enqueue(dog1);
shelter.enqueue(dog2);
shelter.enqueue(dog3);
shelter.enqueue(dog4);
shelter.enqueue(cat1);
shelter.enqueue(cat2);
shelter.enqueue(cat3);


describe('#fifo-animal-shelter.js', () => {

  test('is the correct animal type dequeued', () => {
    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);
    expect(shelter.dequeue('cat')).toEqual({ type: 'cat', name: 'gregor' });
  });

  test('is the correct animal order dequeued', () => {
    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);
    expect(shelter.dequeue('cat')).toEqual({ type: 'cat', name: 'gregor' });
    expect(shelter.dequeue('dog')).toEqual({ type: 'dog', name: 'chica' });
    expect(shelter.dequeue('dog')).toEqual({ type: 'dog', name: 'jazz' });
  });

  test('is the longest waiting animal dequeued when pref does not equal cat or dog', () => {
    expect(shelter.dequeue('donkey')).toEqual({ type: 'dog', name: 'chica' });
  });
});
