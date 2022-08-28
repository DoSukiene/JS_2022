let person = {
    name: "Dovile",
    lastname: "Sukiene"
}
let person1 = {
    name: "Dovile",
    lastname: "Sukiene"
}

person.getFullName = function() {
    return this.name + " " + this.lastname
}