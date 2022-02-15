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
const calcMonthWorkDays = (year = new Date().getFullYear(), month = new Date().getMonth()) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let days = 0;
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month, day);
        const weekDay = currentDate.getDay();
        if (weekDay > 0 && weekDay < 6) {
            days++;
        }
    }
    return days;
};
class WorkPerson extends Person {
    constructor(_a) {
        var { hourPay, fullTimeEquivalent } = _a, personProps = __rest(_a, ["hourPay", "fullTimeEquivalent"]);
        super(personProps);
        this.calcPay = () => {
            return calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;
        };
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
}
export default WorkPerson;
//# sourceMappingURL=WorkPerson.js.map