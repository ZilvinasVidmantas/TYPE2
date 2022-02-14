var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Person from './Person.js';
class SelfEmployedPerson extends Person {
    constructor(_a) {
        var { hourPay, hoursWorked = 0 } = _a, personProps = __rest(_a, ["hourPay", "hoursWorked"]);
        super(personProps);
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
}
export default SelfEmployedPerson;
//# sourceMappingURL=SelfEmployedPerson.js.map