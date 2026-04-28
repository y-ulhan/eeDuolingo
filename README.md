# CircuitSprout

CircuitSprout is a Duolingo-style study app for electrical engineering majors, now organized around UCLA Electrical and Computer Engineering course themes.

It includes:

- lesson paths for UCLA-flavored EE 2, EE 3, EE 10, and EE 102 practice
- multiple-choice, typed numeric, sequencing, and oscilloscope-style questions
- XP, hearts, streaks, daily goals, progress meters, and a review notebook
- local login/create-account flow with separate progress per account
- optional Sign in with Google using Google Identity Services and a Workspace domain filter
- local PDF/image upload lab that can generate practice questions from homework and test scans

The first UCLA course set covers:

- EE 2: Physics for Electrical Engineers
- EE 3: Introduction to Electrical Engineering
- EE 10: Circuit Theory I
- EE 102: Systems and Signals

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

## Debug branch

This branch is the no-login localhost debug variant. When opened on `localhost`, `127.0.0.1`, or `::1`, it skips the auth screen and loads the main practice app using a local `Debug Mode` profile.

## Google sign-in

Create an OAuth web client in Google Cloud, add `http://localhost:8787` as an authorized JavaScript origin, then paste the client ID into **Google Workspace setup** on the login screen.

The Workspace domain field is optional. If set, CircuitSprout only accepts Google ID tokens whose hosted domain or email domain matches that value.

This demo decodes the Google ID token in the browser to choose a local progress profile. A production app should verify the ID token on a server before creating a session.

## Upload-generated practice

Students can upload PDFs or images from tests, homework, and notes in the **Upload lab** panel. PDF text extraction uses PDF.js in the browser. Image OCR uses Tesseract.js when the browser can load it. Files are processed locally in the browser and are not uploaded to the included Node server.

The generated lesson is saved per local account/debug profile as **Uploaded Tests/HW**.
