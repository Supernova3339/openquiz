# Open Quiz

This is a web-based quiz application built with Next.js and TypeScript, which allows users to take trivia quizzes with customizable numbers of questions.

## Features

- User-friendly landing page to start the quiz.
- Interactive progress bar that reaches 100% before proceeding, even if all questions are fetched.
- Real-time feedback on each question (correct/incorrect).
- Score tracking and display.
- Responsive and user-friendly design.
- Server-side rendering for an efficient and SEO-friendly application.
- Utilizes TypeScript for type safety and better development experience.

## Project Structure

The project is structured as follows:

- `pages/` - Contains Next.js page components.
- `components/` - Includes React components.
- `styles/` - Stores style-related files (CSS or other styling solutions).
- `utils/` - Holds utility functions.
- `api/` - Handles API requests, including communication with the Open Trivia Database API.

## Libraries Used

- [Next.js](https://nextjs.org/) - A server-rendered React framework for building web applications.
- [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript that enhances development safety and productivity.
- [he](https://www.npmjs.com/package/he) - A library for decoding HTML entities in strings.
- [shadcn/ui](https://github.com/shadcn-ui/ui) - A UI component library used for building user interfaces.
- [next-pwa](https://github.com/shadowwalker/next-pwa) - A Zero Config PWA plugin

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install project dependencies using `npm install` or `yarn install`.
3. Run the development server with `npm run dev` or `yarn dev`.
4. Visit `http://localhost:3000` in your web browser.

## Customization

You can customize the number of questions by modifying the appropriate setting within the application.

## Credits

- [Open Trivia Database API](https://opentdb.com/) - Providing trivia questions for the quizzes.

## License

This project is open-source and available under the [MIT License](LICENSE).
