import { provideHttpClient, withFetch } from "@angular/common/http";

export const environment = {
    production: false,
    providers : [provideHttpClient(withFetch()),]
  };
  