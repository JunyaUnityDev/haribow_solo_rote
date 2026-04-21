// ════════════════════════════════════════════════
// HARIBOW オーディション メンバーデータ
// ════════════════════════════════════════════════
// このファイルを編集してメンバー・審査員情報を管理します。
// 来年のオーディションでもこのファイルだけ更新すればOKです。
//
// スキル一覧：ベーシック / ハリー / ３倍 / フロア / アクロ / 縄
// type: 'participant' = 参加者, 'staff' = スタッフ
// isJudge: true にするとチーム編成候補から除外される（審査員兼任スタッフ用）
// ════════════════════════════════════════════════

const HARIBOW_MEMBERS = [
  {name:'かづき',type:'participant',skills:['ベーシック','ハリー','縄'],isJudge:false},
  {name:'せな',type:'participant',skills:['３倍','アクロ'],isJudge:false},
  {name:'シュースケ',type:'participant',skills:['ハリー','縄'],isJudge:false},
  {name:'はるき',type:'participant',skills:['３倍','縄'],isJudge:false},
  {name:'この',type:'participant',skills:['ベーシック','ハリー','３倍','縄'],isJudge:false},
  {name:'かい',type:'participant',skills:['３倍','フロア','アクロ','縄'],isJudge:false},
  {name:'まなみ',type:'participant',skills:['ベーシック'],isJudge:false},
  {name:'しゅうと',type:'participant',skills:['３倍','フロア','縄'],isJudge:false},
  {name:'工藤美怜',type:'participant',skills:['３倍'],isJudge:false},
  {name:'ゆうか',type:'participant',skills:['ベーシック','３倍','縄'],isJudge:false},
  {name:'エポ',type:'participant',skills:['ベーシック'],isJudge:false},
  {name:'まいと',type:'participant',skills:['アクロ'],isJudge:false},
  {name:'コキン',type:'participant',skills:['フロア'],isJudge:false},
  {name:'ゆうすけ',type:'participant',skills:['ハリー','縄'],isJudge:false},
  {name:'ゆうり',type:'participant',skills:['アクロ'],isJudge:false},
  {name:'こう',type:'participant',skills:['３倍'],isJudge:false},
  {name:'さら',type:'participant',skills:['３倍','縄'],isJudge:false},
  {name:'森かなた',type:'participant',skills:['ハリー','縄'],isJudge:false},
  {name:'すけ',type:'participant',skills:['アクロ'],isJudge:false},
  {name:'SAY-YEAH',type:'participant',skills:['ベーシック','ハリー'],isJudge:false},
  {name:'門野暖大',type:'participant',skills:['ベーシック','縄'],isJudge:false},
  {name:'せり',type:'participant',skills:['ベーシック','３倍','アクロ','縄'],isJudge:false},
  {name:'るい',type:'participant',skills:['ハリー'],isJudge:false},
  {name:'たいよう',type:'participant',skills:['ベーシック','ハリー','縄'],isJudge:false},
  {name:'りん',type:'participant',skills:['ベーシック','ハリー'],isJudge:false},
  {name:'スタッフA',type:'staff',skills:['フロア','縄'],isJudge:false},
  {name:'スタッフB',type:'staff',skills:['アクロ','縄'],isJudge:false},
  {name:'スタッフC',type:'staff',skills:['アクロ','縄'],isJudge:false},
  {name:'スタッフD',type:'staff',skills:['ベーシック','フロア','縄'],isJudge:false},
  {name:'スタッフE',type:'staff',skills:['ハリー','縄'],isJudge:false},
];

const HARIBOW_JUDGES = [
  {name:'潤弥',skills:['ベーシック']},
  {name:'まほろ',skills:['３倍','縄']},
  {name:'りゅうすけ',skills:['ハリー']},
  {name:'しゅーへー',skills:['縄']},
  {name:'海野',skills:['フロア','アクロ']},
  {name:'たくみ',skills:['フロア','アクロ']},
  {name:'おち',skills:['縄']},
  {name:'まきと',skills:['縄']},
];

// フロア専用ターナー（スタッフ名）
const HARIBOW_FLOOR_STAFF = ['スタッフみさき', 'スタッフそら'];

// アクロ専用ターナー（スタッフ名）
const HARIBOW_ACRO_STAFF = ['スタッフA', 'スタッフB'];
