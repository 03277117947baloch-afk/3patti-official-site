/* scripts.js
   Central CONFIG object controls content:
   - Change site title, buttons, games, videos, downloads here.
   - This file renders UI based on CONFIG so updates are one-place.
*/

/* ---------------------
   CONFIG - EDIT HERE
   --------------------- */
const CONFIG = {
  siteName: "3PATTI OFFICIAL",
  hero: {
    badge: "🎰 Limited Time Offer",
    subtitle: "Experience the ultimate 3 Patti card game with live gameplay, amazing features, and exclusive rewards. Download now and start playing!",
    buttons: [
      { text: "⬇️ Download Now", class: "btn-primary", href: "#download" },
      { text: "📱 iOS App", class: "btn-secondary", href: "#" },
      { text: "💬 Join WhatsApp", class: "btn-green", href: "https://chat.whatsapp.com/" }
    ],
    stats: [
      { value: "50K+", label: "Active Players" },
      { value: "100+", label: "Game Tables" },
      { value: "24/7", label: "Live Support" },
      { value: "₹1Cr+", label: "Daily Prizes" }
    ]
  },
  featured: {
    image: "assets/placeholder-feature.jpg",
    badge: "🏆 Most Popular",
    title: "3PATTI CLASSIC",
    desc: "The ultimate 3 Patti experience with stunning graphics, real-time multiplayer action, and huge jackpots. Play with friends and strangers from around the world. Win big every day!",
    bullets: [
      "Real-time Live Gameplay",
      "Multiple Game Variants",
      "24/7 Customer Support",
      "Secure & Fair Gaming",
      "Daily Bonuses & Rewards",
      "Instant Withdrawal"
    ],
    buttons: [
      { text: "⬇️ Download APK", class: "btn-primary", href: "#" },
      { text: "📖 How to Play", class: "btn-outline", href: "#" }
    ]
  },
  games: [
    { id: "classic", title: "Classic 3PATTI", img: "assets/game-classic.jpg", tag: "HOT", tagClass: "hot", desc: "Original 3 card poker with fast action.", play: "#" },
    { id: "tournament", title: "Tournament", img: "assets/game-tournament.jpg", tag: "NEW", tagClass: "new", desc: "Compete & win exclusive prizes.", play: "#" },
    { id: "cash", title: "Cash Game", img: "assets/game-cash.jpg", tag: "POPULAR", tagClass: "", desc: "High-stakes with real money.", play: "#" },
    { id: "daily", title: "Daily Challenge", img: "assets/game-daily.jpg", tag: "BONUS", tagClass: "", desc: "Complete challenges for rewards.", play: "#" },
    { id: "live", title: "Live Multiplayer", img: "assets/game-live.jpg", tag: "HOT", tagClass: "hot", desc: "Play live with real dealers.", play: "#" },
    { id: "vip", title: "VIP Tables", img: "assets/game-vip.jpg", tag: "PREMIUM", tagClass: "", desc: "Exclusive tables for VIP members.", play: "#" }
  ],
  videos: [
    { id: "v1", youtube: "dQw4w9WgXcQ", title: "How to play 3Patti - Quick Guide" },
    { id: "v2", youtube: "9bZkp7q19f0", title: "Top tips & tricks" },
    { id: "v3", youtube: "jNQXAC9IVRw", title: "Gameplay Highlights" }
  ],
  downloads: [
    { title: "📱 Android APK", desc: "Direct download for Android 5.0+", href: "#" },
    { title: "🍎 iOS App", desc: "Download from Apple App Store", href: "#" },
    { title: "🌐 Web Version", desc: "Play in your browser", href: "#" }
  ],
  infoBoxes: [
    { title: "🎮 Game Features", text: "3PATTI OFFICIAL offers premium gaming experience with real-time multiplayer, stunning graphics, fair gaming practices, and instant withdrawals." },
    { title: "🏆 Rewards & Bonuses", text: "Earn daily bonuses, loyalty rewards, referral commissions, and tournament prizes." },
    { title: "🔒 Security", text: "Your account is protected with encryption and fair gameplay checks." },
    { title: "💰 Easy Withdrawal", text: "Withdraw instantly using multiple payment methods." },
    { title: "👥 Live Community", text: "Join thousands of players in real-time games and events." },
    { title: "📞 24/7 Support", text: "Dedicated support via Chat, WhatsApp, Email and Phone." }
  ],
  faq: [
    { q: "How do I download 3PATTI OFFICIAL?", a: "Use the download links on this page or visit the official store pages." },
    { q: "Is 3PATTI OFFICIAL safe and secure?", a: "Yes. We use industry-standard encryption and verified fair gaming." },
    { q: "What are the minimum and maximum stakes?", a: "Tables range from ₹1 to ₹50,000+. Choose your table." },
    { q: "How do I withdraw my winnings?", a: "Go to Withdraw in your account, choose method and enter amount. Processed within 24 hours." }
  ],
  whatsappLink: "https://chat.whatsapp.com/"
};

