# byteof
Calculate the approximate memory usage of javascript object in bytes.

## install

To use this module directly , install it:

```bash
npm install byteof
```

## usage

```js
const byteof=require("../index")
const object={
    "n":1,
    "b":true,
    "s":"1234567890"
}        
const totalBytes=byteof(object)
```

### Contributing

* Fork it!
* Create your feature branch: `git checkout -b my-new-feature`
* Commit your changes: `git commit -am 'Add some feature'`
* Push to the branch: `git push origin my-new-feature`
* Submit a pull request


### License

Copyright (c) 2018 Min Li

This program is free software: you can redistribute it and/or modify it under the terms of the Apache License Version 2.0 as published by Apache Software Foundation.