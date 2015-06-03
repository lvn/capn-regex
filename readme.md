# capn-regex
### by [Elvin Yung](https://github.com/elvinyung)
## Regex capture Nth group

### Quickstart
```JavaScript
var capn = require('capn-regex');

capn('{{x.x}}{{y}}{{}}', /\{{2}([^\}]*)\}{2}/g, 1);  // ["x.x", "y", ""]
```
