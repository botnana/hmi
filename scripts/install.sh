#!/bin/sh
# 以下為目前安裝以及執行 botnana-hmi 的方式。
apt-get update
apt-get install nodejs-legacy
apt-get install npm
npm install -g grunt-cli
npm install -g forever
apt-get install git
sudo debian
cd
mkdir www
cd www
git clone http://url/to/botnana-hmi.git
cd botnana-hmi
npm install
npm run build
grunt copy
./scripts/botbone-g-ether-load.sh
./scripts/botbone-iptables.sh
npm start

# 未來應改成如下方式：
# 1. 改為使用 deb 的方式來安裝
# 2. botnana-hmi 做為一個 nodejs 的模組，使用 npm install -g botnana-hmi 的方式安裝。
# 3. 安裝 botnana-hmi 時，會把 scripts 目錄底下的 sh 檔拷貝到它該放置的區域。
# 4. npm install -g botnana-hmi 時，會自動執行 grunt copy。
# 5. npm uninstall -g botnana-hmi 時，要移除安裝了的 sh 檔。
# 6. npm install botnana-hmi 不會安裝 sh 檔。
# 7. 開機時會執行 ./scripts/botbone-forever.sh
# 8. /etc/network/interface 應有 usb0。
# 9. botbone-g-ether-load.sh, botbone-tptables.sh 和 botbone-forever.sh 應合併為一個 botnana-hmi.sh。


