BotBone 使用動程科技的 Botnana 工業物聯網開發平台。此一平台整合了以下服務：

* 小型的部落格。以提供產品的文件。
* 硬體控制語言 MSL 以及其執行環境。此一執行環境可透過雲端 API 存取。
* 簡易的 SCADA/HMI。

Botnana 平台的各種服務透過 git://botnana.mapacode.tw 提供軟體更新下載。

## 執行環境

Botnana 提供各種不同的執行環境。針對各種不同應用領域。

* BotBone：EtherCAT 及各種工業以太網。
* FPGA based 的 I/O 及運動控制。
* IBM Bluemix 雲端整合。

亦可聯絡動程科技 (Mapacode Inc.) 提供私有雲整合服務。

## 軟體架構

Botnana HMI 為一 Web-based 的 platform，整合各種 Services，示意圖如 [botnana-hmi-flux][flux]。

它以 Facebook 的 ReactJS 以及 Yahoo 的 Fluxible 為基礎，建構 isomorphic flux 的 service 架構。在各模組的組成上，可以切分成負責 service 的元件以及負責 view 的元件，方便使用者自行組合。

以 blog 為例， blog 區分為 blog-view 和 blog-service。

* blog-service 使用 Yahoo 的 fetchr，提供 CRUD 的 service。
* blog-view 使用 Facebook 的 react, Yahoo 的 fluxible, fluxible-plugin-fetchr, 以及 blog-service，構成一個可以在其他 Fluxible App 中重新使用的元件。

如此區分模組的方式有以下好處：

* 一開始就將 service 分開，可以清楚地定義一個 service 的 API。此一 service 雖然相依於 Yahoo fetchr，但和 Yahoo Fluxible 及 Facebook React 無關。
* 提供一個能讓 Fluxible App 重用的 reactjs 模組。此一模組亦可做為客製化的範例。
* 未來若使用其他的，非 Yahoo Fluxible 的架構，只要設計自己的 plugin，亦可以重用已設計好的 service 模組。

[flux]: /assets/img/botnana-hmi-flux.svg
