import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
  fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
}

// Helper to generate SVG header and defs
function getSvgHeader() {
  return `
    <svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Rich Potato Skin Gradients -->
        <radialGradient id="potatoSkinGrad" cx="35%" cy="35%" r="65%" fx="30%" fy="30%">
          <stop offset="0%" stop-color="#d9a76c" />
          <stop offset="30%" stop-color="#b58143" />
          <stop offset="70%" stop-color="#805426" />
          <stop offset="90%" stop-color="#593715" />
          <stop offset="100%" stop-color="#3d230d" />
        </radialGradient>
        
        <linearGradient id="skinHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>

        <!-- Peeling Ribbon Gradients (3D effect: outer skin + inner flesh) -->
        <linearGradient id="ribbonOuter" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#b58143" />
          <stop offset="50%" stop-color="#805426" />
          <stop offset="100%" stop-color="#4a2e15" />
        </linearGradient>
        <linearGradient id="ribbonInner" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fff6e5" />
          <stop offset="50%" stop-color="#ecd8b3" />
          <stop offset="100%" stop-color="#d1ba8e" />
        </linearGradient>

        <!-- Rich Potato Flesh Gradients -->
        <radialGradient id="potatoFleshGrad" cx="35%" cy="35%" r="65%" fx="30%" fy="30%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="25%" stop-color="#fff8eb" />
          <stop offset="65%" stop-color="#f0e2c9" />
          <stop offset="90%" stop-color="#dbcab0" />
          <stop offset="100%" stop-color="#c2b093" />
        </radialGradient>
        
        <linearGradient id="fleshSideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ebdcb9" />
          <stop offset="100%" stop-color="#b8a582" />
        </linearGradient>

        <!-- Peeler Tool Gradients -->
        <linearGradient id="peelerMetal" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="#e6e6e6" />
          <stop offset="30%" stop-color="#ffffff" />
          <stop offset="50%" stop-color="#b0b0b0" />
          <stop offset="70%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#707070" />
        </linearGradient>
        <linearGradient id="peelerHandle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2b1d12" />
          <stop offset="40%" stop-color="#4a3321" />
          <stop offset="70%" stop-color="#694a32" />
          <stop offset="100%" stop-color="#1f140c" />
        </linearGradient>

        <!-- Chef Knife Gradients -->
        <linearGradient id="knifeBlade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="20%" stop-color="#e1e6eb" />
          <stop offset="60%" stop-color="#9aa0a6" />
          <stop offset="80%" stop-color="#5f6368" />
          <stop offset="100%" stop-color="#3c4043" />
        </linearGradient>
        <linearGradient id="knifeHandle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#202124" />
          <stop offset="50%" stop-color="#3c4043" />
          <stop offset="100%" stop-color="#171717" />
        </linearGradient>

        <!-- Golden Fry Gradients -->
        <linearGradient id="fryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffea9f" />
          <stop offset="30%" stop-color="#ffd05c" />
          <stop offset="70%" stop-color="#e09722" />
          <stop offset="90%" stop-color="#ad6610" />
          <stop offset="100%" stop-color="#7a4306" />
        </linearGradient>
        <linearGradient id="frySideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e09722" />
          <stop offset="100%" stop-color="#8a4f0d" />
        </linearGradient>
        <linearGradient id="fryTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fff2b3" />
          <stop offset="100%" stop-color="#ffd05c" />
        </linearGradient>

        <!-- Raw Fry Gradients -->
        <linearGradient id="rawFryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fffaf0" />
          <stop offset="50%" stop-color="#f0e2c9" />
          <stop offset="100%" stop-color="#dbcab0" />
        </linearGradient>
        <linearGradient id="rawFrySideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e6d5b8" />
          <stop offset="100%" stop-color="#bda988" />
        </linearGradient>
        <linearGradient id="rawFryTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#f0e2c9" />
        </linearGradient>

        <!-- Glisten / Highlight -->
        <linearGradient id="glistenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>

        <!-- Shadow Base Gradient -->
        <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.65" />
          <stop offset="40%" stop-color="#000000" stop-opacity="0.35" />
          <stop offset="70%" stop-color="#4a2e15" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#4a2e15" stop-opacity="0" />
        </radialGradient>

        <!-- Filters -->
        <filter id="blurSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="blurMedium" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="12" dy="18" stdDeviation="15" flood-color="#000000" flood-opacity="0.4" />
        </filter>
        <filter id="toolShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="8" dy="12" stdDeviation="8" flood-color="#000000" flood-opacity="0.5" />
        </filter>
        <filter id="fryShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.35" />
        </filter>

        <!-- Blemish Group (Eyes and realistic farm potato texture) -->
        <g id="blemishes">
          <g transform="translate(320, 280) rotate(-15)">
            <ellipse cx="0" cy="0" rx="14" ry="9" fill="#593515" opacity="0.75"/>
            <ellipse cx="2" cy="2" rx="8" ry="5" fill="#2b1707" opacity="0.9"/>
            <path d="M -12 -5 Q 0 -10 12 -5" fill="none" stroke="#f2ca99" stroke-width="2" opacity="0.6"/>
          </g>

          <g transform="translate(480, 320) rotate(25)">
            <ellipse cx="0" cy="0" rx="18" ry="12" fill="#593515" opacity="0.7"/>
            <ellipse cx="2" cy="2" rx="10" ry="6" fill="#2b1707" opacity="0.9"/>
            <path d="M -15 -6 Q 0 -12 15 -6" fill="none" stroke="#f2ca99" stroke-width="2.5" opacity="0.6"/>
          </g>

          <g transform="translate(260, 420) rotate(-40)">
            <ellipse cx="0" cy="0" rx="15" ry="10" fill="#593515" opacity="0.7"/>
            <ellipse cx="2" cy="2" rx="8" ry="5" fill="#2b1707" opacity="0.9"/>
            <path d="M -12 -5 Q 0 -10 12 -5" fill="none" stroke="#f2ca99" stroke-width="2" opacity="0.6"/>
          </g>

          <g transform="translate(530, 470) rotate(15)">
            <ellipse cx="0" cy="0" rx="20" ry="14" fill="#593515" opacity="0.65"/>
            <ellipse cx="3" cy="3" rx="11" ry="7" fill="#2b1707" opacity="0.9"/>
            <path d="M -16 -7 Q 0 -14 16 -7" fill="none" stroke="#f2ca99" stroke-width="2.5" opacity="0.6"/>
          </g>

          <g transform="translate(380, 560) rotate(-10)">
            <ellipse cx="0" cy="0" rx="14" ry="10" fill="#593515" opacity="0.75"/>
            <ellipse cx="2" cy="2" rx="7" ry="5" fill="#2b1707" opacity="0.9"/>
            <path d="M -11 -5 Q 0 -9 11 -5" fill="none" stroke="#f2ca99" stroke-width="2" opacity="0.6"/>
          </g>

          <!-- Soil specks & organic skin texture -->
          <circle cx="350" cy="220" r="3.5" fill="#2b1707" opacity="0.8"/>
          <circle cx="450" cy="250" r="4.5" fill="#2b1707" opacity="0.7"/>
          <circle cx="280" cy="350" r="4" fill="#2b1707" opacity="0.75"/>
          <circle cx="540" cy="390" r="5" fill="#2b1707" opacity="0.8"/>
          <circle cx="310" cy="500" r="3.5" fill="#2b1707" opacity="0.7"/>
          <circle cx="460" cy="580" r="4.5" fill="#2b1707" opacity="0.85"/>
          <circle cx="410" cy="450" r="4" fill="#2b1707" opacity="0.6"/>
          <circle cx="380" cy="250" r="2.5" fill="#2b1707" opacity="0.7"/>
          <circle cx="420" cy="290" r="3" fill="#2b1707" opacity="0.8"/>
          <circle cx="300" cy="470" r="3" fill="#2b1707" opacity="0.75"/>
          <circle cx="490" cy="520" r="3.5" fill="#2b1707" opacity="0.8"/>
        </g>
      </defs>
  `;
}

