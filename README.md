# Shop App

An e-commerce application built with Next.js App Router.

## Features

* Product listing
* Product detail page
* Search products by name
* Server-side pagination
* Shopping cart using Zustand
* Dynamic cart quantity controls
* Responsive product grid
* Dynamic routes with the Next.js App Router
* URL-based search and pagination
* JSON Server as a mock backend

## Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Zustand
* JSON Server

## Project Structure

```text
app/
├── page.tsx
├── layout.tsx
└── product/
    └── [id]/
        └── page.tsx

src/
├── components/
├── store/
├── types/
└── ...
```

## Installation

Install dependencies:

```bash
npm install
```

## Running the Project

This project requires both the Next.js development server and the JSON Server API.

### 1. Start JSON Server

```bash
npm run json-server
```

The API will be available at:

```
http://localhost:4000
```

### 2. Start the Next.js development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:3000
```

Both servers must be running simultaneously.

## API

The application communicates with JSON Server running on port `4000`.

Examples:

```
GET /products
GET /products/1
```

Pagination is implemented using JSON Server query parameters:

```
_page
_per_page
```

Searching is implemented using:

```
name:contains
```

## Application Features

### Search

* Search is synchronized with the URL.
* Search updates are debounced to reduce unnecessary requests.
* Changing the search automatically resets pagination to page 1.

### Pagination

* Server-side pagination using JSON Server.
* Current page is stored in the URL.
* Invalid page numbers are safely clamped.

### Product Details

Each product card navigates to its own dynamic route:

```
/product/:id
```

The detail page fetches the selected product directly from the API.

### Shopping Cart

Shopping cart state is managed using Zustand.

Users can:

* Add products to the cart
* Increase quantity
* Decrease quantity
* Remove products when quantity reaches zero

The cart badge in the header updates automatically based on the global Zustand state.

## Learning Objectives

This project was built to practice:

* Next.js App Router
* Dynamic routing
* Server Components
* Client Components
* TypeScript
* Zustand state management
* URL search parameters
* Debounced search
* Server-side pagination
* Reusable component design
* Component composition
* React hooks
* Fetching data from an API
* Project structure and code organization
