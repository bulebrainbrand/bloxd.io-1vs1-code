### DoingPvPManager
start(id,id)とend(id)を持つ
endメゾットはもう片方のidを渡して自身の管理するものからid,idを消す

### PvPModeManager
PvPQueueManagerとmapManagerを持って、
start(id,id),end(id)を持つ

### EndPvPObserver - シングルトン
startCheck(id,id,callback)メゾットだけある
onPlayerKilledOtherPlayerを見てidが死んだらcallback(dieId)を呼ぶ
