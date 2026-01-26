const tasks = Array.from({ length: 10 }, (_, i) => {
  return new Promise((res) =>
    setTimeout(() => res(i), i * Math.random() * 1000),
  );
});

class RateLimitedTaskScheduler {
  private concurrencyLimit: number;
  private activeCount: number;
  private taskQueue: Array<() => Promise<any>>;

  constructor(concurrencyLimit: number) {
    this.concurrencyLimit = concurrencyLimit;
    this.activeCount = 0;
    this.taskQueue = [];
  }

  private async runNext() {
    if (
      this.activeCount >= this.concurrencyLimit ||
      this.taskQueue.length === 0
    ) {
      return;
    }

    const task = this.taskQueue.shift();
    if (task) {
      this.activeCount++;
      try {
        await task();
      } finally {
        this.activeCount--;
        this.runNext();
      }
    }
  }

  public addTask(task: () => Promise<any>) {
    this.taskQueue.push(task);
    this.runNext();
  }
}

const scheduler = new RateLimitedTaskScheduler(3);

tasks.forEach((task, index) => {
  scheduler.addTask(async () => {
    const result = await task;
    console.log(`Task ${index} completed with result: ${result}`);
  });
});
