// ════════════════════════════════════════════════
// HARIBOW オーディション メンバーデータ
// ════════════════════════════════════════════════
// 東京会場・大阪会場の2セットを保持。
// UI右上の「東京 / 大阪」トグルで切り替え。setHaribowLocation() を呼ぶと
// HARIBOW_MEMBERS / HARIBOW_JUDGES の参照先が切り替わる。
//
// スキル一覧：ベーシック / ハリー / ３倍 / フロア / アクロ / 縄
// type: 'participant' = 参加者, 'staff' = スタッフ
// isJudge: true でソロのターナー候補から除外、チーム編成に加わる
// ════════════════════════════════════════════════

// ─── 東京会場 ─────────────────────────────────────
const HARIBOW_MEMBERS_TOKYO = [
  {name:'渡邉 沙來',type:'participant',skills:['縄','３倍'],isJudge:false},
  {name:'森哉大',type:'participant',skills:['ハリー'],isJudge:false},
  {name:'今村琳乃介',type:'participant',skills:['ベーシック','ハリー'],isJudge:false},
  {name:'仁和柊人',type:'participant',skills:['縄','フロア'],isJudge:false},
  {name:'服部快',type:'participant',skills:['アクロ'],isJudge:false},
  {name:'関野咲希',type:'participant',skills:['ベーシック'],isJudge:false},
  {name:'稗田悠介',type:'participant',skills:['縄','ハリー'],isJudge:false},
  {name:'下村琉唯',type:'participant',skills:['縄','ハリー'],isJudge:false},
  {name:'長谷川惺也',type:'participant',skills:['ベーシック'],isJudge:false},
  {name:'森大耀',type:'participant',skills:['ベーシック','３倍'],isJudge:false},
  {name:'金箱秀亮',type:'participant',skills:['縄','ハリー'],isJudge:false},
  {name:'三好薫月',type:'participant',skills:['縄','ベーシック','ハリー'],isJudge:false},
  {name:'徳永　芹',type:'participant',skills:['縄','ベーシック','３倍','アクロ'],isJudge:false},
  {name:'山﨑理人',type:'participant',skills:['アクロ'],isJudge:false},
  {name:'鈴木小暖',type:'participant',skills:['ハリー'],isJudge:false},
  {name:'飯田優佳',type:'participant',skills:['縄','ベーシック','３倍'],isJudge:false},
  {name:'永井竜介',type:'participant',skills:['アクロ'],isJudge:false},
  {name:'工藤美怜',type:'participant',skills:['縄','３倍'],isJudge:false},
  {name:'吉村悠里',type:'participant',skills:['フロア','アクロ'],isJudge:false},
  {name:'山岸煌',type:'participant',skills:['３倍'],isJudge:false},
  {name:'鈴木真海',type:'participant',skills:['ベーシック'],isJudge:false},
  {name:'宮川　凛空',type:'participant',skills:['フロア','アクロ'],isJudge:false},
  {name:'西川世那',type:'participant',skills:['３倍','アクロ'],isJudge:false},
  {name:'二階堂笑穂',type:'participant',skills:['ベーシック'],isJudge:false},
  {name:'潤弥',type:'staff',skills:['ベーシック'],isJudge:true},
  {name:'まほろ',type:'staff',skills:['アクロ','縄'],isJudge:true},
  {name:'りゅうすけ',type:'staff',skills:['ハリー','縄'],isJudge:true},
  {name:'しゅーへー',type:'staff',skills:['ベーシック','縄'],isJudge:true},
  {name:'たくみ',type:'staff',skills:['フロア','アクロ','縄'],isJudge:true},
];

const HARIBOW_JUDGES_TOKYO = [
  {name:'潤弥',skills:['ベーシック']},
  {name:'まほろ',skills:['３倍','縄']},
  {name:'りゅうすけ',skills:['ハリー']},
  {name:'しゅーへー',skills:['縄']},
  {name:'海野',skills:['フロア','アクロ']},
  {name:'たくみ',skills:['フロア','アクロ']},
  {name:'おち',skills:['縄']},
  {name:'まきと',skills:['縄']},
];

// ─── 大阪会場 ─────────────────────────────────────
// 参加者: 2026/05/18 時点でフォーム回答SSから抽出（自己評価ベース、フォームの動画提出基準）
//   縄/ベーシック/ハリー(=ステップ)/３倍 ≥4 で skill 付与、アクロ/フロア ≥3 で skill 付与
// スタッフ/審査員: 東京と同一構成
const HARIBOW_MEMBERS_OSAKA = [
  {name:'佐伯健太',type:'participant',skills:['縄','３倍'],isJudge:false},
  {name:'鈴木　梨優',type:'participant',skills:['縄','ハリー'],isJudge:false},
  {name:'佐藤姫礼',type:'participant',skills:['縄','ベーシック'],isJudge:false},
  {name:'太田煌大',type:'participant',skills:['アクロ','縄','３倍'],isJudge:false},
  {name:'太田唄心',type:'participant',skills:['アクロ','フロア'],isJudge:false},
  {name:'門野暖大',type:'participant',skills:['アクロ','縄','ベーシック'],isJudge:false},
  {name:'足立葵叶',type:'participant',skills:['アクロ','フロア','縄'],isJudge:false},
  {name:'正木菜海',type:'participant',skills:['フロア'],isJudge:false},
  {name:'潤弥',type:'staff',skills:['ベーシック'],isJudge:true},
  {name:'まほろ',type:'staff',skills:['アクロ','縄'],isJudge:true},
  {name:'りゅうすけ',type:'staff',skills:['ハリー','縄'],isJudge:true},
  {name:'しゅーへー',type:'staff',skills:['ベーシック','縄'],isJudge:true},
  {name:'たくみ',type:'staff',skills:['フロア','アクロ','縄'],isJudge:true},
];

const HARIBOW_JUDGES_OSAKA = [
  {name:'潤弥',skills:['ベーシック']},
  {name:'まほろ',skills:['３倍','縄']},
  {name:'りゅうすけ',skills:['ハリー']},
  {name:'しゅーへー',skills:['縄']},
  {name:'海野',skills:['フロア','アクロ']},
  {name:'たくみ',skills:['フロア','アクロ']},
  {name:'おち',skills:['縄']},
  {name:'まきと',skills:['縄']},
];

// ─── 共通 ─────────────────────────────────────────
// フロア専用ターナー（スタッフ名）
const HARIBOW_FLOOR_STAFF = ['みさき', 'そら'];

// アクロ専用ターナー（スタッフ名）— フロアと兼任
const HARIBOW_ACRO_STAFF = ['みさき', 'そら'];

// ─── 切り替え ────────────────────────────────────
let HARIBOW_LOCATION = 'tokyo';
let HARIBOW_MEMBERS = HARIBOW_MEMBERS_TOKYO;
let HARIBOW_JUDGES = HARIBOW_JUDGES_TOKYO;

function setHaribowLocation(loc){
  HARIBOW_LOCATION = loc;
  if(loc === 'osaka'){
    HARIBOW_MEMBERS = HARIBOW_MEMBERS_OSAKA;
    HARIBOW_JUDGES = HARIBOW_JUDGES_OSAKA;
  } else {
    HARIBOW_MEMBERS = HARIBOW_MEMBERS_TOKYO;
    HARIBOW_JUDGES = HARIBOW_JUDGES_TOKYO;
  }
}
