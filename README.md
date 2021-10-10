# **useful.js Documentation**

### Quickly log to console using "cl()"
```JavaScript
cl('testing') //-> console logs ('testing')
```

### Quickly fetch from an API using default options
```JavaScript
quickFetch(yourUrl, function(data){cl(data)})
//-> fetches and .then console logs the data sent from the API
```

### Quickly grab the user's longitude and latitude
```JavaScript
userLocation(function(lat, lon){
  cl(lat);
  cl(lon);
})
//-> Grabs user location, the latitude and longitude are passed as two parameters into your function
```

### Quickly turn longitude and latitude values into a JSON of data including City, State, Country, etc.
```JavaScript
toCity(lat, lon, (data)=>{
  cl(data);
});
//-> console logs the location's data based on the longitude and latitude provided
```

## **For objects, arrays, strings, booleans, etc., use the "_()" syntax:**

### Reverse a string:
```JavaScript
_(‘string’).reverseString() //-> returns ‘gnirts’
```

### Remove repeating items in an array:
``` JavaScript
_([1,1,2,2,2]).removeRepeats() //-> returns [1,2]
```

### Sort an array using vanilla .sort((a, b)=> {return a - b}) method
```JavaScript
_([4,3,2,1]).sortArray() //-> returns [1,2,3,4]
```

### Bubble sort an array (different from regular .sortArray())
```JavaScript
_([4,3,2,1]).bubbleSort() //-> returns [1,2,3,4]
```

### Quickly return the type of the input
```JavaScript
_(true).type() //-> returns boolean
```

### For loop through a set number
```JavaScript
_(5).for(function(i){}) //-> loops 5 times
```

### For loop through an item's length
```
_([1,2,3,4,5,6,'a']).forEach(function(i){}) //-> loops through 7 times
```

### Get a random value within a string or array
```JavaScript
_([12,95,34,6,88]).randomChar() //-> returns a random character from the array/string
```

### Set item in localStorage + stringify it
```JavaScript
_(myVariable).toLocalStorage(key)
```

### Get item in localStorage + return the parsed version
```JavaScript
_().getLocalStorage(key)
```

### Check if two values are equal or not
```
_(2).isEqualTo('2') //-> returns 'Equal in value, but not type.'
```

### Check if a value is even or not
```
_(100).isEven() //-> returns true
```

## **For DOM elemets, use the "el()" syntax:**

### View the raw HTML of an element
```JavaScript
el('h1').html() //-> returns <h1>test<h1>
```

### Hide an element
```JavaScript
el('#myId').hide()
```

### Show an element
```JavaScript
el('.myClass').show() //-> Displays element as 'block'
el('#mainContainer').showFlex() //-> Displays element as 'flex'
el('textarea').showInline() //-> Displays element as 'inline-block'
```

### Set multiple attributes at once
```JavaScript
el('#divWrapper').setAttributes({'title': 'testing', 'style:' 'background: red', 'data-test': '5'})
```

### Clear all children from a within a container/element
```JavaScript
el('div').clear()
```

### Quickly set the ID of an element
```JavaScript
el('input').setId('mainTextField')
```

### Make a textarea element automatically grow vertically when the user reaches next line
```JavaScript
el('.myTextArea').dynamicTextArea()
```

### Execute a function as long as a user is holding click on an element
``` JavaScript
el('button').onhold(100, ()=> {
  console.log('test')
})
// console logs 'test' every 100ms as long as the user is holding down on the button
```

### Set the text value of an element
```JavaScript
el('#description').text('hello world')
```