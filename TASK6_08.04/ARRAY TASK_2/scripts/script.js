let AR = [];

let array1 = prompt("Please enter array element, to stop enter END");

while (array1 != "END") {
    AR.push(array1);
    array1 = prompt("Please enter next array element, to stop enter END");

}
alert("Element enetering is done")
alert("Array is: " + AR);
AR.sort();
alert("Sorted array is: " + AR);

