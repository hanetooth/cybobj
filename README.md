# CybObj

Observable/Watchable javaScript objects.

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install cybobj --save

# For Yarn, use the command below.
yarn add cybobj
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/cybobj"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/cybobj"></script>

<script>
  // UMD module is exposed through the "CybObj" global variable.
  console.log(CybObj);
</script>
```

## Usage
### Unexpendable (default)
```javascript
const assimilatedObj = new CybObj({
  name: { // name of the property
    value: 'John Doe', // value of the property
    onChange: (key, oldaVal, newVal) => {
      // on change listener
      // will emit on: assimilatedObj['name'] = 'Dohn Joe'
      console.log('Changed!', key, oldVal, newVal);
    },
    onAccess: (key, val) => {
      // "Optional" on access listener
      // will emit on: const someVar = assimilatedObj['name']
      console.log('Accessed!', key, val);
    },
  },
});

assimilatedObj['name'] = "Tony Stark";
// log: 'Changed!', 'name', 'John Doe', 'Tony Stark'

const name = assimilatedObj['name'];
// log: 'Accessed!', 'name', 'Tony Stark'

```

### Expendable
Pass `true` as sencond parameter while instantiation object to be able to add new property with `add` .
#### Adding new property example.
```javascript
assimilatedObj.add(key, {
  value: value,
  onChange: (key, oldVal, newVal) => {},
  onAccess: (key, val) => {},
});
```

## API Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
