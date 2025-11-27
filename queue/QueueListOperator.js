const QueueListOperator = class{
  #queueList
  constructor(){
    this.#queueList = new Set()
  }
  addId(id){
    this.#queueList.add(id)
  }
  deleteId(id){
    this.#queueList.delete(id)
  }
  checkQueue(){
    Array.from(this.#queueList).forEach(
      id => {if(!api.checkValid(id))this.deleteId(id);}
    )
  }
  getQueue(){
    return Array.from(this.#queueList)
  }
  clearQueue(){
    this.#queueList.clear()
  }
}
