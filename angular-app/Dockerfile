FROM node:16.10.0-alpine as build
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
# Copy app files
COPY . .
# Build the app

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=build /app/dist/angular-app /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf

# Add your nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
