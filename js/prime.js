//simple function that gets the input from the users as to how many primes the program is to find
function getInput(input)
{
    for (var count = 1; count < input;)
    {
            if (isPrime(testNum) == true)
                {
                    primes[count] = testNum;
                    count++;
                }
            //everytime a prime is found add it to the primes array
            testNum++;
    }
        DisplayTable();
}
  //function to display the results found in a table then find the multiples of thoses results

function DisplayTable(){
    
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
