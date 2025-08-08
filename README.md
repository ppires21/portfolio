# Pedro Pires Portfolio

Welcome to my personal portfolio web application.  This project showcases my background, skills and selected projects in web development, data engineering and machine learning using a star‑themed design.  It is built with modern front‑end tooling and deployed at **[araujopires.pt](https://araujopires.pt/)**.

## Features

- **Star‑filled hero** – the landing section introduces me as a developer and engineer from Braga, Portugal currently pursuing a master’s in Information Systems Engineering【241158404364373†L37-L43】.  It includes an avatar, a short description and a call‑to‑action button.
- **Responsive navigation bar** – a fixed navigation bar changes styling when you scroll and collapses into a menu on small screens【937074756355540†L14-L76】.
- **Dark/Light theme toggle** – users can switch between dark and light themes; the preference is stored in local storage so it persists across visits【406275040495332†L6-L33】.
- **Animated starry background** – random stars and meteors are generated to create an animated cosmic backdrop【698669763097954†L23-L39】.
- **About section** – this section gives a short biography and highlights my education, including master’s, bachelor’s and high‑school degrees【7477612987630†L20-L33】【7477612987630†L71-L78】.
- **Filterable skills section** – skills are grouped into “frontend”, “backend”, “data” and “tools” categories【405342463969610†L3-L19】.  Users can select a category to view relevant skills【405342463969610†L98-L114】.
- **Projects showcase** – cards display selected projects with an image, description, technology tags and links to the GitHub repositories【863912405089768†L4-L13】【863912405089768†L46-L59】.  Projects are divided into web projects and data/ML/AI projects.
- **Contact section** – contact information (email, phone and location) and social links are presented【278662587805465†L51-L87】【278662587805465†L94-L116】.  A contact form allows visitors to send messages via Web3Forms【432764893596198†L8-L23】, with toast notifications signalling success or failure【181551840730593†L94-L116】.
- **Footer** – includes copyright information and a button to scroll back to the top【577570658092149†L5-L16】.

## Tech Stack

The portfolio uses the following technologies:

| Layer        | Technologies/Packages                                                         |
|-------------|------------------------------------------------------------------------------|
| Front‑end   | [React](https://reactjs.org/) and React Router【683765504767332†L11-L13】, built with [Vite](https://vitejs.dev/) scripts for development and building【70113786702844†L6-L10】. |
| Styling     | Tailwind CSS and tailwind‑merge for utility‑first styling【70113786702844†L12-L23】; dark/light mode managed via a React hook and `localStorage`【406275040495332†L6-L33】. |
| UI components | Lucide icons and a custom toast system derived from Radix UI【181551840730593†L94-L116】. |
| Forms       | React Hook Form and [Web3Forms](https://web3forms.com/) for serverless form submissions【432764893596198†L1-L23】. |

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

   Use Vite’s dev script【70113786702844†L6-L10】 to launch a local server with hot‑reload:

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

- **Profile and bio** – edit the `HeroSection.jsx` and `AboutSection.jsx` files to update the introductory text and biography【241158404364373†L37-L43】【7477612987630†L20-L33】.
- **Projects** – projects are defined in arrays in `ProjectsSection.jsx`【863912405089768†L4-L13】【863912405089768†L46-L59】.  Add or modify objects with `id`, `title`, `description`, `image`, `tags`, `demoUrl` and `githubUrl` fields.  Images should be placed in the `public/projects` directory.
- **Skills** – update the `skills` array and `categories` list in `SkillsSection.jsx` to reflect your own expertise【405342463969610†L3-L19】.
- **Contact form** – sign up at Web3Forms and replace the `access_key` value in `ContactForm.jsx`【432764893596198†L8-L10】 with your own key to receive messages.

## Live Site

A live version of the portfolio is available at **[araujopires.pt](https://araujopires.pt/)**.  It demonstrates the star‑themed design, responsive layout and animated interactions.

## Inspiration

The visual design and starry background were inspired by the YouTube tutorial “Build a Cosmic Developer Portfolio with React & Tailwind CSS” (https://youtu.be/ifOJ0R5UQOc).  This project adapts ideas from that video to create a personalised portfolio.

## Contributing

Bug reports and suggestions are welcome.  Please open an issue or pull request on GitHub.  Since this repository is a personal portfolio, major feature changes or redesigns may not be merged, but feedback is appreciated.

## License

This repository does not currently include an explicit license.  The code is provided as‑is for learning and personal use.  If you wish to adapt or reuse it for your own portfolio or commercial work, please credit the original author and the inspiration video.
