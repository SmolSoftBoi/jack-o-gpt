declare module 'node-record-lpcm16' {
  interface RecordingOptions {
    sampleRate?: number;
    channels?: number;
    compress?: boolean;
    threshold?: number;
    thresholdStart?: any;
    thresholdEnd?: any;
    silence?: string;
    recorder?: string;
    endOnSilence?: boolean;
    audioType?: string;
  }

  class Recording {
    constructor(options?: RecordingOptions);
    start(): this;
    stop(): void;
    pause(): void;
    resume(): void;
    isPaused(): boolean;
    stream(): NodeJS.ReadableStream;
  }

  export function record(options?: RecordingOptions): Recording;
}
