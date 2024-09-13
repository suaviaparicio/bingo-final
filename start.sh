#!/bin/bash

# Build and start containers
docker-compose build
docker-compose up -d

# Wait for services to initialize (adjust sleep time as needed)
echo "Waiting for services to initialize..."
sleep 20

echo "Setup complete."
