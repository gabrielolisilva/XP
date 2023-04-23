function* getID(value) {
  let i = 0;
  while (i < value) {
    i++;
    yield i;
  }
}

let it = getID(2);
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
