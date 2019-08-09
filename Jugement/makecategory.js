import FileFunc from './CreateFrom/filefn'
import Lists from '../CreateList/List'
export default class MakeCategory {



  constructor(score, Syozoku) {
    this.score = score;
    this.Syozoku = Syozoku;
  }

  makeCategory() {

    let List = new Lists();

    // 選択した所属から卒業要件を取得
    let Youken = List.GetList()[this.Syozoku];

    return this.createCategory(Youken);

  }
  
  // 要件に同じカテゴリーごとに番号をフルメソッド
  createCategory(e) {

    let del_number = 0;
    let category = e.concat();
    let M_category = e.concat();

    for (let i = 0; i < category.length-1; i++) {

      for (let j = i + 1; j < category.length-1; j++) {

        M_category[i + del_number].No = i;

        if (j > i + 2) { //最適化ポイント
          break;
        };

        const check1 = category[i].category1 === category[j].category1;
        const check2 = category[i].category2 === category[j].category2;
        const check3 = category[i].category3 === category[j].category3;

        if (check1 && check2 && check3) {

          // M_category[j + del_number].No = i;
          e[j + del_number].No = i;
          del_number++
          category.splice(j, 1);
          j--;
        };

      };
    };

    return {Youken:e,category}
  }



}