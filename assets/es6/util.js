  // utils

  const isObject = function(elem) {
      const getType = (el) => Object.prototype.toString.call(el).slice(8, -1);
      return getType(elem) === 'Object';
  };

  function forEachEl_2(els, fn) {
      const len = els.length;
      for (let i = 0; i < len; i++ ) {
          if (els[i]) {
              els[i].addEventListener('click', fn, false);
          }
      }
  }

  function forEachEl(els, fn){
    for (let el of els) { if (el) {el.addEventListener('click', fn, false);}}
  }

  function findData(arr, prop, data){
      for (let i = 0; i < arr.length; i++) {
          if(arr[i][prop] === data) {
              return arr[i];
          }
      }
  }

 // definitly in this case this is better, it's faster, more concise, not so complicated
 // BEAWARE probably if array contains more identical properties it will return array
 // traverse whole array callback is executed for every item in array
 // IE not support
 function findValue({arr, prop='id', data}) {
    return arr.find((el, i) =>  el[prop] === data);
  }

  //NEAT!!!
  // maps array -> make new array from properties
  // indexing array of these properties
  // use index to find object in array
  // probably works in most browsers
 function findValueByIndex(arr, prop, val) {
    return arr[arr.map( (el)=> el[prop] ).indexOf(val)];
  }

  //haluz ale je to dost DIRTY; Note comma operator!
 function findValue2(arr, prop, data) {
    let result = null;
    arr.some((el, i) =>  el[prop] === data ? ((result = el), true) : false);
    return result;
  }

//function overloading

const dispatch = function(...fns) {

  return function(...args){
    for (let fn of fns) {
      let result = fn(...args);
      if (exists(result)) {return result;}
    }
  };
};

function exists(value){
return value !== undefined;
}

//function composition
 const compose = (...funcs) => (value) => funcs.reduce((v, fn) => fn(v), value);

//markup
 const createMarkup = compose(findValue, Tmps.markupProfiles);
