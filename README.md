<p align="center">
  <a href="">
    <h1 align="center">
      Realtime Dashboard
    </h1>
  </a>
</p>

## 🚀 Quick start

1.  **Start developing.**

    ```shell
    pnpm install
    pnpm run dev
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

## 📝 Notes

1.  **How long did you spend on the coding test?**

    I spent the full 4 hours

1.  **What would you add to your solution if you had more time and expected it to be used in a production setting?**

    I would add types, tooltip details on hover, a label for the current avg value on the y-axis, more flexibility in layout, and tests

1.  **Why did you use the libraries you did?**

    - Typescript - typed js, clearer code, avoiding of side effects
    - Next.js - ease of routing, font loading, page loading performance
    - React Query - ease of fetching, caching, and refetching
    - ESLint + Prettier - better readability, catching syntax errors, setting coding quality standards
    - Tailwind - very quick to prototype once set up
    - Framer Motion - part of my template, unused in this project
    - React Loading Skeleton - useful layout placeholders
    - ReCharts - quick to set up charting
    - usehooks - useful common hooks, unused in this project

1.  **What was the reasoning behind the type(s) of graph you used?**

    Given that there were a lot of rapidly updating discrete points of data, a line graph with an area range provided better visual clarity than something like a boxplot, which would've added clutter.

    The end result is easy to scan for any large movements while also still understanding the updating current average value.

1.  **How would you improve the timeseries API that you just used?**

    I ended up needing to shape the data from the response to be easier to work with and also be more readable by the chart library. I likely would've changed it into something similar to the structure I ended up with:

    ```
    {
      timestamp: string,
      range: [min: number, max: number],
      min: number,
      max: number,
      avg: number,
    }
    ```

## 🧐 What's inside?

#### Language

- typescript

#### Library

- react

#### Web Framework

- nextjs
- next-seo

#### State Management

- react-query

#### Dev Environment

- eslint
- lint-staged
- prettier

#### Styling

- tailwindcss
- postcss
- autoprefixer
- tailwind-merge

#### Animation

- framer-motion

#### Utilities

- react-loading-skeleton
- recharts
- usehooks-ts
