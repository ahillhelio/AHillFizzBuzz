
var count = 0;

do {
    
    var i = "";
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

  while ( count <= 100 )

  