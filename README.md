# Personal Portfolio Website (Elevate Task 6)

This repository contains a Flask-based personal portfolio website for **ISINIGIRI PAVAN SRI SAI**. It was built strictly following the constraints outlined in *Task 6: Build a Portfolio Website with Flask* provided by Elevate Labs.

## Features

- **Flask Routing** for Home, About, Projects, and Contact pages.
- **Jinja2 Templates** for dynamic rendering from a single JSON resume source.
- **Responsive Layout** using CSS Grid/Flexbox, mobile-first design.
- **Accessibility (a11y)** best-practices (semantic HTML, skip link, ARIA labels).
- **SEO Enhancements**: meta tags, Open Graph tags, JSON-LD Person schema.
- **Contact Form** (POST) with client-side validation and Flask flash messaging.
- **Download Resume** button linking to PDF (placeholder).
- **API Endpoint** (`/api/resume`) serving resume data as JSON.

## Folder Structure

```text
/portfolio_flask_app
├── app.py
├── requirements.txt
├── data/
│   └── resume.json
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── profile-placeholder.jpg (add your photo)
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   └── contact.html
└── README.md
```

## Setup & Run Locally

```bash
# Clone repository
$ git clone <repo-url> && cd portfolio_flask_app

# Create virtual environment (optional)
$ python -m venv venv && source venv/bin/activate  # On Windows: venv\Scriptsctivate

# Install dependencies
$ pip install -r requirements.txt

# Run the Flask development server
$ python app.py

# Open http://localhost:5000 in your browser
```

## Customizing Content

All site content is loaded from `data/resume.json`. Update fields such as skills, projects, contact details, and they will automatically render across pages.



