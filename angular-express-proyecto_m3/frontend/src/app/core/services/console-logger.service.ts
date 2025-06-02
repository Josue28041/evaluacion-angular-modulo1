import { Logger } from '../interfaces/logger.interface';

export class ConsoleLogger implements Logger {
  log(message: string) {
    console.log('[Logger]', message);
  }
}