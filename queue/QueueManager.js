const QueueManager = class{
  #myQueueListOperator
  #myMatcherService
  constructor(queueListOperator,matcherService){
    this.#myQueueListOperator = queueListOperator
    this.#myMatcherService = matcherService
  }
  addId(id){
    this.#myQueueListOperator.addId(id)
  }
  deleteId(id){
    this.#myQueueListOperator.deleteId(id)
  }
  clearQueue(){
    this.#myQueueListOperator.clearQueue()
  }
  runCheckQueue(){
    this.#myQueueListOperator.checkQueue()
  }
  canMatching(){
    return this.#myMatcherService.canMatching()
  }
  doMatching(){
    const [id1,id2] = this.#myMatcherService.doMatching()
    if(id2 == null || !api.checkValid(id2))throw new TypeError("cant Matching!")
    AllQueueHandler.deleteId(id1)
    AllQueueHandler.deleteId(id2)
    return [id1,id2]
  }
}
