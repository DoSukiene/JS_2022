var AR = [];
let size = prompt("Please enter array element number");
let marking = 0;

for (var a = 0; a < size; a++) {
    AR[a] = prompt('Enter array Element ' + (a + 1));
    if (isNaN(AR[a])) {
        marking = 1;
        alert("It is not a number");
        break;
    }
}

if (marking = 0) {
    alert(AR);
    AR.sort();
    alert(AR);
} else {
    alert("Array is not created. Not number was inserted in array")
}

console.log(AR);