import os

from flask import Flask, redirect

app = Flask(__name__)


@app.route("/<slug>")
def get_url(slug):
    platform_url = os.environ.get("PLATFORM_URL", "")
    return redirect("{}/{}/".format(platform_url, slug), code=302)


if __name__ == "__main__":
    app.run()
