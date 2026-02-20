import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Kill previous ScrollTrigger instances to avoid stale references after navigation
  ScrollTrigger.getAll().forEach(t => t.kill());
  // Shared defaults
  const ease = 'power2.out';

  // --- ABOUT SECTION ---
  const about = document.querySelector('[data-about]');
  if (about) {
    gsap.from('[data-about-header]', {
      scrollTrigger: { trigger: about, start: 'top 85%', once: true },
      y: 30, opacity: 0, duration: 0.8, ease,
    });

    gsap.from('[data-about-grid] [data-about-card]', {
      scrollTrigger: { trigger: about, start: 'top 75%', once: true },
      y: 40, opacity: 0, duration: 0.6, ease,
      stagger: 0.12,
    });
  }

  // --- PROJECTS SECTION ---
  const projects = document.querySelector('[data-projects]');
  if (projects) {
    gsap.from('.proj__left', {
      scrollTrigger: { trigger: projects, start: 'top 85%', once: true },
      y: 30, opacity: 0, duration: 0.8, ease,
    });

    gsap.from('.proj__card', {
      scrollTrigger: { trigger: projects, start: 'top 75%', once: true },
      y: 40, opacity: 0, duration: 0.6, ease,
      stagger: 0.15,
    });
  }

  // --- LAB SECTION ---
  const lab = document.querySelector('[data-lab]');
  if (lab) {
    gsap.from('.lab__title-wrap', {
      scrollTrigger: { trigger: lab, start: 'top 85%', once: true },
      y: 30, opacity: 0, duration: 0.8, ease,
    });

    gsap.from('.lab__counter', {
      scrollTrigger: { trigger: lab, start: 'top 80%', once: true },
      scale: 0.8, opacity: 0, duration: 0.6, ease,
    });

    gsap.from('.lab__col', {
      scrollTrigger: { trigger: lab, start: 'top 70%', once: true },
      y: 40, opacity: 0, duration: 0.6, ease,
      stagger: 0.12,
    });
  }

  // --- EVENTS SECTION ---
  const events = document.querySelector('[data-events]');
  if (events) {
    gsap.from('.events__title-wrap', {
      scrollTrigger: { trigger: events, start: 'top 85%', once: true },
      y: 30, opacity: 0, duration: 0.8, ease,
    });

    gsap.from('.events__photo', {
      scrollTrigger: { trigger: events, start: 'top 75%', once: true },
      y: 30, opacity: 0, duration: 0.5, ease,
      stagger: 0.08,
    });

    gsap.from('.events__desc', {
      scrollTrigger: { trigger: events, start: 'top 75%', once: true },
      y: 20, opacity: 0, duration: 0.6, ease, delay: 0.3,
    });
  }

  // --- RECOGNITION SECTION ---
  const recognition = document.querySelector('[data-recognition]');
  if (recognition) {
    gsap.from('.recog__title-wrap', {
      scrollTrigger: { trigger: recognition, start: 'top 85%', once: true },
      y: 30, opacity: 0, duration: 0.8, ease,
    });

    gsap.from('.recog__award', {
      scrollTrigger: { trigger: recognition, start: 'top 80%', once: true },
      y: 30, opacity: 0, duration: 0.7, ease, delay: 0.15,
    });

    gsap.from('.recog__hack-header', {
      scrollTrigger: { trigger: recognition, start: 'top 80%', once: true },
      y: 30, opacity: 0, duration: 0.7, ease,
    });

    gsap.from('.recog__winner', {
      scrollTrigger: { trigger: recognition, start: 'top 70%', once: true },
      y: 40, opacity: 0, duration: 0.6, ease,
      stagger: 0.12,
    });
  }

  // --- BOARD SECTION ---
  const board = document.querySelector('[data-board]');
  if (board) {
    gsap.from('.board__title-wrap', {
      scrollTrigger: { trigger: board, start: 'top 85%', once: true },
      y: 30, opacity: 0, duration: 0.8, ease,
    });

    gsap.from('.board__desc', {
      scrollTrigger: { trigger: board, start: 'top 80%', once: true },
      y: 20, opacity: 0, duration: 0.6, ease, delay: 0.15,
    });

    gsap.from('.board__card', {
      scrollTrigger: { trigger: board, start: 'top 70%', once: true },
      y: 40, opacity: 0, duration: 0.5, ease,
      stagger: 0.06,
    });
  }

  // --- RESOURCE SECTION ---
  const resources = document.querySelector('[data-resources]');
  if (resources) {
    gsap.from('.res__title-wrap', {
      scrollTrigger: { trigger: resources, start: 'top 85%', once: true },
      y: 30, opacity: 0, duration: 0.8, ease,
    });

    gsap.from('.res__card', {
      scrollTrigger: { trigger: resources, start: 'top 75%', once: true },
      y: 30, opacity: 0, duration: 0.4, ease,
      stagger: 0.03,
    });
  }
}

