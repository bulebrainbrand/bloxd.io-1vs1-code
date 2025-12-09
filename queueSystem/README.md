queueSystemの基盤

### QueueListManager
queue配列を保持
add,delete,clear,hasだけある
### QueueMatchManager
add,delete,has,clear,canMatch,doMatchがある
### AllQueueMatchManagerOperator
QueueMatchManagerを全部持ってる
allDelete,allClear,getPlayerQueueMode(id)を持つ
### PvPQueueManager
QueueMatchManagerを持つ
add,delete,clearメゾットがあり、add時にマッチング可能なら[id,id]を返し、それぞれのidがAllQueueMatchManager.allDeleteに自動でかけられる
