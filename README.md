# CircuitSprout

CircuitSprout is a Duolingo-style study app for electrical engineering majors preparing for technical interviews at big tech companies.

It includes:

- lesson paths for DSP, analog circuits, digital design, and embedded systems
- multiple-choice, typed numeric, sequencing, and oscilloscope-style questions
- XP, hearts, streaks, daily goals, progress meters, and a review notebook
- local login/create-account flow with separate progress per account
- optional Sign in with Google using Google Identity Services and a Workspace domain filter

Run it with the included static server:

```powershell
node server.js
```

Then open:

```text
http://localhost:8787
```

You can also open `index.html` directly in a browser.

Note: accounts are demo-only and stored in browser `localStorage`; do not use real passwords.

## Google sign-in

Create an OAuth web client in Google Cloud, add `http://localhost:8787` as an authorized JavaScript origin, then paste the client ID into **Google Workspace setup** on the login screen.

The Workspace domain field is optional. If set, CircuitSprout only accepts Google ID tokens whose hosted domain or email domain matches that value.

This demo decodes the Google ID token in the browser to choose a local progress profile. A production app should verify the ID token on a server before creating a session.
