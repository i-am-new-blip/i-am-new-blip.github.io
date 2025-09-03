const quotes = 'Explode, anyways, Read if cute, anyways, Have a nice day!, anyways, Starting Chrome\'s devtools hacking utilities, beep boop...., anyways, "Are you a robot?" Please checkmark the Thank you button which wont exist, you schizo, wait me?? the writer of this??, anyways, Loading Vencord\'s Plugin manager, it will help your distress, anyways, Installing tampermonkey.........., anyways, h, anyways, shhhhh did you know that you\'re my favourite IP? it starts with a 192.168, and ends with 069.420!, anyways, Fuck my life, Today\'s video is sponsored by Raid Shadow Legends, one of the biggest mobile role-playing games of your ISP and it\'s totally free! (take the wording seriously, anyways, Never gonna give you up, Never gonna let you down, anyways, uwu, anyways, ( \u0361\xB0 \u035C\u0296 \u0361\xB0), anyways, (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727, anyways, #freeschlep, anyways, #stoproblox, anyways, Thinking of a quote now.......... It\'s hard..........., anyways, 3.1415926535897932384626433832795028841971693993751058209749445923078164, anyways, meow, anyways, This website does not exist in the Github service hosting: github.io, Please try again later..................., anyways, If you, or someone ya has crush on, has Ligma, the new cancer, please see the hotline @ https://bit.ly/ligma_hotline, anyways, Filtered, anyways, I\u2019d just like to interject for a moment. What you\u2019re refering to as Linux, is in fact, GNU/Linux, or as I\u2019ve recently taken to calling it, GNU plus Linux, anyways, You\'re quite fine at your studies, why ya buying an IPad? SKIBIDI TOILET?? FUCK NO!\nDon\'t worry, it\'s nothing 9 cups of coffee couldn\'t solve!, anyways, Don\'t worry, it\'s nothing 9 cups of coffee couldn\'t solve!, anyways, ������������������������������������������v, anyways, ya love someone?, anyways, Dying is safe - Vencord owner, anyways, tomfoolery (x20) - neurosama, anyways, Welcome to nginx!, anyways, Welcome to nginx�, anyways, Welcome to ngin��, anyways, Welcome to ngi���, anyways, Welcome to ng����, anyways, Welcome to n�����, anyways, Welcome to ������, anyways, Welcome to������, anyways, Welcome t�������, anyways, Welcome ��������, anyways, Welcome���������, anyways, Welcom����������, anyways, Welco�����������, anyways, Welc�����������, anyways, Wel������������, anyways, We�������������, anyways, W��������������, anyways, ���������������, anyways, So without further ado, let's just jump right into it!, anyways, Time is gone, space is insane. Here it comes, here again., anyways, sometimes it's okay to just guhhhhhhhhhh, anyways, Bye bye kiddos, that #freeschlep free y'all, anyways, ZzZzZzZzZzZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzZZzZz"
window.apis.quotes = quotes.split(', anyways, ')

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
  const quotes = window.apis.quotes
  
  for (let loop = 0; loop < 5 && !window.api.stopQuotes; loop++) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    await typeWriteAsync(window.api.quoteManagerDiv, quote, 50); // 50ms per char
    // optional: add delay between quotes
    await new Promise(r => setTimeout(r, 500));
  }
}
