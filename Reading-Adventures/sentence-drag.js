(function(){
'use strict';
function connect({container,pieces,targets,disabled,text,onDrop}){
 const ghost=document.getElementById('drag-ghost');let held=null,target=null;
 function clearTarget(){target?.classList.remove('drop-target');target=null;}
 function cancel(){const old=held;held=null;clearTarget();old?.tile.classList.remove('drag-source');if(old?.tile.hasPointerCapture(old.id))old.tile.releasePointerCapture(old.id);document.body.classList.remove('dragging');ghost.hidden=true;}
 function destination(ev){const hit=document.elementFromPoint(ev.clientX,ev.clientY)?.closest(targets);return hit&&container.contains(hit)?hit:null;}
 container.addEventListener('pointerdown',ev=>{const tile=ev.target.closest(pieces);if(!tile||held||disabled()||!ev.isPrimary||ev.button!==0)return;held={tile,piece:Number(tile.dataset.piece),id:ev.pointerId,x:ev.clientX,y:ev.clientY,moved:false};tile.setPointerCapture(ev.pointerId);ev.preventDefault();});
 document.addEventListener('pointermove',ev=>{if(!held||held.id!==ev.pointerId)return;if(!held.moved&&Math.hypot(ev.clientX-held.x,ev.clientY-held.y)<6)return;held.moved=true;ev.preventDefault();held.tile.classList.add('drag-source');document.body.classList.add('dragging');ghost.textContent=text(held.piece);ghost.hidden=false;const w=ghost.getBoundingClientRect().width;ghost.style.left=Math.max(5,Math.min(innerWidth-w-5,ev.clientX-w/2))+'px';ghost.style.top=Math.max(5,Math.min(innerHeight-ghost.offsetHeight-5,ev.clientY-ghost.offsetHeight-18))+'px';const next=destination(ev);if(next!==target){clearTarget();target=next;target?.classList.add('drop-target');}},{passive:false});
 document.addEventListener('pointerup',ev=>{if(!held||held.id!==ev.pointerId)return;const old=held,drop=destination(ev);cancel();if(old.moved&&drop&&!disabled())onDrop(old.piece,drop);});
 document.addEventListener('pointercancel',ev=>{if(held?.id===ev.pointerId)cancel();});
 container.addEventListener('lostpointercapture',ev=>{if(held?.id===ev.pointerId)cancel();});
 for(const type of ['dragstart','contextmenu'])container.addEventListener(type,ev=>{if(ev.target.closest(pieces))ev.preventDefault();});
 document.addEventListener('keydown',ev=>{if(ev.key==='Escape')cancel();});
 window.addEventListener('blur',cancel);window.addEventListener('pagehide',cancel);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});
 return{cancel};
}
// Fit all sentences to their cards at one common type size without scrolling.
function fit(container){
 let frame=0;
 function update(){frame=0;if(!container.getClientRects().length)return;const style=getComputedStyle(container),max=parseFloat(style.getPropertyValue('--tile-max'))||24,min=parseFloat(style.getPropertyValue('--tile-min'))||12;const cards=[...container.querySelectorAll('[data-sentence-text]')].filter(n=>n.getClientRects().length);
  for(let size=max;size>=min;size-=.5){container.style.setProperty('--tile-font',size+'px');if(cards.every(n=>{const tile=n.closest('[data-piece],[data-slot]'),a=n.getBoundingClientRect(),b=tile.getBoundingClientRect(),pad=getComputedStyle(tile);return a.top>=b.top+parseFloat(pad.paddingTop)-1&&a.bottom<=b.bottom-parseFloat(pad.paddingBottom)+1&&n.scrollWidth<=n.clientWidth+1;}))break;}
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(update);}
 new ResizeObserver(schedule).observe(container);window.addEventListener('resize',schedule);document.fonts?.ready.then(schedule);return schedule;
}
window.SentenceDrag={connect,fit};
})();
