# Unicode Escape/Unescape API - Ruby Gem

Unicode Escape/Unescape converts text into Unicode escape sequences or restores escaped strings back into readable characters. Send any string to get the transformed text and total character count.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_unicodeescape'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_unicodeescape
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_unicodeescape'

# Initialize the client
client = APIVerve::Unicodeescape::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  text: "Hello World",
  action: "escape"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "Hello World", action: "escape" })
  puts response["data"]
rescue APIVerve::Unicodeescape::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Unicodeescape::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Unicodeescape::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "action": "escape",
    "original": "Hello World",
    "escaped": "\\u0048\\u0065\\u006C\\u006C\\u006F\\u0020\\u0057\\u006F\\u0072\\u006C\\u0064",
    "character_count": 11,
    "unicode_points": [
      {
        "char": "H",
        "unicode": "\\u0048",
        "codepoint": "U+0048"
      },
      {
        "char": "e",
        "unicode": "\\u0065",
        "codepoint": "U+0065"
      },
      {
        "char": "l",
        "unicode": "\\u006C",
        "codepoint": "U+006C"
      },
      {
        "char": "l",
        "unicode": "\\u006C",
        "codepoint": "U+006C"
      },
      {
        "char": "o",
        "unicode": "\\u006F",
        "codepoint": "U+006F"
      },
      {
        "char": " ",
        "unicode": "\\u0020",
        "codepoint": "U+0020"
      },
      {
        "char": "W",
        "unicode": "\\u0057",
        "codepoint": "U+0057"
      },
      {
        "char": "o",
        "unicode": "\\u006F",
        "codepoint": "U+006F"
      },
      {
        "char": "r",
        "unicode": "\\u0072",
        "codepoint": "U+0072"
      },
      {
        "char": "l",
        "unicode": "\\u006C",
        "codepoint": "U+006C"
      },
      {
        "char": "d",
        "unicode": "\\u0064",
        "codepoint": "U+0064"
      }
    ]
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/unicodeescape?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/unicodeescape?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/unicodeescape?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
