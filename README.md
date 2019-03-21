# proto-note

m1z0r3 CTF 2018 : ProtoNote (Web 200pt)

## Usage

### Requirements

- Docker
- docker-compose

### Setup

```bash
$ bin/setup
```

### Start

```bash
$ docker-compose up
```

### Run npm-scripts

```bash
$ docker-compose run --rm node yarn run <script>

# Example
$ docker-compose run --rm node yarn run format
```

## Reference

- [チーム内CTFで作問した話 - プロトタイプ汚染攻撃編 - Qiita](https://qiita.com/koki-sato/items/7b78f9ec139230b95beb)
- [チーム内CTFで作問した話 - XSS編 - Qiita](https://qiita.com/koki-sato/items/86b02f72cb3d303caa78)
