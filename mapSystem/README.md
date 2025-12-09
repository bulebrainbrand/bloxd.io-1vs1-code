### mapUsableManager
use()とend(index)メゾットがある。useはindexと座標か使用不可Falseを返す
コンストラクタでマップ座標を受け取る

### mapManager
リセットなし、1v1用設計
start(id,id),end(id)メゾットとmapUsableManagerを持つ
idの配列を持っていて、end(id)のときに検索してmapUsableManagerのendを呼び出す

### resetMapUsableManager
リセットあり、1v1用設計
コンストラクタでマップ座標とリセットコールバックを受け取る
use,endを持ってる



