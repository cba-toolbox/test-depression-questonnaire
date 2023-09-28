var likert_scale = [
  "ないかたまに", 
  "ときどき", 
  "かなりのあいだ", 
  "ほとんどいつも"
];

var items = [
    "気が沈んで憂うつだ",
    "朝方はいちばん気分がよい",
    "泣いたり、泣きたくなる",
    "夜よく眠れない",
    "食欲はふつうだ",
    "異性に対する関心がある(まだ性欲がある)",
    "やせてきたことに気がつく",
    "便秘している",
    "ふだんよりも動悸がする",
    "何となく疲れる",
    "気持ちはいつもさっぱりしている",
    "いつもと変わりなく仕事をやれる",
    "落ち着かず、じっとしていられない",
    "将来に希望がある",
    "いつもよりいらいらする",
    "たやすく決断できる",
    "役に立つ、働ける人間だと思う",
    "生活はかなり充実している",
    "自分が死んだほうが他の者は楽に暮らせると思う",
    "日頃していることに満足している"
];

var pageFirst = {
    type: jsPsychSurveyLikert,
    preamble: '<p>次の質問を読んで現在あなたの状態にもっともよくあてはまると思われる欄に印をつけて下さい。</p>',
    questions: [
        {prompt: items[0], name: 'sds_1', labels: likert_scale},
        {prompt: items[1], name: 'sds_2', labels: likert_scale},
        {prompt: items[2], name: 'sds_3', labels: likert_scale},
        {prompt: items[3], name: 'sds_4', labels: likert_scale},
        {prompt: items[4], name: 'sds_5', labels: likert_scale},
    ],
    randomize_question_order: false,
    button_label : "次へ"
};

var pageSecond = {
    type: jsPsychSurveyLikert,
    preamble: '<p>次の質問を読んで現在あなたの状態にもっともよくあてはまると思われる欄に印をつけて下さい。</p>',
    questions: [
        {prompt: items[5], name: 'sds_6', labels: likert_scale},
        {prompt: items[6], name: 'sds_7', labels: likert_scale},
        {prompt: items[7], name: 'sds_8', labels: likert_scale},
        {prompt: items[8], name: 'sds_9', labels: likert_scale},
        {prompt: items[9], name: 'sds_10', labels: likert_scale},
    ],
    randomize_question_order: false,
    button_label : "次へ"
};

var pageThird = {
    type: jsPsychSurveyLikert,
    preamble: '<p>次の質問を読んで現在あなたの状態にもっともよくあてはまると思われる欄に印をつけて下さい。</p>',
    questions: [
        {prompt: items[10], name: 'sds_11', labels: likert_scale},
        {prompt: items[11], name: 'sds_12', labels: likert_scale},
        {prompt: items[12], name: 'sds_13', labels: likert_scale},
        {prompt: items[13], name: 'sds_14', labels: likert_scale},
        {prompt: items[14], name: 'sds_15', labels: likert_scale},
    ],
    randomize_question_order: false,
    button_label : "次へ"
};

var pageForth = {
    type: jsPsychSurveyLikert,
    preamble: '<p>次の質問を読んで現在あなたの状態にもっともよくあてはまると思われる欄に印をつけて下さい。</p>',
    questions: [
        {prompt: items[15], name: 'sds_16', labels: likert_scale},
        {prompt: items[16], name: 'sds_17', labels: likert_scale},
        {prompt: items[17], name: 'sds_18', labels: likert_scale},
        {prompt: items[18], name: 'sds_19', labels: likert_scale},
        {prompt: items[19], name: 'sds_20', labels: likert_scale},
    ],
    randomize_question_order: false,
    button_label: '終了'
};

/*タイムラインの設定*/
const timeline = [pageFirst, pageSecond, pageThird, pageForth]
