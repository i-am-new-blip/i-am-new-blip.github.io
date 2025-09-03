const quotes = ""
window.api.quotes = quotes.split(', anyways, ')

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
async function quotize(){
  const quotes = window.api.quotes
  
  for (let loop = 0; loop < 5 && !window.api.stopQuotes; loop++) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    await typeWriteAsync(window.api.quoteManagerDiv, quote, 50); // 50ms per char
    // optional: add delay between quotes
    await new Promise(r => setTimeout(r, 500));
  }
}
