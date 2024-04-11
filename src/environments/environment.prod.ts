import { provideHttpClient, withFetch } from "@angular/common/http";

export const environment = {
    production: true,
    providers : [provideHttpClient(withFetch()),]
    // Add production-specific settings here
  };
  