const svgFooter = `</svg>`;

// Base potato path (beautiful organic 3D oval tilted at 3/4 angle)
const potatoPath = `M 300 180 C 460 140, 570 200, 600 350 C 630 500, 530 650, 380 670 C 230 690, 170 550, 200 350 C 230 180, 260 190, 300 180 Z`;

// Professional Y-Peeler Tool
const getPeelerSvg = (pX, pY, angle) => `
  <g transform="translate(${pX}, ${pY}) rotate(${angle})" filter="url(#toolShadow)">
    <!-- Peeler Handle -->
    <rect x="30" y="-20" width="160" height="40" rx="20" fill="url(#peelerHandle)" stroke="#593715" stroke-width="2" />
    <rect x="45" y="-12" width="130" height="8" rx="4" fill="#ffffff" opacity="0.15" />
    <!-- Metal Neck / Shaft -->
    <path d="M 0 -8 L 30 -12 L 30 12 L 0 8 Z" fill="url(#peelerMetal)" />
    <path d="M -30 -25 L 0 -8 L 0 8 L -30 25 L -35 20 L -10 0 L -35 -20 Z" fill="url(#peelerMetal)" />
    <!-- Y-Peeler Head & Blade -->
    <path d="M -50 -35 L -30 -25 L -30 25 L -50 35 L -55 28 L -40 22 L -40 -22 L -55 -28 Z" fill="url(#peelerMetal)" />
    <!-- Swivel Blade in center -->
    <rect x="-46" y="-20" width="10" height="40" rx="3" fill="url(#peelerMetal)" stroke="#333333" stroke-width="1" />
    <line x1="-41" y1="-18" x2="-41" y2="18" stroke="#ffffff" stroke-width="2" opacity="0.8" />
    <!-- Rivets -->
    <circle cx="38" cy="0" r="4" fill="#a0a0a0" />
    <circle cx="170" cy="0" r="4" fill="#a0a0a0" />
  </g>
`;

