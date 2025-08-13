from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import json
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key_here_change_in_production'

# Load resume data
def load_resume_data():
    """Load resume data from JSON file"""
    try:
        with open('data/resume.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        # Fallback data if file not found
        return {
            "name": "ISINIGIRI PAVAN SRI SAI",
            "role": "Computer Science Student & AI Enthusiast",
            "contact": {"email": "pavansrisai444@gmail.com"}
        }

# Routes
@app.route('/')
def index():
    """Home page route"""
    data = load_resume_data()
    return render_template('index.html', data=data)

@app.route('/about')
def about():
    """About page route"""
    data = load_resume_data()
    return render_template('about.html', data=data)

@app.route('/projects')
def projects():
    """Projects page route"""
    data = load_resume_data()
    return render_template('projects.html', data=data)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """Contact page route with form handling"""
    data = load_resume_data()

    if request.method == 'POST':
        # Handle form submission
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')

        # Basic form validation
        if not all([name, email, subject, message]):
            flash('Please fill in all fields.', 'error')
        else:
            # In a real application, you would send email here
            # For this demo, we'll just flash a success message
            flash(f'Thank you {name}! Your message has been received. I will get back to you soon.', 'success')
            return redirect(url_for('contact'))

    return render_template('contact.html', data=data)

@app.route('/api/resume')
def api_resume():
    """API endpoint to get resume data as JSON"""
    data = load_resume_data()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
