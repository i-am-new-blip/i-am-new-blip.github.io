function write(d,v){
  d.textContent += v
}
function typeWriteAsync(d,v,t){
  return new Promise(resolve=>{
    let i = 0;
    function typeWriter() {
      d.textContent += v[i];
      i++;
      if (i < v.length) setTimeout(typeWriter, t);
      else resolve();
    }
    typeWriter();
  });
}


async function storeQuotes(){
  if (!window.api.quotes) {
    const text = await (await fetch("/quotes.txt")).text();
    window.api.quotes = text.split(', anyways, ');
  }
}

async function loadQuotes(){
  if (!window.api.quotes) await storeQuotes();
  const quotes = window.api.quotes
  
  for (let loop = 0; loop < 5 && !window.api.stopQuotes; loop++) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    await typeWriteAsync(window.api.quoteManagerDiv, quote, 50); // 50ms per char
    // optional: add delay between quotes
    await new Promise(r => setTimeout(r, 500));
  }
}
