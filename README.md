# udic nlp API[![Build Status](https://travis-ci.org/UDICatNCHU/PTT_KCM_API.svg?branch=master)](https://travis-ci.org/UDICatNCHU/PTT_KCM_API)

# 中興大學普及資料與智慧運算實驗室所開發之自然語言web api
目前我們提供`4`種模式之字詞關聯查詢:

* 頻繁共現關聯 (Co-occurrence Relationship)：例如，輸入蔡英文，將會回傳一系列與`蔡英文`頻繁一起出現之字詞，如`總統、台灣、民主進步黨`等。
  

* 上下文情境相似關聯 (Similar Context Sharing Relationship)：例如，輸入`周杰倫`，將會回傳一系列相似詞，如`蔡依林、王力宏、張惠妹`等。

* 字詞概念推論 (Hyperonym-Hyponym Relationship)：例如，`五月天`是`樂團`，`香蕉`是`水果`，`周杰倫`是`歌手`。

* 句子情緒判斷 (Sentiment Analysis)：例如，`齊家治國平天下，小家給治了！國家更需要妳，加油!擇善固執莫在意全家滿意，至於她家謾駡攻許隨她去(正常情緒紓緩)，革命尚未成功期盼繼續努力` -> 正面情緒。

目前提供1種語言版本
* 中文 Chinese

## Install

