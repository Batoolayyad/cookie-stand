'use strict';


let openningHours=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let storesArra =[];

function Stores(name, minCustomers , maxCustomers, averageCookies ){
this.name= name;
this.minCustomers=minCustomers;
this.maxCustomers=maxCustomers;
this.averageCookies=averageCookies;
this.CustomersNum=[];
this.CookieNum=[];
this.total=0;

storesArra.push(this)
};
console.log(storesArra)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



Stores.prototype.getCustomerNum=function() { 
    for (let i = 0; i <openningHours.length; i++){

        this.CustomersNum.push(getRndInteger(this.minCustomers, this.maxCustomers));

    }

 }

 Stores.prototype.getCookieNum= function () {
    for (let i = 0; i < this.CustomersNum.length; i++) {
      let  mult=this.CustomersNum[i] * this.averageCookies;
     mult=Math.floor(mult)
      this.CookieNum.push(mult);
     this.total+=this.CookieNum[i]
    }
}

let seattle = new Stores('Seattle', 23, 65 , 6.3 );
console.log(seattle);
seattle.getCustomerNum();
seattle.getCookieNum();



let tokyo =new Stores('Tokyo', 3, 24, 1.2);
tokyo.getCustomerNum();
tokyo.getCookieNum();
console.log(tokyo);

let dubai=new Stores('Dubai', 11, 38, 3.7);
dubai.getCustomerNum();
dubai.getCookieNum();
console.log(dubai);

let paris=new Stores('Paris',20 ,38 ,2.3 );
paris.getCustomerNum();
paris.getCookieNum();
console.log(paris);

let lima=new Stores('Lima', 2, 16 ,4.6 );
lima.getCustomerNum();
lima.getCookieNum();
console.log(lima);




let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);


let headerHoures=[' ','6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Daily location total'];


//creat the header for the table:
let header= function(){
let tr=document.createElement('tr')
table.appendChild(tr)

for(let i=0; i< headerHoures.length;i++){
    let th=document.createElement('th')
    tr.appendChild(th)
    th.textContent=headerHoures[i]
}
}

// creat the tr, td that has the nombers of cookies for all the stores 
Stores.prototype.render= function(){
    let shopeTr=document.createElement('tr')
    table.appendChild(shopeTr)
    let td=document.createElement('td')
    shopeTr.appendChild(td)
   td.textContent=this.name

    for(let i=0; i<openningHours.length;i++){
       let cookiesTd=document.createElement('td')
       shopeTr.appendChild(cookiesTd)
       cookiesTd.textContent=this.CookieNum[i]
       
    }
    let dailyTotalTd= document.createElement('td')
    shopeTr.appendChild(dailyTotalTd)
    dailyTotalTd.textContent=this.total
    
}
// creat footer 

let footer= function(){
// creating the first td in the footer "total"
let footer = document.createElement('tfoot');
let tdFooterT=document.createElement('td');
footer.appendChild(tdFooterT);
tdFooterT.textContent='total'
let sumPerHour=[];

//creat the second td in the footer which has the sum number of cookes for all the stores in each houre 
for (let i = 0; i < openningHours.length; i++) {
    let tdFooter=document.createElement('td');
footer.appendChild(tdFooter);
let sumPerHourT=  seattle.CookieNum[i]+tokyo.CookieNum[i]+dubai.CookieNum[i]+paris.CookieNum[i]+lima.CookieNum[i];
sumPerHour.push(sumPerHourT);
tdFooter.textContent=sumPerHourT;
}
table.appendChild(footer);

//creat the third td in the footer which has the total of the total 
 let totalOfTotal=0
let tdFooterTotal=document.createElement('td');
footer.appendChild(tdFooterTotal);
for (let i = 0; i < openningHours.length; i++) {
    totalOfTotal+=sumPerHour[i];
    
}
tdFooterTotal.textContent=totalOfTotal;
}

//calling the functions
header();

seattle.render();
tokyo.render();
dubai.render();
lima.render();
paris.render();

footer();