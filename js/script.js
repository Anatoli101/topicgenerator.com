var button = document.getElementById("mainButton");
button.onclick = function getName () {
    var phrases = [
        "If you won $1 million playing the lottery, what would you do?",
        "What is one thing you would change about your home?",
        "Are you a clean or messy?",
        "What is one thing you would like to become better at?",
        "How long does it take for you to get ready in the morning?",
        "What is your biggest concern about the future?",
        "Who was the last person you had a good conversation with?",
        "What was the last picture you took on your phone?",
        "Do you believe in luck?",
        "If you could live anywhere on earth, where would you live?",
        "What celebrity do you like to follow?",
        "What is your favorite holiday?",
        "What food do you like to snack on?",
        "If you knew you only had 24 hours left to live, what would you do?",
        "What is your favorite drink?",
        "Do you have any vacation plans coming up?",
        "What is your biggest concern about the future?",
        "What is the best thing about living in your city?",
    ];
    RandomWord = phrases[Math.floor(Math.random() * phrases.length)];
    text.textContent = RandomWord;
}
;

var text = document.getElementById("textT");

