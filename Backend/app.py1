from flask import Flask, request, jsonify
from models import Pet, User

app = Flask(__name__)

# Simulons une "base de données" en mémoire
users_db = []
pets_db = []

@app.route('/register_user', methods=['POST'])
def register_user():
    data = request.get_json()
    user = User(name=data['name'], preferences=data['preferences'])
    users_db.append(user)
    return jsonify({"message": "User registered successfully!"}), 201

@app.route('/register_pet', methods=['POST'])
def register_pet():
    data = request.get_json()
    pet = Pet(name=data['name'], type=data['type'], description=data['description'])
    pets_db.append(pet)
    return jsonify({"message": "Pet registered successfully!"}), 201

@app.route('/find_match', methods=['POST'])
def find_match():
    data = request.get_json()
    user_preferences = data['preferences']
    
    # Rechercher un animal qui correspond aux préférences de l'utilisateur
    matching_pets = [pet for pet in pets_db if pet.type in user_preferences]
    
    if matching_pets:
        return jsonify([pet.serialize() for pet in matching_pets]), 200
    else:
        return jsonify({"message": "No match found!"}), 404

if __name__ == '__main__':
    app.run(debug=True)
