# /bin/bash

read -p "type the sudo password pw: " pw

docker compose -p fastapi_react down

docker rmi fastapi_react_*

echo $pw | sudo -S apt update

sudo apt -y install curl

sudo curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
sudo apt -y install nodejs

cd $(dirname "$0")/fastapi_react_front

npm install
npm run build

cd ..

docker compose -p fastapi_react up