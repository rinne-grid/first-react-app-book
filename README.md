### モジュールインストール

```sh
$ yarn
```

### .env.local.example をコピーし、.env.local にリネーム

- YOUR_API_KEY に、weatherapi で取得した API キーを設定

```.env
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
REACT_APP_WEATHER_API_ENDPOINT=https://api.weatherapi.com/v1/current.json
```

### アプリ実行

```sh
$ yarn start
```