1. `git clone https://github.com/udicatnchu/udic-nlp-api`
2. `cd udic-nlp-api`
3. `docker-comose up -d`
    * [How to install docker-compose](https://docs.docker.com/compose/install/#install-compose)
4. `docker exec -it <Container_of_Web> bash`
5. `nohup bash -c 'time bash install.sh zh' &`
    * Env: 109G RAM, 32 cores
    * Execute time:
    ```
      real  1628m19.225s
      user  11524m41.396s
      sys 362m18.024s
    ```


## API usage and Results

API使用方式（下面所寫的是api的URL pattern）  
(Usage of API (pattern written below is URL pattern))：

#### parameter

* `keyword`：the word you want to query.
* `lang`：Language you use. below are available language version：
  * `cht`：中文
  * `eng`：English `Still working on it`
  * `th`：th `Still working on it`
* `num`(optional)：The amount of result you want to get (Default：`10`)
* `kcm`, `kem`：Used by `kcem`, different combination of kcm and kem may have entirely different output. You can customarily adjust these two parameter as you wish.

#### url pattern

1. *`/kcm/?keyword=<>&lang=<>&num=<>`*  
  此API提供：取得輸入字詞之頻繁共現詞 (Co-Occurrence Relationship)
  * 範例 (Example)：`140.120.13.244:10000/kcm/?keyword=中興大學&lang=cht`

  ```
  [
    ["大學",58],
    ["臺灣",52],
    ["畢業",36],
    ["教授",33],
    ["法商學院",22],
    ["學生",19],
    ["研究所",19],
    ["農學院",19],
    ["臺灣省立",16],
    ["國立中興大學",15]
  ]
  ```

2. *`/kem/?keyword=<>&lang=<>&num=<>`*  
 此API提供：取得輸入字詞之相關`同位詞`(Share Similar Context Relationship)。
  * 範例 (Example)：`140.120.13.244:10000/kem/?keyword=美國隊長&lang=cht`

  ```
  {
    "X戰警": "0.6915161609649658",
    "俠": "0.6872922778129578",
    "復仇者": "0.6902425289154053",
    "復仇者聯盟": "0.7779505252838135",
    "神奇四俠": "0.7140904664993286",
    "蜘蛛人": "0.7551226615905762",
    "蜘蛛俠": "0.7653720378875732",
    "蝙蝠俠": "0.7000312805175781",
    "蟻人": "0.7080279588699341",
    "變形金剛": "0.7029522657394409"
  }
  ```

3. *`/kcem/?keyword=<>&lang=<>&num=<>`*  
 此API提供：字詞(Term)與概念(Concept)之間”is-a”對應關係(Hyperonym-Hyponym Relationship)推論。
  * 範例 (Example)：`140.120.13.244:10000/kcem/?keyword=周杰倫&lang=cht&num=10&kcm=5&kem=100`

  ```
  [
    ["歌手","0.5800000000000003"],
    ["專輯","0.5500000000000003"],
    ["香港","0.3900000000000002"],
    ["歌曲","0.34000000000000014"],
    ["臺灣","0.34000000000000014"],
    ["演唱會",0.17],
    ["音樂",0.17],
    ["電影",0.15],
    ["主演",0.08],
    ["節目",0.08]
  ]
  ```

4. *`/kcem/?keyword=<>&lang=<>&num=<>`*  
 此API提供：字詞(Term)與概念(Concept)之間”is-a”對應關係(Hyperonym-Hyponym Relationship)推論。
  * 範例 (Example)：`140.120.13.244:10000/kcem/?keyword=周杰倫&lang=cht&num=10&kcm=5&kem=100`

  ```
  [
    ["歌手","0.5800000000000003"],
    ["專輯","0.5500000000000003"],
    ["香港","0.3900000000000002"],
    ["歌曲","0.34000000000000014"],
    ["臺灣","0.34000000000000014"],
    ["演唱會",0.17],
    ["音樂",0.17],
    ["電影",0.15],
    ["主演",0.08],
    ["節目",0.08]
  ]
  ```
5. *`/swinger/bulkswing`*  
 需要對此API做POST：下方有範例code。
  * 範例 (Example)：`http://140.120.13.244:10000/swinger/bulkswing`

  ```
  >>> import json, requests
  >>> requests.post('http://140.120.13.244:10000/swinger/bulkswing', data={'sentence':json.dumps(
    [
      '齊家治國平天下，小家給治了！國家更需要妳，加油!',
      '擇善固執莫在意全家滿意，至於她家謾駡攻許隨她去(正常情緒紓緩)，革命未成功期盼繼續努力'
      ...
    ]
  )}).json()
  
  # 結果為:{'result': ['pos', 'pos'...]}
  ```

## To Do

1. MySQL use test database, not sure if there's any security issue:
    * [issue1](https://github.com/UDICatNCHU/udic-nlp-API/blob/master/docker-compose.yml#L14)
    * [issue2](https://github.com/UDICatNCHU/udic-nlp-API/blob/master/udic_nlp_API/settings.py#L91)
2. Maybe we need to use React router, i implement router in stupid way:
    * [issue3](https://github.com/UDICatNCHU/udic-nlp-API/blob/master/udic_nlp_API/settings.py#L152)
3. After building kcm model, the api of kcm didn't load the newly build data in it. Need to restart docker-compuse manually, maybe it's a MongoDB issue ?

## Built With

* Django 1.10.2
* python3.5

## Contributors

* **范耀中** [教授](http://web.nchu.edu.tw/~yfan/)
* **黃思穎**
* **陳聖軒**
* **鄭銘毅**
* **張泰瑋** [david](https://github.com/david30907d)

## License

This package use `GPL3.0` License.

`gzip -d wiki.sql.gz`

`psql -h postgres -U postgres`

## DB part

### show dbs
`\list`

### show tables
`\dt`

### To switch databases:

`\connect database_name`

### insert Data using dump s ql
1. `su - postgres`
1. `createuser testuser`
1. `sudo -u postgres createdb <dbname>`
1. create db
2. insert:`psql databasename < data_base_dump`

### Mysql

#### imoprt 

1. `apt install -y opencc`
2. `gunzip *.sql.gz`
<!-- `opencc -i zhwiki-latest-category.sql -o zhwiki-latest-category.sql.trad` -->
3. `mysql -uroot -e "create database category"`
    * `mysql < zhwiki-latest-category.sql`
4. `mysql -uroot -e "create database categorylinks"`
    * `mysql categorylinks < zhwiki-latest-categorylinks.sql`