# slack-hubot-typescript

hubotをTypeScriptでかけるようにしました。
Herokuで動きます。

## scriptの追加
`/src/*.ts`に書いて、
`npm run build`してください。

## ローカルでテストする
環境変数`HUBOT_SLACK_TOKEN`にHubot Appのトークンをセットして以下のコマンドで起動
```
HUBOT_SLACK_TOKEN=xoxb-xxxx ./bin/hubot --adapter slack
```

## Herokuで運用する
```
// Herokuアプリを作成
$ heroku create {アプリ名}

// 環境変数としてSlack Hubot AppのTokenをセット
$ heroku config:add HUBOT_SLACK_TOKEN={hubotのToken}

// デプロイ
$ git push heroku master
```
