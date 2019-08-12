import React, { Component } from 'react';
import MakeCategory from './makecategory';
import Core from './core';

export default class One extends React.Component {

  constructor() {
    super();

    this.state = {
      score: [
          { '科目番号': "BC51541", '科目名': "English Discussion Seminar II", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC13124", '科目名': "国際学ゼミナールII", '単位数': " 3.0", '成績': "履修中" }
        , { '科目番号': "BC14908", '科目名': "卒業論文", '単位数': " 6.0", '成績': "履修中" }
        , { '科目番号': "BC11431", '科目名': "国際金融論", '単位数': " 2.0", '成績': "履修中" }
        , { '科目番号': "BC11851", '科目名': "安全保障論", '単位数': " 2.0", '成績': "履修中" }
        , { '科目番号': "1F20034", '科目名': "デジタルクリエイティブ基礎", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "2619293", '科目名': "スノースポーツ", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "BC11881", '科目名': "ジャパニーズ・エコノミー", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "BC13114", '科目名': "国際学ゼミナールI", '単位数': " 3.0", '成績': "A+" }
        , { '科目番号': "BC13311", '科目名': "独立論文", '単位数': " 3.0", '成績': "A" }
        , { '科目番号': "FH63051", '科目名': "会計学概論", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC11551", '科目名': "人類学特講", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "AB76351", '科目名': "観光地域論", '単位数': " 1.0", '成績': "C" }
        , { '科目番号': "BC11221", '科目名': "アジアの国際関係", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "BC11411", '科目名': "国際貿易論", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC11731", '科目名': "行政学I", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "BC11791", '科目名': "ヨーロッパ社会経済史", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "BC12131", '科目名': "北アフリカの経済と社会", '単位数': " 2.0", '成績': "A+" }
        , { '科目番号': "BC12561", '科目名': "宇宙開発", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "BC12751", '科目名': "都市計画の思想史", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC16011", '科目名': "Mathematical Economics", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "2213233", '科目名': "応用体育サッカー(秋)", '単位数': " 0.5", '成績': "A" }
        , { '科目番号': "3334082", '科目名': "ヨーロッパ文化圏の言語と文化IIBC(フランス語)", '単位数': " 1.0", '成績': "C" }
        , { '科目番号': "BC11201", '科目名': "国際通商論", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "BC11751", '科目名': "公共経済学", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC11801", '科目名': "現代社会論", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC11891", '科目名': "Comparative Economics", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC11981", '科目名': "経済数学", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC12031", '科目名': "統計科学", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC12431", '科目名': "科学技術史", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "BC12701", '科目名': "都市経済学", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC51081", '科目名': "マクロ経済学概論", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "2213223", '科目名': "応用体育サッカー(春)", '単位数': " 0.5", '成績': "A+" }
        , { '科目番号': "3331012", '科目名': "ヨーロッパ文化圏の言語と文化IIA(フランス語)", '単位数': " 0.5", '成績': "A" }
        , { '科目番号': "8070101", '科目名': "グローバルトレンズ・日本I", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "BB41061", '科目名': "現代経済史", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC11691", '科目名': "国際紛争論I", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC11821", '科目名': "スポーツ文化論", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC11971", '科目名': "基礎経済数学", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC12291", '科目名': "Social Anthropology(社会人類学)", '単位数': " 2.0", '成績': "A+" }
        , { '科目番号': "BC12444", '科目名': "Cプログラミング", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC12521", '科目名': "水環境論", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "FH32021", '科目名': "経営組織論", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "1226091", '科目名': "みんなで創ろう「つくばアクションプロジェクト」", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "1A10121", '科目名': "新時代を拓く研究の最前線II", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "1B17041", '科目名': "経済学入門II", '単位数': " 1.0", '成績': "C" }
        , { '科目番号': "1C24191", '科目名': "ストレスとうまくつき合おう", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "2123153", '科目名': "基礎体育ダンス(秋)", '単位数': " 0.5", '成績': "A" }
        , { '科目番号': "31FB012", '科目名': "異文化と英語II", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "31GB012", '科目名': "総合英語II", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "33CB212", '科目名': "フランス語基礎AII", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "33EB222", '科目名': "フランス語基礎BII", '単位数': " 1.0", '成績': "C" }
        , { '科目番号': "AA21721", '科目名': "グローバル人材養成講義XVIII", '単位数': " 1.5", '成績': "A" }
        , { '科目番号': "BC50021", '科目名': "国際学概論II", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "BC50041", '科目名': "国際学概論IV", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "BC51071", '科目名': "国際経済論", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "BC51091", '科目名': "グローバルコミュニケーション論", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC51141", '科目名': "情報メディア概論", '単位数': " 2.0", '成績': "B" }
        , { '科目番号': "BC51161", '科目名': "Media Politics", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "1105202", '科目名': "フレッシュマン・セミナー", '単位数': " 1.0", '成績': "P" }
        , { '科目番号': "1A10111", '科目名': "新時代を拓く研究の最前線I", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "1B01031", '科目名': "言語の万華鏡I", '単位数': " 1.0", '成績': "C" }
        , { '科目番号': "2133143", '科目名': "基礎体育ニュースポーツ(春)", '単位数': " 0.5", '成績': "A" }
        , { '科目番号': "31AB012", '科目名': "英語基礎I", '単位数': " 0.5", '成績': "A" }
        , { '科目番号': "31BB012", '科目名': "異文化と英語I", '単位数': " 0.5", '成績': "A" }
        , { '科目番号': "31CB012", '科目名': "総合英語I", '単位数': " 0.5", '成績': "B" }
        , { '科目番号': "33AB212", '科目名': "フランス語基礎AI", '単位数': " 0.5", '成績': "C" }
        , { '科目番号': "33BB222", '科目名': "フランス語基礎BI", '単位数': " 0.5", '成績': "B" }
        , { '科目番号': "6105101", '科目名': "情報(講義)", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "6205203", '科目名': "情報(実習)", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "BC50011", '科目名': "国際学概論I", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "BC50031", '科目名': "国際学概論III", '単位数': " 1.0", '成績': "A" }
        , { '科目番号': "BC50051", '科目名': "国際学概論V", '単位数': " 1.0", '成績': "B" }
        , { '科目番号': "BC51031", '科目名': "国際関係史序説", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "BC51061", '科目名': "初級ミクロ経済学", '単位数': " 2.0", '成績': "C" }
        , { '科目番号': "BC51111", '科目名': "数理科学I", '単位数': " 2.0", '成績': "A+" }
        , { '科目番号': "BC51124", '科目名': "数理科学II", '単位数': " 2.0", '成績': "A" }
        , { '科目番号': "BC51581", '科目名': "English Debate", '単位数': " 2.0", '成績': "B" }
      ],
      index: '単位数',
      value: '国際総合学類/国際開発学/2015'
    };
  }

  render() {
    
    // let Newcategory = new MakeCategory(this.state.data, this.state.value)
    // let sult = Newcategory.makeCategory();
    
    // let Youken = sult.Youken;
    // let category = sult.category;
    // let result;
    // let count = 0;

    // // 卒業要件をループさせる
    // for (let i = 0; i < Youken.length - 2; i++) {

    //   // 使用中の卒業要件
    //   let presentYouken = Youken[i];


    //   // 必修科目でなければ、次のグループへ
    //   if (this.isHissyuukamoku(presentYouken.category1_min)) return;

    //   //  成績データをループさせる
    //   score_loop: for (let j = 0; j < score.length; j++) {

    //     // 使用中の成績データ
    //    let presentScore = score[j];

    //     // グループの合計単位数が卒業要件の取得単位数の下限を満たしたか判定
    //     let isFull = presentYouken.category1_min <= presentYouken.category1_sum;
    //     // 満たしていた場合成績ループを終了
    //     if (isFull) break;

    //     // 要件の除外項目に該当するかの判定
    //     if (this.isRemove(presentYouken.remove, presentScore)) {
    //       continue score_loop;
    //     }

    //     // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    //     // // 要件の制限要素に該当するかの判定
    //     // if(isRestriction(Youken[i].restriction,score[j])){
    //     //   continue score_loop;
    //     // }
    //     // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    //     // 成績が卒業要件に当てはまるかの検証
    //     let isMaching = this.Match(presentScore, presentYouken.name, presentYouken.number);
    //     if (isMaching) {

    //       // 一致した場合その成績をresultに格納
    //       MakeResult(presentYouken, presentScore, category, result);

    //       //判定した成績を削除
    //       score.splice(j, 1);
    //       j--;

    //       break;

    //     }
    //   }
    // }

    // // 卒業要件をループさせる
    // for (let i = 0; i < Youken.length - 2; i++) {

    //   // 使用中の卒業要件
    //   let presentYouken = Youken[i];


    //   //  成績データをループさせる
    //   score_loop: for (let j = 0; j < score.length; j++) {

    //     // 使用中の成績データ
    //     presentScore = score[j];
    //     presentCategory = category[presentYouken.No];

    //     // カテゴリーの上限判定
    //     if (presentCategory.category1_sum >= presentYouken.category1_max) {
    //       break;
    //     };
    //     // グループの上限判定
    //     if (presentYouken.group_sum >= presentYouken.credit_max) {
    //       break;
    //     }

    //     // 要件の除外項目に該当するかの判定
    //     if (isRemove(presentYouken.remove, score)) {
    //       continue score_loop;
    //     }

    //     // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    //     // // 要件の制限要素に該当するかの判定
    //     // if(isRestriction(Youken[i].restriction,score[j])){
    //     //   continue score_loop;
    //     // }
    //     // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    //     // 成績が卒業要件に当てはまるかの検証
    //     let isMaching = Match(presentScore, presentYouken.name, presentYouken.number);
    //     if (isMaching) {

    //       // 一致した場合その成績をresultに格納
    //       MakeResult(presentYouken, presentScore, category, result);
    //       console.log(result);
    //       //判定した成績を削除
    //       score.splice(j, 1);
    //       j--;

    //       break;

    //     }
    //   }
    // }

    return (

      <div>
      
        <div onClick={() => (console.log(result))}>{'練習'}</div>
      </div>
    )

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