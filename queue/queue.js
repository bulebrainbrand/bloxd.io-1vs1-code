const QueueListManager = class{
  #queueList

  constructor(){
    this.#queueList = []
  }
  
  addId(id){
    this.#queueList.push(id)
    this.check()
  }

  deleteId(deleteId){
    this.#queueList = this.#queueList.filter(id => id !== deleteId)
  }
  
  canMatching(){
    this.check()
    return this.#queueList.length >= 2
  }
  
  doMatching(){
    const [id1,id2,...afterList] = this.#queueList
    this.#queueList = afterList
    return [id1,id2]
  }
  
  check(){
    this.#queueList = this.#queueList.filter(id => api.checkValid(id))
  }
  
}
