import {formatCurrency} from '../scripts/utils/money.js';

describe('Test suite: format currency', () => {
  it('Testing format currency function', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  }); 

  it('Works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  }); 

  it('Rounds of to nearest value', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  }); 

  it('Rounds of to nearest value', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});