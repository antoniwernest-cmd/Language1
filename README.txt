ADVENTURES — COMBINED PROJECT

Open index.html for the shared landing page, then choose:
- Reading Adventures: 8 reading and language activities, with levels A and AA.
- Autumn Adventures: 10 word and sound activities, 30 questions each.
- Word & Reading Skills: 14 local projects from the LanguageWest2 collection.

All three collections and their assets are included in this folder.
Reading-Adventures/index.html opens the reading collection directly.
index.html#autumn opens the autumn collection directly.
All adventures returns to the shared menu. Each activity retains its own
picture IDs, progress, teacher tools and assessment reports.
The existing autumn activity URLs and storage key are preserved.
ACTIVITY-CATALOG.json lists all 32 unique activity entries and their local sources.
Sentence Adventures 1 and 2 are included only under Reading Adventures.
Unlinked older copies of projects are omitted.
Progress remains browser/device-specific.

DEPLOY THIS ENTIRE FOLDER
Keep index.html at the published root, beside assets, Reading-Adventures and Word-and-Reading-Skills.
Upload the complete folder or its contents to a static host. No build step,
ZIP, package installation, API key or backend is required.

--- AUTUMN COLLECTION GUIDE ---

AUTUMN WORD & SOUND ADVENTURES

Open index.html. Keep this folder and its assets together.
Choose Autumn Adventures from the shared landing page to open its ten activities. Each has 30 questions: 300 in total.
Question pictures match the word or sound being practised.
Spelling, counting and first-sound questions show the relevant word picture.
Listening and matching questions show their answer choices without revealing the answer.
Autumn scenes appear only as relevant choices in sentence-matching questions.

WORD ADVENTURES
1. Build the Word
2. Choose the Correct Word
3. Missing Letter
4. Word Chains
5. Read and Match

SOUND ADVENTURES
6. Blend the Sounds
7. Count the Sounds
8. Change the Sound
9. Delete the Sound
10. Find the First Sound

HOW TO PLAY
Choose one of the 20 existing picture IDs. Use the same picture each visit.
Click pictures, tap or drag letter tiles, listen, or type in word activities.
Replay and speed controls stay visible. There is no time limit.
On narrow screens, use Picture and Play to switch views without scrolling.
Sound activities use spoken sounds, pictures and dots rather than written letter choices.
Small speaker buttons say the names of picture choices.
Next moves forward; Back revisits a question. Progress saves in this browser.
At question 30, Finish opens a summary and Review returns to unfinished work.

ASSESSMENT
Teacher tools includes Independent, With help and Practising ratings.
Each question also has optional Formative and Summative labels.
Download a real Excel workbook for the current picture ID or all picture IDs.
The workbook includes Summary, Progress, Attempts and Guide sheets.
It records responses, drag/tap/type method, correctness, retries, audio replays,
picture-name listens, hints, teacher support and assessment type.
Completed questions earn one point each. Reviews cannot add duplicate points.
First-try completion is reported separately; hints and support remain visible.
No names, passwords or accounts are needed. No student work is sent anywhere.
Download assessment before changing browser or device.

FILES AND ARTWORK
index.html, styles.css, app.js, data.js and excel.js run the collection.
assets/scenes retains the original 100 autumn pictures; sentence-matching questions
use only the scenes matched to their reading prompts.
assets/profiles reuses the existing 20 3D picture IDs.
assets/words includes reused Codex word pictures and 8 new picture sheets.
assets/audio contains 409 bundled English audio clips for offline playback.
The word pictures, profile objects, mascot, balloon and Excel writer were reused
or adapted from the user's existing Codex files and Sentences Adventures collection.
New artwork was made with the built-in image generator. Its prompts are retained
in WORD-ARTWORK.json; original autumn picture prompts remain in the picture collection.
QUESTION-BANK.json contains all questions and answer data.
SCENE-SOURCES.json and WORD-ARTWORK.json record picture sources.
CHECKS.json, BROWSER-CHECKS.json, AUDIO-CHECKS.json and
PRONUNCIATION-CHECKS.json record verification.

AUDIO
English audio is bundled as PCM WAV files. Isolated sounds use explicit IPA
pronunciations in Windows speech synthesis; they are not spoken letter names.
Continuous sounds are held clearly: /m/ and /n/ for 1.2 seconds, /s/ and /f/
for 1.1 seconds, and vowels for about 0.9 seconds at Steady speed. Stop sounds
such as /p/, /t/ and /k/ remain brief. Quiet sounds are made easier to hear.
Pitch-preserving waveform processing keeps the phoneme separate from letter
names; no extra vowel is added. First-sound questions say the word and then
model its first sound. Count-the-sounds questions retain their natural words.
Question audio keeps the word, sounds and essential directions.
Automatic spoken praise, retry messages, finish messages and greetings are removed.
Replay and visual answer feedback remain available.
Source pronunciation events, held-sound duration, non-silent segments, clipping,
and all 120 revised sound-question clips were checked. HELD-SOUND-CHECKS.json
records the durations and processing. m-held-sample.wav is a standalone /m/ demo.
Technical reference: https://learn.microsoft.com/en-us/dotnet/api/system.speech.synthesis.ttsengine.fragmentstate.phoneme

HOSTING
The collection also works on a normal static web host. Upload the whole folder,
with index.html at the root. No build step, API key or backend is required.
Local and hosted copies keep separate browser progress.
