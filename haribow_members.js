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
const HARIBOW_FLOOR_STAFF = ['みさき', 'そら'];

// アクロ専用ターナー（スタッフ名）— フロアと兼任
const HARIBOW_ACRO_STAFF = ['みさき', 'そら'];
