declare module '@apiverve/unicodeescape' {
  export interface unicodeescapeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface unicodeescapeResponse {
    status: string;
    error: string | null;
    data: UnicodeEscapeUnescapeData;
    code?: number;
  }


  interface UnicodeEscapeUnescapeData {
      action:         string;
      original:       string;
      escaped:        string;
      characterCount: number;
      unicodePoints:  UnicodePoint[];
  }
  
  interface UnicodePoint {
      char:      string;
      unicode:   string;
      codepoint: string;
  }

  export default class unicodeescapeWrapper {
    constructor(options: unicodeescapeOptions);

    execute(callback: (error: any, data: unicodeescapeResponse | null) => void): Promise<unicodeescapeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: unicodeescapeResponse | null) => void): Promise<unicodeescapeResponse>;
    execute(query?: Record<string, any>): Promise<unicodeescapeResponse>;
  }
}
