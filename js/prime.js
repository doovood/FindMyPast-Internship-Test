var primes = new Array(); //create global array to store primes so that all functions have access

//simple function that listens for the input from the users as to how many primes the program is to find
function getInput(input)
{
    var testNum=2;
    for (var count = 1; count < input;)
    {
            if (isPrime(testNum) == true)
                {
                    primes[count] = testNum;
                    count++;
                }

            testNum++;
    }
        DisplayTable();
}

function DisplayTable(){
  /* first, get the values of the input fields and parse them as integers */
    primes[0] = 1;
    //initialize the new table being generated
    document.write("<table border='2px'>");
    
    //the initial for loop corresponds to the vertical numbers in the grid (y axis)
    for(var y = 0; y < primes.length; y++) {
    
        valy = primes[y];
        document.write("<tr style='height:30px;'>");
        
        //the nested for loop corresponds to the horizontal numbers in the grid (x axis)
        for(var x = 0; x < primes.length; x++) {
        valx = primes[x];
            //add element to the table
            document.write("<td style='width:30px;'>" + valy*valx + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

//function to check if a number n is prime or not.    
function isPrime(n) 
{
    var result = true;
    var cap = Math.floor(Math.sqrt(n));

    for ( var i = 2 ; i <= cap ; i++ )
       { 
            if ( n % i == 0 )
                {
                    //if number is NOT prime return false.
                    result = false;
                }     
       }

       if ( i == n ) //if the check reaches the last number without finding a composite
           {
               //number IS prime return true.
                result = true;
           }

    return result; //return true or false to wether or not the numbe being tested is prime.

}
