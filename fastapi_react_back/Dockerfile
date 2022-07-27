FROM tiangolo/uvicorn-gunicorn-fastapi
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update  && apt upgrade -y && apt install -y python3-pip
RUN pip install sqlalchemy pymysql
COPY ./ /app