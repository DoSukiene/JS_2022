let BM = prompt("Please enter your birth month (January, February and etc.)");
let BD = prompt("Please enter your birth day");


if (BM == "January") {
    if (Number(BD) > 19) {
        zs = 'Aquarius';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Capricornus';
        alert("Your zodiac is " + zs);

    }
}

else if (BM == "February") {
    if (Number(BD) > 18) {
        zs = 'Pisces';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Aquarius';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "March") {
    if (Number(BD) > 20) {
        zs = 'Aries';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Pisces';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "Aipril") {
    if (Number(BD) > 19) {
        zs = 'Taurus';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Aries';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "May") {
    if (Number(BD) > 20) {
        zs = 'Gemini';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Taurus';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "June") {
    if (Number(BD) > 21) {
        zs = 'Cancer';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Gemini';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "July") {
    if (Number(BD) > 22) {
        zs = 'Lion';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Cancer';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "August") {
    if (Number(BD) > 22) {
        zs = 'Virgo';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Lion';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "September") {
    if (Number(BD) > 22) {
        zs = 'Libra';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Virgo';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "October") {
    if (Number(BD) > 23) {
        zs = 'Scorpius';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Libra';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "November") {
    if (Number(BD) > 21) {
        zs = 'Sagittarius';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Scorpius';
        alert("Your zodiac is " + zs);
    }
}

else if (BM == "December") {
    if (Number(BD) > 21) {
        zs = 'Capricornus';
        alert("Your zodiac is " + zs);
    } else {
        zs = 'Sagittarius';
        alert("Your zodiac is " + zs);
    }
} else {
    alert("Entered data is incorrect!");
}

