FROM node:10.16.3-alpine

WORKDIR /app

# Installs latest Chromium (76) package.
#
# # See https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-on-alpine
RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN npm update \
  && npm uninstall yarn -g \
  && npm install -g yarn

CMD ["/bin/sh"]