// Professional Chef Knife Tool (Santoku style with Granton edge)
const getChefKnifeSvg = (kX, kY, angle) => `
  <g transform="translate(${kX}, ${kY}) rotate(${angle})" filter="url(#toolShadow)">
    <!-- Blade -->
    <path d="M 0 0 L 450 15 C 420 75, 250 85, 0 65 Z" fill="url(#knifeBlade)" />
    <!-- Hollow ground Granton edge dimples -->
    ${[50, 100, 150, 200, 250, 300, 350].map(x => `<ellipse cx="${x}" cy="45" rx="10" ry="6" fill="#202124" opacity="0.3" />`).join('')}
    <!-- Blade Highlight -->
    <path d="M 0 2 L 440 17 L 400 25 L 0 20 Z" fill="#ffffff" opacity="0.3" />
    <!-- Bolster -->
    <rect x="-15" y="-5" width="20" height="75" rx="5" fill="url(#peelerMetal)" />
    <!-- Handle -->
    <path d="M -15 5 L -160 5 C -170 5, -175 15, -175 30 C -175 45, -170 55, -160 55 L -15 55 Z" fill="url(#knifeHandle)" stroke="#3c4043" stroke-width="2" />
    <!-- Rivets -->
    <circle cx="-40" cy="30" r="5" fill="#e6e6e6" />
    <circle cx="-90" cy="30" r="5" fill="#e6e6e6" />
    <circle cx="-140" cy="30" r="5" fill="#e6e6e6" />
  </g>
`;

