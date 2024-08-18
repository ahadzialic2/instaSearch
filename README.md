# Search and Analytics Tool - InstaSearch 
Live site: [https://insta-search-tool-fc3fbd48f589.herokuapp.com/](https://insta-search-tool-fc3fbd48f589.herokuapp.com/)
## Overview and description

Welcome to the InstaSearch README!

App records users input in realtime and ultimately display analytics &
trends on what people are searching for the most.

The problem I tackled on this project is so-called "pyramid problem" in search and here is my solution.
Algorithm for instant search and pyramid problem solution:
My approach to solving the pyramid problem involves configuring a timeout interval for each key press. If the timeout is triggered—that is, if the user doesn't trigger it again by hitting a key—the application will call the backend, which will compare whether the current search query was completed 30 seconds later than the previous one. This is how I would go about removing partial or incomplete inquiries. When a user searches for "iPhone," the "iPhone SE" application will only record the last query if the user stays on the results page (scrolls down, etc.) for a few seconds (no more than 30 seconds, which is my median for average user). If the user searches for "iPhone" and then after 30 seconds, the "iPhone SE" application considers it a new query and saves it to the database.
It is evident, in that situation, that the typical user was drawn in by the results, which suggests that the query was relevant.

My position is supported by fact that semantics play major role in searches. For example, if user searched "BMW", that query is very reasonable because he searches "globally".
If he later specifically searches "BMW m4" that is semantically considered a new search query (user scales its search).

Analytics: 
I gather simple analytics based on bulk data (from all Ip addresses).
There are many possible improvement I could make and major one is filter by date, users, etc..

## Features

- **Search Functionality:** Allows users to search for specific articles within application.
- **Analytics Dashboard:** Provides reports on search trends, popular queries, and user behavior patterns.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Ruby (version 3.2.2")
- Ruby on Rails (version 7.0.8)
- PostgreSQL (1.1)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your/repository.git
   cd repository
   ```

2. Install dependencies:
   ```bash
   bundle install
   npm install
   ```

3. Set up the database:
   ```bash
   rails db:create
   rails db:migrate
   rails db:seed
   ```

4. Start the Rails server:
   ```bash
   rails server
   ```

5. Access the application at `http://localhost:3000`.

### Configuration

- Configure environment variables (if any) in `.env` file or directly in your deployment environment.

### Usage

1. **Search Functionality:**
   - Enter a query and see results instantly.

2. **Analytics Dashboard:**
   - Access the analytics section from the navigation menu.
   - Explore visualizations and reports on search trends.

### Deployment

- Deploy the application to your preferred hosting provider (Heroku, AWS, etc.).
- Ensure environment variables and configurations are set correctly for production.

### Contributing

- Fork the repository.
- Create a new branch (`git checkout -b feature/awesome-feature`).
- Make your changes and commit (`git commit -am 'Add awesome feature'`).
- Push to the branch (`git push origin feature/awesome-feature`).
- Create a new Pull Request.

### Support

### License
