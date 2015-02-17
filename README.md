BotBone's nodejs based HMI.

# Usage

    sudo apt-get install nodejs-legacy
    sudo apt-get install npm
    npm install
    npm run build
    npm start

The server is listening on port 3000.

# Deploy

    npm install -g pm2
    npm install
    npm run build
    sudo npm run create-user
    sudo npm run deploy
    su
    su botnana -c 'pm2 start /srv/www/botnana/hmi/server.js'
    exit

# Undeploy

    su
    su botnana -c 'pm2 stop server'
    su botnana -c 'pm2 kill'
    exit
    sudo npm run undeploy
    sudo npm run delete-user
