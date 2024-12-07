import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter, requestContextInterceptor } from '@analogjs/router';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { tuiIconResolverProvider } from '@taiga-ui/core';

function iconResolver(icon: string): string {
  return icon.includes('/') ? icon : `/${icon}.svg`;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideContent(withMarkdownRenderer()),
    provideFileRouter(),
    provideHttpClient(withFetch(), withInterceptors([requestContextInterceptor])),
    provideClientHydration(),
    provideAnimations(),
    tuiIconResolverProvider(iconResolver),
    NG_EVENT_PLUGINS,
  ],
};
