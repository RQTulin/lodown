'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Function takes in any value as an argument and returns that value unchanged.
 * 
 * @param   {any value} value: Function takes in any value as an input.
 * @returns {any value} value: Function returns the input value unchanged.
 */

 function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Function takes in any value as an argument and returns that type of value as a string.
 * 
 * @param   {any value} value: Function takes in any value as an input.
 * @return {any value} value: Function returns the input value to the type of value as a string.
 */

 function typeOf(value){

    if (Array.isArray(value)){ 
        return "array";
      }
      else if(value === null){ 
        return "null";
      } 
      else if (value instanceof Date){
            return "date";
      } else {
        return typeof value;
      
    }  
    
}
module.exports.type0f = typeOf;


/**
 * first: Function returns the first x number of elements of an input array as determined by an input number. 
 * 
 * @param {Array} collection: Function takes in an input of an array.
 * @param {number} number: Function takes in a number. 
 * 
 * @return {Array} collection: If array IS NOT an array, this function will return an empty array/ square bracket.
 * If an input number IS NOT given or a number, this function will return just the first element of an array,
 * otherwise it will return just the first number items of array.
 */

function first(array, number){

  if (!Array.isArray(array)|| number < 0) {
    return [];
    } if (isNaN(number) || number === undefined)  {
        return array[0];
        }else if (number > array.length ) {
            return array;
               } else {
                  return array.slice(array, number);
  
  }  
}
module.exports.first = first;


/**
 * last: Function returns the last x number of elements of an input array as determined by an input number.
 * 
 * @param {Array} collection: Function takes in an input of an array.
 * @param {number} number: Function takes in a number. 
 * 
 * @return {Array}: If array IS NOT an array, this function will return an empty array/ square bracket.
 * If an input number IS NOT given or a number, this function will return just the last element of an array,
 * otherwise it will return just the last number items of array.
 */

  function last(array, number){
  if (!Array.isArray(array)|| number < 0) {
    return [];
    } if (isNaN(number) || number === undefined)  {
        return array[array.length - 1];
          }else if (number > array.length ) {
            return array;
              }else {
                return array.slice(array.length -2); 
    }   
  }
 module.exports.last = last;


/**
 * indexOf: Function returns the index in the array of an input value.
 * 
 * @param {Array} collection: Function takes in an input of an array.
 * @param {any value}  value: Function takes in a value.
 * 
 * @return {number} : If the input value appers in the input array, this function will return the index
 * of the first occurence of the input value. If the input value IS NOT in the input array, this function
 * will return -1.
 */

 function indexOf(array, value){
  //iterate through the input array using for loop
  //determine if the current value were iterating through matches the input value

    for (var i = 0; i < array.length; i++){
      if(array[i] === value){
        return i;
      }
    }
        return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Function returns true if an array contains of an input value, otherwise false.
 * 
 * @param {Array} collection: Function takes in an input of an array.
 * @param {any value}  value: Function takes in a value.
 * 
 * @return {true or false} : If the input value appears in the input array, this function will return true.
 * If the input value IS NOT is not in the unput array, this function will return false.
 */

function contains(array, value){
  
  var result = array.includes(value) || value === undefined ? true : false
  return result ;
  
}
module.exports.contains = contains;


/**
 * unique: Function returns a new array of all elements of an input array with duplicates removed.
 * 
 * @param {Array} collection: Function takes an input of an array.
 * @return {Array}: Function returns a new array of all elements from the input array with duplicates
 * removed using .indexOf.
 */


function unique(array){

var uniqueArray = [];
  for (var i=0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
    return uniqueArray;
}
module.exports.unique = unique;


/**
 * filter: Design to filter values in an array. Takes an array and passes each value in the array 
 * through a func Function. The func Function returns true if it passes the test, false otherwise.
 *
 * @param {Array} collection: The collection to filter.
 * @param {function} func: The function to be applied to each value of an array. The func Function 
 * must return a Boolean on some logic which will test the value given.

 * @return {Array} : An array containing filtered collection values that passed the func function. 
 */


 function filter(array, func){

    var newArr = [];

      for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
        newArr.push(array[i]);
      }
    }
  return newArr;
 }
 module.exports.filter = filter;


/**
 * reject: Design to filter values in an array. Takes an array and passes each value in the array 
 * through a func Function. The func Function returns false if does not passed the test.

 * @param {Array} collection: Takes an input of an array.
 * @param {function} func: The function to be applied to each value in the array. 
 * 
 * @return {Array} : Function returns new array of all elements if calling function is false.
 */

 function reject(array, func){

  var newArr = [];

      for(var i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
        newArr.push(array[i]);
      }
    }

  return newArr;
  }
 module.exports.reject = reject;


