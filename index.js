function startDictation() {
  if (window.hasOwnProperty("webkitSpeechRecognition")) {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = "en-Uk";
    recognition.start();

    recognition.onresult = function(e) {
      document.getElementById("goole_search").value =
        e.results[0][0].transcript;
      recognition.stop();
      document.getElementById("Search-google").submit();
    };

    recognition.onerror = function(e) {
      recognition.stop();
    };
  }
}

function myFunctionsignin() {
  window.open(
    "https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
  );
}