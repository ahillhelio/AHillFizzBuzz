var count = 0;

while ( count <= 100 ) {

    var fizzBuzz = "";
    if (count % 15 == 0) {
      i = "FizzBuzz";
    }
    else if (count % 3  == 0) {
      i = "Fizz";
    }
    else if (count % 5  == 0) {
      i = "Buzz";
    }
    else {
      i = "";
    }
    console.log(i || count);
    count++;
  }