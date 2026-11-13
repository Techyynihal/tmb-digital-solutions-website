# Responsive QA Notes

The main TMB Digital Solutions website and all 10 included demo pages were checked at these viewport widths in Chromium:

- 320, 390, 768, 1024, 1366 and 1920 CSS pixels.
- All 11 pages loaded with no JavaScript page errors in the viewport checks.
- No document-level horizontal overflow was detected at the tested widths.
- The tablet navigation menu opened and closed as expected; the desktop navigation remained in its desktop layout.
- The main enquiry form success state was checked using a local mocked HTTP response. The check confirmed the configured Formspree endpoint, POST method, form fields and branded thank-you dialog. No real email was sent during this local test.

The pages use standard responsive HTML/CSS and include viewport metadata. The project is intended for current browsers on Windows, macOS, Linux, Android and iOS. Browser/OS-specific visual differences should still be checked during deployment, especially Safari/iOS and older browser versions.
