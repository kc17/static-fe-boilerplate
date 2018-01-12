import pathProcessor from '../utils/path-processor'

const subtitles = [
  {
    text: '爸，有一天，如果我們相見',
    start: 2.1,
    end: 5.30,
  },
  {
    text: '我會想，你會對我說什麼',
    start: 6.30,
    end: 8.70,
  },
  {
    text: '我會問，那一天我大學畢業典禮',
    start: 9.90,
    end: 13.10,
  },
  {
    text: '在草地上對天空伸出手，想要握著你的手',
    start: 13.20,
    end: 17.70,
  },
  {
    text: '你，有沒有看見',
    start: 18.40,
    end: 20.10,
  },
  {
    text: '我會問，那一天我碩士論文通過後淚如雨下',
    start: 20.80,
    end: 26.10,
  },
  {
    text: '覺得這輩子對你有交代了',
    start: 26.80,
    end: 29.50,
  },
  {
    text: '你，有沒有看見',
    start: 30.30,
    end: 31.90,
  },
  {
    text: '我會問，那一天我和太太在林田山下的教堂結婚',
    start: 32.60,
    end: 37.40,
  },
  {
    text: '我和你所有重要的親人都齊聚一堂',
    start: 38.40,
    end: 41.20,
  },
  {
    text: '你，有沒有看見',
    start: 42,
    end: 43.30,
  },
  {
    text: '我會問，那一天你的孫子平安出生，我抱著他，想要讓你也摸摸他',
    start: 44.50,
    end: 51,
  },
  {
    text: '你，有沒有看見',
    start: 51.90,
    end: 53.10,
  },
  {
    text: '爸，那一天在出差途中的三萬英呎雲端，我就好想看見你',
    start: 54.40,
    end: 61.10,
  },
  {
    text: '會不會，要真的等到那一天，我們才會相見',
    start: 62.10,
    end: 66.50,
  },
  {
    text: '我希望那一天，你對我說，我都有看見',
    start: 68.40,
    end: 72,
  },
  {
    text: '我會說，這好多的事情，都是為了你的孩子，還有我的孩子做的',
    start: 73.40,
    end: 80.05,
  },
  {
    text: '然後，我就好想聽見你說',
    start: 81.06,
    end: 83.55,
  },
  {
    text: '我知道...',
    start: 84.50,
    end: 85,
  },
]

