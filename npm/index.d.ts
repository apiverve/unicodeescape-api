declare module '@apiverve/unicodeescape' {
  export interface unicodeescapeOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface unicodeescapeResponse {
    status: string;
    error: string | null;
    data: UnicodeEscapeUnescapeData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface UnicodeEscapeUnescapeData {
      action:         null | string;
      original:       null | string;
      escaped:        null | string;
      characterCount: number | null;
      unicodePoints:  UnicodePoint[];
  }
  
  interface UnicodePoint {
      char:      null | string;
      unicode:   null | string;
      codepoint: null | string;
  }

  export default class unicodeescapeWrapper {
    constructor(options: unicodeescapeOptions);

    execute(callback: (error: any, data: unicodeescapeResponse | null) => void): Promise<unicodeescapeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: unicodeescapeResponse | null) => void): Promise<unicodeescapeResponse>;
    execute(query?: Record<string, any>): Promise<unicodeescapeResponse>;
  }
}
