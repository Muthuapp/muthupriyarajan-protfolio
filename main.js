// Main Application JavaScript for Muthu Priyarajan M Portfolio
document.addEventListener("DOMContentLoaded", () => {
  initCanvasParticles();
  initCustomCursor();
  initTypewriter();
  initScrollProgress();
  renderStats();
  renderSkills("All");
  renderProjects("All");
  initAiSimulator();
  renderTimeline();
  renderServices();
  initTestimonials();
  initContactForm();
  initResumeModal();
  initProjectModal();
  initMobileMenu();
  initScrollTop();
  
  if (window.lucide) {
    lucide.createIcons();
  }
});

/* 1. Interactive Canvas Neural Constellation */
function initCanvasParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: null, y: null, radius: 120 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  const count = Math.min(Math.floor((width * height) / 14000), 75);
  const colors = ["#6366F1", "#8B5CF6", "#06B6D4", "#EC4899", "#38BDF8"];
  const particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        }
      }
      this.draw();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function connect() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / 130) * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
    }
    connect();
    requestAnimationFrame(animate);
  }
  animate();
}

/* 3. Custom Glowing Mouse Cursor */
function initCustomCursor() {
  if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) return;

  const ring = document.getElementById("cursor-ring");
  const dot = document.getElementById("cursor-dot");
  if (!ring || !dot) return;

  window.addEventListener("mousemove", (e) => {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    ring.style.transform = `translate(${e.clientX - ring.offsetWidth / 2}px, ${e.clientY - ring.offsetHeight / 2}px)`;
  });

  const interactives = "a, button, input, textarea, select, [role='button'], .cursor-pointer";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactives)) {
      ring.classList.add("cursor-hover");
    } else {
      ring.classList.remove("cursor-hover");
    }
  });
}

/* 4. Typewriter Effect */
function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;
  const roles = portfolioData.personalInfo.roles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIdx];
    if (!isDeleting) {
      charIdx++;
      target.textContent = current.substring(0, charIdx);
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      charIdx--;
      target.textContent = current.substring(0, charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(type, 400);
        return;
      }
    }
    setTimeout(type, isDeleting ? 40 : 80);
  }
  type();
}

/* 5. Scroll Progress & Header Glass */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress-bar");
  const header = document.getElementById("main-header");
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    if (bar) bar.style.width = `${progress}%`;

    if (window.scrollY > 30) {
      header.classList.add("bg-slate-950/80", "backdrop-blur-xl", "border-b", "border-slate-800/80", "shadow-2xl");
    } else {
      header.classList.remove("bg-slate-950/80", "backdrop-blur-xl", "border-b", "border-slate-800/80", "shadow-2xl");
    }

    if (window.scrollY > 400) {
      scrollTopBtn?.classList.remove("hidden");
    } else {
      scrollTopBtn?.classList.add("hidden");
    }
  });
}

/* 6. Render Stats in About Section */
function renderStats() {
  const container = document.getElementById("stats-grid");
  if (!container) return;
  const stats = portfolioData.personalInfo.stats;
  const colors = [
    "from-indigo-500 to-purple-600 border-indigo-500/40",
    "from-cyan-500 to-blue-600 border-cyan-500/40",
    "from-pink-500 to-rose-600 border-pink-500/40",
    "from-amber-500 to-orange-600 border-amber-500/40"
  ];

  container.innerHTML = stats.map((s, idx) => `
    <div class="glass-card p-5 sm:p-6 rounded-2xl border ${colors[idx % colors.length].split(" ")[1]} relative group">
      <div class="flex items-center justify-between mb-4">
        <div class="p-3 rounded-xl bg-gradient-to-tr ${colors[idx % colors.length].split(" ")[0]} text-white shadow-lg">
          <i data-lucide="${s.icon}" class="w-5 h-5"></i>
        </div>
        <span class="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md">
          ${s.unit}
        </span>
      </div>
      <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
        ${s.value}
      </div>
      <div class="text-sm font-semibold text-slate-200 mt-1">${s.label}</div>
      <div class="text-xs text-slate-400 mt-0.5">${s.sub}</div>
    </div>
  `).join("");
}

