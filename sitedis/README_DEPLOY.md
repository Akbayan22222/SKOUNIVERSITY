# SmartLearn AI — deploy guide

## What was fixed

- Frontend API calls changed from `http://localhost:3000/...` to relative URLs: `/ask-ai` and `/feynman-check`.
- Express now serves the frontend files with `express.static(__dirname)`.
- Server port now uses `process.env.PORT || 3000`, required for cloud hosting.
- Added `npm start` script.
- Added `/health` endpoint for quick checking.

## Fast deploy on Render

1. Create a GitHub repository and upload this project. Do not upload `.env` publicly.
2. Open Render → New → Web Service.
3. Connect the GitHub repository.
4. Use these settings:
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `npm start`
5. In Environment Variables add:
   - `OPENROUTER_API_KEY` = your real OpenRouter key
   - `PUBLIC_SITE_URL` = your Render URL, for example `https://your-app.onrender.com`
6. Deploy.
7. Test:
   - `https://your-app.onrender.com/health`
   - `https://your-app.onrender.com`

## Firebase Auth

After deploy, add your Render domain to Firebase Authentication authorized domains. Otherwise Google/email auth can fail on the deployed link.

Firebase Console → Authentication → Settings → Authorized domains → Add domain.

## Important security note

`.env` contains a private server API key. Keep it only in the hosting provider environment variables. Do not publish it in GitHub.
