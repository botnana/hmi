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
    su
    npm run create-user
    npm run deploy
    env PATH=$PATH:/usr/bin pm2 startup linux -u botnana
    chmod +x /etc/init.d/pm2-init.sh && update-rc.d pm2-init.sh defaults
    su botnana -c 'pm2 start /srv/www/botnana/hmi/server.js'
    exit

# Undeploy

    su
    su botnana -c 'pm2 stop server'
    su botnana -c 'pm2 kill'
    update-rc.d pm2-init.sh remove
    rm /etc/init.d/pm2-init.sh
    npm run undeploy
    npm run delete-user
    exit
