import { orbs } from './orbs.js';
import { createOrb } from './generateOrbs.js';
  
const directions = ['se', 'sw', 'ne', 'nw']
  
window.addEventListener('load', () => {
  let orbIndex = 0;
  orbs.forEach((orb) => {
    const orbId = `orb${orbIndex}`;
    orb['id'] = orbId;
    orb['direction'] = directions[Math.floor(Math.random() * 4)];
    createOrb(orb);
    orbIndex++;
  });
});
