/// <reference types="vite/client" />
import 'react-ga4'

declare module 'react-ga4' {
  // Custom Enum for Event Categories
  export enum EventCategory {
    USER_INTERACTION = 'User Interaction',
    PAGE_NAVIGATION = 'Page Navigation',
    FORM_SUBMISSION = 'Form Submission',
    // Add more categories as needed
  }

  // Custom interface for the event method
  interface CustomGaEvent {
    category: EventCategory // Only allow the enum here
    action: string
    label?: string
    value?: number
    nonInteraction?: boolean
    transport?: 'beacon' | 'xhr' | 'image'
  }

  // Override the event method to use the CustomGaEvent interface
  export function event(options: CustomGaEvent): void
}
