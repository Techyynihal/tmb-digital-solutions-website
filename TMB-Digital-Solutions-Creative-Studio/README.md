# TMB Digital Solutions — Classic Modern Creative Studio

A responsive digital agency website with an editorial visual identity: warm neutral surfaces, confident typography, restrained coral/blue accents, smooth slide-in motion and dedicated sample business websites.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a browser, or run a local server from this folder:
   - Python: `python -m http.server 8000`
   - Visit `http://localhost:8000`
3. In the **Who we help** section, open any industry row to visit its individual sample website.
4. Use each demo's **Back to all industries** link to return to the main website.

## Individual industry demos

- `demos/construction.html` — construction, engineering and consultancy
- `demos/realestate.html` — property discovery, sample listings and filters
- `demos/restaurant.html` — restaurant/hospitality experience, sample menu and reservation form UI
- `demos/education.html` — school/coaching experience, plus `demos/teacher.html` for a teacher portfolio
- `demos/clinic.html` — healthcare information and appointment enquiry UI
- `demos/ecommerce.html` — product catalogue, category filters and interactive sample cart
- `demos/corporate.html` — professional services and corporate consulting
- `demos/portfolio.html` — creator and professional portfolio

All demo brands, listings, prices and project examples are illustrative sample concepts, not commercial client work. Forms in demo pages do not create real appointments, reservations or orders. E-commerce cart interactions are local demonstrations only.

## Founder profile

The main site includes a dedicated **Meet the Founder** section for Nihal Feroj Tamboli, with education, relevant experience, technical focus areas and selected technical projects. The profile does not display a fabricated portrait or claim commercial client results.

## Contact form and email delivery

The main website enquiry form is connected to the Formspree endpoint configured for TMB Digital Solutions:

- Endpoint: `https://formspree.io/f/mbgoddeq`
- Form: `#enquiry-form` in `index.html`
- Handler: `js/main.js`
- Delivery: AJAX request to Formspree; the visitor stays on the website.
- Success: a branded thank-you dialog appears after Formspree returns a successful response.
- Failure: a clear inline error is shown and the entered details remain in the form so the visitor can retry.

The receiving email address and notification settings are managed in the Formspree dashboard for this form. Keep the form activated and the target email verified there. Do not put your email account password in the website code.

To test: open the main website, submit a test enquiry with a real email address, confirm the thank-you dialog appears, then check the receiving inbox (including Spam) and the Formspree submissions dashboard. A local code check cannot verify delivery to your personal mailbox.

The clinic and restaurant forms inside industry demo pages remain clearly labelled interactive sample forms; they do not create real appointments or reservations. Visitors should use each demo's "Build something similar" / project enquiry link to contact TMB Digital Solutions.

## Before publishing

1. Confirm the receiving email and notification settings in the Formspree dashboard.
2. Add verified business phone/WhatsApp, social links and business location.
3. Confirm pricing, project scope and maintenance terms before sharing quotations.
4. Replace sample business content and project concepts with approved client content when available.
5. Add privacy policy and terms pages, then test deployment on your chosen hosting platform.

## Notes

- Static HTML, CSS and JavaScript. No live database, authentication, payment gateway, property feed, appointment system or production backend is connected.
- Industry artwork is built with CSS and HTML, so the demos do not depend on missing local image files.
- Google Fonts are loaded online; system font fallbacks remain available offline.
- The site respects reduced-motion preferences and includes mobile responsive layouts.

## Responsive compatibility

The main agency website and all included industry demo pages use responsive layouts for small phones (320px and up), larger phones, tablets, laptops, desktop monitors and wide displays. Navigation, cards, forms, galleries and typography adapt at multiple breakpoints. Touch targets are sized for touch use, and reduced-motion preferences are respected. The site is intended for current evergreen browsers on Windows, macOS, Linux, Android and iOS; actual rendering can vary slightly by browser and installed fonts.
