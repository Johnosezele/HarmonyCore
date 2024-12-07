# HarmonyCore - Project Setup Documentation

## Overview
HarmonyCore is a web application that reads and extracts content from uploaded files (PDF, EPUB, DOC) and web URLs. This documentation explains the setup and purpose of the dependencies used in the project.

## Dependencies

The following dependencies are used in the HarmonyCore project:

### 1. `@mozilla/readability`
- **Purpose**: This library extracts the main readable content from web pages, removing unnecessary elements like ads, navigation bars, and sidebars.
- **Usage**: It is used to parse and clean up HTML content fetched from URLs, providing a clean and readable format for the user.

### 2. `axios`
- **Purpose**: A promise-based HTTP client that allows for making HTTP requests from Node.js to external servers or APIs.
- **Usage**: It is used for fetching content from web URLs. You can make GET, POST, PUT, or DELETE requests with `axios` to interact with other services or resources on the web.

### 3. `cors`
- **Purpose**: This middleware enables Cross-Origin Resource Sharing (CORS), allowing your server to accept requests from different origins (domains).
- **Usage**: It is used in the Express server to handle requests coming from different domains, ensuring the API can be accessed from various sources without security issues.

### 4. `dotenv`
- **Purpose**: Loads environment variables from a `.env` file into `process.env`, allowing you to manage configuration variables such as API keys and database credentials securely.
- **Usage**: It is used to store sensitive information like API keys or environment-specific variables that shouldn't be hardcoded into the project.

### 5. `express`
- **Purpose**: A lightweight, flexible framework for building web servers in Node.js.
- **Usage**: Express is used to create the server for HarmonyCore, manage HTTP routes (such as handling file uploads or parsing content), and serve the web application.

### 6. `jsdom`
- **Purpose**: A JavaScript library that simulates a web browser environment, including the DOM (Document Object Model), in Node.js.
- **Usage**: It allows for manipulating and querying HTML documents, which is useful for scraping and extracting content from web pages.

### 7. `mammoth`
- **Purpose**: Converts DOCX files into HTML or plain text while preserving the document's structure and formatting.
- **Usage**: Used for parsing Microsoft Word (DOCX) files, converting them into a readable format for users.

### 8. `morgan`
- **Purpose**: A logging middleware for HTTP requests in Express.
- **Usage**: It is used to log incoming HTTP requests to the server in a human-readable format. This is useful for debugging and tracking requests made to the application.

### 9. `multer`
- **Purpose**: Middleware for handling file uploads in Node.js.
- **Usage**: It is used to handle file uploads from users, allowing you to manage files such as PDFs, EPUBs, DOC files, and more. It handles multi-part form data used for file uploads.

### 10. `pdf-parse`
- **Purpose**: A library for extracting text from PDF files.
- **Usage**: Used for reading and extracting content from PDF files, making it possible to parse and present their text in a user-friendly format.

## Installation

To install the necessary dependencies, run the following command in your project directory:

```bash
npm install

e.g 
npm install @mozilla/readability axios cors dotenv express jsdom mammoth morgan multer pdf-parse
```