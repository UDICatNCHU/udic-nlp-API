# KCM_web_api[![Build Status](https://travis-ci.org/UDICatNCHU/PTT_KCM_API.svg?branch=master)](https://travis-ci.org/UDICatNCHU/PTT_KCM_API)

網頁版的KCM api，可以直接呼叫網址得到結果，並且會cache查詢過的結果  
目前支援：
* 中文版
* 英文版
* 泰文版
KCM API of web version, you can call the url directly and will cache the result in server.  
Now three languages are available:
* Chinese
* English
* Thai


### API usage and Results

API使用方式（下面所寫的是api的URL pattern）  
(Usage of API (pattern written below is URL pattern))：

1. 取得關鍵字的相關字詞 (Get correlation terms of a keyword, put the KeyWord you want to query after `/?issue=`)： `/api/kcmApi/?keyword={主題名稱}&lang={語言參數，有cht、eng、thai可以選}&num={回傳的單字數量，請輸入數字}`
  * 查詢網址 (query url)：http://140.120.13.243:32785/api/kcmApi/?keyword=
  * 範例 (Example)：`http://140.120.13.243:32785/api/kcmApi/?keyword=中興大學&lang=cht&num=10`
  * result：
  ```
  {
    "大學": 164,
    "名": 93,
    "於": 88,
    "後": 86,
    "教授": 81,
    "臺灣": 72,
    "畢業": 66,
    "學生": 55,
    "法商學院": 55,
    "農學院": 50
  }
  ```

2. 取得關鍵字的相關字詞 (Get correlation terms of a keyword, put the KeyWord you want to query after `/?issue=`)： `/api/kemApi/?keyword={主題名稱}&lang={語言參數，有cht、eng、thai可以選}&num={回傳的單字數量，請輸入數字}` (num的參數不加預設會回傳10個，建議使用這種模式因為有預先建立cache，否則真的要等很久) (num parameter is not recommended to add, cause it takes time to query model. If num parameter is absent, will use num=10 in default.)
  * 查詢網址 (query url)：http://140.120.13.243:32785/api/kemApi/?keyword=
  * 範例 (Example)：`http://140.120.13.243:32785/api/kemApi/?keyword=美國隊長&lang=cht&num=10`
  * result：
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
