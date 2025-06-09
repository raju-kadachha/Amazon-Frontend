import { formatCurrency } from "../scripts/utils/money.jsza";

describe('test suite : formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
});