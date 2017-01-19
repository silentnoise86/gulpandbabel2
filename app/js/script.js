/**
 * Created by tom on 17/01/2017.
 */
const land = 'land';
const air = 'air';
const sea = 'sea';

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

        throw new Error(`${ myValue }  is not a number`);
    }
}

function checkIftypeOfMinion(myValue) {
    if (typeof myValue === 'string') {
        if (!(stringCompare(myValue, air) || stringCompare(myValue, sea) || stringCompare(myValue, land))) {
            throw new Error(`${ myValue } is not valid minion type`);
        }
        return;
    }
    throw new Error(`${ myValue } is not valid minion type`);
}
function checkIfLandType(minionClass, myValue) {
    if (typeof myValue == 'string') {
        if (!stringCompare(myValue, land)) {
            throw new Error(`${ myValue } is not valid minion type for ${ minionClass }`);
        }
        return;
    }
    throw new Error(`${ myValue } is not valid minion type`);
}

class Minion {
    constructor(hp, typeOfMinion) {

        checkIfnumber(hp);
        checkIftypeOfMinion(typeOfMinion);
        this.hp = hp;

        //

        this.type = typeOfMinion;
    }

}

class Rat extends Minion {

    constructor(hp, type, attack, speed) {
        super(hp, type);
        checkIfLandType('Rat', type);
        checkIfnumber(attack);
        checkIfnumber(speed);
        this.attack = attack;
        this.speed = speed;
        console.log(this);
    }
}

let joe = new Minion(26, land);

let moses = new Rat(34, land, 56, 56);
let joshua = new Rat(34, sea, 44, 44);
console.log(`joe is a  wondefully stupid minion of the  ${ joe.type }`);