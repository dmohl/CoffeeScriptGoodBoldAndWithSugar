class Dog
    offset = 7
    constructor: (@name, @age) ->
    toString: -> "#{@name} is #{@age*offset} years old."

emma = new Dog "Emma", 9
console.log emma.toString()
