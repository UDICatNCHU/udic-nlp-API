# udic nlp API[![Build Status](https://travis-ci.org/UDICatNCHU/PTT_KCM_API.svg?branch=master)](https://travis-ci.org/UDICatNCHU/PTT_KCM_API)

# 中興大學普及資料與智慧運算實驗室所開發之自然語言web api
目前我們提供`4`種模式之字詞關聯查詢:

* 頻繁共現關聯 (Co-occurrence Relationship)：例如，輸入蔡英文，將會回傳一系列與`蔡英文`頻繁一起出現之字詞，如`總統、台灣、民主進步黨`等。
  

* 上下文情境相似關聯 (Similar Context Sharing Relationship)：例如，輸入`周杰倫`，將會回傳一系列相似詞，如`蔡依林、王力宏、張惠妹`等。

* 字詞概念推論 (Hyperonym-Hyponym Relationship)：例如，`五月天`是`樂團`，`香蕉`是`水果`，`周杰倫`是`歌手`。

* 句子情緒判斷 (Sentiment Analysis)：例如，`齊家治國平天下，小家給治了！國家更需要妳，加油!擇善固執莫在意全家滿意，至於她家謾駡攻許隨她去(正常情緒紓緩)，革命尚未成功期盼繼續努力` -> 正面情緒。

## Install

* `lang`：Supported Language Parameter
  * `zh`：中文
  * `en`：English `Still working on it`
  * `th`：th `Still working on it`

1. Install Docker and Docker-compose:
	1. Docker:`curl -fsSL get.docker.com -o get-docker.sh; sh get-docker.sh`
	2. [How to install docker-compose](https://docs.docker.com/compose/install/#install-compose)
2. `git clone https://github.com/udicatnchu/udic-nlp-api`
3. `cd udic-nlp-api`
4. `docker-compose up -d`
5. `docker exec -it udic-nlp-api_web_1 bash`
6. Insert WikiDump into MySQL:`nohup download_wikisql.sh <lang> &`
7. Build Model:`nohup bash -c 'time bash install.sh <lang>' &`
    * Env: 109G RAM, 32 cores
    * Execute time:
    ```bash
      real  1628m19.225s
      user  11524m41.396s
      sys 362m18.024s
    ```


## API usage and Results

#### parameter

* `keyword`：the word you want to query.
* `lang`：Supported Language Parameter
  * `zh`：中文
  * `en`：English `Still working on it`
  * `th`：th `Still working on it`
* `num`(optional)：The amount of result you want to get (Default：`10`)
* `kcm`, `kem`：Used by `kcem`, different combination of kcm and kem may have entirely different output. You can customarily adjust these two parameter as you wish.

#### url pattern

1. Keyword Co-Occurence API(Co-Occurrence Relationship):
    * [api](https://github.com/UDICatNCHU/new_kcm#api)

2. Pointwise mutual information API:
    * [api](https://github.com/udicatnchu/pmi-of-kcm#api)

3. Word2Vec Online API:
    * [api](https://github.com/UDICatNCHU/kem/#api)

4. Hyperonym-Hyponym Relationship API:
    * [api](https://github.com/UDICatNCHU/kcem/#api)

5. TF-IDF API:
    * [api](https://github.com/udicatnchu/tf-idf#api)

6. 中文情緒分類器API:
    * [api](https://github.com/UDICatNCHU/swingerapp#api)

7. Behavior 2 Text API:
    * coming soon

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