function BnR()
{
  var edtr = document.getElementById("editor").value
 
  
  if(edtr.includes("test/"))
  {
    alert("test successful")
  }
  if(edtr.includes("say/"))
  {
    alert("=> [Function: say]")
  }
  if(edtr.includes("test.phrase []/"))
  {
    alert("Hello")
  }
  if(edtr.includes("test.phrase.toCaps []/"))
  {
    alert("Hello".toUpperCase())
  }
  if(edtr.includes("test.phrase.toLowercase []/"))
  {
    alert("Hello".toLowerCase())
  }
  if(edtr.includes("warp/"))
  {
    alert("=> [Function: warp]")
  }
}
