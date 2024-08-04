# URL Shortening Project

This project is a URL shortening service built with [NestJS](https://nestjs.com/). The service provides an API to shorten URLs and retrieve the original URLs from the shortened ones.

## Features

- Shorten a long URL.
- Retrieve the original URL using the shortened URL.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/abdulrahmanmousa/backend-url_shortener
   cd backend-url_shortener
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Running the Service

1. Start the NestJS server:

   ```sh
   npm run start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

### Shorten URL

- **Endpoint:** `POST /shorten`
- **Request Body:**
  ```json
  {
    "long_url": "https://example.com"
  }
  ```
- **Response:**
  ```json
  {
    "short_url": "http://localhost:3000/abcd1234"
  }
  ```

### Retrieve Original URL

- **Endpoint:** `GET /:id`
- **Response:**
  ```json
  {
    "long_url": "https://example.com"
  }
  ```

## Project Structure

```plaintext
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
├── urls/
│   ├── urls.controller.ts
│   ├── urls.module.ts
│   ├── urls.service.ts
│   ├── dto/
│   │   ├── shorten-url.dto.ts
│   │   └── redirect.dto.ts
│   └── entities/
│       └── url.entity.ts
```
