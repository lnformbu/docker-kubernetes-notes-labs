# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file to the working directory
COPY package.json .

# Install the dependencies defined in package.json
RUN npm install

# Copy the entire application source code to the working directory
COPY . .

# Expose port 3000 to allow access to the application from outside the container
EXPOSE 3000

# Define the command to run the application when the container starts
CMD [ "node", "app.mjs" ]
