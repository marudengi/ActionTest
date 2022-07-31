FROM python:3.8-slim

RUN pip3 install flask

copy . /app

WORKDIR /app

COPY ./ ./

CMD ["python", "hello.py"]
