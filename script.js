var n=5;
//outer for loop
for (var i= 1; i<=n; i++)
{
    var str = " ";
    for (var j=1; j<=n-i; j++)
    {
        str += " ";
    }
   for (var k= 0 ; k<2*i-1 ;k++)
   {
        str += "*";
   }
   console.log(str);
}
//var n=5;
for (var i= n-1; i>=0; i--)
{
   var str = " ";
    for (var j=1; j<=n-i; j++)
    {
        str += " ";
    }
   for (var k= 0 ; k<2*i-1 ; k++)
   {
        str += "*";
   }
   console.log(str);
   
}

