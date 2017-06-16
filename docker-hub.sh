#!/bin/sh
docker run -d -p 4444:4444 --name selenium-hub selenium/hub:3.0.1-germanium
docker run -d --link selenium-hub:hub selenium/node-chrome:3.0.1-germanium
docker run -d --link selenium-hub:hub selenium/node-firefox:3.0.1-germanium
