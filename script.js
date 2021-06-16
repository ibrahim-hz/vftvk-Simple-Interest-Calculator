function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById ("rate").value;
    t = document.getElementById ("years").value;
    si = parseInt((p*r*t)/100 );
    amount = p*Math.pow((1 +r/100),t );
    ci = amount-p;
    document.getElementById ('num1').innerHTML ="If you deposit "+p;
    document.getElementById ('num2').innerHTML ="at an interest rate of "+r;
    document.getElementById ('num3').innerHTML ="You will recieve an amount of "+si;
    document.getElementById ('num4').innerHTML ="in the year "+(202+t);
    
}