/* ---------------------
   RENDERING LOGIC
   --------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Basic elements
  document.getElementById('siteLogo').textContent = CONFIG.siteName;
  document.getElementById('siteLogo').href = "#home";
  // HERO
  document.getElementById('heroBadge').textContent = CONFIG.hero.badge;
  document.getElementById('heroSubtitle').textContent = CONFIG.hero.subtitle;

  const heroButtons = document.getElementById('heroButtons');
  CONFIG.hero.buttons.forEach(b=>{
    const a = document.createElement('a');
    a.className = `btn ${b.class}`;
    a.href = b.href;
    a.textContent = b.text;
    heroButtons.appendChild(a);
  });

  const heroStats = document.getElementById('heroStats');
  CONFIG.hero.stats.forEach(s=>{
    const box = document.createElement('div');
    box.className = 'feature-stat';
    box.innerHTML = `<h3>${s.value}</h3><p>${s.label}</p>`;
    heroStats.appendChild(box);
  });

  // Featured
  document.querySelector('#featuredImage img').src = CONFIG.featured.image;
  document.getElementById('featuredBadge').textContent = CONFIG.featured.badge;
  document.getElementById('featuredTitle').textContent = CONFIG.featured.title;
  document.getElementById('featuredDesc').textContent = CONFIG.featured.desc;
  const fl = document.getElementById('featuredList');
  CONFIG.featured.bullets.forEach(b=>{
    const li = document.createElement('li');
    li.textContent = '✅ ' + b;
    fl.appendChild(li);
  });
  const fb = document.getElementById('featuredButtons');
  CONFIG.featured.buttons.forEach(btn=>{
    const a = document.createElement('a');
    a.className = `btn ${btn.class}`;
    a.href = btn.href;
    a.textContent = btn.text;
    fb.appendChild(a);
  });

  // Games grid
  const gamesGrid = document.getElementById('gamesGrid');
  CONFIG.games.forEach(g=>{
    const card = document.createElement('div'); card.className = 'game-card';
    card.innerHTML = `
      <div class="game-image">
        <img src="${g.img}" alt="${g.title}">
        <span class="game-tag ${g.tagClass}">${g.tag}</span>
      </div>
      <div class="game-info">
        <h3>${g.title}</h3>
        <p>${g.desc}</p>
        <div class="game-actions">
          <a href="${g.play}" class="btn btn-primary">Play</a>
          <a href="#" class="btn btn-outline">Info</a>
        </div>
      </div>
    `;
    gamesGrid.appendChild(card);
  });

  // Videos
  const videosGrid = document.getElementById('videosGrid');
  CONFIG.videos.forEach(v=>{
    const card = document.createElement('div'); card.className = 'video-card';
    card.innerHTML = `
      <div class="video-frame">
        <iframe src="https://www.youtube.com/embed/${v.youtube}" allowfullscreen title="${v.title}"></iframe>
      </div>
    `;
    videosGrid.appendChild(card);
  });

  // Download methods
  const dm = document.getElementById('downloadMethods');
  CONFIG.downloads.forEach(d=>{
    const el = document.createElement('div'); el.className = 'download-method';
    el.innerHTML = `<h3>${d.title}</h3><p style="color:var(--text-muted)">${d.desc}</p><a href="${d.href}" class="btn btn-primary">${d.title.includes("APK") ? "Download APK" : "Open"}</a>`;
    dm.appendChild(el);
  });

  // Info boxes
  const infoBoxes = document.getElementById('infoBoxes');
  CONFIG.infoBoxes.forEach(b=>{
    const el = document.createElement('div'); el.className = 'info-box';
    el.innerHTML = `<h3>${b.title}</h3><p>${b.text}</p>`;
    infoBoxes.appendChild(el);
  });

  // FAQ
  const faqList = document.getElementById('faqList');
  CONFIG.faq.forEach(f=>{
    const el = document.createElement('div'); el.className = 'info-box';
    el.style.marginBottom = '16px';
    el.innerHTML = `<h3>${f.q}</h3><p>${f.a}</p>`;
    faqList.appendChild(el);
  });

  // WhatsApp
  const whatsappBtn = document.getElementById('whatsappBtn');
  whatsappBtn.href = CONFIG.whatsappLink;

  // Footer copyright
  document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} ${CONFIG.siteName}. All Rights Reserved. | Licensed & Regulated`;

  // Menu toggle & smooth scroll & placeholder link alerts
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  menuToggle.addEventListener('click', ()=> navMenu.classList.toggle('active'));
  document.querySelectorAll('#navMenu a').forEach(a=> a.addEventListener('click', ()=> navMenu.classList.remove('active')));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href !== "#"){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({ behavior:'smooth' });
      }
    });
  });

  // Placeholder link warning (for demo links)
  document.querySelectorAll('a[href="#"]').forEach(link=>{
    link.addEventListener('click', function(e){
      const txt = this.textContent || "";
      if(/Download|Play|Join|Go Live|Challenge|Open/i.test(txt)){
        e.preventDefault();
        alert('Please update this link with your production URL.');
      }
    });
  });

});

/* ---------------------
   NOTES:
   - To update games/videos/downloads, edit the CONFIG at top.
   - To change look, edit CSS :root variables (colors, radii).
   - Replace assets/*.jpg with your real images. Use same filenames or update CONFIG.
   - If testing locally, run a simple server (e.g., `npx http-server` or `python -m http.server`) to avoid iframe/CORS issues.
--------------------- */
