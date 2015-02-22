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
    adduser --disabled-login --home /srv/www/botnana --gecos 'Botnana' botnana
    npm run deploy
    env PATH=$PATH:/usr/bin pm2 startup linux -u botnana
    su botnana -c 'pm2 start /srv/www/botnana/hmi/server.js'
    exit

# Undeploy

TODO: use a shell script to replace npm run undeploy because package.json is not available.

    cd /srv/www/botnana/hmi
    su
    su botnana -c 'pm2 stop server'
    su botnana -c 'pm2 kill'
    update-rc.d pm2-init.sh remove
    rm /etc/init.d/pm2-init.sh
    npm run undeploy
    rm -R /srv/www/botnana/hmi 
    update-rc.d botnana-hmi-composite-gadget.sh remove
    rm /etc/init.d/botnana-hmi-composite-gadget.sh
    userdel -r botnana
    exit