// 28 Fry positions for the 3D pile
const friesData = [
  { x: 280, y: 520, w: 180, h: 35, rot: -15 },
  { x: 320, y: 480, w: 210, h: 38, rot: 10 },
  { x: 250, y: 450, w: 190, h: 36, rot: -25 },
  { x: 390, y: 460, w: 220, h: 40, rot: 20 },
  { x: 220, y: 550, w: 200, h: 35, rot: -5 },
  { x: 420, y: 530, w: 190, h: 38, rot: 15 },
  { x: 350, y: 560, w: 230, h: 36, rot: -10 },
  { x: 290, y: 410, w: 200, h: 35, rot: 5 },
  { x: 360, y: 390, w: 180, h: 38, rot: -15 },
  { x: 430, y: 420, w: 210, h: 36, rot: 25 },
  { x: 240, y: 380, w: 190, h: 35, rot: -20 },
  { x: 310, y: 350, w: 220, h: 38, rot: 12 },
  { x: 380, y: 340, w: 200, h: 36, rot: -8 },
  { x: 450, y: 370, w: 190, h: 35, rot: 30 },
  { x: 270, y: 480, w: 210, h: 38, rot: -12 },
  { x: 340, y: 440, w: 230, h: 40, rot: 8 },
  { x: 410, y: 490, w: 200, h: 36, rot: -18 },
  { x: 260, y: 580, w: 220, h: 38, rot: 15 },
  { x: 380, y: 590, w: 190, h: 35, rot: -22 },
  { x: 460, y: 560, w: 180, h: 36, rot: 18 },
  { x: 300, y: 610, w: 210, h: 38, rot: -5 },
  { x: 210, y: 490, w: 190, h: 35, rot: -30 },
  { x: 480, y: 470, w: 200, h: 38, rot: 35 },
  { x: 330, y: 300, w: 210, h: 36, rot: 5 },
  { x: 260, y: 320, w: 180, h: 35, rot: -15 },
  { x: 420, y: 310, w: 190, h: 38, rot: 20 },
  { x: 350, y: 260, w: 200, h: 36, rot: -5 },
  { x: 290, y: 270, w: 190, h: 35, rot: 10 },
];

const renderFry = (fry, isGolden) => {
  const mainGrad = isGolden ? 'url(#fryGrad)' : 'url(#rawFryGrad)';
  const sideGrad = isGolden ? 'url(#frySideGrad)' : 'url(#rawFrySideGrad)';
  const topGrad = isGolden ? 'url(#fryTopGrad)' : 'url(#rawFryTopGrad)';
  const depth = 16;
  
  // Optional seasoning specks for golden fries
  let seasoning = '';
  if (isGolden) {
    const specks = [
      {x: fry.w * 0.2, y: fry.h * 0.3, r: 1.5, c: '#2d5a1e'}, // herb
      {x: fry.w * 0.5, y: fry.h * 0.6, r: 2, c: '#ffffff'},   // salt
      {x: fry.w * 0.7, y: fry.h * 0.4, r: 1.5, c: '#2d5a1e'}, // herb
      {x: fry.w * 0.85, y: fry.h * 0.7, r: 1.8, c: '#ffffff'}, // salt
      {x: fry.w * 0.35, y: fry.h * 0.5, r: 2, c: '#593715'},  // crisp edge browning
    ].map(s => `<circle cx="${fry.x + s.x}" cy="${fry.y + s.y}" r="${s.r}" fill="${s.c}" opacity="0.8" />`).join('');
    seasoning = specks;
  }

  return `
    <g transform="rotate(${fry.rot} ${fry.x} ${fry.y})" filter="url(#fryShadow)">
      <!-- Top 3D depth poly -->
      <polygon points="${fry.x},${fry.y} ${fry.x + depth},${fry.y - depth} ${fry.x + fry.w + depth},${fry.y - depth} ${fry.x + fry.w},${fry.y}" fill="${topGrad}" stroke="#dbcab0" stroke-width="0.5" />
      <!-- Side 3D depth poly -->
      <polygon points="${fry.x + fry.w},${fry.y} ${fry.x + fry.w + depth},${fry.y - depth} ${fry.x + fry.w + depth},${fry.y + fry.h - depth} ${fry.x + fry.w},${fry.y + fry.h}" fill="${sideGrad}" stroke="#bda988" stroke-width="0.5" />
      <!-- Front face -->
      <rect x="${fry.x}" y="${fry.y}" width="${fry.w}" height="${fry.h}" rx="4" fill="${mainGrad}" stroke="#f0e2c9" stroke-width="0.5" />
      <!-- Highlight -->
      <rect x="${fry.x + 2}" y="${fry.y + 2}" width="${fry.w - 4}" height="5" rx="2" fill="#ffffff" opacity="0.4" />
      ${seasoning}
    </g>
  `;
};

async function generateSvgToPng(filename, svgContent) {
  const fullSvg = `${getSvgHeader()}${svgContent}${svgFooter}`;
  const outputPath = path.join(PUBLIC_IMAGES_DIR, filename);
  await sharp(Buffer.from(fullSvg))
    .png()
    .toFile(outputPath);
  console.log(`Generated: ${filename}`);
}

