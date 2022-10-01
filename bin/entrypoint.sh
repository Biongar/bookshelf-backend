#!/bin/bash

set -e

python manage.py makemigrations --merge --settings=config.settings.production_settings
python manage.py migrate --noinput --settings=config.settings.production_settings
python manage.py collectstatic --noinput --settings=config.settings.production_settings
gunicorn config.wsgi:application \
--bind=0.0.0.0:80 \
--workers=1 \
--env DJANGO_SETTINGS_MODULE=config.settings.production_settings