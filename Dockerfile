FROM nginx:stable

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d
COPY ./build /usr/share/nginx/html

EXPOSE 8080
