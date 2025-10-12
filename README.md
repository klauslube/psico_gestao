# Psico Gestão

Management system for psychologists and clinics.

## Prerequisites

- Docker 28.5.0
- Docker Compose 3+

OR (for local development without Docker)

- Ruby 3.2.3
- Rails 8.0.x
- PostgreSQL 16+

## Setup with Docker (Recommended)

1. Clone the repository

git clone <repository-url>
cd psico_gestao

2. Build and start containers

docker compose build
docker compose up

3. Access the application

The API will be available at http://localhost:3000
PostgreSQL will be available at localhost:5433

## Setup without Docker

1. Clone the repository

git clone <repository-url>
cd psico_gestao

2. Install dependencies

bundle config set --local path 'vendor/bundle'
bundle install

3. Setup database

rails db:create
rails db:migrate

4. Start the server

rails server

The API will be available at http://localhost:3000

## Docker Commands

# Start containers
docker compose up

# Start in background
docker compose up -d

# Stop containers
docker compose down

# View logs
docker compose logs -f web

# Access Rails console
docker compose exec web rails console

# Run migrations
docker compose exec web rails db:migrate

# Run tests
docker compose exec web rspec

# Rebuild containers (after Gemfile changes)
docker compose build

## Environment Variables

Copy the example file and configure:

cp .env.example .env

See .env.example for required variables.

## Development

This project uses:
- Ruby on Rails (API mode)
- PostgreSQL
- RSpec for testing
- Docker & Docker Compose

## License

This project is private and for portfolio purposes.