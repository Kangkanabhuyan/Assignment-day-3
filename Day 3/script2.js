let varName = prompt('Enter your Email or Passord ?');
 switch (varName)
 {
    case "abcd@gmail.com", "12345", "abc@gmail.com":
        console.log ('Hey Hurray! You are logged in');
        break;

    default:
        console.log ('Try again!');
        break;
 }