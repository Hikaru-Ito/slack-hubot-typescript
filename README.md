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
Herokuの登録とCLI設定は済ませておく。
```
// Herokuアプリを作成
$ heroku create {アプリ名}

// 環境変数としてSlack Hubot AppのTokenをセット
$ heroku config:add HUBOT_SLACK_TOKEN={hubotのToken}

// Heroku側でビルドしたいので
$ heroku config:add NPM_CONFIG_PRODUCTION=false

// デプロイ
$ git push heroku master

// ログのStreamはこれで見ましょう
$ heroku logs --tail
```

## GitHub Actionsを使ってデプロイする
`.github/workflows`に設定している。

GitHubのSecretsに`HEROKU_API_KEY`をセットすれば、
masterにpushで自動デプロイされる。
