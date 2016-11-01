Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).

Example:

```
divisors(12); //should return [2,3,4,6]
divisors(25); //should return [5]
divisors(13); //should return "13 is prime"
```

You can assume that you will only get positive integers as inputs.

```js
function divisors(integer) {
  ... 
};
```


```
Test.assertSimilar(divisors(15), [3, 5]);
Test.assertSimilar(divisors(12), [2, 3, 4, 6]);
Test.assertEquals(divisors(13), "13 is prime");
```
