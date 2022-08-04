let userlevel1 = prompt("Enter you user's level");

switch (userLevel) {
    case "Admin":
    case "Golden":
        console.log("User level has all the rights");
        break;
    case "Regular":
        console.log("The user is regular"):
        break;
    default:
        console.log("The user is nothing");
}

