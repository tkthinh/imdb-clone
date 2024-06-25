# IMDB Clone

This project is an IMDB clone built with Next.js, using the TMDB API for movie data. It features a responsive design with Tailwind CSS and supports both light and dark modes.

## Features

- Movie listings and details
- Search functionality
- Responsive design
- Light/Dark mode toggle


## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB API](https://www.themoviedb.org/documentation/api)


## Prerequisite
- Node.js (v18 or later)
- npm or yarn
## Installation

1. Clone the project

```bash
  git clone https://github.com/tkthinh/imdb-clone.git
  cd imbd-clone
```

2. Install dependencies:
```bash
  npm install
  or
  yarn install
```

3. Set up environment variables:
- Create a `.env.local` file in the root directory
- Add your TMDB API key (see below for instructions on obtaining the key):
  ```
  API_KEY=your_api_key_here
  ```

4. Run the development server
```bash
  npm run dev
  or
  yarn run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Obtain TMDB API Key

1. Visit [TMDB website](https://www.themoviedb.org/) and create an account if you don't have one.
2. Go to your account settings and navigate to the "API" section.
3. Request an API key by filling out the form.
4. Once approved, you'll receive an API key.
5. Add this key to your `.env.local` file as shown in the installation steps.
