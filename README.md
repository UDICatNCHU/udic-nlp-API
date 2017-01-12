# udic nlp API[![Build Status](https://travis-ci.org/UDICatNCHU/PTT_KCM_API.svg?branch=master)](https://travis-ci.org/UDICatNCHU/PTT_KCM_API)


udic nlp API of web version, you can call the url directly and will cache the result in server.  
Now three languages are available:
* Chinese
* English
* Thai


### API usage and Results

API使用方式（下面所寫的是api的URL pattern）  
(Usage of API (pattern written below is URL pattern))：

##### parameter

* `keyword`：the word you want to query.
* `lang`：Language you use. below are available language version：
  * `cht`：中文
  * `eng`：English `Still working on it`
  * `thai`：Thai `Still working on it`
* `num`(optional)：The amount of result you want to get (Default：`10`)
* `kcm`, `kem`：Used by `kcem`, you can customarily adjust these two parameter which will get different `kcem` performance.

##### url pattern

1. *`/api/kcm/?keyword=<>&lang=<>&num=<>`*  
  取得關鍵字的`相關字詞` (Get `correlation terms` of a keyword)
  * 範例 (Example)：`http://api.udic.cs.nchu.edu.tw/api/kcm/?keyword=中興大學&lang=cht`

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

2. *`/api/kem/?keyword=<>&lang=<>&num=<>`*  
取得關鍵字的`同義字` (Get `synonym` by keyword)
  * 範例 (Example)：`http://api.udic.cs.nchu.edu.tw/api/kem/?keyword=美國隊長&lang=cht`

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

3. *`/api/kcem/?keyword=<>&lang=<>&num=<>`*  
取得關鍵字的`實體間之從屬關聯` (Get `is-a relationship` of a keyword)
  * 範例 (Example)：`http://api.udic.cs.nchu.edu.tw/api/kcem/?keyword=周杰倫&lang=cht&num=10&kcm=5&kem=100`

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

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

1. OS：Ubuntu / OSX would be nice
2. environment：need python3 `sudo apt-get update; sudo apt-get install; python3 python3-dev`

### Installing

There are two choice：

* Install By Git：
  1. 下載 (Download this project)：`git clone https://github.com/UDICatNCHU/KCM_web_api.git`
  2. 使用虛擬環境 (Use virtualenv is recommended)：
    1. 建立虛擬環境，取名叫作venv：`virtualenv venv`
    2. 啟動方法 (How to activate virtualenv)
      1. for Linux：`. venv/bin/activate`
      2. for Windows：`venv\Scripts\activate`
  3. 安裝 (Install)：`make install`
* Install By Docker：
  1. 此指令必須在有Dockerfile的目錄下執行 (You can only run this command in directory which has Dockerfile)：`sudo docker build -t kcm .`

## Running & Testing

## Run

Still has two choice to Run， it depends on which installed method you used：

* By Git：
  1. 先建立KCM model, lang後面請接你要建立的語言模型 (You need to build KCM model first, you can pass `cht` or `eng` to lang parameter)：`cd KCM; nohup make init lang={cht、eng} &`
  2. 啟動django伺服器(Open django Server)：`./manage.py runserver`
  3. 開啟瀏覽器，檢查一下API是否正常產出json資料(Open your browser and test whether it works or not.)
* By Docker：
  1. 在背景執行container並且與host的port打通 ()：`sudo docker run -d -P --name={container name} kcm`
  2. 進入docker container建立KCM model(Enter docker container for building KCM model)：`sudo docker exec -it {container name} bash`
  3. 建立KCM model, lang後面請接你要建立的語言模型 (You need to build KCM model first, you can pass `cht` or `eng` to lang parameter)：`cd KCM; nohup make init lang={cht、eng} &`
  4. 退出container之後，開啟瀏覽器，檢查一下API是否正常產出json資料(Leave container and test whether it works or not.)


### Break down into end to end tests

### And coding style tests

目前沒有coding style tests...  
There's no coding style tests yet.

## Deployment

目前只是一般的 **django** 程式，使用gunicorn或者uwsgi佈署即可  
It's just a normal django project, use gunicorn or uwsgi can deploy.

## Built With

* Django 1.10.2
* python3.5

## Versioning

For the versions available, see the [tags on this repository](https://github.com/david30907d/KCM/releases).

## Contributors

* **張泰瑋** [david](https://github.com/david30907d)

## License

This project is licensed under the **MIT** License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

感謝KCM的所有作者 Thanks all Contributors of KCM
