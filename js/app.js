'use strict';


let openningHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let storesArra = [];

function Stores(name, minCustomers, maxCustomers, averageCookies) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
    this.CustomersNum = [];
    this.CookieNum = [];
    this.total = 0;

    storesArra.push(this)
};
console.log(storesArra)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



Stores.prototype.getCustomerNum = function () {
    for (let i = 0; i < openningHours.length; i++) {

        this.CustomersNum.push(getRndInteger(this.minCustomers, this.maxCustomers));

    }

}



Stores.prototype.getCookieNum = function () {
    for (let i = 0; i < this.CustomersNum.length; i++) {
        let mult = this.CustomersNum[i] * this.averageCookies;
        mult = Math.floor(mult)
        this.CookieNum.push(mult);
        this.total += this.CookieNum[i]
    }
}


//adding the objects

let seattle = new Stores('Seattle', 23, 65, 6.3);
console.log(seattle);


let tokyo = new Stores('Tokyo', 3, 24, 1.2);
console.log(tokyo);

let dubai = new Stores('Dubai', 11, 38, 3.7);
console.log(dubai);

let paris = new Stores('Paris', 20, 38, 2.3);
console.log(paris);

let lima = new Stores('Lima', 2, 16, 4.6);
console.log(lima);



//creating the table
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


let headerHoures = [' ', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Daily location total'];


//creat the header for the table:
let header = function () {
    let tr = document.createElement('tr')
    table.appendChild(tr)

    for (let i = 0; i < headerHoures.length; i++) {
        let th = document.createElement('th')
        tr.appendChild(th)
        th.textContent = headerHoures[i]
    }
}

// creat the tr, td that has the nombers of cookies for all the stores 
Stores.prototype.render = function () {
    let shopeTr = document.createElement('tr')
    table.appendChild(shopeTr)
    let td = document.createElement('td')
    shopeTr.appendChild(td)
    td.textContent = this.name

    for (let i = 0; i < openningHours.length; i++) {
        let cookiesTd = document.createElement('td')
        shopeTr.appendChild(cookiesTd)
        cookiesTd.textContent = this.CookieNum[i]

    }
    let dailyTotalTd = document.createElement('td')
    shopeTr.appendChild(dailyTotalTd)
    dailyTotalTd.textContent = this.total

}



// creat footer 

let footer = function () {
    
    // creating the first td in the footer "total"
    let footerRow = document.createElement('tfoot');
    table.appendChild(footerRow)
    let tdFooter1 = document.createElement('td');
    footerRow.appendChild(tdFooter1);
    tdFooter1.textContent = 'total'
    
    //creat the second td in the footer which has the sum number of cookes for all the stores in each houre 
    let totalOfTotal = 0;
    for (let i = 0; i < openningHours.length; i++) {
        let sumPerHour = 0;
        for (let j = 0; j < storesArra.length; j++) {
            sumPerHour += storesArra[j].CookieNum[i]
            totalOfTotal += storesArra[j].CookieNum[i]
        }
        let tdFooter2 = document.createElement('td');
        footerRow.appendChild(tdFooter2);
        tdFooter2.textContent = sumPerHour;
        
    }
    
    let tdFooter3 = document.createElement('td');
    footerRow.appendChild(tdFooter3);
    tdFooter3.textContent = totalOfTotal;
}
//calling the functions

header();

for (let i = 0; i < storesArra.length; i++) {
    storesArra[i].getCustomerNum();
    storesArra[i].getCookieNum();
    storesArra[i].render();
};

footer();


//adding a new object by the form

// get the element by id for the form
let storesForm = document.getElementById('storesForm');

//add event listener (to run the functions)
storesForm.addEventListener('submit', submitter);

//creat the submitter function 
function submitter(event) {
    //to prevent the default behavior 
    event.preventDefault();
    
    //name, minCustomers , maxCustomers, averageCookies
    let name = event.target.nameFeild.value;
    console.log(name)
    
    let minCustomers = event.target.minCus.value;
    console.log(minCustomers)
    
    let maxCustomers = event.target.maxCus.value;
    console.log(maxCustomers)
    
    let averageCookies = event.target.avgCookies.value;
    console.log(averageCookies)
    
    // new instance of the constructor for the store that was added from the form
    let addStore=new Stores (name,minCustomers,maxCustomers,averageCookies);
    console.log(addStore);
    console.log(storesArra);
    
    
    table.textContent="";
    header();
    
    for (let i = 0; i < storesArra.length; i++) {
        storesArra[i].getCustomerNum();
        storesArra[i].getCookieNum();
        storesArra[i].render();
    }
    
    footer();
}




