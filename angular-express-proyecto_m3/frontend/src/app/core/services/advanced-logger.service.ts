import { ConsoleLogger } from './console-logger.service';

export class AdvancedLogger extends ConsoleLogger {
  log(message: string) {
    super.log(`[Advanced] ${message}`);
  }
}