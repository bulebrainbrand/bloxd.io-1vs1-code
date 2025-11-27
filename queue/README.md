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
ユーティリティデザイン
### AllQueueHandler
QueueManagerCollectorから受け取った複数のQueueManagerを操作する
ユーティリティデザイン
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
```
### QueueListOperator
QueueListOperatorInterfaceに基づく
### QueueManagerInterface
```js
#myQueueListOperator
/**
* @returns {boolean} マッチングできるかどうか
*/
canMatching()
/**
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
```
### QueueManager
QueueManagerInterfaceに基づく
DIでQueueListOperatorInterfaceをコンストラクタに求める
canMatchingはQueueListのlength>=2かどうか
doMatchingはQueueListの先頭2つのidを返し、全てのQueueListからそのid2つを削除する
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
* @returns {QueueManagerInstance}
*/
make()
```
### AllQueueHandler
```js
/**
* 全QueueListからidを削除する
* @param {playerId} deleteId 
* @returns {void}
*/
deleteId(deleteId)
```