/* 7. Skills & Filtering */
function renderSkills(category) {
  const container = document.getElementById("skills-container");
  if (!container) return;

  const filtered = portfolioData.skills.filter(s => category === "All" || s.category === category);

  container.innerHTML = filtered.map(s => `
    <div class="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 group">
      <div class="flex items-center justify-between mb-4">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center p-2 bg-slate-900 border border-slate-700/60 shadow-md">
          <span class="font-mono text-cyan-400 font-bold text-xs">&lt;/&gt;</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md">
            ${s.tag}
          </span>
          <span class="text-xs font-mono font-bold text-cyan-400 mt-1">${s.level}%</span>
        </div>
      </div>
      <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">${s.name}</h3>
      <p class="text-xs text-slate-400 font-mono mt-0.5 mb-3">${s.category}</p>
      <div class="w-full bg-slate-900 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
        <div class="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700" style="width: ${s.level}%"></div>
      </div>
      <p class="text-xs text-slate-400 mt-3 line-clamp-2 leading-relaxed">${s.desc}</p>
    </div>
  `).join("");

  // Update tabs active state
  document.querySelectorAll(".skill-tab").forEach(tab => {
    if (tab.getAttribute("data-cat") === category) {
      tab.className = "skill-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-neon-indigo scale-105 transition-all";
    } else {
      tab.className = "skill-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white transition-all";
    }
  });

  if (window.lucide) lucide.createIcons();
}

window.filterSkills = function(cat) {
  renderSkills(cat);
};

/* 8. Projects & Filtering */
function renderProjects(category) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = portfolioData.projects.filter(p => category === "All" || p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="glass-card rounded-3xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 group flex flex-col justify-between">
      <div class="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
            ${p.badge}
          </span>
          <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-950/80 border border-slate-800">
            ${p.category}
          </span>
        </div>
      </div>

      <div class="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
        <div class="space-y-2">
          <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">${p.title}</h3>
          <p class="text-xs font-mono text-cyan-400">${p.subtitle}</p>
          <p class="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3">${p.description}</p>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-2">
          ${p.tech.map(t => `
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300">
              ${t}
            </span>
          `).join("")}
        </div>

        <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <button onclick="openProjectModal('${p.id}')" class="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
            <span>Explore Architecture</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </button>

          <div class="flex items-center space-x-2">
            <a href="${p.githubUrl}" target="_blank" rel="noreferrer" class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700" title="GitHub">
              <i data-lucide="github" class="w-4 h-4"></i>
            </a>
            <a href="${p.liveUrl}" target="_blank" rel="noreferrer" class="p-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-cyan-300 hover:text-white border border-indigo-500/40" title="Live Site">
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".project-tab").forEach(tab => {
    if (tab.getAttribute("data-cat") === category) {
      tab.className = "project-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-secondary to-pink-500 text-white shadow-neon-pink scale-105 transition-all";
    } else {
      tab.className = "project-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white transition-all";
    }
  });

  if (window.lucide) lucide.createIcons();
}

window.filterProjects = function(cat) {
  renderProjects(cat);
};

/* 9. AI Lab & Prompt Simulator */
function initAiSimulator() {
  const promptEl = document.getElementById("ai-prompt-text");
  const codeEl = document.getElementById("ai-code-display");
  const latEl = document.getElementById("ai-metric-lat");
  const tokEl = document.getElementById("ai-metric-tok");
  const confEl = document.getElementById("ai-metric-conf");

  window.setAiPreset = function(presetKey) {
    const data = portfolioData.aiPresets[presetKey];
    if (!data) return;

    if (promptEl) promptEl.textContent = `"${data.prompt}"`;
    if (codeEl) codeEl.textContent = data.code;
    if (latEl) latEl.textContent = data.metrics.latency;
    if (tokEl) tokEl.textContent = data.metrics.tokens;
    if (confEl) confEl.textContent = data.metrics.confidence;

    document.querySelectorAll(".ai-preset-btn").forEach(btn => {
      if (btn.getAttribute("data-preset") === presetKey) {
        btn.className = "ai-preset-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-indigo-600 text-white shadow-neon-indigo";
      } else {
        btn.className = "ai-preset-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900 text-slate-400 hover:text-white";
      }
    });
  };

  window.copyAiCode = function() {
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.textContent);
      const btn = document.getElementById("copy-ai-btn");
      if (btn) {
        btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i><span class="text-[10px] text-emerald-400">Copied</span>`;
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          btn.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i><span class="text-[10px]">Copy Code</span>`;
          if (window.lucide) lucide.createIcons();
        }, 2000);
      }
    }
  };

  // Set default preset
  setAiPreset("api");
}

