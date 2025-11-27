# 詳細設計
## 構成
### QueueListOperatorInterface
仮想上のインターフェイス
### QueueListOperator
キューのリストを管理する具体クラス
### QueueManagerInterface
仮想上のインターフェイス
### QueueManager
キューの追加、削除、マッチングを管理する
### QueueManagerCollector
後述のファクトリからQueueManagerを受け取り、保存する
シングルトンデザイン
### QueueManagerFactory
QueueManagerを制作しつつQueueManagerCollectorに追加する
ファクトリーデザイン
### AllQueueHandler
QueueManagerCollectorから受け取った複数のQueueManagerを操作する
ユーティリティデザイン
### MatcherServiceInterface
仮想上のインターフェイス
### MatcherService
マッチングの判定、マッチングの動作を行う
## メゾット等細かい定義
### QueueListOperatorInterface
```js
/**
* @param {playerId} id - 追加するid
* @returns {void}
*/
addId(id)
/**
* @param {playerId} id - 削除するid
* @returns {void}
*/
deleteId(id)
/**
* @returns {array.<playerId>} - queueList
*/
getQueue()
/**
* @returns {void}
*/
clearQueue()
/**
* 存在しないidをqueueから取り除く
* @returns {void}
*/
checkQueue()
```
### QueueListOperator
QueueListOperatorInterfaceに基づく
### QueueManagerInterface
```js
#myQueueListOperator
#myMatcherService
/**
* @returns {boolean} マッチングできるかどうか
*/
canMatching()
/**
* myMatcherServiceからdoMatchingを呼び出し
* idをAllQueueHandlerに渡して全Queueから削除したのち
* idを返す
* @returns {array.<playerId>}
*/
doMatching()
/**
* @param {playerId} id - 追加するid
* @returns {void}
*/
addId(id)
/**
* @param {playerId} id - 削除するid
* @returns {void}
*/
deleteId(id)
/**
* @returns {void}
*/
clearQueue()
/**
* @returns {void}
*/
runCheckQueue()
```
### QueueManager
QueueManagerInterfaceに基づく
DIでQueueListOperatorとMatcherServiceをコンストラクタに求める
### QueueManagerCollector
```js
#queueManagerList
/**
* @param {QueueManager}
* @returns {void}
*/
add(queueManager)
/**
* @returns {array.<queueManager>}
*/
get()
```
### QueueManagerFactory
```js
/**
* QueueManagerCollectorに追加しつつQueueManagerInstanceを返す
* @param {QueueListOperator|null} - QueueListOperatorInterfaceに基づいているクラス
* @param {MatcherService|null} - MatcherServiceInterfaceに基づいているクラス
* @returns {QueueManagerInstance}
*/
static make()
```
### AllQueueHandler
```js
/**
* 全QueueListからidを削除する
* @param {playerId} deleteId 
* @returns {void}
*/
static deleteId(deleteId)
```
### MatcherServiceInterface
```js
#myQueueListOperator
/**
* @returns {boolean}
*/
canMatching()
/**
* id2つを返すのみで、副作用はない
* @returns {array.<playerId>}
*/
doMatching()
```
### MatcherService
MatcherServiceInterfaceの通りに作る
2人でマッチング(1v1)の設計


