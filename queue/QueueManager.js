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
    this.runCheckQueue()
    const [id1,id2] = this.#myMatcherService.doMatching()
    if(id1 == null || id2 == null)throw new TypeError("cant Matching now.")
    AllQueueHandler.deleteId(id1)
    AllQueueHandler.deleteId(id2)
    return [id1,id2]
  }
}
