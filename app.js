/* SOY KIM — The Visual Index / Editorial Issue 02. */
(() => {
'use strict';
const SOURCE = 'https://ejdms499-wq.github.io/0824_01/';
const asset = path => /^(https?:)?\/\//.test(path) || path.startsWith('assets/fashion/') || path.startsWith('assets/covers/') || path.startsWith('assets/decks/') || path.startsWith('assets/gallery/') ? path : SOURCE + path;
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sourceProjects = [
    {id:'gyeong', title:'경성야록', overline:'ARCHIVE / INTERACTIVE HISTORY', category:'역사 · 세계관', categoryEn:'HISTORY & CULTURE',year:'2026',cover:'assets/covers/gyeongseong_yarok_03.png', lead:'1930년대 신문을 다시 읽는 방법.', description:'3인 팀의 팀장으로 콘텐츠 방향과 비주얼 구성을 이끌었습니다. 동아일보의 1930년대 기록을 원문·현대어 풀이·지도·라디오를 오가며 탐색할 수 있도록 기획한 역사 기반 인터랙티브 웹 프로젝트입니다.',role:'3인 팀 팀장 · 콘텐츠 기획 · 비주얼 디렉션', tools:['HTML','CSS','JavaScript','역사 자료 리서치','Midjourney','GitHub Pages'],deck:{dir:'assets/decks/gyeong',count:28},links:[['LIVE WEBSITE','https://ejdms499-wq.github.io/gyeongseong-yarok_v/'],['GITHUB SOURCE','https://github.com/ejdms499-wq/gyeongseong-yarok_v'],['PROJECT NOTES','https://app.notion.com/p/KYEONGSEONG-YAROK-40592c0c250981a98ddfeb2ada731c12']]},
    {id:'simmyo',title:'심묘한 산책',overline:'ILLUSTRATION / INTERACTIVE WALK',category:'역사 · 세계관',categoryEn:'HISTORY & CULTURE',year:'2026',cover:'assets/projects/covers/simmyo_cover_web.jpg',lead:'검은 고양이 한 마리가 지나간 자리.',description:'1930년대 경성을 길고양이 심묘의 시선으로 여행하는 인터랙티브 산책입니다. 당시 공간과 문화를 조사하고, 빈티지 신문 삽화의 조형 언어를 담아 장소마다 새로운 풍경을 구성했습니다.',role:'캐릭터 설정 · 비주얼 디렉션 · 역사 리서치',tools:['Illustration','Character IP','HTML','CSS','JavaScript','Midjourney'],deck:{dir:'assets/decks/simmyo',count:23},links:[['LIVE WEBSITE','https://ejdms499-wq.github.io/simmyo-walk/'],['PROJECT NOTES','https://app.notion.com/p/SIMMYO-WALK-40592c0c25098165adb1d0f1ed83a163']]},
    {id:'pudding',title:'푸딩베리',overline:'ORIGINAL CHARACTER IP / STORY',category:'캐릭터 IP',categoryEn:'CHARACTER & WORLD',year:'2026',cover:'assets/projects/covers/puddingberry.png',lead:'말랑한 다섯 친구의 달콤한 세계.',description:'푸딩의 형태와 디저트의 색에서 출발해 다섯 가지 성격을 가진 캐릭터를 기획했습니다. 각 캐릭터의 소품, 색채, 말투, 관계성을 하나의 브랜드 IP로 연결하는 프로젝트입니다.',role:'오리지널 IP 기획 · 캐릭터 디자인 · 세계관',tools:['Midjourney','Character Design','3D Clay Look','Notion'],links:[['PROJECT NOTES','https://app.notion.com/p/38e92c0c2509801587b0fbc171ec189f'],['VIDEO ARCHIVE','https://www.youtube.com/@BerryPudding_TV/playlists']]},
    {id:'wizard',title:'WIZARD BAKERY',overline:'WEB EXPERIENCE / FICTIONAL COMMERCE',category:'캐릭터 IP',categoryEn:'CHARACTER & WORLD',year:'2026',cover:'assets/projects/covers/wizard_bakery_wide.webp',lead:'효과에는 반드시 대가가 따릅니다.',description:'소설 「위저드 베이커리」를 모티프로 한 비공식 팬 프로젝트입니다. 문학 속 규칙을 39개의 상품과 다섯 컬렉션으로 해석해, 실제 상점을 탐색하는 듯한 인터랙티브 웹 경험을 제작했습니다.',role:'세계관 기획 · UX/UI · 프론트엔드 · AI 비주얼',tools:['React','HashRouter','JSON','Midjourney','GitHub Pages'],deck:{dir:'assets/decks/wizard',count:18},links:[['LIVE WEBSITE','https://ejdms499-wq.github.io/wizard-bakery/'],['PROJECT NOTES','https://app.notion.com/p/WIZARD-BAKERY-3d592c0c250981c48c5fc89fb13109d9']]},
    {id:'memory',title:'기억결',overline:'AI SERVICE / MEMORY DESIGN',category:'AI 서비스 기획',categoryEn:'AI & DIGITAL',year:'2026',cover:'assets/projects/covers/memory_gyeol.png',lead:'AI가 기억의 빈칸을 지어내지 않도록.',description:'사용자의 기억을 보존하는 데서 출발하는 AI 경험 서비스입니다. 기억의 확실성과 불확실성을 구분하고, 질문·이미지 생성·검증 단계를 거쳐 조심스럽게 재구성하는 흐름을 설계했습니다.',role:'서비스 기획 · AI 자동화 · 인터랙션 디자인',tools:['n8n','OpenAI API','Supabase','Lovable','RLS'],deck:{dir:'assets/decks/memory',count:23},links:[['PPT 원본','기억결.pptx'],['LIVE WEBSITE','https://ejdms499-wq.github.io/memory-gyeol/'],['PROJECT NOTES','https://app.notion.com/p/MEMORY-GYEOL-40592c0c250981bfa33cd273d195a9ab']]},
    {id:'music',title:'MUSIC WORLD',overline:'MUSIC / INTERACTIVE CONTENT',category:'AI 서비스 기획',categoryEn:'AI & DIGITAL',year:'2026',cover:'assets/projects/covers/music_world.png',lead:'음악을 발견하는 또 하나의 화면.',description:'음악·라이브·영상의 맥락을 연결해 경험하는 웹 MVP입니다. 듣는 행위가 하나의 화면에서 끝나지 않도록 큐레이션과 감상 동선을 구성했습니다.',role:'경험 기획 · 콘텐츠 큐레이션 · MVP 제작',tools:['HTML','CSS','JavaScript','n8n','AI Content'],deck:{dir:'assets/decks/music',count:20},links:[['LIVE WEBSITE','https://ubiquitous-crepe-83c45d.netlify.app/'],['PPT 원본','MUSIC_WORLD.pptx'],['PROJECT NOTES','https://app.notion.com/p/MUSIC-WORLD-MUSIC-WORLD-AI-MUSIC-CONTEXT-ENGINE-40592c0c250981c291f2c79dc17872ed']]},
    {id:'stones',title:'STRAY STONES',overline:'DATA / CHARACTER STORYTELLING',category:'데이터 스토리텔링',categoryEn:'DATA & EXPERIMENT',year:'2026',cover:'assets/projects/covers/stray_stones_wide.webp',lead:'운석 데이터가 작은 입양소가 되기까지.',description:'NASA 운석 데이터 45,716건을 살펴보며 기록된 위치에 관측·발견의 편향이 반영된다는 점에 주목했습니다. 분석 결과를 캐릭터와 탐험의 세계관으로 전환한 데이터 스토리텔링 프로젝트입니다.',role:'데이터 분석 · 캐릭터 콘셉트 · UI 설계',tools:['Python','pandas','NASA Open Data','Data Visualization','3D'],deck:{dir:'assets/decks/stones',count:21},links:[['PDF 원본 보기','assets/decks/stones/STRAY_STONES_ORIGINAL.pdf'],['LIVE WEBSITE','https://ejdms499-wq.github.io/STRAY_STONES/'],['PROJECT NOTES','https://app.notion.com/p/STRAY-STONES-40592c0c2509817f977befdea563fb1c']]},
    {id:'vinyl',title:'DATA VINYL',overline:'MUSIC DATA / INTERACTION',category:'데이터 스토리텔링',categoryEn:'DATA & EXPERIMENT',year:'2026',cover:'assets/projects/covers/data_vinyl.png',lead:'숫자를 읽지 말고 레코드를 골라 보세요.',description:'한국·일본·미국·영국의 음악 차트 데이터를 LP 디깅이라는 손에 잡히는 행위로 전환했습니다. 레코드를 고르고 바늘을 내리는 경험을 통해 순위와 지속성을 탐색하도록 디자인했습니다.',role:'콘셉트 기획 · 데이터 설계 · UI 인터랙션',tools:['Python','Music Chart Data','HTML','CSS','JavaScript'],deck:{dir:'assets/decks/vinyl',count:28},links:[['LIVE WEBSITE','https://ejdms499-wq.github.io/DATA_VINYL/'],['PROJECT NOTES','https://app.notion.com/p/DATA-VINYL-40592c0c250981cdb997fa7b1adba019']]},
    {id:'method',title:'크리에이티브 메소드',overline:'CREATIVE DIRECTION / APPROACH',category:'비주얼 디렉션',categoryEn:'CREATIVE PRACTICE',year:'2026',lead:'감각을 구조로, 구조를 경험으로.',description:'패션 현장에서 익힌 관찰력을 디지털 콘텐츠의 기획 과정에 연결합니다.',role:'Creative Direction',tools:['Research','Art Direction','Interaction'],links:[]},
        {id:'fashion',title:'SELECTED CREDITS',overline:'FASHION / STYLING ARCHIVE',category:'패션 · 스타일링',categoryEn:'FASHION & EDITORIAL',year:'2017—2026',cover:'assets/projects/styling/editorial/cha_singles_cover.jpg',lead:'현장의 감각에서 시작된 시각 언어.',description:'매거진 화보와 드라마, 캠페인, 음악방송을 오가며 의상 준비와 스타일링 관련 제작 과정에 참여했습니다. 크레딧은 팀 작업의 참여 아카이브이며 개인 단독 디렉팅 작업을 뜻하지 않습니다.',role:'스타일링 팀 참여 · 의상 준비 · 피팅 · 현장 팔로우',tools:['Fashion Styling','Editorial','Fitting','Production','Visual Research'],gallery:['assets/projects/styling/editorial/cha_singles_cover.jpg','assets/projects/styling/bold_01.jpg','assets/projects/styling/editorial/ha_vogue_lead.jpg','assets/projects/styling/editorial/shin_bazaar_lead.jpg','assets/projects/styling/koo_bb_lead.jpg','assets/projects/styling/andteam/stage1_lead.jpg'],links:[['FULL STYLING ARCHIVE','https://ejdms499-wq.github.io/0824_01/credits.html']]}
  ];

const projects = [sourceProjects.find(p=>p.id==='fashion'),...sourceProjects.filter(p=>p.id!=='fashion')];
const FASHION_ARCHIVE = [
 {
  "kind": "editorial",
  "source": "BOLDPAGE",
  "subject": "강유석",
  "strap": "An editorial in contrast",
  "label": "커버 화보",
  "note": "소년적인 인상에서 날카로운 테일러링까지. 한 사람의 여러 얼굴을 룩의 변화로 보여준 화보입니다.",
  "role": "공식 표기 · Stylist 박선용, 김소이",
  "images": [
   "assets/fashion/bold_01.jpg",
   "assets/fashion/bold_03.jpg",
   "assets/fashion/bold_02.jpg",
   "assets/fashion/bold_04.jpg"
  ],
  "credit": "assets/fashion/credits/boldpage_official_credit.png"
 },
 {
  "kind": "editorial",
  "source": "SINGLES",
  "subject": "차준환",
  "strap": "Body in motion",
  "label": "매거진 화보",
  "note": "피겨 선수의 선과 몸의 움직임을 중심에 둔 룩. 의상의 실루엣을 통해 강한 인상을 완성한 에디토리얼입니다.",
  "role": "스타일링 작업 참여 아카이브",
  "images": [
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/cha_singles_cover.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/cha_singles_04.webp",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/cha_singles_09.webp"
  ]
 },
 {
  "kind": "editorial",
  "source": "HARPER’S BAZAAR",
  "subject": "신승호",
  "strap": "Shades of black",
  "label": "매거진 화보",
  "note": "흑백의 명암과 소재 대비가 인물의 분위기를 결정하는 에디토리얼.",
  "role": "스타일링 작업 참여 아카이브",
  "images": [
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/shin_bazaar_lead.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/shin_bazaar_02.webp",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/shin_bazaar_03.webp"
  ]
 },
 {
  "kind": "editorial",
  "source": "VOGUE",
  "subject": "하정우",
  "strap": "Cinematic wardrobe",
  "label": "매거진 화보",
  "note": "서사적인 장면 안에서 클래식 남성복의 선을 강조한 화보입니다.",
  "role": "스타일링 작업 참여 아카이브",
  "images": [
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/ha_vogue_lead.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/ha_vogue_02.webp",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/ha_vogue_04.webp"
  ]
 },
 {
  "kind": "editorial",
  "source": "VOGUE",
  "subject": "구교환 · 〈군체〉",
  "strap": "A collective silhouette",
  "label": "단체 에디토리얼",
  "note": "서로 다른 인물이 한 프레임에 모였을 때 의상 소재와 실루엣이 만드는 리듬을 볼 수 있는 작업입니다.",
  "role": "스타일링 작업 참여 아카이브",
  "images": [
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/koo_collective_lead.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/koo_collective_02.webp",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/editorial/koo_collective_03.webp"
  ]
 },
 {
  "kind": "editorial",
  "source": "MEN NOBLESSE",
  "subject": "하정우 · RALPH LAUREN PURPLE LABEL",
  "strap": "Heritage, reimagined",
  "label": "커버 화보",
  "note": "유서 깊은 테일러링과 공간의 색감이 만나는 커버 스토리.",
  "role": "공식 표기 · 스타일링 이현하 / 어시스턴트 김소이, 류도원",
  "images": [
   "assets/fashion/men_01.jpg",
   "assets/fashion/men_02.jpg",
   "assets/fashion/men_03.jpg",
   "assets/fashion/men_04.jpg"
  ],
  "credit": "assets/fashion/credits/men_noblesse_credit.png"
 },
 {
  "kind": "editorial",
  "source": "BROOKS BROTHERS × BAZAAR",
  "subject": "구교환",
  "strap": "Classic with a twist",
  "label": "브랜드 캠페인",
  "note": "브랜드의 프레피 코드를 배우 특유의 온도와 움직임으로 재해석한 캠페인.",
  "role": "캠페인 스타일링 관련 참여 아카이브",
  "images": [
   "assets/fashion/koo_01.jpg",
   "assets/fashion/koo_04.jpg",
   "assets/fashion/koo_05.jpg",
   "assets/fashion/koo_06.jpg"
  ],
  "link": "https://www.harpersbazaar.co.kr/article/1900044"
 },
 {
  "kind": "editorial",
  "source": "OLIVE YOUNG MAGAZINE",
  "subject": "3 MEN’S STYLE IN SPRING",
  "strap": "Spring essentials",
  "label": "브랜드 매거진",
  "note": "화이트 스튜디오와 컬러 포인트가 중심이 되는 봄 남성 스타일링 화보입니다.",
  "role": "스타일링 작업 참여 아카이브",
  "images": [
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/oliveyoung/oy_lead.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/oliveyoung/oy_02.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/oliveyoung/oy_04.jpg"
  ]
 },
 {
  "kind": "drama",
  "source": "NETFLIX",
  "subject": "연애대전",
  "strap": "Costume Department",
  "label": "드라마 · 의상팀",
  "note": "작품의 인물과 장면을 위한 의상팀 참여 기록입니다.",
  "role": "드라마 의상팀 참여",
  "images": [
   "assets/fashion/drama/love_to_hate.webp"
  ]
 },
 {
  "kind": "drama",
  "source": "ENA",
  "subject": "얼어죽을 연애따위",
  "strap": "Costume Department",
  "label": "드라마 · 의상팀",
  "note": "드라마 의상팀으로 참여한 현장 작업입니다.",
  "role": "드라마 의상팀 참여",
  "images": [
   "assets/fashion/drama/love_is_for_suckers.webp"
  ]
 },
 {
  "kind": "drama",
  "source": "MBC",
  "subject": "넘버스",
  "strap": "Costume for character",
  "label": "드라마 · 배우 담당",
  "note": "배우 의상 관련 현장 참여 기록입니다.",
  "role": "이성열 관련 의상 참여",
  "images": [
   "assets/fashion/drama/numbers.webp"
  ]
 },
 {
  "kind": "drama",
  "source": "tvN",
  "subject": "연예인 매니저로 살아남기",
  "strap": "Costume for character",
  "label": "드라마 · 배우 담당",
  "note": "장면과 캐릭터를 위한 의상 관련 현장 참여 작업입니다.",
  "role": "김국희 관련 의상 참여",
  "images": [
   "assets/fashion/drama/behind_every_star.webp"
  ]
 },
 {
  "kind": "drama",
  "source": "ENA · 지니TV",
  "subject": "아이돌아이",
  "strap": "Costume for character",
  "label": "드라마 · 배우 담당",
  "note": "드라마 의상 관련 작업을 함께한 참여 기록입니다.",
  "role": "김재영 관련 의상 참여",
  "images": [
   "assets/fashion/drama/idol_i.webp"
  ]
 },
 {
  "kind": "stage",
  "source": "&TEAM · BEWITCHED",
  "subject": "STAGE 01",
  "strap": "Performance styling",
  "label": "음악방송 무대",
  "note": "음악방송의 움직임과 조명에 맞춘 의상 준비·현장 참여 아카이브.",
  "role": "스타일링 팀 참여",
  "images": [
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/andteam/stage1_lead.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/andteam/stage1_01.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/andteam/stage1_02.jpg"
  ],
  "link": "https://www.youtube.com/watch?v=1XNv2OuPJjI"
 },
 {
  "kind": "stage",
  "source": "&TEAM · BEWITCHED",
  "subject": "STAGE 02",
  "strap": "Performance styling",
  "label": "음악방송 무대",
  "note": "블랙 룩의 디테일과 카메라 안에서 보이는 질감을 다룬 무대 작업 기록입니다.",
  "role": "스타일링 팀 참여",
  "images": [
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/andteam/stage2_lead.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/andteam/stage2_01.jpg"
  ],
  "link": "https://www.youtube.com/watch?v=KMzV5SQDZJo"
 },
 {
  "kind": "stage",
  "source": "&TEAM · BEWITCHED",
  "subject": "LIVE CLIP",
  "strap": "Close-up performance",
  "label": "라이브 영상",
  "note": "라이브 클립을 위한 무대 스타일링 팀 참여 아카이브.",
  "role": "스타일링 팀 참여",
  "images": [
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/andteam/clip_lead.jpg",
   "https://ejdms499-wq.github.io/0824_01/assets/projects/styling/andteam/clip_01.jpg"
  ],
  "link": "https://www.youtube.com/watch?v=Z7tiMUiSORo"
 }
];
const LOCAL_COVERS = {
 'assets/projects/covers/gyeongseong_yarok.png':'assets/covers/gyeongseong_yarok.png',
 'assets/projects/covers/simmyo_cover_web.jpg':'assets/covers/simmyo_cover_web.jpg',
 'assets/projects/covers/puddingberry.png':'assets/covers/puddingberry.png',
 'assets/projects/covers/memory_gyeol.png':'assets/covers/memory_gyeol.png',
 'assets/projects/covers/music_world.png':'assets/covers/music_world.png',
 'assets/projects/covers/wizard_bakery_wide.webp':'assets/covers/wizard_bakery.png',
 'assets/projects/covers/stray_stones_wide.webp':'assets/covers/stray_stones_selected.png'
 
};
const LOCAL_DECK = {gyeong:21,simmyo:23,stones:21,music:20,memory:23};
const metrics = {
 gyeong:[['04','사건 서브페이지'],['03','탐색 방식'],['03','팀 프로젝트']],
 simmyo:[['08','산책 도장'],['02','시선 전환'],['01','오리지널 캐릭터']],
 wizard:[['39','가상 상품'],['05','컬렉션'],['04','상세 탭']],
 memory:[['03','기억 분류'],['02','생성 가드'],['01','AI 파이프라인']],
 stones:[['45,716','분석한 데이터'],['3D','지구본 탐색'],['01','입양소 콘셉트']],
 vinyl:[['04','음악 시장'],['221,700','차트 관측치'],['05','클러스터']]
};
const image = (file,alt, extra='',backup='') => `<div class="image-box ${extra}"><img data-source="${esc(file)}" ${backup?`data-backup="${esc(backup)}"`:''} alt="${esc(alt)}" loading="lazy"><div class="image-fallback"><span>SOY KIM / ARCHIVE</span><b>${esc(alt)}</b><small>PHOTO ARCHIVE</small></div></div>`;
const iconArrow = '<span aria-hidden="true">↗</span>';
const nav = document.querySelector('#sideNav');
const toc = document.querySelector('#toc');
document.querySelector('#workCount').textContent=String(projects.length).padStart(2,'0');
nav.innerHTML=projects.map((p,i)=>`<a class="side-link" href="#project-${esc(p.id)}" data-section="project-${esc(p.id)}"><i>${String(i+1).padStart(2,'0')}</i><span>${esc(p.id==='fashion'?'패션 · 스타일링':p.title)}</span></a>`).join('');
toc.innerHTML=projects.map((p,i)=>`<a href="#project-${esc(p.id)}"><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(p.id==='fashion'?'패션 · 스타일링':p.title)}</strong><em>${esc(p.categoryEn)}</em><b>↗</b></a>`).join('');
// A typographic INDEX plus one considered visual at a time, not a repeating photo grid.
const fashionNode=document.getElementById('fashionVisual');
const fashionPicker=document.getElementById('fashionPicker');
let selectedFashion=0, selectedFashionPhoto=0;
const kindMeta={editorial:['01','EDITORIAL & CAMPAIGN','Magazine / Editorial / Brand'],drama:['02','SCREEN','Drama / Costume'],stage:['03','STAGE & LIVE','Performance / Music']};
const fashionCount=kind=>FASHION_ARCHIVE.filter(x=>x.kind===kind).length;
const fashionIndex=i=>String(i+1).padStart(2,'0');
const albumFile=path=>path.startsWith('http')?path:path;
const safeLink=(url,label)=>url?`<a class="fc-outer-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`:'';
function showFashionPicture(item,idx){
 const visual=fashionNode.querySelector('.fc-photo-block');
 if(!visual)return;
 const file=item.images[idx]||item.images[0];
 const holder=visual.querySelector('.fc-asset');
 const picture=holder.querySelector('img');
 holder.classList.remove('is-loaded','is-broken');
 picture.alt=`${item.source} · ${item.subject} 스타일링 작업 이미지 ${idx+1}`;
 picture.onload=()=>{holder.classList.remove('is-broken');holder.classList.add('is-loaded');holder.dataset.orientation=picture.naturalWidth>picture.naturalHeight?'landscape':'portrait';};
 picture.onerror=()=>holder.classList.add('is-broken');
 picture.src=albumFile(file);
 const caption=visual.querySelector('.fc-caption-index');
 if(caption)caption.textContent=`${String(idx+1).padStart(2,'0')} / ${String(item.images.length).padStart(2,'0')} IMAGE${item.images.length===1?'':'S'}`;
 visual.querySelectorAll('[data-photo]').forEach(btn=>btn.classList.toggle('is-current',Number(btn.dataset.photo)===idx));
}
function showFashionProject(index,scroll=false){
 selectedFashion=(index+FASHION_ARCHIVE.length)%FASHION_ARCHIVE.length;
 selectedFashionPhoto=0;
 const item=FASHION_ARCHIVE[selectedFashion];
 fashionNode.innerHTML=`
  <div class="fc-photo-block">
    <button type="button" class="fc-asset fc-enlarge" id="fcPhotoZoom" aria-label="현재 화보 이미지 크게 보기"><div class="fc-asset-placeholder"><span>${esc(kindMeta[item.kind][1])} · SOY KIM</span><strong>${esc(item.subject)}</strong><small>${esc(item.source)}</small></div><img alt="" loading="eager"><span class="fc-zoom-cta" aria-hidden="true">사진 크게 보기 ↗</span></button>
    <div class="fc-photo-footer"><span>FIG. ${fashionIndex(selectedFashion)} — ${esc(item.label)}</span><span class="fc-caption-index"></span></div>
  </div>
  <div class="fc-story">
    <div class="fc-story-top"><span>${kindMeta[item.kind][0]} / ${esc(item.label)}</span><span>ISSUE 16 — ${fashionIndex(selectedFashion)} / ${FASHION_ARCHIVE.length}</span></div>
    <div class="fc-editorial-folio"><span>FASHION ARCHIVE</span><span>NO. ${fashionIndex(selectedFashion)}</span></div>
    <div class="fc-story-content"><p class="fc-story-kicker">${esc(item.strap)}</p><h3>${esc(item.source)}</h3><p class="fc-story-subject">${esc(item.subject)}</p><p class="fc-story-note">${esc(item.note)}</p></div>
    <div class="fc-work-meta"><span>ROLE / CREDIT</span><p>${esc(item.role)}</p>${item.credit?`<a href="${esc(item.credit)}" target="_blank" rel="noopener noreferrer">크레딧 자료 확인 ↗</a>`:''}</div>
    ${item.images.length>1?`<div class="fc-photostrip"><div class="fc-strip-head"><span>OTHER FRAMES</span><span>${String(item.images.length-1).padStart(2,'0')} CUTS</span></div><div class="fc-strip-images">${item.images.slice(1).map((p,i)=>`<button type="button" data-photo="${i+1}" aria-label="${esc(item.subject)} 다른 작업 이미지 ${i+2}"><img src="${esc(p)}" alt="" loading="lazy"></button>`).join('')}</div></div>`:''}
    <div class="fc-story-bottom">${safeLink(item.link,'프로젝트 영상·원문 보기')}<div class="fc-arrows"><button type="button" id="fcPrev" aria-label="이전 참여 작업">← <small>PREV</small></button><span>${fashionIndex(selectedFashion)} / 16</span><button type="button" id="fcNext" aria-label="다음 참여 작업"><small>NEXT</small> →</button></div></div>
    <nav class="fc-file-ruler" aria-label="16개 참여 작업 빠른 선택"><span class="fc-ruler-label">ARCHIVE INDEX</span><div class="fc-ruler-track">${FASHION_ARCHIVE.map((work,i)=>`<button type="button" class="fc-ruler-mark ${i===selectedFashion?'is-active':''}" data-folio="${i}" aria-current="${i===selectedFashion?'true':'false'}" aria-label="${i+1}번: ${esc(work.source)} · ${esc(work.subject)}" title="${esc(work.source)} — ${esc(work.subject)}"><span>${String(i+1).padStart(2,'0')}</span></button>`).join('')}</div><span class="fc-ruler-label">16 FILES</span></nav>
  </div>`;
 showFashionPicture(item,0);
 if(fashionPicker)fashionPicker.value=String(selectedFashion);

 fashionNode.querySelector('#fcPrev').onclick=()=>showFashionProject(selectedFashion-1);
 fashionNode.querySelector('#fcNext').onclick=()=>showFashionProject(selectedFashion+1);
 fashionNode.querySelector('#fcPhotoZoom').onclick=()=>openFashionZoom(selectedFashionPhoto);
 fashionNode.querySelectorAll('[data-photo]').forEach(btn=>btn.onclick=()=>{selectedFashionPhoto=Number(btn.dataset.photo);showFashionPicture(item,selectedFashionPhoto);openFashionZoom(selectedFashionPhoto);});
 fashionNode.querySelectorAll('[data-folio]').forEach(btn=>btn.onclick=()=>showFashionProject(Number(btn.dataset.folio)));
 if(scroll)fashionNode.scrollIntoView({behavior:'smooth',block:'start'});
}
function setupFashionPicker(){
 if(!fashionPicker)return;
 const kinds=[['editorial','MAGAZINE / CAMPAIGN'],['drama','DRAMA / COSTUME'],['stage','STAGE / LIVE']];
 fashionPicker.innerHTML=kinds.map(([kind,label])=>`<optgroup label="${label}">${FASHION_ARCHIVE.map((v,i)=>({v,i})).filter(x=>x.v.kind===kind).map(({v,i})=>`<option value="${i}">${String(i+1).padStart(2,'0')} · ${esc(v.source)} — ${esc(v.subject)}</option>`).join('')}</optgroup>`).join('');
 fashionPicker.addEventListener('change',()=>showFashionProject(Number(fashionPicker.value)));
}
setupFashionPicker(); showFashionProject(0);
// The edition holds one chosen image at a time; no duplicate giant work directory.


// PHOTO VIEWER / Selected Credits — preserves the original PREV/NEXT between works.
const fashionZoom=document.getElementById('fashionZoom');
const fzImage=document.getElementById('fashionZoomImage');
const fzCaption=document.getElementById('fashionZoomCaption');
let fashionZoomIndex=0, fashionZoomLastFocus=null;
function renderFashionZoom(){
 const item=FASHION_ARCHIVE[selectedFashion];
 fashionZoomIndex=(fashionZoomIndex+item.images.length)%item.images.length;
 fzImage.src=albumFile(item.images[fashionZoomIndex]);
 fzImage.alt=`${item.source} ${item.subject} 화보 ${fashionZoomIndex+1}/${item.images.length}`;
 fzCaption.textContent=`${item.source} / ${item.subject}     ${String(fashionZoomIndex+1).padStart(2,'0')} — ${String(item.images.length).padStart(2,'0')}`;
 const showControls=item.images.length>1;
 document.getElementById('fashionZoomPrev').hidden=!showControls;
 document.getElementById('fashionZoomNext').hidden=!showControls;
 selectedFashionPhoto=fashionZoomIndex;
 showFashionPicture(item,selectedFashionPhoto);
}
function openFashionZoom(index){
 fashionZoomLastFocus=document.activeElement;
 fashionZoomIndex=index;
 renderFashionZoom();
 fashionZoom.hidden=false;
 document.body.classList.add('photo-modal-open');
 document.getElementById('fashionZoomClose').focus();
}
function closeFashionZoom(){
 fashionZoom.hidden=true;
 fzImage.removeAttribute('src');
 document.body.classList.remove('photo-modal-open');
 fashionZoomLastFocus?.focus?.();
}
document.getElementById('fashionZoomClose').addEventListener('click',closeFashionZoom);
document.getElementById('fashionZoomPrev').addEventListener('click',()=>{fashionZoomIndex--;renderFashionZoom();});
document.getElementById('fashionZoomNext').addEventListener('click',()=>{fashionZoomIndex++;renderFashionZoom();});
fashionZoom.addEventListener('click',e=>{if(e.target===fashionZoom)closeFashionZoom();});
document.addEventListener('keydown',e=>{
 if(fashionZoom.hidden)return;
 if(e.key==='Escape'){e.preventDefault();closeFashionZoom();}
 if(e.key==='ArrowLeft'){e.preventDefault();fashionZoomIndex--;renderFashionZoom();}
 if(e.key==='ArrowRight'){e.preventDefault();fashionZoomIndex++;renderFashionZoom();}
});

const tools = ts=>`<ul class="tech-pills">${ts.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`;
const WHY = {
 gyeong:['1930년대 신문 기록은 원문 그대로는 읽히지 않는다는 점에서 출발했습니다.','신문 지면의 세로 단 조판과 먹색·아이보리 팔레트를 그대로 가져와, 기록을 \'읽는\' 감각을 화면에 옮겼습니다.'],
 simmyo:['경성야록 심인광고 속 수배 고양이를 주인공으로 세워, 기록을 읽던 시선을 걷는 시선으로 바꿨습니다.','빈티지 신문 삽화의 굵은 선과 바랜 종이 질감을 조형 언어로 삼았습니다.'],
 pudding:['푸딩의 형태와 디저트의 색에서 출발해, 성격이 다른 다섯 캐릭터를 한 세계로 묶고 싶었습니다.','말랑한 클레이 질감과 파스텔 색으로 캐릭터마다 성격이 구분되도록 설계했습니다.'],
 wizard:['소설 속 \'효과에는 대가가 따른다\'는 규칙을 실제 상점을 둘러보는 경험으로 확인하고 싶었습니다.','쇼핑몰의 상품 카드·컬렉션 문법을 그대로 차용해, 상품 설명 속에 세계관의 대가 규칙이 읽히도록 했습니다.'],
 memory:['AI가 기억의 빈칸을 지어내는 문제를 막는 서비스가 필요하다고 판단했습니다.','확실·불확실·모름을 구분해 보여주는 화면 구성으로, 확인된 정보만 이미지가 되는 흐름을 설계했습니다.'],
 music:['음악을 듣는 일이 한 화면에서 끝나지 않고 역사·가사·영상으로 이어지길 원했습니다.','곡 하나를 중심으로 자료가 펼쳐지는 아카이브형 카드 구성을 택했습니다.'],
 stones:['운석의 발견 위치에 관측 편향이 반영된다는 점이 흥미로워 분석을 시작했습니다.','숫자와 차트를 캐릭터와 입양소 세계관으로 번역해, 데이터를 이야기로 읽도록 디자인했습니다.'],
 vinyl:['차트 숫자를 읽는 대신 손으로 레코드를 고르는 경험으로 데이터를 보여주고 싶었습니다.','LP와 턴테이블이라는 익숙한 사물을 인터페이스로 삼아 순위와 지속성을 탐색하게 했습니다.']
};
const GITHUB = {
 gyeong:'https://github.com/ejdms499-wq/gyeongseong-yarok_v',
 simmyo:'https://github.com/ejdms499-wq/simmyo-walk',
 wizard:'https://github.com/ejdms499-wq/wizard-bakery',
 memory:'https://github.com/ejdms499-wq/memory-gyeol',
 stones:'https://github.com/ejdms499-wq/STRAY_STONES',
 vinyl:'https://github.com/ejdms499-wq/DATA_VINYL'
};
const projectLinks = p=>{
 const base=(p.links||[]).filter(([l])=>l!=='GITHUB SOURCE');
 if(GITHUB[p.id]){const i=base.findIndex(([l])=>l==='LIVE WEBSITE');base.splice(i<0?0:i+1,0,['GITHUB SOURCE',GITHUB[p.id]]);}
 return base;
};
const shortUrl = u=>{try{const x=new URL(u,location.href);if(/^https?:$/.test(x.protocol)&&x.host!==location.host)return (x.host+x.pathname).replace(/\/$/,'');}catch(e){}return u.split('/').pop();};
const links = ls=>ls.map(([label,url])=>`<a class="pl-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer"><b>${esc(label)}</b><em>${esc(shortUrl(url))}</em><span aria-hidden="true">↗</span></a>`).join('');
const whyBlock = p=>!WHY[p.id]?'':`<div class="why-block"><div class="why-head"><span>WHY THIS PROJECT</span><span>기획 배경 · 디자인</span></div><p><b>WHY</b>${esc(WHY[p.id][0])}</p><p><b>DESIGN</b>${esc(WHY[p.id][1])}</p></div>`;
const metricsCode=p=>!metrics[p.id]?'':`<div class="project-metrics">${metrics[p.id].map(([num,label])=>`<div><strong>${esc(num)}</strong><span>${esc(label)}</span></div>`).join('')}</div>`;
const slideSrc = (p,num)=>LOCAL_DECK[p.id] && num<=LOCAL_DECK[p.id]
 ? `assets/decks/${p.id}/s_${String(num).padStart(2,'0')}.webp`
 : `${SOURCE}${p.deck.dir}/s_${String(num).padStart(2,'0')}.jpg`;
const gallery=p=>p.gallery?.length?`<div class="project-gallery"><div class="tiny-heading"><span>ADDITIONAL VISUALS</span><span>${String(p.gallery.length).padStart(2,'0')} ORIGINAL FRAMES</span></div><div class="gallery-row">${p.gallery.map((im,i)=>`<a href="${esc(asset(im))}" target="_blank" rel="noopener noreferrer">${image(im,`${p.title} 작업 이미지 ${i+1}`,'gallery-image',LOCAL_COVERS[im]||'')}</a>`).join('')}</div></div>`:'';
const frames = p=>{
 const out=[];
 if(p.cover)out.push({src:LOCAL_COVERS[p.cover]||asset(p.cover),label:'ORIGINAL PROJECT THUMBNAIL'});
 (p.gallery||[]).forEach((g,i)=>out.push({src:LOCAL_COVERS[g]||asset(g),label:`ADDITIONAL VISUAL ${String(i+1).padStart(2,'0')}`}));
 return out;
};
const deckFrames = p=>p.deck?Array.from({length:p.deck.count},(_,i)=>({src:slideSrc(p,i+1)})):[];
const deck=p=>!p.deck?'':`<div class="deck" data-id="${esc(p.id)}" data-dir="${esc(p.deck.dir)}" data-max="${p.deck.count}" data-current="1">
  <div class="deck-heading"><span class="deck-title">PRESENTATION / ORIGINAL SLIDES</span><span class="deck-count">${String(p.deck.count).padStart(2,'0')} PAGES</span><button type="button" class="deck-open-button" data-open-deck="1" aria-label="${esc(p.title)} 발표자료 첫 번째 슬라이드 크게 보기">슬라이드 크게 보기 <span aria-hidden="true">↗</span></button></div>
  <div class="deck-gallery">
   <div class="deck-track" tabindex="0" aria-label="${esc(p.title)} PPT 슬라이드 목록">
    ${Array.from({length:p.deck.count},(_,i)=>`<button class="deck-thumb" type="button" data-slide="${i+1}" aria-label="${esc(p.title)} 슬라이드 ${i+1} 확대"><img src="${slideSrc(p,i+1)}" alt="${esc(p.title)} 기획서 ${i+1}페이지" loading="lazy"><span>${String(i+1).padStart(2,'0')}</span></button>`).join('')}
   </div>
   <div class="deck-controls"><span>SLIDE ARCHIVE <i aria-hidden="true">/</i> 썸네일을 누르면 확대됩니다</span><div class="deck-scroll-nav"><button type="button" data-slide-scroll="-1" aria-label="이전 슬라이드 목록">←</button><button type="button" data-slide-scroll="1" aria-label="다음 슬라이드 목록">→</button></div></div>
  </div>
 </div>`;
const slider = (p,n)=>{
 const f=frames(p);if(!f.length)return '';
 return `<div class="pslider" data-id="${esc(p.id)}" data-max="${f.length}" aria-label="${esc(p.title)} 이미지·발표자료 슬라이더">
  <div class="pslider-frame"><button type="button" class="pslider-zoom" data-pzoom aria-label="${esc(p.title)} 현재 이미지 크게 보기"><img alt="${esc(p.title)}" decoding="async"><span class="pslider-cta" aria-hidden="true">크게 보기 ↗</span></button></div>
  <div class="pslider-footer"><span class="pslider-fig">FIG ${String(n).padStart(2,'0')} — ${esc(f[0].label)}</span><span class="pslider-count"></span></div>
  ${f.length>1?`<div class="pslider-others"><div class="pslider-others-head"><span>OTHER FRAMES</span><span>${String(f.length-1).padStart(2,'0')} CUTS</span></div><div class="pslider-others-row">${f.slice(1).map((x,i)=>`<button type="button" data-pgo="${i+1}" aria-label="${esc(p.title)} 다른 이미지 ${i+2}"><img src="${esc(x.src)}" alt="" loading="lazy"></button>`).join('')}</div></div>`:''}
  <div class="pslider-bar"><button type="button" data-pstep="-1" aria-label="이전 이미지">← <small>PREV</small></button><div class="pslider-ruler" role="tablist" aria-label="${esc(p.title)} 이미지 선택">${f.map((_,i)=>`<button type="button" data-pgo="${i}" aria-label="${i+1}번째 이미지">${String(i+1).padStart(2,'0')}</button>`).join('')}</div><button type="button" data-pstep="1" aria-label="다음 이미지"><small>NEXT</small> →</button></div>
 </div>`;
};
const digital=projects.filter(p=>p.id!=='fashion');
document.getElementById('projectSections').innerHTML=digital.map((p,i)=>{
 if(p.id==='method')return `<section class="method-spread" id="project-method" aria-labelledby="title-method">
 <div class="tiny-heading"><span>STORY ${String(i+2).padStart(2,'0')} / CREATIVE PRACTICE</span><span>VISUAL DIRECTION / SOY KIM</span></div>
 <div class="method-head"><div><span class="project-brow">THE PROCESS / A WAY OF SEEING</span><h2 id="title-method">MAKE IT<br><em>MEANINGFUL.</em></h2></div><span class="method-index">0${i+2} / ${String(projects.length).padStart(2,'0')}</span></div>
 <div class="method-deck"><div class="method-lede"><span>김소이의 제작 방식</span><p>무엇을 보여줄지보다,<br>어떻게 보게 할지를 먼저 고민합니다.</p><small>패션의 현장 경험을 출발점으로 리서치, 비주얼 언어, 작동하는 인터랙션을 하나의 결과물로 연결합니다.</small></div>
 <ol class="method-steps"><li><b>01 <span>OBSERVE</span></b><h3>관찰하고<br>핵심을 찾습니다.</h3><p>소재가 가진 시대적·문화적 맥락, 사용자 경험, 이미지의 시선을 조사합니다.</p><i>RESEARCH / POINT OF VIEW</i></li><li><b>02 <span>DIRECT</span></b><h3>고유한<br>시각 언어를 만듭니다.</h3><p>콘셉트부터 타이포그래피, 이미지 배치, 장면의 리듬까지 정리합니다.</p><i>ART DIRECTION / VISUAL SYSTEM</i></li><li><b>03 <span>BUILD</span></b><h3>직접 움직이는<br>경험으로 구현합니다.</h3><p>프로토타입을 만들고 피드백을 반영해 정보와 감각이 함께 읽히도록 다듬습니다.</p><i>PROTOTYPE / INTERACTION</i></li></ol></div>
 <div class="method-footer"><span>FROM FASHION STYLING TO INTERACTIVE CONTENT</span><a href="#contents">BACK TO INDEX ↗</a></div></section>`;
 return `<section class="project-spread" id="project-${esc(p.id)}" aria-labelledby="title-${esc(p.id)}">
 <div class="tiny-heading"><span>STORY ${String(i+2).padStart(2,'0')} / ${esc(p.overline)}</span><span>${esc(p.year)} / SOY KIM</span></div>
 <div class="project-spread-grid">
   <div class="project-info">
    <header class="project-heading"><div><div class="project-heading-overline"><span class="project-brow">${esc(p.category)} / CASE STUDY</span><span class="project-mini-folio">${String(i+2).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span></div><h2 id="title-${esc(p.id)}">${esc(p.title)}</h2><p>${esc(p.lead)}</p></div></header>
    <p class="project-description">${esc(p.description)}</p>
    ${whyBlock(p)}
    ${metricsCode(p)}
    <dl><div><dt>MY ROLE</dt><dd>${esc(p.role)}</dd></div><div><dt>CONTEXT</dt><dd>${esc(p.overline)}</dd></div><div><dt>TOOLS</dt><dd>${tools(p.tools)}</dd></div></dl>
    ${projectLinks(p).length?`<div class="project-links">${links(projectLinks(p))}</div>`:''}
    
   </div>
   <div class="project-media">
    ${slider(p,i+1)}
    ${deck(p)}
   </div>
 </div>
 <div class="project-end"><span>END / ${String(i+2).padStart(2,'0')}</span><a href="#contents">BACK TO INDEX ↑</a>${digital[i+1]?`<a class="next-story" href="#project-${esc(digital[i+1].id)}">NEXT STORY →</a>`:`<a class="next-story" href="#about">NEXT / ABOUT →</a>`}</div>
 </section>`;}).join('');
// Images use the user's original hosted assets. A supplied screenshot crop is a local fallback where available.
function loadImages(){document.querySelectorAll('img[data-source]').forEach(im=>{
 const box=im.closest('.image-box');
 im.addEventListener('load',()=>{box?.classList.add('loaded'); const fallback=box?.querySelector('.image-fallback');if(fallback)fallback.setAttribute('aria-hidden','true');});
 im.addEventListener('error',()=>{
  if(im.dataset.backup && !im.dataset.triedBackup){im.dataset.triedBackup='1';im.src=im.dataset.backup;}
  else box?.classList.add('missing');
 });
 // For bundled original project covers, load the local copy immediately.
 // This avoids a blank thumbnail when remote image hosting is inaccessible.
 if(im.dataset.backup){ im.dataset.triedBackup='1'; im.src=im.dataset.backup; }
 else im.src=asset(im.dataset.source);
});}
loadImages();
const lightbox=document.getElementById('lightbox'),lightPhoto=document.getElementById('lightPhoto'),lightCaption=document.getElementById('lightCaption');
let lbFrames=[],lbIndex=0,lbTitle='',previousFocus=null;
function lbShow(){const max=lbFrames.length;lbIndex=((lbIndex%max)+max)%max;lightPhoto.src=lbFrames[lbIndex].src;lightPhoto.alt=`${lbTitle} ${lbIndex+1}번째 이미지`;lightCaption.textContent=`${lbTitle} — ${String(lbIndex+1).padStart(2,'0')} / ${String(max).padStart(2,'0')}`;}
function openFrames(list,title,index){lbFrames=list;lbTitle=title;lbIndex=index;previousFocus=document.activeElement;lbShow();lightbox.hidden=false;document.body.classList.add('modal-open');document.getElementById('closeBox').focus();}
function closeSlide(){lightbox.hidden=true;document.body.classList.remove('modal-open');lightPhoto.removeAttribute('src');lbFrames=[];previousFocus?.focus?.();}
const sliderState={};
function sliderShow(el,index){
 const p=sourceProjects.find(x=>x.id===el.dataset.id),f=frames(p),max=f.length;
 index=((index%max)+max)%max;sliderState[p.id]=index;
 const img=el.querySelector('.pslider-frame img');
 const frame=el.querySelector('.pslider-frame');
 frame.classList.remove('is-broken');
 img.onerror=()=>frame.classList.add('is-broken');
 img.onload=()=>{frame.dataset.orientation=img.naturalWidth>=img.naturalHeight?'landscape':'portrait';};
 img.src=f[index].src;
 el.querySelector('.pslider-fig').textContent=`FIG ${el.querySelector('.pslider-fig').textContent.match(/FIG (\d+)/)[1]} — ${f[index].label}`;
 el.querySelector('.pslider-count').textContent=`${String(index+1).padStart(2,'0')} / ${String(max).padStart(2,'0')}`;
 const marks=[...el.querySelectorAll('[data-pgo]')];
 marks.forEach((m,i)=>{m.classList.toggle('is-active',i===index);m.setAttribute('aria-selected',String(i===index));});
 const ruler=el.querySelector('.pslider-ruler'),cur=marks[index];
 if(cur&&ruler.scrollWidth>ruler.clientWidth)ruler.scrollTo({left:cur.offsetLeft-ruler.clientWidth/2+cur.offsetWidth/2,behavior:'smooth'});
 el.querySelectorAll('[data-pstep]').forEach(b=>b.hidden=max<2);
 el.querySelector('.pslider-ruler').hidden=max<2;
}
document.querySelectorAll('.pslider').forEach(el=>{
 sliderShow(el,0);
 let x0=null;
 const fr=el.querySelector('.pslider-frame');
 fr.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;},{passive:true});
 fr.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>40)sliderShow(el,(sliderState[el.dataset.id]||0)+(dx<0?1:-1));});
 el.tabIndex=0;
 el.addEventListener('keydown',e=>{if(e.target!==el)return;if(e.key==='ArrowLeft'){e.preventDefault();sliderShow(el,(sliderState[el.dataset.id]||0)-1);}if(e.key==='ArrowRight'){e.preventDefault();sliderShow(el,(sliderState[el.dataset.id]||0)+1);}});
});
document.addEventListener('click',e=>{
 const step=e.target.closest('[data-pstep]');if(step){const el=step.closest('.pslider');sliderShow(el,(sliderState[el.dataset.id]||0)+Number(step.dataset.pstep));return;}
 const go=e.target.closest('[data-pgo]');if(go){sliderShow(go.closest('.pslider'),Number(go.dataset.pgo));return;}
 const zoom=e.target.closest('[data-pzoom]');if(zoom){const el=zoom.closest('.pslider');const pr=sourceProjects.find(x=>x.id===el.dataset.id);openFrames(frames(pr),pr.title,sliderState[el.dataset.id]||0);return;}
 const dOpen=e.target.closest('[data-open-deck]');if(dOpen){const pr=sourceProjects.find(x=>x.id===dOpen.closest('.deck').dataset.id);openFrames(deckFrames(pr),pr.title+' · PPT',0);return;}
 const dThumb=e.target.closest('.deck-thumb');if(dThumb){const pr=sourceProjects.find(x=>x.id===dThumb.closest('.deck').dataset.id);openFrames(deckFrames(pr),pr.title+' · PPT',Number(dThumb.dataset.slide)-1);return;}
 const dScroll=e.target.closest('[data-slide-scroll]');if(dScroll){const track=dScroll.closest('.deck').querySelector('.deck-track');track.scrollBy({left:track.clientWidth*.72*Number(dScroll.dataset.slideScroll),behavior:'smooth'});return;}
 const link=e.target.closest('.side-link');if(link){document.querySelector('.side').classList.remove('open');document.getElementById('menuToggle').setAttribute('aria-expanded','false');}
});
document.getElementById('closeBox').onclick=closeSlide;
document.getElementById('boxPrev').onclick=()=>{if(lbFrames.length){lbIndex--;lbShow();}};
document.getElementById('boxNext').onclick=()=>{if(lbFrames.length){lbIndex++;lbShow();}};
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeSlide();});
document.addEventListener('keydown',e=>{if(lightbox.hidden)return;if(e.key==='Escape')closeSlide();if(e.key==='ArrowLeft')document.getElementById('boxPrev').click();if(e.key==='ArrowRight')document.getElementById('boxNext').click();});
const menu=document.getElementById('menuToggle');menu.onclick=()=>{const open=document.querySelector('.side').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));};
// ISSUE 12: active folio marker follows the actual reading position.
const readerLinks=[...document.querySelectorAll('.side-link')];
const readerSections=readerLinks.map(a=>document.getElementById(a.dataset.section));
let readerTick=false;
function updateReader(){
 readerTick=false;
 const threshold=innerHeight*.36;
 let selected=-1;
 readerSections.forEach((section,i)=>{if(section && section.getBoundingClientRect().top<=threshold) selected=i;});
 if(selected<0 && readerSections[0] && readerSections[0].getBoundingClientRect().top<innerHeight*.8) selected=0;
 readerLinks.forEach((a,i)=>{const active=i===selected;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
 const label=document.querySelector('#readerProgressLabel');
 if(label)label.textContent=selected<0?'— / 10':String(selected+1).padStart(2,'0')+' / '+String(readerLinks.length).padStart(2,'0');
 const bar=document.querySelector('#readerProgressBar');
 if(bar)bar.style.transform='scaleX('+Math.max(0,(selected+1)/readerLinks.length)+')';
}
window.addEventListener('scroll',()=>{if(!readerTick){readerTick=true;requestAnimationFrame(updateReader)}},{passive:true});
window.addEventListener('resize',()=>{if(!readerTick){readerTick=true;requestAnimationFrame(updateReader)}},{passive:true});
updateReader();
})();
