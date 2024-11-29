import {formatCurrency} from '../scripts/utils/money.js'

//These are automated tests - testing our code with code
//We can easily test using different scenarios
//If we change code in future we can easily test the functionality works as expected

//Below is called Test suite - Grouping related test together
//Here we are giving name for our test suite
console.log('Test suite: format currency')

//Test case 1:
//Giving a name for below test (same follows for below tests)
console.log('Testing format currency function')

if(formatCurrency(2095) === '20.95'){
  console.log('Passed');
} else {
  console.log('Failed');
}

//Test case 2:
console.log('Works with zero')

if(formatCurrency(0) === '0.00'){
  console.log('Passed');
} else {
  console.log('Failed');
}

//Test case 3:
console.log('Rounds of to nearest value')

if(formatCurrency(2000.5) === '20.01'){
  console.log('Passed');
} else {
  console.log('Failed');
}

//Test case 4:
console.log('Rounds of to nearest value')

if(formatCurrency(2000.4) === '20.00'){
  console.log('Passed');
} else {
  console.log('Failed');
}