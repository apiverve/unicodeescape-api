using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.UnicodeEscapeUnescape
{
    /// <summary>
    /// Query options for the Unicode Escape/Unescape API
    /// </summary>
    public class UnicodeEscapeUnescapeQueryOptions
    {
        /// <summary>
        /// The text to escape
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// The action to perform
        /// </summary>
        [JsonProperty("action")]
        public string Action { get; set; }
    }
}