/* 10. Timeline Rendering */
function renderTimeline() {
  const container = document.getElementById("timeline-list");
  if (!container) return;

  const items = portfolioData.timeline;
  container.innerHTML = items.map((item, idx) => {
    const isEven = idx % 2 === 0;
    return `
      <div class="relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}">
        <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-indigo-400 shadow-neon-indigo flex items-center justify-center z-10">
          <i data-lucide="${item.type === 'Experience' ? 'briefcase' : item.type === 'Achievement' ? 'award' : 'graduation-cap'}" class="w-4 h-4 text-cyan-300"></i>
        </div>

        <div class="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
          <div class="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 group">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                item.type === 'Experience' ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' :
                item.type === 'Achievement' ? 'text-amber-400 bg-amber-500/10 border-amber-500/30' :
                'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
              }">${item.badge}</span>
              <span class="text-xs font-mono text-slate-400 flex items-center space-x-1">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-500"></i>
                <span>${item.period}</span>
              </span>
            </div>

            <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">${item.title}</h3>
            <div class="text-xs sm:text-sm font-semibold text-cyan-400/90 flex items-center space-x-1 mt-1 mb-3">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-pink-400"></i>
              <span>${item.organization}</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">${item.desc}</p>

            <div class="pt-3 border-t border-slate-800/80 space-y-2">
              ${item.points.map(pt => `
                <div class="flex items-start space-x-2 text-xs text-slate-400">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5"></i>
                  <span>${pt}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* 11. Services Rendering */
function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  const services = portfolioData.services;
  container.innerHTML = services.map(s => `
    <div class="glass-card p-7 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 relative overflow-hidden group flex flex-col justify-between">
      <div class="space-y-4">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-900 border border-slate-800 shadow-xl" style="color: ${s.color}">
          <i data-lucide="${s.icon}" class="w-7 h-7"></i>
        </div>
        <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">${s.title}</h3>
        <p class="text-xs sm:text-sm text-slate-300/90 leading-relaxed">${s.desc}</p>

        <div class="pt-4 border-t border-slate-800/80 space-y-2">
          <span class="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">Deliverables:</span>
          ${s.deliverables.map(d => `
            <div class="flex items-center space-x-2 text-xs text-slate-300">
              <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400 flex-shrink-0"></i>
              <span>${d}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="pt-6 mt-6 border-t border-slate-800/80">
        <a href="#contact" class="flex items-center justify-between text-xs font-mono font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
          <span>Request Service Consultation</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `).join("");
}

/* 12. Testimonials Carousel */
function initTestimonials() {
  const container = document.getElementById("testimonial-card");
  if (!container) return;

  const data = portfolioData.testimonials;
  let currentIdx = 0;
  let autoplayTimer;

  function update() {
    const item = data[currentIdx];
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div class="flex items-center space-x-1 text-amber-400">
          ${[...Array(item.rating)].map(() => `<i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>`).join("")}
        </div>
        <span class="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-cyan-300 border border-indigo-500/30">
          ${item.tag}
        </span>
      </div>

      <blockquote class="text-base sm:text-xl text-slate-200 font-normal leading-relaxed italic mb-8">
        "${item.content}"
      </blockquote>

      <div class="flex items-center justify-between pt-6 border-t border-slate-800">
        <div class="flex items-center space-x-4">
          <div class="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-neon-cyan">
            <img src="${item.avatar}" alt="${item.name}" class="w-full h-full object-cover" />
          </div>
          <div>
            <h4 class="text-base font-bold text-white">${item.name}</h4>
            <p class="text-xs text-slate-400 font-mono">${item.role} • <span class="text-cyan-400">${item.company}</span></p>
          </div>
        </div>
        <div class="hidden sm:flex items-center text-xs text-emerald-400 font-mono space-x-1">
          <i data-lucide="shield-check" class="w-4 h-4"></i>
          <span>Verified Review</span>
        </div>
      </div>
    `;

    // Update dots
    const dotsContainer = document.getElementById("testimonial-dots");
    if (dotsContainer) {
      dotsContainer.innerHTML = data.map((_, i) => `
        <button onclick="goTestimonial(${i})" class="h-2.5 rounded-full transition-all duration-300 ${
          i === currentIdx ? 'w-8 bg-gradient-to-r from-primary to-accent shadow-neon-indigo' : 'w-2.5 bg-slate-700'
        }"></button>
      `).join("");
    }

    if (window.lucide) lucide.createIcons();
  }

  window.nextTestimonial = function() {
    currentIdx = (currentIdx + 1) % data.length;
    update();
  };

  window.prevTestimonial = function() {
    currentIdx = (currentIdx - 1 + data.length) % data.length;
    update();
  };

  window.goTestimonial = function(idx) {
    currentIdx = idx;
    update();
  };

  function startAutoplay() {
    autoplayTimer = setInterval(nextTestimonial, 6000);
  }

  container.addEventListener("mouseenter", () => clearInterval(autoplayTimer));
  container.addEventListener("mouseleave", startAutoplay);

  update();
  startAutoplay();
}

/* 13. Contact Form & Copy Actions */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const successBox = document.getElementById("contact-success");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) submitBtn.disabled = true;

      if (window.confetti) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#10B981']
        });
      }

      if (successBox) successBox.classList.remove("hidden");
      form.reset();

      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        if (successBox) successBox.classList.add("hidden");
      }, 6000);
    });
  }

  window.copyText = function(text, btnId) {
    navigator.clipboard.writeText(text);
    const btn = document.getElementById(btnId);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i>`;
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        btn.innerHTML = orig;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    }
  };
}

/* 14. Project Deep Dive Modal */
function initProjectModal() {
  window.openProjectModal = function(id) {
    const project = portfolioData.projects.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById("project-modal");
    const title = document.getElementById("modal-project-title");
    const sub = document.getElementById("modal-project-sub");
    const desc = document.getElementById("modal-project-desc");
    const img = document.getElementById("modal-project-img");
    const highlights = document.getElementById("modal-project-highlights");
    const tech = document.getElementById("modal-project-tech");
    const githubBtn = document.getElementById("modal-github-link");
    const liveBtn = document.getElementById("modal-live-link");

    if (title) title.textContent = project.title;
    if (sub) sub.textContent = project.subtitle;
    if (desc) desc.textContent = project.description;
    if (img) img.src = project.image;

    if (highlights) {
      highlights.innerHTML = project.highlights.map(h => `
        <div class="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"></i>
          <span>${h}</span>
        </div>
      `).join("");
    }

    if (tech) {
      tech.innerHTML = project.tech.map(t => `
        <span class="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-medium text-slate-200">
          ${t}
        </span>
      `).join("");
    }

    if (githubBtn) githubBtn.href = project.githubUrl;
    if (liveBtn) liveBtn.href = project.liveUrl;

    if (modal) modal.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
  };

  window.closeProjectModal = function() {
    const modal = document.getElementById("project-modal");
    if (modal) modal.classList.add("hidden");
  };
}

/* 15. In-Page Resume Modal */
function initResumeModal() {
  window.openResumeModal = function() {
    const modal = document.getElementById("resume-modal");
    if (modal) modal.classList.remove("hidden");
    if (window.confetti) {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  };

  window.closeResumeModal = function() {
    const modal = document.getElementById("resume-modal");
    if (modal) modal.classList.add("hidden");
  };
}

/* 16. Mobile Menu */
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => menu.classList.add("hidden"));
    });
  }
}

/* 17. Scroll to Top */
function initScrollTop() {
  const btn = document.getElementById("scroll-top-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* Global Celebration Trigger */
window.triggerCelebration = function() {
  if (window.confetti) {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#38BDF8']
    });
  }
};
