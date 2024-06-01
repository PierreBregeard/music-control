import flask
from flask_cors import CORS
from pathlib import Path
from PC import PC
from os import chdir

class Flask:

    def start(addr):

        chdir(Path(__file__).parent.parent)
        static_folder = Path("frontend/dist")
        app = flask.Flask(__name__, static_folder=static_folder.resolve())
        CORS(app)

        @app.route("/", defaults={"path": ""})
        @app.route("/<path:path>")
        def serve(path):
            if path and (Path(app.static_folder) / Path(path)).exists():
                return flask.send_from_directory(app.static_folder, path)
            else:
                return flask.send_from_directory(app.static_folder, "index.html")
        
        app.run(addr)