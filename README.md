# check-css-prop

> Check CSS Property availability.

## Install

```sh
npm install check-css-prop --save
```

## Usage

```js
import checkCssProp from 'check-css-prop';

checkCssProp('font-size')
// => fontSize

checkCssProp('object-fit')
// => webkitObjetFit
```

### result

If browser support the given `propName`, it will return the name in CamelCase.

If not, it will check for vendro prefix.