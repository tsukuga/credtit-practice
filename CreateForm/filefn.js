
export default class Filefunc {


  Getdata(e, callback) {

    // ファイルクラスからreaderインスタンスを生成
    let reader = new FileReader();

    // アップロードされたファイルの情報を取得
    let fileData = e.target.files[0];

    // ファイルデータをテキストに変換
    let result = reader.readAsText(fileData);



    reader.onload = () => {

      // 改行で配列分解
      let data = reader.result.split("\n");
      let dataArr = [];

      // ","で配列分解   
      for (let i = 0; i < data.length; i++) {
        dataArr[i] = data[i].split("\",\"");
      };

      // 成績Dを削除 
      for (let t = 0; t < dataArr.length; t++) {

        if (dataArr[t][7] == "D") {
          dataArr.splice(t, 1);
          t--;
        };

      };

      // データの成形
      dataArr.splice(0, 1);
      dataArr.splice(dataArr.length - 1, 1);



      // 必要項目の抽出   
      let score = dataArr.map(([a, b, number, name, credit, f, g, grade, i, j, k]) => ({
        ["科目番号"]: number,
        ["科目名"]: name,
        ["単位数"]: credit,
        ["成績"]: grade
      }))

      callback(score);

    }

  }
}