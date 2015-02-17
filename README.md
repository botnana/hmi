BotBone's nodejs based HMI.

# Usage

    npm install
    npm run build
    npm start

The server is listening on port 3000.

# Deploy

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
