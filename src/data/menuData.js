export const menuData = {
  counseling: [
    {
      name: '【オススメ】メニューに迷われているお客様',
      target: '全員',
      price: '¥0',
      description: 'スタイリストがお客様に合ったメニューをご提案します。'
    },
    {
      name: '《ご新規のお客様》無料カウンセリング',
      target: '新規',
      price: '¥0',
      description: '初めてご来店される方向けの事前カウンセリングです。'
    }
  ],
  extension: [
    {
      name: '増毛エクステ 300本',
      target: '全員',
      price: '¥13,200',
      image: 'extensionHair'
    },
    {
      name: '増毛エクステ 500本',
      target: '全員',
      price: '¥22,000',
      image: 'extensionHair'
    },
    {
      name: '増毛エクステ 1000本',
      target: '全員',
      price: '¥44,000',
      image: 'extensionHair'
    },
    {
      name: 'リペア増毛エクステ《30分》',
      target: '全員',
      price: '¥3,300',
      image: 'extensionHair'
    }
  ],
  cut: [
    {
      name: '【似合わせカット】',
      target: '全員',
      price: '¥5,040',
      note: '併用不可'
    },
    {
      name: '【艶やかな髪】TOKIOシャンプー＋カット',
      target: '全員',
      price: '¥5,650',
      note: '併用不可',
      image: 'tokioTreatment'
    }
  ],
  colorPermSet: [
    {
      name: 'パーマ＋カット',
      target: '全員',
      price: '¥12,910'
    },
    {
      name: 'イノアカラー＋カット',
      target: '全員',
      price: '¥12,300'
    },
    {
      name: '【夏にオススメ】カラー + トリートメント + ヘッドスパ',
      target: '全員',
      price: '¥11,000',
      image: 'whiteHairDye'
    },
    {
      name: '【いつものカラープラス◎】カラー＋カット＋トリートメント',
      target: '新規',
      price: '¥12,300',
      note: '併用不可',
      image: 'whiteHairDye'
    }
  ]
};

export const menuCategories = [
  {
    id: 'counseling',
    title: 'カウンセリング',
    description: 'お客様に合ったメニューをご提案',
    icon: '💬',
    items: menuData.counseling
  },
  {
    id: 'extension',
    title: '増毛エクステ',
    description: '自然な仕上がりの増毛エクステ',
    icon: '✨',
    items: menuData.extension
  },
  {
    id: 'cut',
    title: 'カット',
    description: 'お客様の骨格と髪質に合わせた理想のスタイル',
    icon: '✂️',
    items: menuData.cut
  },
  {
    id: 'colorPermSet',
    title: 'カラー・パーマ・セットメニュー',
    description: '最新トレンドから自然な仕上がりまで',
    icon: '🎨',
    items: menuData.colorPermSet
  }
]; 