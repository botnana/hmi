BotBone's nodejs based HMI.

# Usage

    sudo apt-get install nodejs-legacy
    sudo apt-get install npm
    npm install
    npm run build
    npm start

The server is listening on port 3000.

# Deploy

Check block devices with lsblk and find the device for root directory /.

    lsblk

Remount root as 

    sudo mount -o remount,rw /dev/device_for_root / 
    sudo apt-get update

首先校時。以免 npm install 時出問題。

    sudo apt-get install ntpdate
    sudo ntpdate-debian

Install nodejs and npm

    sudo apt-get install nodejs-legacy
    sudo apt-get install npm

先安裝 pm2 以及建立一個執行 webserver 的 user botnana。

    npm install -g pm2
    sudo adduser --disabled-login --home /srv/www/botnana --gecos 'Botnana' botnana
    sudo env PATH=$PATH:/usr/bin pm2 startup linux -u botnana

再將 botnana-hmi 安裝至 /srv/www/botnana/hmi 下。

    mkdir ~/git
    cd ~/git
    git clone https://github.com/botnana/hmi 
    cd hmi
    npm install
    npm run build
    su
    npm run deploy
    su botnana -c 'pm2 start /srv/www/botnana/hmi/server.js'
    exit

# Undeploy

    # su botnana
    $ pm2 stop server
    $ pm2 kill
    $ exit
    # update-rc.d pm2-init.sh remove
    # rm /etc/init.d/pm2-init.sh
    # rm -R /srv/www/botnana/hmi 
    # update-rc.d botnana-hmi-composite-gadget.sh remove
    # rm /etc/init.d/botnana-hmi-composite-gadget.sh
    # userdel -r botnana

