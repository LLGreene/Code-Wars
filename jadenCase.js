String.prototype.toJadenCase = function () {
  return this.split(' ').map(i => i = i[0].toUpperCase() + i.slice(1)).join(' ')
}

console.log(jadenCase("How can mirrors be real if our eyes aren't real"));
