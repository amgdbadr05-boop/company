# AetherCore Technologies - Full-Stack Production App

This repository houses the full-stack, production-ready implementation of **AetherCore Technologies**. The frontend (classic SPA structure, glowing HSL themes, particle backgrounds, and dynamic calculators) is powered by a robust **Django (Python 3)** backend, **PostgreSQL** database, and **Django REST Framework** APIs.

---

## 🛠️ Technology Stack
* **Core Backend:** Python 3 + Django 4.2+
* **REST APIs:** Django REST Framework (DRF)
* **Database:** PostgreSQL (with automated SQLite fallback for local development)
* **Frontend Assets:** Vanilla HTML5, CSS3, and JavaScript SPA (served via Django Staticfiles)

---

## 🚀 Setup & Installation Instructions

Follow these steps to run the application locally on your system:

### 1. Initialize Virtual Environment
Create a clean Python virtual environment inside the project directory:
```bash
python -m venv venv
```

Activate the environment in your shell:
* **Windows (PowerShell):**
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
* **macOS / Linux:**
  ```bash
  source venv/bin/activate
  ```

### 2. Install Package Dependencies
Install all required libraries (Django, Django REST Framework, PostgreSQL adapter, python-dotenv):
```bash
pip install -r requirements.txt
```

### 3. Environment Configurations (`.env`)
Copy the environment variables template and configure your connection credentials:
```bash
cp .env.example .env
```
Inside `.env`, configure your PostgreSQL details:
* `DB_NAME`: Database name (e.g. `aethercore_db`)
* `DB_USER`: PostgreSQL user (e.g. `postgres`)
* `DB_PASSWORD`: PostgreSQL user password
* `DB_HOST`: Host address (defaults to `127.0.0.1`)
* `DB_PORT`: Database port (defaults to `5432`)

*Note: If PostgreSQL is not running or the database is not yet created, the application will automatically print a warning and fall back to a local `db.sqlite3` file so the site remains fully operational.*

### 4. Run Schema Migrations
Prepare the database tables and schemas:
```bash
python manage.py migrate
```

### 5. Create Admin Superuser
Create the initial administrator account to access the dashboard portal:
```bash
python manage.py createsuperuser
```
*(Default credentials for testing in the dev environment can be: User: `Amgad badr` | Pass: `@Mgad779Badr`)*

### 6. Start the Server
Launch the development server:
```bash
python manage.py runserver
```

Open your browser and visit: **`http://127.0.0.1:8000/`**

---

## 📂 Operational Portal & Admin URLs

* **Main Dynamic SPA:** `http://127.0.0.1:8000/`
* **Admin Dashboard Portal:** `http://127.0.0.1:8000/#/dashboard`
* **Django Native Admin Panel:** `http://127.0.0.1:8000/admin/`

---

## 🔒 Security & Performance Features
* **Authentication:** Django Session & CSRF authentication replaces hardcoded JS mocks.
* **Database Normalization:** Structured models for contact messages, pricing quote requests, portfolio showcases, team registries, careers applications, and publishing sections.
* **Robust File Uploads:** Validated file size constraints and folder pathing for candidate CV attachments.
* **SEO Excellence:** Clean URLs, automated rendering of dynamic `robots.txt` and `sitemap.xml` feeds based on SEO patterns.
