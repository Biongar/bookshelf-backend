#!/bin/bash

set -e

python manage.py makemigrations --merge
python manage.py migrate --noinput
python manage.py collectstatic --noinput
python manage.py runserver 0.0.0.0:80