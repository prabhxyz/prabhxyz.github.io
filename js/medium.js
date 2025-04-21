/* ===== build auto‑scrolling Medium strip ===== */

/* get list of article URLs from hidden div */
const linkBox = document.getElementById('MEDIUM_LINKS');
if (!linkBox) throw new Error('MEDIUM_LINKS div missing');
const links = linkBox.textContent.trim().split(/\s+/);

/* container */
const strip = document.getElementById('post-strip');

/* fetch Medium RSS once and map items by link */
async function getFeed(){
  const api = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@prabhs';
  const res = await fetch(api); const data = await res.json();
  return data.items || [];
}

(async ()=>{
  const items = await getFeed();

  links.forEach(url=>{
    /* find matching item in RSS */
    const itm = items.find(i=>i.link.startsWith(url));
    if(!itm) return;

    /* thumbnail sometimes starts with https://miro... remove query params */
    const img = (itm.thumbnail || '').split('?')[0];
    const card = document.createElement('a');
    card.className='post'; card.href=url; card.target='_blank';
    card.innerHTML = `
        <img src="${img}" alt="">
        <div class="content">
          <h4>${itm.title}</h4>
          <p>${itm.description.replace(/<[^>]+>/g,'').slice(0,90)}…</p>
        </div>`;
    strip.appendChild(card);
  });

  /* duplicate nodes for seamless loop */
  strip.innerHTML += strip.innerHTML;
})();
