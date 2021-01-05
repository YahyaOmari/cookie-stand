'use strict';

var workHours = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];
var tableHead = ["city", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "Daily Location Total"];
var locationTable = [];
var parentElement = document.getElementById("SalmonCookies");
var parentElementTable = document.getElementById("TotalSold");

// Creating a constructors
function Places(location, min, max, avgCookie) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.total = 0;
    this.cookieForHour = [];
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
//console.log(tokyoLocation.generateRandomNum());

// calculating cookies sales per hour
Places.prototype.cookiePerHour = function () {
    var product = Math.floor(this.avgCookie * this.generateRandomNum());
    return product;
}

Places.prototype.display = function () {
    // showing all the sales of cookies per hour [6am-7pm]

    var h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.location;


    var ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for (var i = 0; i < workHours.length; i++) {
        var cookies = this.cookiePerHour();
        var listItem = document.createElement('li');
        listItem.textContent = workHours[i] + ': ' + cookies + ' cookies';
        this.total += cookies;
        ul.appendChild(listItem);
    }

    // calculating the total
    var listItem = document.createElement('li');
    listItem.textContent = "Total: " + this.total;
    ul.appendChild(listItem);
}

// console.log(seattlLocation.display());

var parentElementTable = document.getElementById("TotalSold");

Places.prototype.renderTable = function () {
    // creating a new element

    // var parentElementTable = document.getElementById("TotalSold");

    var table = document.createElement('table');
    parentElementTable.appendChild(table);
    
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var th = document.createElement('th');
    // article.appendChild(th);
    th.textContent = this.location;
    tr.appendChild(th);
    

    var cookieSold = 0;
    var totalCookiesSold = 0;

    for (var i = 0; i < workHours.length; i++) {
        cookieSold = this.cookiePerHour();

        var td = document.createElement('td');
        td.textContent = cookieSold;
        tr.appendChild(td);
        this.cookieForHour.push(cookieSold);
        totalCookiesSold += cookieSold;
    }

    td = document.createElement('td');
    td.textContent = totalCookiesSold;
    parentElementTable.appendChild(tr);
    tr.appendChild(td);
}
function renderHeader() {
    // var parentElementTable = document.getElementById("TotalSold");

    var article = document.createElement('article');
    parentElementTable.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = 'Table of total sold per day';
    article.appendChild(h2);

}




function renderHours() {
    // var parentElementTable = document.getElementById("TotalSold");

    var article = document.createElement('article');
    parentElementTable.appendChild(article);
    //starting the table
    var table = document.createElement('table');
    article.appendChild(table);
    //head (hours)
    var firstTr = document.createElement('tr')
    table.appendChild(firstTr);

    // var emptyHeader = document.createElement('th')
    // emptyHeader.textContent = ' ';
    // firstTr.appendChild(emptyHeader);

    var space = document.createElement('th');
    space.textContent='CITY    ';
    firstTr.appendChild(space);

    // var totalHour=0;

    for (var i = 0; i < workHours.length; i++) {
        var header = document.createElement('th');
        header.textContent = workHours[i];
        firstTr.appendChild(header);
    }
    // var article = document.createElement('article');
    // parentElementTable.appendChild(article);

    var dailyTotal = document.createElement('th');
    dailyTotal.textContent = 'Daily Location Total';
    firstTr.appendChild(dailyTotal);

}
// =====================
// =====================
// =====================
// =====================
// trial code !!!! 
// =====================
// =====================
// =====================
// =====================

renderHeader();
renderHours();
seattlLocation.renderTable();
tokyoLocation.renderTable();
dubaiLocation.renderTable();
parisLocation.renderTable();
limaLocation.renderTable();


