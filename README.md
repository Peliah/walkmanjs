# WalkmanJS

Create interactive product tours and user guides with ease. WalkmanJS is a powerful tool for building engaging onboarding experiences for your users.

## Features

*   **Interactive Tours:** Guide users through your application with step-by-step interactive tours.
*   **Analytics:** Understand how users interact with your tours and identify drop-off points.
*   **Customization:** Customize the look and feel of your tours to match your brand.
*   **Easy Integration:** Easily integrate WalkmanJS into your existing web application.

## WalkmanJS Widget

In addition to the main dashboard application, this project includes the specification for an embeddable widget. This widget is what gets installed on a customer's website to display the tours. It is designed to be a lightweight, standalone script that fetches tour data from the Convex backend.

Integration is done by adding a simple script tag to the user's website:
```html
<script 
  src="https://walkmanjs-widget.netlify.app/walkman.js" 
  data-tour-id="k57abc123d....." 
  data-api-key="wk_ABCdef123XYZ..."
></script>
```

For detailed information on the widget's architecture, initialization flow, and data structures, please see the [Walkmanjs-Widget](https://github.com/Holupeter/Walkmanjs-widget).

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Backend:** [Convex](https://www.convex.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [shadcn/ui](https://ui.shadcn.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   pnpm
*   A Convex account (you can sign up for free at [convex.dev](https://www.convex.dev/))

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/walkmanjs.git
    ```
2.  Install PNPM packages
    ```sh
    pnpm install
    ```
3.  Set up Convex. First, log in to your Convex account:
    ```sh
    npx convex login
    ```
    Then, run the development server for Convex. This will handle deploying your backend functions and schema.
    ```sh
    npx convex dev
    ```
    You will be prompted to create a new project. Follow the instructions in the terminal. This will also create a `.env.local` file with the necessary environment variables.

4.  Run the Next.js development server
    ```sh
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── app/              # Next.js App Router pages
├── components/       # Shared UI components
│   ├── ui/           # shadcn/ui components
│   └── ...
├── convex/           # Convex backend functions and schema
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and libraries
├── public/           # Static assets
└── ...
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.