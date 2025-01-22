import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///petmatch.db'  # Base de données SQLite
    SQLALCHEMY_TRACK_MODIFICATIONS = False            # Désactiver les notifications de modification
    SECRET_KEY = os.urandom(24)                       # Clé secrète pour la sécurité
