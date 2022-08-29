Array.prototype.customMap = function (cb) {
    // `this` keyword points to the array itself
    const result = [];
 
    for (let i = 0; i < this.length; i++) {
        result.push(
            cb(this[i],i,this)
        // (num) => num * 2)
        // (this[i], i, this) => num * 2)
            );
    }
    return result;
 }
 
 const mappedNumbers = [5,10,15].customMap((num) => num * 2);
 console.log("mappedNumbers",mappedNumbers); // [2, 4, 6]


//  const A =(a)=> { return a*2 }
//  console.log("A nin cavabi",A(10,25,55));
// //20
// Some Start
Array.prototype.customSome = function(cb){
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i],i,this)){
            return true;
        }   
    }
    return false;
}

const someNumbers = [1,2,5,"salam"].customSome(item =>item == 21)
console.log("someNumbers nin cavabi",someNumbers);

//Every start

Array.prototype.customEvery = function(cb){
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i],i,this)) return false;
    }
    return true;
}
const everyNumbers = [1,1,1,"1"].customEvery(item =>item == 1)
console.log("everyNumbers nin cavabi",everyNumbers);

//Filter start
Array.prototype.customFilter = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i],i,this)) {
            result.push(this[i])
        }
    }
    return result;
}

const filterNumbers = [4,3,9,'a'].customFilter(item =>item > 1)
console.log("filterNumbers nin cavabi",filterNumbers);

//Reducer start
Array.prototype.customReducer = function (cb, initial) {
    let value
    for (let i = 0; i < this.length - 1; i++) {
      if (i === 0) {
        value = arguments.length == 2 ? initial : this[0]
        value =
          arguments.length == 2 ? cb(value, this[i]) : cb(value, this[i + 1])
      } else {
        value =
          arguments.length == 2 ? cb(value, this[i]) : cb(value, this[i + 1])
      }
    }
    return arguments.length == 2 ? cb(value, this[this.length - 1]) : value
  }
  
  const numbers = [15.5, 2.3, 1.1, 4.7]
  function getSum(total, num) {
    return total + Math.round(num)
  }
  console.log('customReducer1', numbers.customReducer(getSum, 0))
  console.log('customReducer2', numbers.customReducer(getSum))

//ForEach start
Array.prototype.customForEach = function (cb) {
    for (let i = 1; i < this.length; i++) {
        cb(this[i],i,this)
    }
  }
const forEachNumbers = [4,3,9,5].customForEach((item) =>console.log(item *2))

//Flat start
Array.prototype.customFlat = function (depth) {
    let result = []
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        result = result.concat(this[i].customFlat(depth - 1))
      } else {
        result.push(this[i])
      }
    }
    return result
  }
  const customFlatArr = [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]], 1, [3, 8], 2]
  
  console.log('customFlatArr', customFlatArr.customFlat(Infinity))

//Reverse start
Array.prototype.customReverse = function (cb) {
    for (let i = 0; i < this.length/2; i++) {
        let first = this[i];
        let last = this[this.length-i-1];
        this[i] = last;
        this[this.length - i - 1] = first;
    }
  }
const arr = [1,2,3,4]
arr.customReverse()
console.log("reverseNumbers nin cavabi",arr);

//Join start
Array.prototype.customJoin = function (str = "") {
    let result = this[0];
    for (let i = 1; i < this.length; i++) {
        result +=  str + this[i] ;
    }
    return result;
  }
let joinArr = [1,"salam",1.4]
console.log("customJoin nin cavabi",joinArr.customJoin("-"));

//Includes start
Array.prototype.customIncludes = function (str,start = 0) {
    for (let i = start; i < this.length; i++) {
        if (this[i] == str) {
            return true;
        };
    }
    return false
}

const IncludesArr = ["Emil","Kenan","Gurban"]
console.log("IncludesArr nin cavabi",IncludesArr.customIncludes("Kenan",1));
