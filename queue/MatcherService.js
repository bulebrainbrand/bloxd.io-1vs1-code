const MatcherService = class{
  #myQueueListOperator
  constructor(queueListOperator){
    this.#myQueueListOperator = queueListOperator
  }
  canMatching(){
    return this.#myQueueListOperator.getQueue().length >= 2
  }
  doMatching(){
    return this.#myQueueListOperator.getQueue().slice(0,2)
  }
}
