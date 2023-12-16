import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ng.alpha',
  appName: 'ng-alpha',
  webDir: 'dist/ng-alpha',
  server: {
    androidScheme: 'https',
  },
};

export default config;
