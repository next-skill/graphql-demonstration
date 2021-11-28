# apollo-server

## デモンストレーション手順

### index.js

サーバを起動

```console
node index.js
```

リクエスト

https://studio.apollographql.com/sandbox

```
query GetBooks {
  books {
    title
    author
  }
}
```

参考: https://www.apollographql.com/docs/apollo-server/getting-started/

### index2.js

サーバを起動

```console
node index2.js
```

リクエスト

```
query Sample {
  books {
    title
    author
  }
  programmingLanguages {
    name
  }
}
```
