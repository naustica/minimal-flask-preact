from flask import Flask
from routes import hello_world
import os


dir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__,
            static_folder=os.path.join(dir, '../public'),
            static_url_path='/')

app.config.from_object(os.environ['APP_SETTINGS'])

app.register_blueprint(hello_world.bp)


@app.route('/')
def index():
    return app.send_static_file('index.html'), 200


if __name__ == '__main__':
    app.run()
