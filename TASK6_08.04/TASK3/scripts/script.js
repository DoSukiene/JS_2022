let AR = [];
let NAR = [];
let ODD = [];
let SAME = [];
let size = prompt("Please enter array element number");
let marking = 0;
let elN = 0;
let n1 = 0;
let od1 = 0;
let sum1 = 0;
let average = 0;
let avarr1 = 0;
let avrgn1 = 0;
let samev = 0;
let sv = 0;

for (var a = 0; a < size; a++) {
    AR[a] = prompt('Enter array Element ' + (a + 1));
    // sum of numbers    
    elN = AR[a];
    sum1 = sum1 + Number(elN);

    // negative numbers
    if (Number(elN) < 0) {
        NAR[n1] = elN;
        n1 = n1 + 1;
    }
    // odd numbers
    if (((Math.abs(elN) / 2) % 1) > 0) {
        ODD[od1] = elN;
        od1 = od1 + 1;
    }



    if (isNaN(AR[a])) {
        marking = 1;
        alert("It is not a number");
        break;
    }
}
// average value
average = sum1 / a;
for (var i = 0; i < size; i++) {
    avarr1 = AR[i];
    if (Number(avarr1) < average) {
        avrgn1 = avrgn1 + 1;
    }

}

//same values - NOT working properly yet
for (var x = 0; x < size; x++) {
    samev = AR[x];
    if (Number(samev) == AR[x + 1]) {
        SAME[sv] = AR[x + 1];
        sv = sv + 1;
        break
    }

}

if (marking == 0) {
    alert("Array is: " + AR);
    alert("Negative numbers are: " + NAR);
    alert("Odd numbers are: " + ODD);
    alert("In total we have " + od1 + " odd numbers")
    alert("Average of array values is: " + average);
    alert(+avrgn1 + " numbers are smaller than average value ");
    alert("Same values are: " + SAME);
} else {
    alert("Array is not created. Not number was inserted in array")
}



// 3)Write a program where multiple actions with an array will be done. For element filtering please use the loop (the loop type can be chosen as You want).
// Create an array with the elements from input
// Print out elements which are negative. 
// Print out elements which are odd (uneven). 
// Compute how many elements are odd (uneven).
// Verify if there are multiple elements with the same value
// Print out each second element.
// Compute average value of the array.
 //Establish how many elements are smaller than average value.