# Expander

[![CircleCI](https://circleci.com/gh/pennlabs/expander.svg?style=shield)](https://circleci.com/gh/pennlabs/expander)

Basic URL expander written as a Flask app.

To use:

1. Set a `PLATFORM_URL` environment variable that contains the base URL running [Shortener](https://github.com/pennlabs/shortener) (Do not include a trailing slash in the URL).
2. Run `python main.py` to run the app.
