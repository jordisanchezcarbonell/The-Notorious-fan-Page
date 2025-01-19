# The Notorious | Conor McGregor Fan Page

## Overview

This is a fan page dedicated to Conor McGregor, also known as "The Notorious." The project features a dynamic and visually engaging interface that highlights McGregor's legacy in the MMA world. It includes countdowns, parallax effects, and links to his social media accounts. Built with Next.js and Tailwind CSS, it ensures a modern and responsive experience for fans worldwide.

## Features

- **Dynamic Countdown Timer:** A timer counting down to McGregor's next fight or event.
- **Parallax Background Effects:** A visually engaging background with dynamic animations.
- **Social Media Links:** Direct links to McGregor's official Instagram and Twitter accounts.
- **SEO Optimized:** Metadata and Open Graph integration for better search engine visibility.
- **Mobile-First Design:** Fully responsive layout for seamless viewing on all devices.

## Technologies Used

- **Next.js**: Framework for server-side rendering and React-based development.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Lucide-react**: Icon library for modern, customizable icons.
- **Custom Animations**: Subtle animations using Tailwind's animation utilities.

## Project Structure

```
.
├── app
│   ├── components
│   │   └── CountdownTimer.tsx  # Countdown component
│   ├── layout.tsx             # Root layout configuration
│   ├── page.tsx               # Main homepage
├── public
│   ├── favicon.ico            # Favicon for the site
│   ├── conor.jpg              # Background image of Conor McGregor
├── styles
│   └── globals.css            # Global styles
├── next.config.js             # Next.js configuration file
├── tailwind.config.js         # Tailwind CSS configuration file
├── tsconfig.json              # TypeScript configuration file
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/the-notorious.git
   ```
2. Navigate to the project directory:
   ```bash
   cd the-notorious
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the project in your browser:
   ```
   http://localhost:3000
   ```

## Usage

- Modify the `page.tsx` file to update the content or add new features.
- Replace `/public/conor.jpg` with your own image if desired.
- Update `metadata` in `layout.tsx` for SEO customization.

## Deployment

To deploy the project, follow these steps:

1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

Alternatively, you can deploy it to platforms like [Vercel](https://vercel.com/):

- Connect your repository to Vercel.
- Push your changes, and Vercel will handle the deployment automatically.

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Conor McGregor for his inspiration.
- [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for making web development enjoyable.

---

For any questions or feedback, feel free to contact me at [jordigw@gmail.com].
