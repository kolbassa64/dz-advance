const array = [{id:1, name: 'vasya'}, {id:2, name: 'petya'},{id:2, name: 'olya'},{id:2, name: 'olya'}];
const mySet = new Set();
array.forEach(a => mySet.add(a.name))
