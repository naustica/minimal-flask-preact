from flask import Flask
from routes import hello_world
import os


app = Flask(__name__)

app.config.from_object(os.environ['APP_SETTINGS'])

app.register_blueprint(hello_world.bp)

if __name__ == '__main__':
    app.run()
