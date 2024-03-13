import { formatCurrency } from "../scripts/utils/money.js";

formatCurrency(2095) === '20.95' ? console.log('passed') : console.log('failed');