/**
 * partition: Design to loop over an array, and applies the func Function to each value of an array and returns
 *  an array that made up of two sub arrays.
 * 
 * @param {Array} collection: Takes an input of an array.
 * @param {function} func: The function to be applied to each value in the array.
 * 
 * @returns {Array}: Function returns new arrays that is made up of 2 sub arrays. The first sub array
 * contains all the value of an array for which the function returned something thruthy, while the second one 
 * contains all the value of an array which the function returned something falsy.
 */

 function partition(array, func) {
    var newArr = [];
    var rejectArr = [];
      for(let i = 0; i < array.length; i++) {
        if (func(array[i])) {
          newArr.push(array[i])
          } else 
            rejectArr.push(array[i]);
       }
          return [newArr, rejectArr]
  }
 module.exports.partition = partition;


/**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * func Function to each value in the collection. 
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The function to be applied to each value in the collection.
 * 
 * @return {Array} : Returns value of each function call added to the new array.
 */


 function map(collection, func){

    var newArr = [];
      //determine if the input collection is an array
    if(Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++) {
        //invoke func, passing in the current element, current index, and collection as arguments
        var result = func(collection[i], i, collection);// invoke callback function
          newArr.push(result);// or mapped.push(result)
  } 
    } else{ // else it's an object
        for(var key in collection){
          newArr.push(func(collection[key], key, collection));
          //or mapped.push(func(collection[i], i, collection))
      }
    }  
  return newArr;
  }
 module.exports.map = map;

/**
 * pluck: Pluck returns an array of every value from an object corresponding to an input property.
 * 
 * @param {array of object} collection: Function takes an input of an array.
 * @param {property} : Function takes in property. 
 * 
 * @return {Array}: Function returns an array containing the value of the property 
 * for every element in array using the _.map.
 */

 function pluck(array, property) {

    return _.map(array, function(x) {
        return x[property];
    });
   }
  module.exports.pluck = pluck;


/**
 * every: Intends to loop over a collection, Array or Object, and applies the 
 * test Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
 * 
 * @return {true or false}: If the return value of the calling function for every element
 * is TRUE, this function will return TRUE, if one of them returns false, this function will return FALSE. 
 * If the function is not provided, this function will also return TRUE if every element is truthy, otherwise
 * it will return FALSE.
 */

 function every(collection, test) {
    let result = true;
    if (test) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (!test(collection[i], i, collection)) {
                    result = false;
                }
            }
        } else {
            for (let key in collection) {
                if(!test(collection[key], key, collection)) {
                    result = false;
                }
            }
        } 
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    result = false;
                }
            }
        } else {
            for (let key in collection) {
                if (!collection[key]) {
                    result = false;
                }
            }
        }
    }
    return result;
   }
 module.exports.every = every;


/**
 * some:  Intends to loop over a collection, Array or Object, and applies the 
 * test Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
 * 
 * @return {true or false}: If the return value of the calling function for at least one element
 * is TRUE, this function will return TRUE, if all element returns false, this function will return FALSE. 
 * If the function is not provided, this function will also return TRUE if at least one element is truthy,
 * otherwise it will return FALSE.
 */

 function some(collection, test) {
    let answer = false;
    if (test) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (test(collection[i], i, collection)) {
                    answer = true;
                }
            }
        } else {
            for (let key in collection) {
                if(test(collection[key], key, collection)) {
                    answer = true;
                }
            }
        } 
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) {
                    answer = true;
                }
            }
        } else {
            for (let key in collection) {
                if (collection[key]) {
                    answer = true;
                }
            }
        }
    }
    return answer;
  }
 module.exports.some = some;


/**
 * reduce: Design to loops through an array and invokes a callback function on each element in the
 * array and consolidates the value from each iteration to the seed or accumulator.
 * 
 * @param {Array} collection: Set of data that being reduced. 
 * @param {Function} func: Function that iterate over each element in the array.
 * @param {accumulator} seed: It accumulates the value of each iteration.
 * 
 * @return {Array or Accumulator}: Function returns the final accumulated value from passing each element
 *  in the array through the function  "func".
 */

 function reduce(array, func, seed){
  //determine if no see was inputted
      if (seed !== undefined){
        var accumulator = seed;// accumulator = 0
        //iteration though input array
        for(var i = 0; i < array.length; i++){
          accumulator = func(accumulator, array[i], i, array); // func(0, 1)
        }
  
  
        }else{ //else seed was not provided
          accumulator = array[0];
          for (var i = 1; i < array.length; i++){
            accumulator = func(accumulator, array[i], i, array);
          }
      }
  
  return accumulator;
  
  }
  module.exports.reduce = reduce;


/**
 * extend: Intends to copy properties from second object "obj2" to first object "obj1" using spread operator. 
 * 
 * @param {Object} collection: Function takes in an Object as an input.
 * @param {Object} collection: Function takes in an Object as an input.
 * 
 * @return {Object}: If more objects are passed in, function will copy their properties
 * to first object "obj1", in the order they are passed in. Function returns the updated first object "obj1".
 */

 function extend(obj1, ...obj2){

  return Object.assign(obj1, ...obj2);
  
}
module.exports.extend = extend;
   




  