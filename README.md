# Pedro Pires Portfolio

Welcome to my personal portfolio web application.  This project showcases my background, skills and selected projects in web development, data engineering and machine learning using a star‑themed design.  It is built with modern front‑end tooling and deployed at **[araujopires.pt](https://araujopires.pt/)**.

## Features

- **Star‑filled hero** – the landing section introduces me as a developer and engineer from Braga, Portugal currently pursuing a master’s in Information Systems Engineering.  It includes an avatar, a short description and a call‑to‑action button.
- **Responsive navigation bar** – a fixed navigation bar changes styling when you scroll and collapses into a menu on small screens.
- **Dark/Light theme toggle** – users can switch between dark and light themes; the preference is stored in local storage so it persists across visits.
- **Animated starry background** – random stars and meteors are generated to create an animated cosmic backdrop.
- **About section** – this section gives a short biography and highlights my education, including master’s, bachelor’s and high‑school degrees.
- **Filterable skills section** – skills are grouped into “frontend”, “backend”, “data” and “tools” categories.  Users can select a category to view relevant skills.
- **Projects showcase** – cards display selected projects with an image, description, technology tags and links to the GitHub repositories.  Projects are divided into web projects and data/ML/AI projects.
- **Contact section** – contact information (email, phone and location) and social links are presented.  A contact form allows visitors to send messages via Web3Forms, with toast notifications signalling success or failure.
- **Footer** – includes copyright information and a button to scroll back to the top.

## Tech Stack

The portfolio uses the following technologies:

| Layer        | Technologies/Packages                                                         |
|-------------|------------------------------------------------------------------------------|
| Front‑end   | [React](https://reactjs.org/) and React Router, built with [Vite](https://vitejs.dev/) scripts for development and building. |
| Styling     | Tailwind CSS and tailwind‑merge for utility‑first styling; dark/light mode managed via a React hook and `localStorage`. |
| UI components | Lucide icons and a custom toast system derived from Radix UI. |
| Forms       | React Hook Form and [Web3Forms](https://web3forms.com/) for serverless form submissions. |

## Getting Started

To run the project locally you’ll need [Node.js](https://nodejs.org/) installed.  Then follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/ppires21/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   Use Vite’s dev script to launch a local server with hot‑reload:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser to view the portfolio.

4. **Build for production**

   To create an optimised production build, run:

   ```bash
   npm run build
   ```

   The static files will be generated in the `dist` directory.  You can preview the production build locally with:

   ```bash
   npm run preview
   ```

## Customisation

- **Profile and bio** – edit the `HeroSection.jsx` and `AboutSection.jsx` files to update the introductory text and biography.
- **Projects** – projects are defined in arrays in `ProjectsSection.jsx`.  Add or modify objects with `id`, `title`, `description`, `image`, `tags`, `demoUrl` and `githubUrl` fields.  Images should be placed in the `public/projects` directory.
- **Skills** – update the `skills` array and `categories` list in `SkillsSection.jsx` to reflect your own expertise.
- **Contact form** – sign up at Web3Forms and replace the `access_key` value in `ContactForm.jsx` with your own key to receive messages.

## Live Site

A live version of the portfolio is available at **[araujopires.pt](https://araujopires.pt/)**.  It demonstrates the star‑themed design, responsive layout and animated interactions.

## Inspiration

The visual design and starry background were inspired by the YouTube tutorial “Build a Cosmic Developer Portfolio with React & Tailwind CSS” (https://youtu.be/ifOJ0R5UQOc).  This project adapts ideas from that video to create a personalised portfolio.

## Contributing

Bug reports and suggestions are welcome.  Please open an issue or pull request on GitHub.  Since this repository is a personal portfolio, major feature changes or redesigns may not be merged, but feedback is appreciated.

## License

This repository does not currently include an explicit license.  The code is provided as‑is for learning and personal use.  If you wish to adapt or reuse it for your own portfolio or commercial work, please credit the original author and the inspiration video.
