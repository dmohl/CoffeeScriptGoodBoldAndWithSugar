(function() {
  var Dog, emma;
  Dog = (function() {
    var offset;
    offset = 7;
    function Dog(name, age) {
      this.name = name;
      this.age = age;
    }
    Dog.prototype.toString = function() {
      return "" + this.name + " is " + (this.age * offset) + " years old.";
    };
    return Dog;
  })();
  emma = new Dog("Emma", 9);
  console.log(emma.toString());
}).call(this);
