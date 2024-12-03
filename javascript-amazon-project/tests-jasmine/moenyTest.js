import {formatCurrency} from '../scripts/utils/money.js';

describe('Test suite: format currency', () => {
  it('Testing format currency function', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  }); 
});