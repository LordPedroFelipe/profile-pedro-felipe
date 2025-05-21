export class Apod {
    date!: string;
    explanation!: string;
    hdurl?: string;
    media_type!: 'image' | 'video' | 'other';
    service_version!: string;
    title!: string;
    url!: string;
    copyright?: string;
  }
  