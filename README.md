BotBone's nodejs based HMI.

# Usage

    sudo apt-get install nodejs-legacy
    sudo apt-get install npm
    npm install
    npm run build
    npm start

The server is listening on port 3000.

# Deploy

    su
    npm install -g pm2
    adduser --disabled-login --home /srv/www/botnana --gecos 'Botnana' botnana
    env PATH=$PATH:/usr/bin pm2 startup linux -u botnana
    cd /srv/www/botnana
    su botnana
    git clone /url/to/botnana-hmi
    cd botnana-hmi
    npm install
    npm run build
    exit
    cd /srv/www/botnana/botnana-hmi
    npm run deploy
    su botnana
    pm2 start /srv/www/botnana/hmi/server.js
    cd /srv/www/botnana
    rm -Rf botnana-hmi
    exit
    shutdown -r now

# Undeploy

    su
    su botnana
    pm2 stop server
    pm2 kill
    exit
    update-rc.d pm2-init.sh remove
    rm /etc/init.d/pm2-init.sh
    rm -R /srv/www/botnana/hmi 
    update-rc.d botnana-hmi-composite-gadget.sh remove
    rm /etc/init.d/botnana-hmi-composite-gadget.sh
    userdel -r botnana
    shutdown -r now