const data = {
  title: '一生的對話',
  image: {
    resizedTargets: {
      mobile: pathProcessor('case3_mobile.jpg'),
      tablet: pathProcessor('case3_tablet.jpg'),
      desktop: pathProcessor('case3_desktop.jpg'),
    },
  },
  profile: {
    name: '游賀凱',
    age: '36',
    occupation: '中學輔導諮商中心組長',
    incident: '父親32年前自殺過世',
  },
  content: [
    '從心理系課堂到研討會分享實務工作經驗，當游賀凱這幾年在一些不同場合讓自己的故事現身，總有少數一兩個人在會後靠近他，打開緊閉的黑盒子——自殺，無論自身意念或親友遭遇，這禁忌般的話題幾乎沒有任何機會與其他人討論。',
    '在彼此共感的安全狀態中，才能問、才能講、互相回應困惑。彷彿一種儀式，留下聯絡方式後，游賀凱會將他的<a href="https://goo.gl/VgA5uX" target="_blank">碩士論文</a>寄給他們。',
    '「人們只問死者能否安息，但我更在乎的是還有知覺、還有痛感的生者。可是這件事情很貧乏，當我們談論自殺，都是在談防治自殺，在這個系統下面，常常就變得是在處理問題。可是我們會說上話的這些人，有的跟我一樣有過想死的念頭。能不能，我們不用馬上跳出來說『你不應該想要自殺』；親人自殺過世的人，也可以說出他的經驗，不用有人跳出來說『你不要那麼難過了』。」',
    '游賀凱小時候會恨父親，為什麼要把他留在這個世界，也想過，自己一定不夠可愛或做錯了事，爸爸才會自殺。父親在他5歲就離世，生前種種早已不復記憶，唯獨那「相互虧欠」的情感，橫亙著他直到大學畢業的人生。',
    '「體貼了生者似乎就評判了死者的作為，包容了死者似乎就背棄了生者的哀慟，你要怎麼辦？」',
    '這猶如進退失踞的為難，在他決定以論文書寫碰觸家族不願提起的傷口，訪談親人以重建對父親的記憶時，更加難以承受，「他們不只是資料取得的對象而已，還是我的親人，想知道更多，碰下去大家又會難過，這有點殘忍。」',
    '被獨自留下來照顧兩孩子的母親的怨懟、爺爺對於兒子期待卻失落的憤怒、奶奶用台語形容的「肝腸寸斷」，他無力改變，但對於年輕的家族成員而言，因為寫出來，這成為不需藏起來的秘密，建立起嶄新的關係，「至少開啟了我們回到『有自殺的生活』，既然是生活，就應該是想談就可以談。」',
    '當生命經驗能被直視，遺族也看見身旁生者家屬的自責、不解、難過、痛苦、恐懼⋯⋯，在此之前，這些情感在社會中無處安置。因爲沒有成功地防止自殺，因自殺死了親人的群體，是自殺防治下的「失敗者」。',
    '寫論文的過程中，游賀凱嘗試調閱父親在精神科就診的病歷資料，輾轉用電子郵件聯絡上當年的主治醫師，對方除了對20多年前自殺過世的病人不復記憶表示遺憾，還在回信的最後善意的向他提出就醫建議，但他沒有需要就醫的建議，他覺得那好像在說遺族是生了病的人。其實，「對於你父親的去世，我感到難過」，足矣。',
    '在尋找父親的路上，他並不是沒有想過，做下最後選擇的原因，但當每個人只能在有限心智與詮釋觀點找到一個說法，所謂的理解，很可能只剩「誤解」。',
    '因此即便完成論文，看似與已逝父親進行了深刻對話——「互不相欠」，用游賀凱自己的形容，他仍清楚自己並不明白父親在自殺瞬間或之前，到底在想什麼、為什麼做這個決定，「我26歲寫完論文，他在35歲走時，是兩個孩子的父親、一位女士的先生，我知道我跟他完全不同，離能夠真正理解他的路還那麼遠。」',
    '但這件事已不再僅是傷害，而是定下了一個錨，為他測量生命的刻度。',
    '從事學生輔導工作的他，接觸懷有自殺意念的學生時，能夠知道，在最後的那個時刻來臨前，還可以有多少努力的空間；身為帶著相同血脈，在家族被期待的男性角色，面對生涯的不同抉擇，他時刻留意會不會進到類似父親的困境裡，「像拿到一個功課，可是做不完，不是不會寫，而是一題寫完又一題。」游賀凱如此描述身為自殺者遺族的意義。',
    '年滿36歲的游賀凱已經超越了父親在世上的年歲，他也成為兩個孩子的父親，「以前會與父親在想像中對話，遇到困難的時候會想，那你會怎麼做？但現在過的每一天，他的人生從來沒有機會遇到。他已經比我年輕了。」',
    '他最近的功課，是跟孩子談死亡。',
    '當他們在電視生態節目中看到動物死亡，游賀凱自然地對4歲的大兒子提及父親之死，「那你爸爸跟這些動物一樣去了某個地方嗎？」還無法理解什麼叫自殺的孩子，天真地問到，「我說對，他應該跟牠們在一起，『那你會不會想你爸爸』，我說會想，兒子說：『我也會想你』。」游賀凱說。',
  ],
  subtitles,
  catchphrase: '游賀凱想對父親說⋯⋯',
  catchphraseFace: {
    mobile: pathProcessor('face3_mobile.png'),
    tablet: pathProcessor('face3_tablet.png'),
    desktop: pathProcessor('face3_desktop.png'),
  },
  audioFile: 'case3_audio.mp3',
}

export default data