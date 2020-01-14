FROM python:3-slim

LABEL maintainer="Penn Labs"

WORKDIR /app/

# Install pipenv
RUN pip install pipenv

# Copy project dependencies
COPY Pipfile* /app/

# Install project dependencies
RUN pipenv install --system

# Copy project files
COPY . /app/

CMD ["gunicorn", "-b", "0.0.0.0:80", "main:app"]
