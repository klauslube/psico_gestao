## Frontend Setup

1. Navigate to frontend directory

cd frontend

2. Install dependencies

npm install

3. Create environment file

cp .env.example .env

4. Start development server

npm run dev

The frontend will be available at http://localhost:3001

## Running the Full Application

# Terminal 1: Start backend
docker compose up

# Terminal 2: Start frontend
cd frontend
npm run dev

Then access:
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000