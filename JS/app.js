'use strict';

var workHours = ["6am ", "7am ", "8am", "9am", "10am", "11am", "12pm ", "1pm ", "2pm ", "3pm ", "4pm ", "5pm ", "6pm ", "7pm "];
var parentElement = document.getElementById("SalmonCookies");

//-----------FirstObject------------

var seattllocation = {
    location: 'Seattl',
    min: 23,
    max: 65,
    avgCookie: 6.3,
    total: 0,

    generateRandomNum: function () {
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = Math.floor(this.avgCookie * this.generateRandomNum());
        return product;
    },

    display: function () {
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
};
seattllocation.display();
// console.log(seattllocation.randomCust());
// console.log(seattllocation.cookiePerHour());

//-----------secondObject------------

var tokyolocation = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookie: 1.2,
    total:0,

    generateRandomNum: function () {
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = Math.floor(this.avgCookie * this.generateRandomNum());
        return product;
    },

    display: function () {
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
};
tokyolocation.display();
// console.log(tokyolocation.randomCust());
// console.log(tokyolocation.cookiePerHour());

//-----------thirdObject------------

var dubailocation = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avgCookie: 3.7,
    total:0,

    generateRandomNum: function () {
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = Math.floor(this.avgCookie * this.generateRandomNum());
        return product;
    },

    display: function () {
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
};
dubailocation.display();
// console.log(dubailocation.randomCust());
// console.log(dubailocation.cookiePerHour());

//-----------forthObject------------

var parislocation = {
    location: 'Paris',
    min: 20,
    max: 38,
    avgCookie: 2.3,
    total:0,

    generateRandomNum: function () {
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = Math.floor(this.avgCookie * this.generateRandomNum());
        return product;
    },

    display: function () {
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
};
parislocation.display();
// console.log(dubailocation.randomCust());
// console.log(dubailocation.cookiePerHour());

//----------fifthObject-------------

var limalocation = {
    location: 'Lima',
    min: 2,
    max: 16,
    avgCookie: 4.6,
    total:0,

    generateRandomNum: function () {
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },

    cookiePerHour: function () {
        var product = Math.floor(this.avgCookie * this.generateRandomNum());
        return product;
    },

    display: function () {
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
};
limalocation.display();