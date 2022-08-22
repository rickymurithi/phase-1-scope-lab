// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    (bestCustomer = 'not bob');
}
console.log(setBestCustomer);

function  overwriteBestCustomer() {
    (bestCustomer = 'maybe bob');
}
console.log(setBestCustomer);

const LeastFavoriteCustomer = 'red flag'
function changeLeastFavoriteCustomer() {
    (LeastFavoriteCustomer = 'uncooperative');
}
console.log(changeLeastFavoriteCustomer());