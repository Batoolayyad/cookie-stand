'use strict';

let Seattle = {
    CustomersNum: [],
    openningHours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
    averageCookies: 6.3,
    minCustomers: 23,
    maxCustomers: 65,
    CookieNum: [],
    total:0,
    name: 'Seattle',
    getCustomerNum: function () {
        for (let i = 0; i < Seattle.openningHours.length; i++)

            this.CustomersNum.push(getRndInteger(this.minCustomers, this.maxCustomers))

    },
    getCookieNum: function () {
        for (let i = 0; i < Seattle.CustomersNum.length; i++) {
          let  mult=this.CustomersNum[i] * this.averageCookies;
         mult=Math.floor(mult)
          this.CookieNum.push(`${mult} cookies`);
         this.total+=mult
        }
    },
    

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Seattle.getCustomerNum();
console.log(Seattle.CustomersNum);

Seattle.getCookieNum();
console.log(Seattle.CookieNum);

Seattle.getCookieNum();
console.log(Seattle.cookieNum);
 
console.log(Seattle.total)

// get (from the DOM) who the parent element is going to be. where am I attaching this new element

let parent=document.getElementById('parent');
console.log(parent);


// creating element
let h2Element=document.createElement('h2');

// appending element
parent.appendChild(h2Element);

// text content
h2Element.textContent=Seattle.name;



// create ul
let ulElement=document.createElement('ul');

// append
parent.appendChild(ulElement);

 
for(let i =0;i<Seattle.openningHours.length;i++){
    // create li
    let liElement=document.createElement('li');

    // appending li
    ulElement.appendChild(liElement);

    // text content
    liElement.textContent=`${Seattle.openningHours[i]}  : ${Seattle.CookieNum[i]}`;

}

let totalElement=document.createElement("li");
ulElement.appendChild(totalElement);
totalElement.textContent= `total = ${Seattle.total} cookies`;






//Tokyo

let tokyo = {
    CustomersNum: [],
    openningHours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
    averageCookies: 1.2,
    minCustomers: 3,
    maxCustomers:24 ,
    CookieNum: [],
    total:0,
    name: 'Tokyo',

    getCustomerNum: function () {
        for (let i = 0; i < tokyo.openningHours.length; i++)

            this.CustomersNum.push(getRndInteger(this.minCustomers, this.maxCustomers))

    },
    getCookieNum: function () {
        for (let i = 0; i < tokyo.CustomersNum.length; i++) {
          let  mult=this.CustomersNum[i] * this.averageCookies;
         mult=Math.floor(mult)
          this.CookieNum.push(`${mult} cookies`);
         this.total+=mult
        }
    },
    

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

tokyo.getCustomerNum();
console.log(tokyo.CustomersNum);

tokyo.getCookieNum();
console.log(tokyo.CookieNum);

tokyo.getCookieNum();
console.log(tokyo.cookieNum);
 
console.log(tokyo.total)

// get (from the DOM) who the parent element is going to be. where am I attaching this new element

let parent2=document.getElementById('parent2');
console.log(parent2);



// creating element
let Th2Element=document.createElement('h2');

// appending element
parent2.appendChild(Th2Element);

// text content
Th2Element.textContent=tokyo.name;



// create ul
let TulElement=document.createElement('ul');

// append
parent2.appendChild(TulElement);

 
for(let i =0;i<tokyo.openningHours.length;i++){
    // create li
    let liElement=document.createElement('li');

    // appending li
    TulElement.appendChild(liElement);

    // text content
    liElement.textContent=`${tokyo.openningHours[i]}  : ${tokyo.CookieNum[i]}`;

}

let TtotalElement=document.createElement("li");
TulElement.appendChild(TtotalElement);
TtotalElement.textContent= `total = ${tokyo.total} cookies`;




//Dubai

let dubai= {
    CustomersNum: [],
    openningHours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
    averageCookies:3.7 ,
    minCustomers: 11,
    maxCustomers: 38,
    CookieNum: [],
    total:0,
    name: 'Dubai',

    getCustomerNum: function () {
        for (let i = 0; i < dubai.openningHours.length; i++)

            this.CustomersNum.push(getRndInteger(this.minCustomers, this.maxCustomers))

    },
    getCookieNum: function () {
        for (let i = 0; i < dubai.CustomersNum.length; i++) {
          let  mult=this.CustomersNum[i] * this.averageCookies;
         mult=Math.floor(mult)
          this.CookieNum.push(`${mult} cookies`);
         this.total+=mult
        }
    },
    

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

dubai.getCustomerNum();
console.log(dubai.CustomersNum);

dubai.getCookieNum();
console.log(dubai.CookieNum);

dubai.getCookieNum();
console.log(dubai.cookieNum);
 
console.log(dubai.total)

// get (from the DOM) who the parent element is going to be. where am I attaching this new element

let parent3=document.getElementById('parent3');
console.log(parent3);



// creating element
let Dh2Element=document.createElement('h2');

// appending element
parent3.appendChild(Dh2Element);

// text content
Dh2Element.textContent=dubai.name;



// create ul
let DulElement=document.createElement('ul');

// append
parent3.appendChild(DulElement);

 
for(let i =0;i<dubai.openningHours.length;i++){
    // create li
    let liElement=document.createElement('li');

    // appending li
    DulElement.appendChild(liElement);

    // text content
    liElement.textContent=`${dubai.openningHours[i]}  : ${dubai.CookieNum[i]}`;

}

let DtotalElement=document.createElement("li");
DulElement.appendChild(DtotalElement);
DtotalElement.textContent= `total = ${dubai.total} cookies`;





//Paris

let paris= {
    CustomersNum: [],
    openningHours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
    averageCookies:2.3 ,
    minCustomers:20 ,
    maxCustomers: 38,
    CookieNum: [],
    total:0,
    name: 'Paris',

    getCustomerNum: function () {
        for (let i = 0; i < paris.openningHours.length; i++)

            this.CustomersNum.push(getRndInteger(this.minCustomers, this.maxCustomers))

    },
    getCookieNum: function () {
        for (let i = 0; i < paris.CustomersNum.length; i++) {
          let  mult=this.CustomersNum[i] * this.averageCookies;
         mult=Math.floor(mult)
          this.CookieNum.push(`${mult} cookies`);
         this.total+=mult
        }
    },
    

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

paris.getCustomerNum();
console.log(paris.CustomersNum);

paris.getCookieNum();
console.log(paris.CookieNum);

paris.getCookieNum();
console.log(paris.cookieNum);
 
console.log(paris.total)

// get (from the DOM) who the parent element is going to be. where am I attaching this new element

let parent4=document.getElementById('parent4');
console.log(parent4);



// creating element
let Ph2Element=document.createElement('h2');

// appending element
parent4.appendChild(Ph2Element);

// text content
Ph2Element.textContent=paris.name;



// create ul
let PulElement=document.createElement('ul');

// append
parent4.appendChild(PulElement);

 
for(let i =0;i<paris.openningHours.length;i++){
    // create li
    let liElement=document.createElement('li');

    // appending li
    PulElement.appendChild(liElement);

    // text content
    liElement.textContent=`${paris.openningHours[i]}  : ${paris.CookieNum[i]}`;

}

let PtotalElement=document.createElement("li");
PulElement.appendChild(PtotalElement);
PtotalElement.textContent= `total = ${paris.total} cookies`;




//Lima
let lima= {
    CustomersNum: [],
    openningHours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
    averageCookies:4.6 ,
    minCustomers: 2,
    maxCustomers:16 ,
    CookieNum: [],
    total:0,
    name: 'Lima',

    getCustomerNum: function () {
        for (let i = 0; i < lima.openningHours.length; i++)

            this.CustomersNum.push(getRndInteger(this.minCustomers, this.maxCustomers))

    },
    getCookieNum: function () {
        for (let i = 0; i < lima.CustomersNum.length; i++) {
          let  mult=this.CustomersNum[i] * this.averageCookies;
         mult=Math.floor(mult)
          this.CookieNum.push(`${mult} cookies`);
         this.total+=mult
        }
    },
    

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

lima.getCustomerNum();
console.log(lima.CustomersNum);

lima.getCookieNum();
console.log(lima.CookieNum);

lima.getCookieNum();
console.log(lima.cookieNum);
 
console.log(lima.total)

// get (from the DOM) who the parent element is going to be. where am I attaching this new element

let parent5=document.getElementById('parent5');
console.log(parent5);



// creating element
let Lh2Element=document.createElement('h2');

// appending element
parent5.appendChild(Lh2Element);

// text content
Lh2Element.textContent=lima.name;



// create ul
let LulElement=document.createElement('ul');

// append
parent5.appendChild(LulElement);

 
for(let i =0;i<lima.openningHours.length;i++){
    // create li
    let liElement=document.createElement('li');

    // appending li
    LulElement.appendChild(liElement);

    // text content
    liElement.textContent=`${lima.openningHours[i]}  : ${lima.CookieNum[i]}`;

}

let LtotalElement=document.createElement("li");
LulElement.appendChild(LtotalElement);
LtotalElement.textContent= `total = ${lima.total} cookies`;








