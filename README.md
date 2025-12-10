# Future Eyes Website

This is the official marketing website for **Future Eyes General Trading FZ-LLC**, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Project Structure

- `app/`: Next.js App Router pages.
- `src/components/`: Reusable UI components.
- `src/data/`: Static content definitions (`content.ts`).
- `public/images/`: Image assets.

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `.next` folder.

## Deployment

This project is ready to be deployed on [Vercel](https://vercel.com/).

1.  Push the code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## Customization

- **Content**: Edit `src/data/content.ts` to update text, products, and services.
- **Styling**: Edit `src/app/globals.css` or `tailwind.config.js` (if present) / CSS variables for colors and fonts.
- **Images**: Place new images in `public/images/` and update references in `src/data/content.ts`.
