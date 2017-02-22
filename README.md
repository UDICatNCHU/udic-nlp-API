# udic nlp API[![Build Status](https://travis-ci.org/UDICatNCHU/PTT_KCM_API.svg?branch=master)](https://travis-ci.org/UDICatNCHU/PTT_KCM_API)

# 中興大學普及資料與智慧運算實驗室所開發之字詞關聯查詢web api
目前我們提供三種模式之字詞關聯查詢

* 頻繁共現關聯 (Co-occurrence Relationship)
  例如，輸入蔡英文，將會回傳一系列與蔡英文頻繁一起出現之字詞，如總統、台灣、民主進步黨等。
  

* 上下文情境相似關聯 (Similar Context Sharing Relationship)
  例如，輸入周杰倫，將會回傳一系列相似詞，如蔡依林、王力宏、張惠妹等。

* 字詞概念推論 (Hyperonym-Hyponym Relationship)
  例如，"五月天"是"樂團"，"香蕉"是"水果"，"周杰倫"是"歌手"。

目前提供三種語言版本
* 中文 Chinese
* 英文 English
* 泰文 Thai


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
  此API提供：取得輸入字詞之頻繁共現詞 (Co-Occurrence Relationship)
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
 此API提供：取得輸入字詞之相關`同位詞`(Share Similar Context Relationship)。
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
 此API提供：字詞(Term)與概念(Concept)之間”is-a”對應關係(Hyperonym-Hyponym Relationship)推論。
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

## Built With

* Django 1.10.2
* python3.5

## Versioning

For the versions available, see the [tags on this repository](https://github.com/david30907d/KCM/releases).

## Contributors

* **范耀中** [教授](http://web.nchu.edu.tw/~yfan/)
* **黃思穎**
* **陳聖軒**
* **鄭銘毅**
* **張泰瑋** [david](https://github.com/david30907d)

## License

This project is licensed under the **MIT** License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

感謝KCM的所有作者 Thanks all Contributors of KCM
