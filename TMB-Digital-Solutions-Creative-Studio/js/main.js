/* TMB Digital Solutions — site interactions and Formspree enquiry delivery */
(() => {
  'use strict';

  const FORM_ENDPOINT = 'https://formspree.io/f/mbgoddeq';

  // Mobile navigation.
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  // Directional, staggered scroll reveals.
  document.querySelectorAll(
    '.service-card, .industry-list a, .work-card, .steps article, .price-card, .tech-cloud span, .founder-work-grid article'
  ).forEach((element, index) => {
    if (!element.classList.contains('reveal') &&
        !element.classList.contains('slide-left') &&
        !element.classList.contains('slide-right') &&
        !element.classList.contains('slide-up')) {
      const direction = index % 3;
      element.classList.add(direction === 0 ? 'slide-left' : direction === 1 ? 'slide-up' : 'slide-right');
    }
  });

  const revealItems = document.querySelectorAll('.reveal, .slide-left, .slide-right, .slide-up');
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 90}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  // Scroll progress and back-to-top.
  const progress = document.querySelector('.scroll-progress');
  const backTop = document.querySelector('.back-top');
  function updateScrollUI() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    if (progress) progress.style.width = `${percentage}%`;
    if (backTop) backTop.classList.toggle('show', window.scrollY > 650);
  }
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  window.addEventListener('resize', updateScrollUI);
  updateScrollUI();
  if (backTop) {
    backTop.addEventListener('click', (event) => {
      if (backTop.tagName === 'A') event.preventDefault();
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  }

  // Theme toggle.
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const darkEnabled = document.body.classList.toggle('dark-theme');
      themeToggle.textContent = darkEnabled ? '☀' : '◐';
      themeToggle.setAttribute('aria-label', darkEnabled ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  // Industry idea finder.
  const ideas = {
    construction: ['A construction website that builds confidence.', 'Showcase projects, services, credentials and make it easy for clients to request a consultation.', 'demos/construction.html'],
    education: ['A learning experience that inspires trust.', 'Present courses, faculty, admissions and student enquiries in one clear digital destination.', 'demos/education.html'],
    clinic: ['A clinic website that makes care easier to access.', 'Introduce doctors, explain services and guide visitors towards appointment enquiries.', 'demos/clinic.html'],
    restaurant: ['A restaurant presence that makes people hungry to visit.', 'Bring menus, atmosphere, location and table enquiries together in a memorable experience.', 'demos/restaurant.html'],
    realestate: ['A property experience that helps buyers explore.', 'Present listings, locations, property details and enquiry journeys with clarity.', 'demos/realestate.html'],
    ecommerce: ['A storefront that makes browsing feel effortless.', 'Organise products, categories and shopping journeys around the way customers buy.', 'demos/ecommerce.html'],
    corporate: ['A sharper digital presence for your expertise.', 'Explain your services, build credibility and turn website visits into meaningful business enquiries.', 'demos/corporate.html'],
    portfolio: ['A personal website that puts your work in focus.', 'Bring your portfolio, skills, selected projects and contact details into one polished digital home.', 'demos/portfolio.html']
  };
  const industryChoice = document.getElementById('industry-choice');
  if (industryChoice) {
    industryChoice.addEventListener('change', () => {
      const item = ideas[industryChoice.value];
      if (!item) return;
      const title = document.getElementById('idea-title');
      const description = document.getElementById('idea-description');
      const demo = document.getElementById('idea-demo');
      const number = document.querySelector('.idea-number');
      if (title) title.textContent = item[0];
      if (description) description.textContent = item[1];
      if (demo) demo.href = item[2];
      if (number) {
        const count = Object.keys(ideas).indexOf(industryChoice.value) + 1;
        number.textContent = `TMB / IDEA ${String(count).padStart(2, '0')}`;
      }
    });
  }

  // Branded success dialog.
  const successOverlay = document.getElementById('thank-you-overlay');
  const successCard = successOverlay ? successOverlay.querySelector('.thank-you-card') : null;
  const closeSuccessButtons = successOverlay
    ? successOverlay.querySelectorAll('.thank-you-close, #thank-you-done')
    : [];
  let returnFocusElement = null;

  function closeThankYou() {
    if (!successOverlay) return;
    successOverlay.classList.remove('is-visible');
    successOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('thank-you-open');
    if (returnFocusElement && typeof returnFocusElement.focus === 'function') returnFocusElement.focus();
  }

  function showThankYou() {
    if (!successOverlay || !successCard) return false;
    returnFocusElement = document.activeElement;
    successOverlay.classList.add('is-visible');
    successOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('thank-you-open');
    const closeButton = successOverlay.querySelector('.thank-you-close');
    if (closeButton) closeButton.focus();
    return true;
  }

  closeSuccessButtons.forEach((button) => button.addEventListener('click', closeThankYou));
  if (successOverlay) {
    successOverlay.addEventListener('click', (event) => {
      if (event.target === successOverlay) closeThankYou();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && successOverlay.classList.contains('is-visible')) closeThankYou();
    });
  }

  // Main business enquiry form — AJAX submission to the verified Formspree form.
  const enquiryForm = document.getElementById('enquiry-form');
  const formStatus = document.getElementById('form-status');
  if (enquiryForm) {
    // Force the intended endpoint even if an older local copy had another action URL.
    enquiryForm.setAttribute('action', FORM_ENDPOINT);
    enquiryForm.setAttribute('method', 'POST');

    let isSubmitting = false;
    const submitButton = enquiryForm.querySelector('button[type="submit"], input[type="submit"]');
    const originalButtonText = submitButton
      ? (submitButton.tagName === 'INPUT' ? submitButton.value : submitButton.textContent)
      : '';

    enquiryForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (isSubmitting || !enquiryForm.reportValidity()) return;

      isSubmitting = true;
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute('aria-busy', 'true');
        if (submitButton.tagName === 'INPUT') submitButton.value = 'Sending your enquiry…';
        else submitButton.textContent = 'Sending your enquiry…';
      }
      if (formStatus) {
        formStatus.textContent = 'Sending your message securely. Please do not close this page…';
        formStatus.dataset.state = 'sending';
      }

      try {
        const formData = new FormData(enquiryForm);
        const senderName = String(formData.get('name') || '').trim();
        const senderEmail = String(formData.get('email') || '').trim();
        const businessName = String(formData.get('business') || '').trim();

        formData.set('_subject', senderName
          ? `New website enquiry from ${senderName}${businessName ? ` (${businessName})` : ''} | TMB Digital Solutions`
          : 'New website enquiry | TMB Digital Solutions');
        if (senderEmail) formData.set('_replyto', senderEmail);
        formData.set('source_page', window.location.href);
        formData.set('brand', 'TMB Digital Solutions');

        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
          let detail = '';
          try {
            const payload = await response.json();
            if (Array.isArray(payload.errors)) {
              detail = payload.errors.map((item) => item.message).filter(Boolean).join(' ');
            }
          } catch (_) { /* The server may return a plain-text error. */ }
          throw new Error(detail || `The form service returned status ${response.status}. Please try again.`);
        }

        if (formStatus) {
          formStatus.textContent = 'Your enquiry has been sent successfully. Thank you!';
          formStatus.dataset.state = 'success';
        }
        enquiryForm.reset();
        const dialogOpened = showThankYou();
        if (!dialogOpened && formStatus) {
          formStatus.textContent = 'Thank you! Your enquiry has been sent successfully. Our team will review your brief and contact you soon.';
        }
      } catch (error) {
        console.error('TMB Digital Solutions enquiry submission failed:', error);
        if (formStatus) {
          formStatus.textContent = error.message || 'We could not send your enquiry. Please check your connection and try again.';
          formStatus.dataset.state = 'error';
        }
        // Keep all entered values intact so the visitor can retry.
      } finally {
        isSubmitting = false;
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute('aria-busy');
          if (submitButton.tagName === 'INPUT') submitButton.value = originalButtonText;
          else submitButton.textContent = originalButtonText;
        }
      }
    });
  }

  // Pre-fill the main enquiry form when visitors come from a demo website.
  try {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const industryParam = params.get('industry');
    const serviceSelect = document.querySelector('#enquiry-form select[name="service"]');
    const messageField = document.querySelector('#enquiry-form textarea[name="message"]');
    if (serviceParam && serviceSelect) {
      const matchingOption = Array.from(serviceSelect.options).find((option) =>
        option.text.trim().toLowerCase() === serviceParam.trim().toLowerCase() ||
        option.value.trim().toLowerCase() === serviceParam.trim().toLowerCase()
      );
      if (matchingOption) serviceSelect.value = matchingOption.value;
    }
    if (industryParam && messageField && !messageField.value.trim()) {
      messageField.value = `I'm interested in a website for my ${industryParam} business. Please contact me to discuss the requirements.`;
    }
  } catch (error) {
    console.warn('Could not pre-fill the enquiry form:', error);
  }
})();
