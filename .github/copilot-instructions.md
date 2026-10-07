# Copilot Instructions

## Project overview

- This repository contains the `frontend` React application and `backend` Node.js application.
- The frontend uses Vite, React 19, and Oxlint.
- The backend uses Node.js built-in modules and has no runtime dependencies.
- Keep each application in its corresponding directory.

## Development workflow

- Run `npm run dev` from the `frontend` directory to start the development server.
- Run `npm run lint` to check frontend source with Oxlint.
- Run `npm run build` to create the frontend production bundle.
- Run `npm start` or `npm run dev` from the `backend` directory to start the API server.
- Run `npm test` from the `backend` directory to execute backend tests.
- Use the existing Vite configuration and React plugin; do not add unnecessary dependencies.

## Coding conventions

- Use modern function components and hooks.
- Keep components focused and reusable.
- Preserve responsive behavior and keyboard focus states.
- Prefer semantic HTML and accessible labels.
- Avoid adding external assets or integrations unless explicitly requested.
