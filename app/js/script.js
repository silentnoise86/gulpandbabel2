'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by tom on 17/01/2017.
 */
var land = 'land';
var air = 'air';
var sea = 'sea';

function stringCompare(string1, string2) {

    if (string1.localeCompare(string2) == 0) {
        return true;
    }
    return false;
}
function checkIfnumber(myValue) {
    if (typeof myValue === 'number') {
        return myValue;
    } else {

        throw new Error(myValue + '  is not a number');
    }
}

function checkIftypeOfMinion(myValue) {
    if (typeof myValue === 'string') {
        if (!(stringCompare(myValue, air) || stringCompare(myValue, sea) || stringCompare(myValue, land))) {
            throw new Error(myValue + ' is not valid minion type');
        }
        return;
    }
    throw new Error(myValue + ' is not valid minion type');
}
function checkIfLandType(minionClass, myValue) {
    if (typeof myValue == 'string') {
        if (!stringCompare(myValue, land)) {
            throw new Error(myValue + ' is not valid minion type for ' + minionClass);
        }
        return;
    }
    throw new Error(myValue + ' is not valid minion type');
}

var Minion = function Minion(hp, typeOfMinion) {
    _classCallCheck(this, Minion);

    checkIfnumber(hp);
    checkIftypeOfMinion(typeOfMinion);
    this.hp = hp;

    //

    this.type = typeOfMinion;
};

var Rat = function (_Minion) {
    _inherits(Rat, _Minion);

    function Rat(hp, type, attack, speed) {
        _classCallCheck(this, Rat);

        var _this = _possibleConstructorReturn(this, (Rat.__proto__ || Object.getPrototypeOf(Rat)).call(this, hp, type));

        checkIfLandType('Rat', type);
        checkIfnumber(attack);
        checkIfnumber(speed);
        _this.attack = attack;
        _this.speed = speed;
        console.log(_this);

        return _this;
    }

    return Rat;
}(Minion);

var joe = new Minion(26, land);

var moses = new Rat(34, land, 56, 56);
var joshua = new Rat(34, sea, 44, 44);
console.log('joe is a  wondefully stupid minion of the  ' + joe.type);