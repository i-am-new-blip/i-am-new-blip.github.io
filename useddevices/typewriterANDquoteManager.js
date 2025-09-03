function write(d,v){
  d.textContent += v
}
function typeWrite(d,v,t){
  let i = 0;

  function typeWriter() {
    write(d,v[i])
    i++;
    if (i <= v.length) {
      setTimeout(typeWriter, t); // adjust speed here
    }
  }

  typeWriter();
}

function storeQuotes(){
  if (!window.api.quotes) window.api.quotes = await (await fetch("/quotes.txt")).text()
}
function loadQuotes(){
  var loop = 1
  const quotes = window.api.quotes
  while (loop !== 5 && !window.api.stopQuotes){

    let quote = quotes[Math.floor(Math.random()*quotes.length)]
    typeWrite(window.api.quoteManagerDiv, quote)

    loop++
  }
}
