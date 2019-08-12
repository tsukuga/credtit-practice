export default class Core {

  core(Youken, score, category) {

    // 結果を入れるメソッド
    let result;
    let count = 0;

    // 卒業要件をループさせる
    for (let i = 0; i < Youken.length - 2; i++) {

      // 使用中の卒業要件
      let presentYouken = Youken[i];


      // 必修科目でなければ、次のグループへ
      if (this.isHissyuukamoku(presentYouken.category1_min)) return;

      //  成績データをループさせる
      score_loop: for (let j = 0; j < score.length; j++) {

        // 使用中の成績データ
       let presentScore = score[j];

        // グループの合計単位数が卒業要件の取得単位数の下限を満たしたか判定
        let isFull = presentYouken.category1_min <= presentYouken.category1_sum;
        // 満たしていた場合成績ループを終了
        if (isFull) break;

        // 要件の除外項目に該当するかの判定
        if (this.isRemove(presentYouken.remove, presentScore)) {
          continue score_loop;
        }

        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
        // // 要件の制限要素に該当するかの判定
        // if(isRestriction(Youken[i].restriction,score[j])){
        //   continue score_loop;
        // }
        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

        // 成績が卒業要件に当てはまるかの検証
        let isMaching = this.Match(presentScore, presentYouken.name, presentYouken.number);
        if (isMaching) {

          // 一致した場合その成績をresultに格納
          MakeResult(presentYouken, presentScore, category, result);

          //判定した成績を削除
          score.splice(j, 1);
          j--;

          break;

        }
      }
    }

    // 卒業要件をループさせる
    for (let i = 0; i < Youken.length - 2; i++) {

      // 使用中の卒業要件
      let presentYouken = Youken[i];


      //  成績データをループさせる
      score_loop: for (let j = 0; j < score.length; j++) {

        // 使用中の成績データ
        presentScore = score[j];
        presentCategory = category[presentYouken.No];

        // カテゴリーの上限判定
        if (presentCategory.category1_sum >= presentYouken.category1_max) {
          break;
        };
        // グループの上限判定
        if (presentYouken.group_sum >= presentYouken.credit_max) {
          break;
        }

        // 要件の除外項目に該当するかの判定
        if (isRemove(presentYouken.remove, score)) {
          continue score_loop;
        }

        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
        // // 要件の制限要素に該当するかの判定
        // if(isRestriction(Youken[i].restriction,score[j])){
        //   continue score_loop;
        // }
        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

        // 成績が卒業要件に当てはまるかの検証
        let isMaching = Match(presentScore, presentYouken.name, presentYouken.number);
        if (isMaching) {

          // 一致した場合その成績をresultに格納
          MakeResult(presentYouken, presentScore, category, result);

          //判定した成績を削除
          score.splice(j, 1);
          j--;

          break;

        }
      }
    }
    
    result = 1;
    return result;

  }

  // 必修科目判定メソッド
  isHissyuukamoku(e){
    if(e<=0) return true;
  }

  // 除外判定メソッド
  isRemove(remove, score) {

    // 除外要素が要件にない場合即リターン
    if (remove == "-") return false;

    // 除外要素があった場合はturuを返す
    for (let k = 0; k < remove.length; k++) {

      let remove_exp = new RegExp('(^)' + remove[k]);

      let isRemovement = (remove_exp.test(score.number) || remove_exp.test(score.name))

      if (isRemovement) return ture;

    }

  }

  Match(score, number, name) {

    // 科目番号のマッチング 
    for (let k = 0; k < number.length; k++) {

      let number_exp = new RegExp('(^)' + number[k]);
      let isMatch = number_exp.test(score.科目番号);

      if (isMatch) return true;
    }

    // 科目名のマッチング
    for (let k = 0; k < name.length; k++) {

      let name_exp = new RegExp('(^)' + name[k]);
      let isMatch = name_exp.test(score.科目名);

      if (isMatch) return true;
    }

  }

  MakeResult(Youken, score, category, result, count) {

    Youken.group_sum = ++parseFloat(score.単位数);
    category[Youken.No].category1_sum = ++parseFloat(score.単位数);

    result[count] = Youken.category1, Youken.category2, Youken.category3, Youken.about, score.科目番号, score.科目名, score.単位数;

    count++;

  }

}




