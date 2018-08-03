# babel-plugin-remove-jsx-attribute

remove the react element attribute in jsx

```
npm install babel-plugin-remove-jsx-attribute
```

can use like:
```
{
  "presets": ["react"],
  "plugins": [
    [
      "remove-jsx-attribute",
      { "attr": "data-test" }
    ]
  ]
}
```
