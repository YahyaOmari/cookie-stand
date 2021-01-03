'use strict';

var workHours = ["6am ", "7am ", "8am", "9am", "10am", "11am", "12pm ", "1pm ", "2pm ", "3pm ", "4pm ", "5pm ", "6pm ", "7pm "];
var parentElement = document.getElementById("SalmonCookies");

//-----------FirstObject------------

var seattlLocation = {
    Location: 'Seattl',
    min: 23,
    max: 65,
    avgCookie: 6.3,
    hourlySales: [],
    dailySales: 0,

    randomCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = 6.3 * this.randomCust(23, 65); //this.min(23, 65) ;
        // seattlLocation.hourlySales.push(product);
        // seattlLocation.dailySales += product;
        return product;
    },

    total2:[],
    total: function(){
        var array =[];
        for(var i=0; i<15;i++){
            array[i] = this.cookiePerHour();
        }
        this.total2 = array;
    },

    display: function () {
        // selecting the element by it id from our html document - SalmonCookies 
        var SalmonCookies = document.getElementById("SalmonCookies");

        // creating a new element 
        var h2 = document.createElement('h2');
        SalmonCookies.appendChild(h2);
        h2.textContent = "Seattl";


        // creating a new element 
        var list = document.createElement("ul");
        SalmonCookies.appendChild(list);

        seattlLocation.total();

        for (var i = 0; i < seattlLocation.total2.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = workHours[i] + ': ' + seattlLocation.total2[i].toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
        var total=0;
        for (var i = 0; i < seattlLocation.total2.length; i++) {
            total = total + seattlLocation.total2[i];
            // listItem.textContent = workHours[i] + ': ' + total[i].toFixed(0) + ' cookies';

            listItem.textContent = 'Total: ' +total.toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
    }
};
seattlLocation.display();
// console.log(seattlLocation.randomCust());
// console.log(seattlLocation.cookiePerHour());

//-----------secondObject------------

var tokyoLocation = {
    Location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookie: 1.2,
    hourlySales: [],
    dailySales: 0,

    randomCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = 6.3 * this.randomCust(23, 65); //this.min(23, 65) ;
        return product;
    },

    total2:[],
    total: function(){
        var array =[];
        for(var i=0; i<15;i++){
            array[i] = this.cookiePerHour();
        }
        this.total2 = array;
    },

    display: function () {
        // selecting the element by it id from our html document - SalmonCookies 
        var SalmonCookies = document.getElementById("SalmonCookies");

        // creating a new element 
        var h2 = document.createElement('h2');
        SalmonCookies.appendChild(h2);
        h2.textContent = "Tokyo";


        // creating a new element 
        var list = document.createElement("ul");
        SalmonCookies.appendChild(list);

        tokyoLocation.total();

        for (var i = 0; i < tokyoLocation.total2.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = workHours[i] + ': ' + tokyoLocation.total2[i].toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
        var total=0;
        for (var i = 0; i < tokyoLocation.total2.length; i++) {
            total = total + tokyoLocation.total2[i];
            // listItem.textContent = workHours[i] + ': ' + total[i].toFixed(0) + ' cookies';

            listItem.textContent = 'Total: ' +total.toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
    }
};
tokyoLocation.display();
// console.log(tokyoLocation.randomCust());
// console.log(tokyoLocation.cookiePerHour());

//-----------thirdObject------------

var dubaiLocation = {
    Location: 'Dubai',
    min: 11,
    max: 38,
    avgCookie: 3.7,
    hourlySales: [],
    dailySales: 0,

    randomCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = 6.3 * this.randomCust(23, 65); //this.min(23, 65) ;
        return product;
    },

    total2:[],
    total: function(){
        var array =[];
        for(var i=0; i<15;i++){
            array[i] = this.cookiePerHour();
        }
        this.total2 = array;
    },

    display: function () {
        // selecting the element by it id from our html document - SalmonCookies 
        var SalmonCookies = document.getElementById("SalmonCookies");

        // creating a new element 
        var h2 = document.createElement('h2');
        SalmonCookies.appendChild(h2);
        h2.textContent = "Dubai";


        // creating a new element 
        var list = document.createElement("ul");
        SalmonCookies.appendChild(list);

        dubaiLocation.total();

        for (var i = 0; i < dubaiLocation.total2.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = workHours[i] + ': ' + dubaiLocation.total2[i].toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
        var total=0;
        for (var i = 0; i < dubaiLocation.total2.length; i++) {
            total = total + dubaiLocation.total2[i];

            listItem.textContent = 'Total: ' +total.toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
    }
};
dubaiLocation.display();
// console.log(dubaiLocation.randomCust());
// console.log(dubaiLocation.cookiePerHour());

//-----------forthObject------------

var parisLocation = {
    Location: 'Paris',
    min: 20,
    max: 38,
    avgCookie: 2.3,
    hourlySales: [],
    dailySales: 0,

    randomCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = 6.3 * this.randomCust(23, 65); //this.min(23, 65) ;
        return product;
    },

    total2:[],
    total: function(){
        var array =[];
        for(var i=0; i<15;i++){
            array[i] = this.cookiePerHour();
        }
        this.total2 = array;
    },

    display: function () {
        // selecting the element by it id from our html document - SalmonCookies 
        var SalmonCookies = document.getElementById("SalmonCookies");

        // creating a new element 
        var h2 = document.createElement('h2');
        SalmonCookies.appendChild(h2);
        h2.textContent = "Paris";


        // creating a new element 
        var list = document.createElement("ul");
        SalmonCookies.appendChild(list);

        parisLocation.total();

        for (var i = 0; i < parisLocation.total2.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = workHours[i] + ': ' + parisLocation.total2[i].toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
        var total=0;
        for (var i = 0; i < parisLocation.total2.length; i++) {
            total = total + parisLocation.total2[i];

            listItem.textContent = 'Total: ' +total.toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
    }
};
parisLocation.display();
// console.log(dubaiLocation.randomCust());
// console.log(dubaiLocation.cookiePerHour());

//----------fifthObject-------------

var limaLocation = {
    Location: 'Lima',
    min: 2,
    max: 16,
    avgCookie: 4.6,
    hourlySales: [],
    dailySales: [],

    randomCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = 6.3 * this.randomCust(23, 65); //this.min(23, 65) ;
        return product;
    },

    total2:[],
    total: function(){
        var array =[];
        for(var i=0; i<15;i++){
            array[i] = this.cookiePerHour();
        }
        this.total2 = array;
    },

    display: function () {
        // selecting the element by it id from our html document - SalmonCookies 
        var SalmonCookies = document.getElementById("SalmonCookies");

        // creating a new element 
        var h2 = document.createElement('h2');
        SalmonCookies.appendChild(h2);
        h2.textContent = "Lima";


        // creating a new element 
        var list = document.createElement("ul");
        SalmonCookies.appendChild(list);

        limaLocation.total();

        for (var i = 0; i < limaLocation.total2.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = workHours[i] + ': ' + limaLocation.total2[i].toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
        var total=0;
        for (var i = 0; i < limaLocation.total2.length; i++) {
            total = total + limaLocation.total2[i];

            listItem.textContent = 'Total: ' +total.toFixed(0) + ' cookies';
            list.appendChild(listItem);
        }
    }
};
limaLocation.display();