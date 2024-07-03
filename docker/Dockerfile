FROM node:16.13-stretch as frontend
WORKDIR /app/
ARG NPM_CI_ARGS=""
ENV DEBIAN_FRONTEND="noninteractive" \
    TZ=Europe/Moscow
COPY ./package*.json ./*.lock /app/
RUN npm ci
COPY . /app
RUN npm run build
RUN npm run build-storybook
CMD npm run start

FROM nginx:1.23.3-alpine as storybook
ARG ENABLE_AUTOINDEX=false
WORKDIR /app/
COPY --from=frontend /app/storybook-static/ /app/public/storybook
COPY docker/nginx/vhost.conf /etc/nginx/conf.d/default.conf
RUN \
    if [ "$ENABLE_AUTOINDEX" = "true" ] ; then \
        sed -i -e '1 s/^/autoindex on;\n/;' /etc/nginx/conf.d/default.conf; \
    fi

