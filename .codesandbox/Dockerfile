# Please DO NOT build the Docker image using this Dockerfile.
# This Dockerfile only work on CodeSandbox.

# Using 'node' image.
FROM node

# Mount '/workspace' for CodeSandbox.
WORKDIR /workspace

# Update the 'PATH' variable for 'npm'.
ENV PATH=/usr/local/bin:/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/workspace/node_modules/.bin

# Update the 'apt-get' cache.
RUN apt-get update

# Upgrade all packages on the container.
RUN apt-get upgrade -y

# Upgrade 'npm'.
RUN npm install -g npm@latest