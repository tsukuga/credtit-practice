export default class core {

  jugement() {

    // 卒業要件をループさせる
    for (let i = 0; i < Youken.length - 2; i++) {
      
      // 使用中の卒業要件
      presentYouken = Youken[i];

      // 必修科目でなければ、次のグループへ
      if (isHissyuukamoku(presentYouken.category1_min)) return;

      //  成績データをループさせる
      score_loop: for (let j = 0; j < score.length; j++) {
      
      // 使用中の成績データ
      presetntScore = score[j];

        // グループの合計単位数が卒業要件の取得単位数の下限を満たしたか判定
        let isFull = presentYouken.category1_min <= presentYouken.category1_sum;

        // 満たしていた場合成績ループを終了
        if (isFull) break;

        // 要件の除外項目に該当するかの判定
        if (isRemove(presentYouken.remove, score[j])) {
          continue score_loop;
        }

        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
        // // 要件の制限要素に該当するかの判定
        // if(isRestriction(Youken[i].restriction,score[j])){
        //   continue score_loop;
        // }
        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

        // 成績が卒業要件に当てはまるかの検証
        let isMaching = Match(presetntScore,presentYouken.name,presentYouken.number);

        if(isMaching){
          MakeResult();
          break;
        }
      }
    }
  }

  // 除外判定メソッド
  isRemove(remove, score) {

    // 除外要素が要件にない場合即リターン
    if (remove == "-") return false;

    // 除外要素があった場合はturuを返す
    for (let k = 0; k < remove.length; k++) {

      remove_exp = new RegExp('(^)' + remove[k]);

      let isRemovement = remove_exp.test(score.number) || remove_exp[k].test(score.name)

      if (isRemovement) return ture;

    }

  }

  Match(score,number,name) {

    // 科目番号のマッチング 
    for (let k = 0; k < number.length; k++){

     number_exp = new RegExp('(^)' + number[k]);
     let isMatch = number_exp.test(score.number);
     
     if(isMatch) return ture;
    }

    // 科目名のマッチング
    for (let k = 0; k < name.length; k++){
    
     name_exp = new RegExp('(^)' + name[k]);
     let isMatch = name_exp.test(score.name);
     
     if(isMatch) return ture;
    }
    
    if (e) {

      Youken[i].group_sum = ++parseFloat(score[j].credit);
      category[M_category[i].No].category_sum = ++parseFloat(score[j].credit);

      result[count] = [page[i].class1, page[i].class2, page[i].class3, page[i].about,
      score[j].number, score[j].name, score[j].credit];

    }
}
  MakeResult(Youken,score){

      Youken.group_sum = ++parseFloat(score.credit);
      category[M_category[i].No].category_sum = ++parseFloat(score.credit);

      result[count] = [page[i].class1, page[i].class2, page[i].class3, page[i].about,
      score[j].number, score[j].name, score[j].credit];

    }

}




