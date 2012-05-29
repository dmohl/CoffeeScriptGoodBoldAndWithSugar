standardAlgorithm = 2 * 2
customAlgorithm = 2 * 3   

applyAlgorithm = (someNumber, algorithm) -> 
    someNumber * algorithm

console.log """Standard algorithm result is 
    #{applyAlgorithm 2, standardAlgorithm}"""

console.log """Custom algorithm result is
    #{applyAlgorithm 2, customAlgorithm}."""
