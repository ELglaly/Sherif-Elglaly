/* =============================================
   Portfolio — Enhanced Animation Layer
   ============================================= */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        initScrollProgress();
        initNavGlass();
        initCursorGlow();
        initTypewriter();
        insertHeroStats();
        initParticles();
        initCardTilt();
        initSkillBars();
        initSectionReveal();
        initViewAllBtn();
    });

    /* --------------------------------------------------
       Scroll Progress Bar (top of page)
    -------------------------------------------------- */
    function initScrollProgress() {
        const bar = document.createElement('div');
        bar.id = 'scroll-progress';
        document.body.prepend(bar);

        window.addEventListener('scroll', function () {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
        }, { passive: true });
    }

    /* --------------------------------------------------
       Nav Glassmorphism on Scroll
    -------------------------------------------------- */
    function initNavGlass() {
        const header = document.querySelector('.s-header');
        if (!header) return;

        window.addEventListener('scroll', function () {
            header.classList.toggle('is-scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    /* --------------------------------------------------
       Ambient Cursor Glow (desktop only)
    -------------------------------------------------- */
    function initCursorGlow() {
        if (window.matchMedia('(hover: none)').matches) return;

        const glow = document.createElement('div');
        glow.id = 'cursor-glow';
        glow.setAttribute('aria-hidden', 'true');
        document.body.appendChild(glow);

        document.addEventListener('mousemove', function (e) {
            glow.style.left = e.clientX + 'px';
            glow.style.top  = e.clientY + 'px';
        }, { passive: true });
    }

    /* --------------------------------------------------
       Typewriter Effect — Hero Bio
    -------------------------------------------------- */
    function initTypewriter() {
        const el = document.getElementById('profile-bio');
        if (!el) return;
        const fullText = el.textContent.trim();
        if (!fullText) return;

        el.textContent = '';
        const cursor = document.createElement('span');
        cursor.id = 'typing-cursor';
        cursor.setAttribute('aria-hidden', 'true');
        el.appendChild(cursor);

        let i = 0;
        setTimeout(function () {
            const iv = setInterval(function () {
                if (i < fullText.length) {
                    el.insertBefore(document.createTextNode(fullText[i++]), cursor);
                } else {
                    clearInterval(iv);
                    setTimeout(function () { cursor.remove(); }, 2500);
                }
            }, 28);
        }, 1900);
    }

    /* --------------------------------------------------
       Hero Stats — animated counters
    -------------------------------------------------- */
    function insertHeroStats() {
        const bio = document.getElementById('profile-bio');
        if (!bio) return;

        const stats = [
            { value: 3,  suffix: '+', label: 'Years Building'  },
            { value: 6,  suffix: '+', label: 'Projects Shipped' },
            { value: 10, suffix: '+', label: 'Certifications'  },
        ];

        const wrap = document.createElement('div');
        wrap.className = 'hero-stats';
        wrap.setAttribute('aria-label', 'Quick stats');

        stats.forEach(function (s) {
            const div = document.createElement('div');
            div.className = 'hero-stat';
            div.innerHTML =
                '<span class="hero-stat__number" data-count="' + s.value + '" data-suffix="' + s.suffix + '">0' + s.suffix + '</span>' +
                '<span class="hero-stat__label">' + s.label + '</span>';
            wrap.appendChild(div);
        });

        bio.insertAdjacentElement('afterend', wrap);

        setTimeout(function () {
            wrap.querySelectorAll('[data-count]').forEach(animateCounter);
        }, 2300);
    }

    function animateCounter(el) {
        const target   = parseInt(el.dataset.count, 10);
        const suffix   = el.dataset.suffix || '';
        const duration = 1600;
        const t0       = performance.now();

        (function tick(now) {
            const progress = Math.min((now - t0) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        }(t0));
    }

    /* --------------------------------------------------
       Canvas Particle Field — Hero Background
    -------------------------------------------------- */
    function initParticles() {
        const hero = document.querySelector('.s-intro');
        if (!hero) return;

        const canvas = document.createElement('canvas');
        canvas.id = 'hero-particles';
        canvas.setAttribute('aria-hidden', 'true');
        hero.appendChild(canvas);

        const ctx    = canvas.getContext('2d');
        const COUNT  = 55;
        const GOLD   = [234, 190, 124];
        const TEAL   = [35,  150, 127];
        const particles = [];

        function resize() {
            canvas.width  = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }

        function spawn() {
            const color = Math.random() > 0.6 ? TEAL : GOLD;
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.6 + 0.4,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                alpha: Math.random() * 0.35 + 0.08,
                color: color
            };
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connecting lines between nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = 'rgba(234,190,124,' + (0.06 * (1 - dist / 100)) + ')';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(function (p) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width)  p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + p.color.join(',') + ',' + p.alpha + ')';
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }

        resize();
        window.addEventListener('resize', resize, { passive: true });
        for (let i = 0; i < COUNT; i++) particles.push(spawn());
        draw();
    }

    /* --------------------------------------------------
       3D Card Tilt on Mouse Move
    -------------------------------------------------- */
    function initCardTilt() {
        setTimeout(function () {
            document.querySelectorAll('.project-card:not(.project-card--featured)').forEach(function (card) {
                card.classList.add('js-tilt');

                card.addEventListener('mousemove', function (e) {
                    const r  = card.getBoundingClientRect();
                    const x  = (e.clientX - r.left)  / r.width  - 0.5;
                    const y  = (e.clientY - r.top)   / r.height - 0.5;
                    card.style.transform  = 'perspective(800px) rotateX(' + (-y * 7) + 'deg) rotateY(' + (x * 7) + 'deg) translateY(-6px)';
                    card.style.transition = 'transform 0.05s linear';
                });

                card.addEventListener('mouseleave', function () {
                    card.style.transform  = '';
                    card.style.transition = 'transform 0.45s ease, box-shadow 0.25s ease, border-color 0.25s ease';
                    setTimeout(function () { card.style.transition = ''; }, 450);
                });
            });
        }, 200);
    }

    /* --------------------------------------------------
       Animated Skill Bars — replaces bullet list
    -------------------------------------------------- */
    function initSkillBars() {
        const levelMap = {
            advanced:     90,
            intermediate: 65,
            beginner:     35,
            native:       100,
            fluent:       88
        };

        const container = document.getElementById('skills-container');
        if (!container) return;

        function enhance() {
            container.querySelectorAll('li').forEach(function (li) {
                const levelSpan = li.querySelector('.skill-level');
                if (!levelSpan) return;

                const cls  = Array.from(levelSpan.classList).find(function (c) { return c !== 'skill-level'; }) || 'intermediate';
                const pct  = levelMap[cls] || 50;
                const name = li.childNodes[0].textContent.trim();

                li.innerHTML =
                    '<div class="skill-bar-wrap">' +
                        '<div class="skill-bar-label"><span>' + name + '</span><span>' + pct + '%</span></div>' +
                        '<div class="skill-bar-track"><div class="skill-bar-fill ' + cls + '" data-pct="' + pct + '"></div></div>' +
                    '</div>';
            });

            const obs = new IntersectionObserver(function (entries, o) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.width = entry.target.dataset.pct + '%';
                        o.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });

            container.querySelectorAll('.skill-bar-fill').forEach(function (b) { obs.observe(b); });
        }

        if (container.querySelector('li')) {
            enhance();
        } else {
            const mo = new MutationObserver(function (_, obs) {
                if (container.querySelector('li')) { obs.disconnect(); enhance(); }
            });
            mo.observe(container, { childList: true, subtree: true });
        }
    }

    /* --------------------------------------------------
       Section Heading Text Reveal (slide up on enter)
    -------------------------------------------------- */
    function initSectionReveal() {
        const targets = document.querySelectorAll('.h1[data-animate-el]');
        const obs = new IntersectionObserver(function (entries, o) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    o.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });

        targets.forEach(function (el) {
            el.classList.add('reveal-heading');
            obs.observe(el);
        });
    }

    /* --------------------------------------------------
       "View All Projects" button at end of section
    -------------------------------------------------- */
    function initViewAllBtn() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        const link = document.createElement('div');
        link.className = 'view-all-wrap';
        link.innerHTML =
            '<a href="https://github.com/ELglaly" target="_blank" rel="noopener" class="view-all-btn">' +
                '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' +
                'View All Repositories on GitHub' +
            '</a>';

        container.after(link);
    }

})();
