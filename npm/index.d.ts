declare module '@apiverve/unicodeescape' {
  export interface unicodeescapeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface unicodeescapeResponse {
    status: string;
    error: string | null;
    data: UnicodeEscape/UnescapeData;
    code?: number;
  }


  interface UnicodeEscapeUnescapeData {
      action:         string;
      original:       string;
      result:         string;
      characterCount: number;
      escapedCount:   number;
  }

  export default class unicodeescapeWrapper {
    constructor(options: unicodeescapeOptions);

    execute(callback: (error: any, data: unicodeescapeResponse | null) => void): Promise<unicodeescapeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: unicodeescapeResponse | null) => void): Promise<unicodeescapeResponse>;
    execute(query?: Record<string, any>): Promise<unicodeescapeResponse>;
  }
}
