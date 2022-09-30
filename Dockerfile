FROM python:3.10-alpine

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED=1

WORKDIR /code/bookshelf

COPY requirements.txt .

RUN pip install -U pip  

RUN pip install -r requirements.txt

COPY . .

RUN chmod +x bin/*.sh