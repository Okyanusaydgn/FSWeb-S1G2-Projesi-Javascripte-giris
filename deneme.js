var sesliHarfler="a,e,ı,i,o,ö,u,ü"
var cumle="Elimdeki büyük cicekler"
function sesliHarfSayaci(str) 
{
  for(var i=0;i<str.length;i++)
  {
    if(sesliHarfler.includes(str[i]))
    {
      console.log(i)
    }
  }
}
sesliHarfSayaci(cumle)