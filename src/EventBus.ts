class EventBus implements IEventBus {
  // Типизировать
  private subscriptions: any = {}
  private contexts: any = {}

  public on(eventName: string, callback: Function, context?: any) {
    if (!this.subscriptions[eventName]) {
      this.subscriptions[eventName] = [];
      this.contexts[eventName] = [];
    }

    this.subscriptions[eventName].push(callback);
    this.contexts[eventName].push(context);
  }

  off(eventName: string, callback: Function) {
    const subscriptions = this.subscriptions[eventName];
    const contexts = this.contexts[eventName];
    if (!subscriptions) { return; }
    const index = this.subscriptions[eventName].indexOf(callback, 0);
    if (index > -1) {
      subscriptions.splice(index, 1);
      contexts.splice(index, 1);
    }
    if (subscriptions.length === 0) {
      delete this.subscriptions[eventName];
      delete this.contexts[eventName];
    }
  }

  emit(eventName: string, e: any) {
    const subscriptions: Function[] = this.subscriptions[eventName];
    const contexts: any[] = this.contexts[eventName];
    if (!subscriptions) { return; }
    subscriptions.forEach((f: Function, index: number) => {
      const context = contexts[index];
      f.call(context, e);
    });
  }
}

interface IEventBus {
  on(eventName: string, callback: Function, context?: any): void
  off(eventName: string, callback: Function): void
  emit(eventName: string, e: any): void
}

export {
  EventBus,
  IEventBus
}
