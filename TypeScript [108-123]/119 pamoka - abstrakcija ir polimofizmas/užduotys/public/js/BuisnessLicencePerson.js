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
class BuisnessLicencePerson extends Employee {
    constructor(_a) {
        var { jobs = [] } = _a, personProps = __rest(_a, ["jobs"]);
        super(personProps);
        this.calcPay = () => {
            let sum = 0;
            this.jobs.forEach(job => {
                if (job.finished && !job.payed) {
                    sum += job.pay;
                    job.payed = true;
                }
            });
            return sum;
        };
        this.jobs = jobs;
    }
    toString() {
        let result = this.getInitialsHeader() + formatLine('jobs:' + (this.jobs.length === 0 ? ' []' : ''), 1);
        if (this.jobs.length > 0) {
            result += this.jobs.map(({ id, title, pay, finished, payed, dateFinished }) => formatLine(`id: ${id}`, 2) +
                formatLine(`title: ${title}`, 2) +
                formatLine(`pay: ${pay}`, 2) +
                (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '') +
                (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '') +
                (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '')).join('\n');
        }
        return result;
    }
}
export default BuisnessLicencePerson;
//# sourceMappingURL=BuisnessLicencePerson.js.map