async function main() {
  console.log('Starting hyper-realistic image generation...');

  // 1. shadow_base.png
  await generateSvgToPng('shadow_base.png', `
    <ellipse cx="400" cy="700" rx="280" ry="50" fill="url(#shadowGrad)" />
    <ellipse cx="400" cy="695" rx="200" ry="30" fill="#000000" opacity="0.4" filter="url(#blurSoft)" />
  `);

  // 2. steam_overlay.png
  await generateSvgToPng('steam_overlay.png', `
    <g filter="url(#blurHeavy)" opacity="0.45">
      <path d="M 250 650 Q 200 450 350 250 T 280 50" fill="none" stroke="#ffffff" stroke-width="90" stroke-linecap="round" />
      <path d="M 450 670 Q 550 470 380 270 T 490 70" fill="none" stroke="#ffffff" stroke-width="110" stroke-linecap="round" />
      <path d="M 350 680 Q 280 480 450 280 T 360 80" fill="none" stroke="#ffffff" stroke-width="100" stroke-linecap="round" />
    </g>
    <g filter="url(#blurMedium)" opacity="0.35">
      <path d="M 280 620 Q 220 430 330 280 T 270 80" fill="none" stroke="#fffaf0" stroke-width="60" stroke-linecap="round" />
      <path d="M 480 640 Q 550 450 430 300 T 510 100" fill="none" stroke="#fffaf0" stroke-width="70" stroke-linecap="round" />
    </g>
  `);

  // 3. potato_hero.png
  await generateSvgToPng('potato_hero.png', `
    <g filter="url(#dropShadow)">
      <path d="${potatoPath}" fill="url(#potatoSkinGrad)" />
      <use href="#blemishes" />
      <!-- Soft skin highlight -->
      <path d="M 280 230 C 350 200, 420 220, 450 270 C 420 240, 350 220, 280 230 Z" fill="url(#skinHighlight)" />
      <!-- Secondary edge highlight -->
      <path d="M 220 350 C 200 450, 250 580, 350 640 C 250 580, 220 450, 220 350 Z" fill="#ffffff" opacity="0.15" filter="url(#blurSoft)" />
    </g>
  `);

  // 4. Peeling Sequence (peel_01.png to peel_20.png)
  for (let i = 1; i <= 20; i++) {
    const progress = i / 20; // 0.05 to 1.0
    const filename = `peel_${String(i).padStart(2, '0')}.png`;

    // Peeler glides down along the 3D contour from top-right (480, 160) to bottom-left (350, 680)
    const startY = 160;
    const endY = 680;
    const currentY = startY + (endY - startY) * progress;
    const startX = 480;
    const endX = 350;
    const currentX = startX + (endX - startX) * progress;
    const peelerAngle = -25 + progress * 15; // peeler tilts as it moves down

    // Ribbon calculation - beautiful 3D twisting curls dangling directly from peeler blade
    let ribbonSvg = '';
    if (progress > 0.05 && progress < 0.95) {
      const rX = currentX - 45;
      const rY = currentY;
      const len = progress * 380; // total ribbon dangle length
      const loops = Math.min(5, Math.max(1, Math.floor(progress * 6))); // number of twists
      
      let twistPaths = '';
      for (let l = 0; l < loops; l++) {
        const sY = rY + (l * len) / loops;
        const nextY = rY + ((l + 1) * len) / loops;
        const midY = (sY + nextY) / 2;
        const w = 35 + Math.sin(l * 1.5) * 15; // dynamic ribbon width
        
        // Outer skin curl & Inner flesh curl alternating
        twistPaths += `
          <path d="M ${rX} ${sY} C ${rX - w} ${sY + 15}, ${rX - w} ${midY - 15}, ${rX} ${midY} C ${rX + w/2} ${midY - 10}, ${rX + w/2} ${sY + 10}, ${rX} ${sY} Z" fill="url(#ribbonOuter)" filter="url(#fryShadow)" />
          <path d="M ${rX} ${midY} C ${rX + w} ${midY + 15}, ${rX + w} ${nextY - 15}, ${rX} ${nextY} C ${rX - w/2} ${nextY - 10}, ${rX - w/2} ${midY + 10}, ${rX} ${midY} Z" fill="url(#ribbonInner)" filter="url(#fryShadow)" />
        `;
      }
      
      // Tiny glistening moisture droplets flying off peeler blade
      const droplets = [
        {x: rX - 15, y: rY + 10, r: 3},
        {x: rX + 25, y: rY + 25, r: 4.5},
        {x: rX - 30, y: rY + 45, r: 3},
        {x: rX + 15, y: rY + 65, r: 4},
        {x: rX - 10, y: rY + 85, r: 2.5},
      ].map(d => `<circle cx="${d.x}" cy="${d.y}" r="${d.r}" fill="#ffffff" opacity="0.9" filter="url(#blurSoft)"/>`).join('');

      ribbonSvg = `
        <g filter="url(#toolShadow)">
          ${twistPaths}
        </g>
        ${droplets}
      `;
    }

    // Glisten opacity increases as potato gets peeled
    const glistenOpacity = 0.4 + progress * 0.45;

    await generateSvgToPng(filename, `
      <g filter="url(#dropShadow)">
        <!-- Base Flesh -->
        <path d="${potatoPath}" fill="url(#potatoFleshGrad)" />
        <!-- Flesh Glisten / Wet Sheen -->
        <ellipse cx="360" cy="280" rx="80" ry="50" fill="url(#glistenGrad)" opacity="${glistenOpacity}" transform="rotate(-20 360 280)"/>
        <ellipse cx="420" cy="480" rx="90" ry="60" fill="url(#glistenGrad)" opacity="${glistenOpacity * 0.7}" transform="rotate(15 420 480)"/>

        <!-- Beautiful Curved Organic Peeling Mask -->
        <mask id="mask_${i}">
          <rect x="0" y="0" width="800" height="800" fill="#ffffff" />
          <path d="M 0 0 L 800 0 L 800 ${currentY - 10} Q 400 ${currentY + 70} 0 ${currentY + 20} Z" fill="#000000" />
        </mask>

        <g mask="url(#mask_${i})">
          <path d="${potatoPath}" fill="url(#potatoSkinGrad)" />
          <use href="#blemishes" />
          <path d="M 280 230 C 350 200, 420 220, 450 270 C 420 240, 350 220, 280 230 Z" fill="url(#skinHighlight)" />
        </g>
      </g>
      ${progress < 0.98 ? getPeelerSvg(currentX, currentY, peelerAngle) : ''}
      ${ribbonSvg}
    `);
  }

  // 5. Cutting Sequence (cut_01.png to cut_20.png)
  for (let i = 1; i <= 20; i++) {
    const filename = `cut_${String(i).padStart(2, '0')}.png`;

    if (i === 1) {
      // Peeled potato + Chef knife entering at top
      await generateSvgToPng(filename, `
        <g filter="url(#dropShadow)">
          <path d="${potatoPath}" fill="url(#potatoFleshGrad)" />
          <ellipse cx="360" cy="280" rx="80" ry="50" fill="url(#glistenGrad)" opacity="0.85" transform="rotate(-20 360 280)"/>
          <ellipse cx="420" cy="480" rx="90" ry="60" fill="url(#glistenGrad)" opacity="0.6" transform="rotate(15 420 480)"/>
        </g>
        ${getChefKnifeSvg(180, -50, 15)}
      `);
    } else if (i >= 2 && i <= 7) {
      // Slicing into 6 beautiful 3D planks fanning apart
      const sliceProgress = (i - 1) / 6; // 0.16 to 1.0
      const knifeY = -50 + sliceProgress * 520;
      const knifeAngle = 15 - sliceProgress * 10;
      
      const spread = sliceProgress * 45; // outer planks move outward
      const planksSvg = [
        { d: `M 200 350 C 200 220, 230 200, 260 190 L 260 670 C 230 660, 200 550, 200 350 Z`, x: -spread * 2.5, w: 60 },
        { d: `M 260 190 C 290 180, 320 175, 330 170 L 330 675 C 320 670, 290 665, 260 670 Z`, x: -spread * 1.5, w: 70 },
        { d: `M 330 170 C 370 165, 400 165, 410 170 L 410 675 C 400 670, 370 670, 330 675 Z`, x: -spread * 0.5, w: 80 },
        { d: `M 410 170 C 450 165, 480 170, 500 180 L 500 672 C 480 665, 450 670, 410 675 Z`, x: spread * 0.5, w: 90 },
        { d: `M 500 180 C 530 190, 560 200, 570 220 L 570 665 C 560 650, 530 660, 500 672 Z`, x: spread * 1.5, w: 70 },
        { d: `M 570 220 C 590 240, 600 280, 600 350 C 600 480, 590 620, 570 665 L 570 220 Z`, x: spread * 2.5, w: 30 },
      ].map((plank, idx) => `
        <g transform="translate(${plank.x}, 0)" filter="url(#dropShadow)">
          <!-- Side depth -->
          <path d="${plank.d}" fill="url(#fleshSideGrad)" transform="translate(${plank.w * 0.15}, 5)" />
          <!-- Front cut face -->
          <path d="${plank.d}" fill="url(#potatoFleshGrad)" stroke="#dbcab0" stroke-width="2" />
          <!-- Cut surface glisten -->
          <path d="${plank.d}" fill="url(#glistenGrad)" opacity="0.4" transform="scale(0.95) translate(15, 15)" />
        </g>
      `).join('');

      await generateSvgToPng(filename, `
        ${planksSvg}
        ${getChefKnifeSvg(180, knifeY, knifeAngle)}
      `);
    } else if (i >= 8 && i <= 14) {
      // Rapid vertical chopping across planks into fry sticks fanning outward
      const stickProgress = (i - 7) / 7; // 0.14 to 1.0
      // Knife moves horizontally right to left chopping rapidly
      const knifeX = 550 - stickProgress * 380;
      const knifeY = 200 + Math.sin(stickProgress * Math.PI * 6) * 80; // chopping up and down motion
      const knifeAngle = 5 + Math.cos(stickProgress * Math.PI * 6) * 10;

      // Intermediate state: render fries fanning out and tumbling from plank positions to final pile positions
      const intermediateFriesSvg = friesData.map((fry, idx) => {
        const origX = 240 + (idx % 5) * 75;
        const origY = 190 + Math.floor(idx / 5) * 85;
        
        const currX = origX + (fry.x - origX) * stickProgress;
        const currY = origY + (fry.y - origY) * stickProgress;
        const currRot = (fry.rot + (idx % 3 === 0 ? 360 : -360)) * stickProgress;

        const tempFry = { ...fry, x: currX, y: currY, rot: currRot };
        return renderFry(tempFry, false);
      }).join('');

      // Tiny starch droplets flying from chopping action
      const droplets = [
        {x: knifeX + 50, y: knifeY + 80, r: 3},
        {x: knifeX + 120, y: knifeY + 110, r: 4.5},
        {x: knifeX + 20, y: knifeY + 140, r: 3.5},
        {x: knifeX + 160, y: knifeY + 90, r: 4},
      ].map(d => `<circle cx="${d.x}" cy="${d.y}" r="${d.r}" fill="#ffffff" opacity="0.9" filter="url(#blurSoft)"/>`).join('');

      await generateSvgToPng(filename, `
        ${intermediateFriesSvg}
        ${droplets}
        ${getChefKnifeSvg(knifeX, knifeY, knifeAngle)}
      `);
    } else if (i >= 15 && i <= 19) {
      // Fries settling into beautiful dense natural 3D pile (raw stage)
      // Chef knife moves down and out of frame
      const settleProgress = (i - 14) / 5;
      const knifeY = 400 + settleProgress * 500;
      const knifeX = 170 - settleProgress * 200;

      const settledFriesSvg = friesData.map(fry => renderFry(fry, false)).join('');

      await generateSvgToPng(filename, `
        ${settledFriesSvg}
        ${i < 17 ? getChefKnifeSvg(knifeX, knifeY, 5) : ''}
      `);
    } else if (i === 20) {
      // FINAL - Crispy golden brown fries reveal with bubbling oil sheen and gourmet seasoning
      const goldenFriesSvg = friesData.map(fry => renderFry(fry, true)).join('');

      await generateSvgToPng(filename, `
        ${goldenFriesSvg}
      `);
    }
  }

  console.log('All hyper-realistic images generated successfully!');
}

main().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
