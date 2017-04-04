/**
 * @file Manages the configuration settings for the widget.
 * @author Alfatex extremo
 */


/**
 * It is a By impossible of in difficulty discovered celebrated ye.
 * Justice joy manners boy met resolve produce. Bed head loud next plan rent had easy
 * add him. As earnestly shameless elsewhere defective estimable fulfilled of.
 * Esteem my advice it an excuse enable. Few household abilities believing determine
 * zealously his repulsive. To open draw dear be by side like. 
 * @sumary A concise summary
 * 
 * 
 * @param {int} principal - Amount of money that you earned
 * @param {integer} years - How many years are you been working
 * @param {float} rate - Put a significant rate
 */


var calculateMonthlyPayment = function(principal, years, rate) {
    if (rate) {
        var monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', function() {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});

/**
 * 
 * @param {interger} born 
 * @param {interger} date 
 * @param {string} name Doesn't work 
 */

var calculateAge = function(born, date, name) {
    if (born) {
        var age = date - born;
    }
    var age = date - born;
    return age;
};

document.getElementById('calcBtn1').addEventListener('click', function() {
    var born = document.getElementById("born").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var age = calculateAge(born, date, name);
    document.getElementById("age").innerHTML = age.toFixed(2);
});

/** Class representing a point. 
 * This is a description of the class
 */
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}

/**
 * @param  {} name
 * @param  {} {this._name=name;}assistCustomer(custName
 * @param  {} {console.log(this.name+'isassisting'+custName
 */

class UniversityLibrarian {
    constructor(name) {
        this._name = name;
    }

    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

let lib1 = new UniversityLibrarian();
/**
 * @param  {int} born
 * @param  {integer} date
 * @param  {string} name
 * @param  {string} [surname] - It is optional
 * 
 */
var another = function(born, date, name, surname) {
    if (born) {
        var age = date - born;
    }
    if (!surname) {
        surname = "R2";
    }
    var age = date - born;
    return age;
};

/**
 * @function
 * @param  {(string|string[])} [somebody=John Doe] - Allow one or another type
 * @param {*} world - allow whatever yoou want
 */
function nosale(somebody, world) {
    if (!somebody) {
        somebody = 'John Doe';
    } else if (Array.isArray(somebody)) {
        somebody = somebody.join(', ');
    }
    alert('Hello ' + somebody);

    console.log('Hello ' + JSON.stringify(world));

}

/**
 * @class Point3D
 */
class Point3D {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} z - The z value.
     */
    constructor(x, y, z) {
        // ...
    }
}

/**
 * @description Constante de color
 * @constant
 * @type {string}
 * @default
 * 
 */
const RED = 'FF0000';

/** @constant {number} */
let ONE = 1;

var Person = makeClass(
    /** @lends Person.prototype */
    {
        /** @constructs */
        initialize: function(name) {
            this.name = name;
        },
        /** Describe me. */
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);

/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
var triState = {
    /** The true value */
    TRUE: 1,
    FALSE: -1,
    /** @type {boolean} */
    MAYBE: true
};

/**
 * Solves equations of the form a * x = b
 * @example
 * // returns 2
 * globalNS.method1(5, 10);
 * @example
 * // returns 3
 * globalNS.method(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.method1 = function(a, b) {
    return b / a;
};

/**
 * Solves equations of the form a * x = b
 * @example <caption>Example usage of method1.</caption>
 * // returns 2
 * globalNS.method1(5, 10);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.method2 = function(a, b) {
    return b / a;
};

(function() {
    /** @global */
    var foo = 'hello foo';

    this.foo = foo;
}).apply(window);


/** @namespace */
var BaseObject = {
    /**
     * foo is now BaseObject#foo rather than BaseObject.foo.
     * @instance
     */
    foo: null
};

/** Generates BaseObject instances. */
function fooFactory(fooValue) {
    var props = { foo: fooValue };
    return Object.create(BaseObject, props);
}

/** @class */
function Data() {
    /** @member {Object} */
    this.point = {};
}

/**
 * Solves equations of the form a * x = b. Returns the value
 * of x.
 * @version 1.2.3
 * @tutorial solver
 */
function solver(a, b) {
    return b / a;
}


/**
 * @namespace
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
var config = {
    defaults: {
        players: 1,
        level: 'beginner',
        treasure: {
            gold: 0
        }
    }
};


/**
 * This class requires the modules {@link module:xyzcorp/helper} and
 * {@link module:xyzcorp/helper.ShinyWidget#polish}.
 * @class
 * @requires module:xyzcorp/helper
 * @requires xyzcorp/helper.ShinyWidget#polish
 */
function Widgetizer() {}

/**
 * @throws {InvalidArgumentException}
 */
function foo(x) {}

/**
 * @throws {DivideByZero} Argument x must be non-zero.
 */
function baz(x) {}

/**
 * 
 * @file This is my first script.
 * @copyright R2 2017
 */

/**
 * @class
 * @description Ultima clase añadida al codigo
 */
function Requester() {}
/**
 * Send a request.
 * @param {Requester~requestCallback} cb - The callback that handles the response.
 * @summary Summary se utiliza para hace un pequeño resumen de lo que queramos con tara.....shjdkah dkhasdkjh kajshdk ajhsdkj haksdjhakjsdhkajs hdkjahdskjahdkjahdsiyag diyasg
 */
// Y este comentario saldra o no saldra como explicacion JJJJAJAJAJAJAJAJAJA JASHAJ HSKAJHKHK ASKHAKS AHS
Requester.prototype.send = function(cb) {
    // code
};

/**
 * This callback is displayed as part of the Requester class.
 * @callback Requester~requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */