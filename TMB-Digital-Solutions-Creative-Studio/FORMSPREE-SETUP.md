# TMB Digital Solutions — Formspree setup

The main enquiry form is already wired to:

`https://formspree.io/f/mbgoddeq`

## What visitors see

1. The visitor fills out the enquiry form on `index.html`.
2. `js/main.js` sends the form with `fetch()` to Formspree.
3. If Formspree accepts the submission, a branded thank-you dialog appears without navigating away from the site.
4. If submission fails, the visitor sees an error beside the form and their entered values remain available for retry.

## Receiving enquiries

Set the desired recipient email and notification preferences in the Formspree dashboard for this form. The destination mailbox is not hard-coded into the public website. Check the inbox and Spam folder, and review Submissions in Formspree.

## Testing checklist

- Submit a test enquiry from the main `index.html` contact section.
- Confirm the thank-you dialog appears.
- Confirm a submission appears in the Formspree dashboard.
- Confirm the notification arrives at the verified target email.
- Reply to the visitor using the submitted email address.

The clinic appointment and restaurant reservation forms inside demo pages are illustrative prototype interactions, not live bookings. They intentionally do not submit to TMB's sales inbox.
