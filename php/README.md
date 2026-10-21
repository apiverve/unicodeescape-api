# Unicode Escape/Unescape API - PHP Package

Unicode Escape/Unescape converts text into Unicode escape sequences or restores escaped strings back into readable characters. Send any string to get the transformed text and total character count.

## Installation

Install via Composer:

```bash
composer require apiverve/unicodeescape
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Unicodeescape\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text' => 'Hello World',
    'action' => 'escape'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Unicodeescape\Client;
use APIVerve\Unicodeescape\Exceptions\APIException;
use APIVerve\Unicodeescape\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'Hello World', 'action' => 'escape']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/unicodeescape?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/unicodeescape?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/unicodeescape?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
