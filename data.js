// +--------------------------+
// |        錬金術JSON        |
// +--------------------------+
// | アイテム同士の錬金       |
// +--------------------------+
// | items : 使用アイテム名   |
// | result  : 生成アイテム名 |
// +--------------------------+
const alchemyList = [
  {
    "items": ["魔石", "ダイヤ"],
    "result": "プラチナ"
  },
  {
    "items": ["魔石", "プラチナ"],
    "result": "アダマンタイト"
  },
  {
    "items": ["魔石", "アダマンタイト"],
    "result": "オリハルコン"
  },
  {
    "items": ["魔石", "オリハルコン"],
    "result": "クリスタル"
  },
  {
    "items": ["魔石", "クリスタル"],
    "result": "ヒヒイロカネ"
  },
  {
    "items": ["魔石", "ヒヒイロカネ"],
    "result": "強化石"
  },
  {
    "items": ["魔石", "魔石", "魔石", "魔石", "魔石"],
    "result": "強化石"
  },
  {
    "items": ["錬成石", "錬成石"],
    "result": "賢者の石"
  },
  {
    "items": ["強化石", "強化石"],
    "result": "錬成石"
  },
  {
    "items": ["砥石", "砥石"],
    "result": "上質砥石"
  },
  {
    "items": ["毒素の塊", "古ぼけた剣"],
    "result": "猛毒の剣"
  },
  {
    "items": ["毒素の塊", "古ぼけた杖"],
    "result": "猛毒の杖"
  },
];
// +--------------------------+
// |        錬金術JSON        |
// +--------------------------+
// | 上記以外との錬金         |
// +--------------------------+
// | item  : 使用アイテム名   |
// | subject : 対象名         |
// +--------------------------+
const alchemyList2 = [
  {
    "item": "賢者の石",
    "subject": "装飾"
  },
  {
    "item": "錬成石",
    "subject": "装飾"
  }
];
// ######################################################################
// 呼び出し助かる
// 防具＞杖＞剣って情報ありがたい
// 「魔石5と鉱石は、魔石が優先」ってのは
// 魔石＋ヒヒ->強化石
// よりも
// 魔石5つ->強化石
// が優先されるって事よね？
// 「持ち物の右か左から」ってことは人によって変わる可能性があるってことか
// 
// ######################################################################
// +-------------------------+
// |        鍛冶JSON         |
// +-------------------------+
// | items  : 使用アイテム名 |
// | result : 生成アイテム名 |
// +-------------------------+
const blacksmithArmerList = [
  {
    "items": ["ヒヒイロカネ", "ヒヒイロカネ"],
    "result": "覇者の鎧(12/50)"
  },
  {
    "items": ["クリスタル", "クリスタル"],
    "result": "クリスタルメイル(10/50)"
  },
  {
    "items": ["オリハルコン", "オリハルコン"],
    "result": "オリハルコンアーマー(9/40)"
  },
  {
    "items": ["アダマンタイト", "アダマンタイト"],
    "result": "アダマンアーマー(8/40)"
  },
  {
    "items": ["プラチナ", "プラチナ"],
    "result": "プラチナアーマー(?/??)"
  },
  {
    "items": ["ダイヤ", "ダイヤ"],
    "result": "不明"
  },
  {
    "items": ["金", "金"],
    "result": "ゴールドアーマー(?/??)"
  },
  {
    "items": ["銀", "銀"],
    "result": "シルバーアーマー(?/??)"
  },
  {
    "items": ["ミスリル", "ミスリル"],
    "result": "ミスリルプレート(3/20)"
  },
  {
    "items": ["銅", "銅"],
    "result": "不明"
  },
  {
    "items": ["鉄", "鉄"],
    "result": "不明"
  },
];
// 武器鍛造
const blacksmithWeaponList = [
  {
    "item": "ヒヒイロカネ",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "クリスタル",
    "result": ["クリスタルの杖", "クリスタルブレード"]
  },
  {
    "item": "オリハルコン",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "アダマンタイト",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "プラチナ",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "ダイヤ",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "金",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "銀",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "ミスリル",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "銅",
    "result": ["覇者の杖", "覇者の剣"]
  },
  {
    "item": "鉄鉱石",
    "result": ["覇者の杖", "覇者の剣"]
  },
];
// 能力値が最大でない時
// const blacksmithListUnmax = ["賢者の石", "錬成石", "強化石", "上質砥石", "砥石"];
// 能力値が最大の時
const blacksmithListMax = ["上質砥石", "砥石", "賢者の石", "錬成石", "強化石"];
// 恐らく正しい使用順（左から）
const blacksmithListExample = ['上質砥石', '砥石', '強化石'];
// ######################################################################
// 経験値リスト
const expList = [12, 36, 72, 120, 180, 252, 336, 432, 540, 660, 792, 936, 1092, 1260, 1440, 1632, 1836, 2052, 2280, 2520, 2772, 3036, 3312, 3600, 4933, 5393, 5879, 6389, 6925, 7486, 8073, 8687, 9328, 9996, 10691, 11414, 12166, 12946, 13756, 14595, 15463, 16362, 17290, 18250, 19240, 20262, 21316, 22402, 23520, 24670, 25853, 27070, 28320, 29604, 30922, 32275, 33662, 35085, 36542, 38035, 39564, 41130, 42731, 44369, 46045, 47757, 49507, 51295, 53121, 54985, 56888, 58829, 60810, 62830, 64889, 66989, 69129, 71309, 73529, 75791, 78093, 80437, 82823, 85250, 87720, 90231, 92786, 95383, 98023, 100707, 103434, 106204, 109019, 111878, 114781, 117729, 120722, 123760, 126843, 129972];

// 現在の経験値を引数に、現在のレベルを返す。
function getAdvancedLevel(exp) {
  for (let i = 0; i < expList.length; i++) {
    if (exp < expList[i]) {
      return i + 1;
    }
  }

  return 0;
}

// 現在の経験値を引数に、次のレベルまでに必要な経験値を返す。
function getNextLevelExp(exp) {
  for (let i = 0; i < expList.length; i++) {
    if (exp < expList[i]) {
      return expList[i] - exp;
    }
  }

  return 0;
}
// ######################################################################
const townNameList = ["ミルクタウン", "イエローテンプル", "レッドマウンテン", "ブラックパレス", "ブルーオーシャン"];
// ######################################################################
// +--------------------------+
// |       隠しボスJSON       |
// +--------------------------+
// | name  : 隠しボスの名称   |
// | item  : 使用アイテム名   |
// | where : 場所             |
// +--------------------------+
const bossList = [
  {
    "name": "皇帝ゴブリン",
    "item": "森の献上品",
    "where": "旅立ちの森"
  },
  {
    "name": "遺跡の巨人",
    "item": "秘密の石板",
    "where": "ふしぎな遺跡"
  },
  {
    "name": "キングクラーケン",
    "item": "深い青の真珠",
    "where": "沈没船"
  },
  {
    "name": "ジェンカ",
    "item": "真聖杯",
    "where": "終末の峡谷"
  },
];