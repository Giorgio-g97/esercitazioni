import { formatCurrency } from "../scripts/utils/money.js"

describe('Test suite: formatCurrency', () => {//describe() to create suite test
    it('(Title test) Converts cents into dollars', () => {//to create test funct
        expect(formatCurrency(2095)).toEqual('20.95');//compara valori (if) e stampa console.log() in un'unica riga
    })

    it('Works with zero (0)', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    })

    it('Rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
});

