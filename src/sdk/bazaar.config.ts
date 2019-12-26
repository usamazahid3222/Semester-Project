export class BazaarConfig {
    private static path = 'http://localhost:3000';

    public static getPath(): string {
      return BazaarConfig.path;
    }
  }
