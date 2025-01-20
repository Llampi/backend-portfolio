# Web config with docker, django and react
 
# Project Setup

## How to Run the Project (With Docker)

## Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to Run the Project

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Llampi/docker-react-django-site.git
   cd docker-react-django-site
   ```

2. **Start the Containers**
   ```sh
   docker-compose up --build
   ```
   This will build and start the Django backend, React frontend, and PostgreSQL database.

3. **Access the Applications**
   - **React App:** [http://localhost:5173](http://localhost:5173)
   - **Django API:** [http://localhost:8000/api/](http://localhost:8000/api/)

## Environment Variables

Ensure you have a `.env` file for environment variables. Example:

```
DB_HOST=db
DB_PORT=5432
DB_NAME=mydb
DB_USER=user
DB_PASSWORD=password
```

## Stopping the Project

To stop the containers, run:
```sh
docker-compose down
```

## Troubleshooting

- If React cannot connect to Django, ensure the `VITE_API_URL` in React is set to `http://django:8000`.
- If Django rejects requests, add `django-app` to `ALLOWED_HOSTS` in `settings.py`.
- Run `docker-compose logs` to check for errors.

## Useful Commands

- View running containers:
  ```sh
  docker ps
  ```
- Check logs:
  ```sh
  docker-compose logs -f
  ```
- Restart a service:
  ```sh
  docker-compose restart <service-name>
  ```



## How to Run the Project (Without Docker)

## Prerequisites

Make sure you have the following installed on your system:

- [Python](https://www.python.org/downloads/) (version 3.8 or higher)
- [Node.js](https://nodejs.org/) (for React)
- [PostgreSQL](https://www.postgresql.org/download/)



### Backend (Django)

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Llampi/docker-react-django-site.git
   cd ocker-react-django-site/django_app
   ```

2. **Create a Virtual Environment**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   ```sh
   pip install -r requirements.txt
   ```

4. **Set Up Environment Variables**
   Create a `.env` file in the `django_app` directory and add:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=mydb
   DB_USER=user
   DB_PASSWORD=password
   ```

5. **Apply Migrations and Start the Server**
   ```sh
   python manage.py migrate
   python manage.py runserver
   ```
   The Django API will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000).

### Frontend (React)

1. **Navigate to the React Directory**
   ```sh
   cd ../react_app/main
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the Development Server**
   ```sh
   npm run dev
   ```
   The React app will be available at [http://localhost:5173](http://localhost:5173).

## Troubleshooting

- If React cannot connect to Django, update the `VITE_API_URL` in React's `.env` file:
  ```
  VITE_API_URL=http://127.0.0.1:8000
  ```
- If PostgreSQL connection fails, ensure the database is running and credentials are correct.
- If ports are in use, change them in Django (`manage.py runserver <port>`) or React (`vite.config.js`).

## Useful Commands

- **Deactivate Virtual Environment:**
  ```sh
  deactivate
  ```
- **Run Django Shell:**
  ```sh
  python manage.py shell
  ```
- **Run PostgreSQL CLI:**
  ```sh
  psql -U user -d mydb
  ```



