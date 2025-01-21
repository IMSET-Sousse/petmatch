from flask import Flask, render_template, request
import json

app = Flask(__name__)

# Simulated data (this could be a database in a real app)
pets_data = [
    {"id": 1, "name": "Buddy", "species": "Dog", "age": 3, "description": "Friendly and playful."},
    {"id": 2, "name": "Mittens", "species": "Cat", "age": 2, "description": "Loves cuddling."},
    {"id": 3, "name": "Charlie", "species": "Dog", "age": 1, "description": "Energetic and loves running."},
]


# Route for the home page
@app.route('/')
def index():
    return render_template('index.html')

# Route for matching pets (based on species, age, etc.)
@app.route('/match', methods=['POST'])
def match():
    # Get user input from the form
    species_preference = request.form.get('species')
    age_preference = int(request.form.get('age'))

    # Filter pets based on user preference
    matched_pets = [
        pet for pet in pets_data
        if (species_preference.lower() == pet['species'].lower()) and (pet['age'] <= age_preference)
    ]

    return render_template('match_results.html', pets=matched_pets)

if __name__ == '__main__':
    app.run(debug=True)
