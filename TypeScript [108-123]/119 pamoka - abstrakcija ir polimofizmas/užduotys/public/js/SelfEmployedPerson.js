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
import Employee from './Employee.js';
import { formatLine } from './helpers.js';
class SelfEmployedPerson extends Employee {
    constructor(_a) {
        var { hourPay, hoursWorked = 0 } = _a, personProps = __rest(_a, ["hourPay", "hoursWorked"]);
        super(personProps);
        this.calcPay = () => {
            return this.hourPay * this.hoursWorked;
        };
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    toString() {
        return this.getInitialsHeader() +
            formatLine(`hour pay: ${this.hourPay}`, 1) +
            formatLine(`hours worked: ${this.hoursWorked}`, 1) + '\n';
    }
}
export default SelfEmployedPerson;
//# sourceMappingURL=SelfEmployedPerson.js.map