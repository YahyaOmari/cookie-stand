'use strict';


var workHours = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];
var totalLocation = [];
var parentElement = document.getElementById("SalmonCookies");

// Creating a constructors
function Places(location, min, max, avgCookie) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.total = 0;
    this.cookieForHour = [];
    totalLocation.push(this);
    
}

var seattlLocation = new Places('Seattl: ', 23, 65, 6.3);
var tokyoLocation = new Places('Tokyo: ', 3, 24, 1.2);
var dubaiLocation = new Places('Dubai: ', 11, 38, 3.7);
var parisLocation = new Places('Paris: ', 20, 38, 2.3);
var limaLocation = new Places('Lima: ', 2, 16, 4.6);

// creating random functionMath function through constructors
Places.prototype.generateRandomNum = function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
}

// calculating cookies sales per hour
Places.prototype.cookiePerHour = function () {
    var product = Math.floor(this.avgCookie * this.generateRandomNum());
    this.cookieForHour.push(product);
    return product;
}

// Places.prototype.display = function () {
//     // showing all the sales of cookies per hour [6am-7pm]

//     var h2 = document.createElement('h2');
//     parentElement.appendChild(h2);
//     h2.textContent = this.location;


//     var ul = document.createElement('ul');
//     parentElement.appendChild(ul);

//     for (var i = 0; i < workHours.length; i++) {
//         var cookies = this.cookiePerHour();
//         var listItem = document.createElement('li');
//         listItem.textContent = workHours[i] + ': ' + cookies + ' cookies';
//         this.total += cookies;
//         ul.appendChild(listItem);
//     }

    // calculating the total
//     var listItem = document.createElement('li');
//     listItem.textContent = "Total: " + this.total;
//     ul.appendChild(listItem);
// }

// console.log(seattlLocation.display());
// ===============

//globab table element 


var table = document.createElement('table');
parentElement.appendChild(table);


// This function will render the first row
Places.prototype.createHeader = function(){

    //starting the table 
    //head (hours)
    var firstTr = document.createElement('tr')
    table.appendChild(firstTr);

    // printing space before the Hours [6AM-7PM]
    var emptyHeader = document.createElement('th');
    emptyHeader.textContent='';
    firstTr.appendChild(emptyHeader);

    // var totalHour=0;

    for (var i = 0; i < workHours.length; i++) {
        var header = document.createElement('th');
        header.textContent =  workHours[i];
        firstTr.appendChild(header);
    }
    // var article = document.createElement('article');
    // parentElementTable.appendChild(article);

    var dailyTotal = document.createElement('th');
    dailyTotal.textContent = 'Daily Location Total';
    firstTr.appendChild(dailyTotal);
}



var totalCookiePerC = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalTotal = 0;



Places.prototype.renderCity = function () {
    
    // creating a new element
    
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = this.location;
    tr.appendChild(th);
    
    var cookieSold = 0;
    var totalCookiesSold = 0;

    for (var i = 0; i < workHours.length; i++) {
        cookieSold = this.cookiePerHour();

        totalCookiePerC[i] += cookieSold;

        var td = document.createElement('td');
        td.textContent = " " + cookieSold;
        tr.appendChild(td);

        totalCookiesSold += cookieSold;
    }

    td = document.createElement('td');
    td.textContent = totalCookiesSold;

    parentElement.appendChild(tr);
    tr.appendChild(td);
    table.appendChild(tr);

    totalTotal += totalCookiesSold;
}

function total(){
    
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent= "Total: " ;
    tr.appendChild(th);

    for(var i=0; i<totalCookiePerC.length; i++){

        var td = document.createElement('td');
        td.textContent=  totalCookiePerC[i];
        tr.appendChild(td);
        table.appendChild(tr);
    }

    
    var lastElement = document.createElement('lastElement');
    lastElement.textContent = totalTotal;
    tr.appendChild(lastElement);

}



seattlLocation.createHeader();

// Calculating 
seattlLocation.renderCity();
tokyoLocation.renderCity();
dubaiLocation.renderCity();
parisLocation.renderCity();
limaLocation.renderCity();

// Total row
total();


var cookieForm = document.getElementById('cookieForm');

cookieForm.addEventListener('submit', function (event){

    event.preventDefault();
    // console.log(event);


    var locationCity = event.target.location.value;
    // console.log(event.target.location);
    var minNumber = parseInt(event.target.minN.value);
    var maxNumber = parseInt(event.target.maxN.value);
    var avgNumber = parseFloat(event.target.avgN.value);

    var newplace = new Places(locationCity, minNumber, maxNumber, avgNumber)
    // console.log(newplace);
    table.innerHTML= '';


    seattlLocation.createHeader();

    // Calculating 
    seattlLocation.renderCity();
    tokyoLocation.renderCity();
    dubaiLocation.renderCity();
    parisLocation.renderCity();
    limaLocation.renderCity();
    // 
    newplace.renderCity();
    
    total();

});


