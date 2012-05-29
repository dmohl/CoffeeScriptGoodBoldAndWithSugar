(function() {
  var applyAlgorithm, customAlgorithm, standardAlgorithm;
  standardAlgorithm = 2 * 2;
  customAlgorithm = 2 * 3;
  applyAlgorithm = function(someNumber, algorithm) {
    return someNumber * algorithm;
  };
  console.log("Standard algorithm result is \n" + (applyAlgorithm(2, standardAlgorithm)));
  console.log("Custom algorithm result is\n" + (applyAlgorithm(2, customAlgorithm)) + ".");
}).call(this);
