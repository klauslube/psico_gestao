# Psico Gestão

Management system for psychologists and clinics.

## Prerequisites

- Ruby 3.2.3
- Rails 8.0.x
- PostgreSQL 14+

## Setup

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

## Environment Variables

Copy the example file and configure:

cp .env.example .env

See .env.example for required variables.

## Development

This project uses:
- Ruby on Rails (API mode)
- React
- PostgreSQL
- RSpec for testing

## License

This project is private and for portfolio purposes.