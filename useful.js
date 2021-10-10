function _(selector) {
  const self = {
    item: selector,
    reverseString: ()=> {
        let reversed = self.item.split('').reverse().join('').toString();
        return reversed;
    },
    removeRepeats: ()=> {
      let newArray = Array.from(new Set(self.item));
      return newArray;
    },
    sortArray: ()=> {
      let sortedArray = self.item.sort((a, b)=> {return a - b})
      return sortedArray;
    },
    type: ()=> {
      return typeof self.item
    },
    forEach: (func)=> {
      for (let i = 0; i < self.item.length; i++){
        func(i);
      }
    },
    for: (func)=> {
      for (let i = 0; i < self.item; i++){
        func(i);
      }
    },
    randomChar: ()=> {
        let rndm = Math.floor(Math.random() * self.item.length);
        return self.item[rndm];
    },
    toLocalStorage: (key)=>{
      localStorage.setItem(key, JSON.stringify(self.item));
    },
    getLocalStorage: (key)=>{
      return JSON.parse(localStorage.getItem(key));
    },
    isEqualTo: (value)=>{
      if (self.item === value){
        return true;
      } else if (self.item == value){
        return 'Equal in value, but not type.';
      } else {
        return false;
      }
    },
    isEven: ()=>{
      if ((self.item % 2) == 0) {
        return true;
      } else {
        return false;
      }
    },
    bubbleSort: ()=> {
      for (let i = 0; i < self.item.length; i++) {
        for (let j = 0; j < self.item.length - i - 1; j++) {
          if (self.item[j] > self.item[j + 1]) {
            var newIndex = self.item[j];
            self.item[j] = self.item[j + 1];
            self.item[j + 1] = newIndex;
          }
        }
      }
      return self.item;
    },
  }
  return self;
}

function el(myElement){
  let typeVar;
  if (typeof myElement !== 'string'){
    typeVar = myElement;
  } else {
    typeVar = document.querySelector(myElement);
  }
  const self = {
    element: typeVar,
    html: ()=> self.element,
    hide: ()=> self.element.style.display = 'none',
    show: ()=> self.element.style.display = 'block',
    showFlex: ()=> self.element.style.display = 'flex',
    showInline: ()=> self.element.style.display = 'inline-block',
    setAttributes: (attributes)=> {
      for(let key in attributes) {
        self.element.setAttribute(key, attributes[key]);
      }
    },
    clear: ()=> {
      self.element.innerHTML = '';
      self.element.textContent = '';
      self.element.value = '';
    },
    setId: (id)=> self.element.setAttribute('id', id),
    dynamicTextArea: ()=> {
      function autoExpand (area) {
        area.style.height = 'inherit';
        let compStyle = window.getComputedStyle(area);
        let height = parseFloat(compStyle.paddingTop) + area.scrollHeight + parseFloat(compStyle.paddingBottom);
        area.style.height = `${height}px`;
      }
      self.element.addEventListener('input', function (e) {
        if (e.target.tagName.toLowerCase() !== 'textarea') return;
        autoExpand(e.target);
      }, false);
    },
    onhold: (interval, func)=> {
      self.element.onpointerdown = function(){
        var onHold = setInterval(function(){
          func();
        }, interval)
        self.element.onpointerup = function(){
          clearInterval(onHold)
        }
      }
    },
    text: (text)=> self.element.textContent = text,
  }
  return self;
};

function quickFetch(url, func, param){
  fetch(url)
    .then(function(response){
      if (response.status !== 200){
        console.log('There was an error with your fetch. Response was not 200.')
      }
      return response.json()
    })
    .then(function(data){
      param = data;
      func(param)
    })
};

function cl(info){
  console.log(info)
}

function userLocation(func){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(withPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  function withPosition(position) {
      func(position.coords.latitude, position.coords.longitude);
  };
}

function toCity(lat, lon, func){
  let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
  fetch(url)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    func(data);
  })
}