# useful.js Docs

// QUICKLY LOG TO CONSOLE WITH cl()
// cl('testing) //-> console logs ('testing')

## For objects, arrays, strings, booleans, etc., use _() syntax:

// REVERSE A STRING:
// _(‘string’).reverseString() //-> returns ‘gnirts’

// REMOVE REPEATING ITEMS IN AN ARRAY:
// _([1,1,2,2,2]).removeRepeats() //-> returns [1,2]

// SORT AN ARRAY USING COMMON .sort() FUNCTION
// _([4,3,2,1]).sortArray() //-> returns [1,2,3,4]

// BUBBLE SORT AN ARRAY (different from regular .sortArray())
// _([4,3,2,1]).bubbleSort() //-> returns [1,2,3,4]

// QUICKLY RETURN THE TYPE OF ELEMENT
// _(true).type() //-> returns boolean

// FOR LOOP THROUGH A SET NUMBER
// _(5).for(function(i){}) //-> loops through 5 times

// FOR LOOP THROUGH ITEM'S LENGTH
// _([1,2,3,4,5,6,'a']).forEarch(function(i){}) //-> loops through 7 times

// GET A RANDOM VALUE IN A STRING OR ARRAY
// _([12,95,34,6,88]).randomChar() //-> returns a random character from the array/string

// SET LOCALSTORAGE ITEM AND STRINGIFY IT
// _(myVariable).toLocalStorage(key)

// GET LOCALSTORAGE ITEM AND RETURN PARSED VERSION
// _().getLocalStorage(key)

// CHECK IF TWO VALUES ARE EQUAL
//  _(2).isEqualTo('2') //-> returns 'Equal in value, but not type.'

//////////////////////////////////////////////////
////For existing DOM elements, use e() syntax:////
//////////////////////////////////////////////////

// VIEW RAW HTML OF AN ELEMENT
// e('h1).html() //-> returns <h1><h1>

// HIDE AN ELEMENT
// e('#myId').hide()

// DISPLAY ELEMENT AS 'block'
// e('.myClass').show()

// DISPLAY ELEMENT AS 'flex'
// e('#mainContainer').showFlex()

// DISPLAY ELEMENT AS 'inline-block'
// e('textarea').showInline()

// SET MULTIPLE ATTRIBUTES AT ONCE
// e('#divWrapper').setAttributes({'title': 'testing', 'style:' 'background: red', 'data-test': '5'})

// REMOVE ALL ELEMENTS FROM A CONTAINER
// e('div').clear()

// QUICKLY GIVE AN ELEMENT AN ID
// e('input').setId('mainTextField')

// MAKE A TEXTAREA AUTOMATICALLY GROW WHEN USER PRESSES ENTER
// e('.myTextArea').dynamicTextArea()

### Execute a function as long as a user is holding click on an element:
``` JavaScript
e('button').onhold(100, ()=> {
  console.log('test')
})

// console logs 'test' every 100ms as long as the user is holding down on the button
```

///////////////////
////Quick Fetch////
///////////////////

// quickFetch(yourUrl, function(data){})