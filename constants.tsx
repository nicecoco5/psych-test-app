
import { Question, PersonalityType } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: "사회적 에너지",
    question: "주말 저녁, 친구가 갑자기 약속을 잡는다면?",
    options: [
      { text: "  좋아! 바로 나가자!", scores: { E: 3 } },
      { text: "  괜찮은데, 어디서 뭐 해?", scores: { E: 1, C: 1 } },
      { text: "  오늘은 좀 쉬고 싶은데...", scores: { I: 2 } },
      { text: "  미안, 다음에 만나자", scores: { I: 3 } },
    ]
  },
  {
    id: 2,
    category: "의사결정 스타일",
    question: "새로운 프로젝트를 시작할 때?",
    options: [
      { text: "  일단 시작하고 수정하면서 간다", scores: { P: 3, O: 1 } },
      { text: "  큰 그림을 그리고 시작한다", scores: { O: 2, C: 1 } },
      { text: "  계획을 세밀하게 짠다", scores: { C: 3 } },
      { text: "  비슷한 프로젝트 경험을 참고한다", scores: { S: 2, C: 1 } },
    ]
  },
  {
    id: 3,
    category: "공감 스타일",
    question: "친구가 힘든 고민을 털어놓을 때?",
    options: [
      { text: "  같이 공감하며 위로한다", scores: { F: 3, A: 1 } },
      { text: "  해결책을 제시한다", scores: { T: 3 } },
      { text: "  조용히 들어준다", scores: { A: 2, I: 1 } },
      { text: "  비슷한 내 경험을 이야기한다", scores: { E: 2, F: 1 } },
    ]
  },
  {
    id: 4,
    category: "스트레스 대처",
    question: "스트레스를 받을 때 당신은?",
    options: [
      { text: "  사람들과 만나서 푼다", scores: { E: 3 } },
      { text: "  운동이나 취미로 발산한다", scores: { N: 2, O: 1 } },
      { text: "  혼자 조용히 쉰다", scores: { I: 3 } },
      { text: "  잠을 자거나 멍 때린다", scores: { I: 2, S: 1 } },
    ]
  },
  {
    id: 5,
    category: "변화 대응",
    question: "여행지에서 계획에 없던 장소를 발견했다면?",
    options: [
      { text: "  당연히 들어가본다!", scores: { O: 3, P: 2 } },
      { text: "  정보를 찾아보고 결정한다", scores: { C: 2, T: 1 } },
      { text: "  일정이 괜찮으면 간다", scores: { A: 2 } },
      { text: "  원래 계획대로 간다", scores: { S: 3, C: 1 } },
    ]
  },
  {
    id: 6,
    category: "팀 역할",
    question: "팀 프로젝트에서 당신의 자연스러운 역할은?",
    options: [
      { text: "  리더로서 팀을 이끈다", scores: { E: 3, N: 1 } },
      { text: "  창의적 아이디어를 제안한다", scores: { O: 3 } },
      { text: "  분위기를 부드럽게 만든다", scores: { A: 3 } },
      { text: "  맡은 일을 완벽히 해낸다", scores: { C: 3 } },
    ]
  },
  {
    id: 7,
    category: "의사 표현",
    question: "SNS에 글을 쓸 때?",
    options: [
      { text: "  생각나는 대로 바로 올린다", scores: { E: 2, P: 2 } },
      { text: "  신중하게 고민 후 올린다", scores: { I: 2, C: 1 } },
      { text: "  편집하고 다듬어서 올린다", scores: { C: 2, F: 1 } },
      { text: "  거의 안 올린다", scores: { I: 3 } },
    ]
  },
  {
    id: 8,
    category: "변화 수용",
    question: "갑작스러운 계획 변경이 생긴다면?",
    options: [
      { text: "  오히려 좋아! 새로운 기회다", scores: { O: 3, E: 1 } },
      { text: "  일단 적응해본다", scores: { A: 2 } },
      { text: "  불안하지만 해낸다", scores: { C: 2, I: 1 } },
      { text: "  당황스럽고 힘들다", scores: { S: 3 } },
    ]
  }
];

export const GROWTH_QUESTIONS: Question[] = [
  {
    id: 1,
    category: "자기 주도성",
    question: "외부 압박 없이 스스로 목표를 세우고 주도적으로 시작하는가?",
    options: [
      { text: "  전혀 아니다", scores: { SCORE: 1 } },
      { text: "  아니다", scores: { SCORE: 2 } },
      { text: "  보통이다", scores: { SCORE: 3 } },
      { text: "  그렇다", scores: { SCORE: 4 } },
      { text: "  매우 그렇다", scores: { SCORE: 5 } },
    ]
  },
  {
    id: 2,
    category: "회복 탄력성",
    question: "실패나 역경 후 다시 일어서는 회복 속도가 빠른가?",
    options: [
      { text: "  전혀 아니다", scores: { SCORE: 1 } },
      { text: "  아니다", scores: { SCORE: 2 } },
      { text: "  보통이다", scores: { SCORE: 3 } },
      { text: "  그렇다", scores: { SCORE: 4 } },
      { text: "  매우 그렇다", scores: { SCORE: 5 } },
    ]
  },
  {
    id: 3,
    category: "개방성",
    question: "새로운 지식이나 변화를 수용하고 시도하는 데 거부감이 없는가?",
    options: [
      { text: "  전혀 아니다", scores: { SCORE: 1 } },
      { text: "  아니다", scores: { SCORE: 2 } },
      { text: "  보통이다", scores: { SCORE: 3 } },
      { text: "  그렇다", scores: { SCORE: 4 } },
      { text: "  매우 그렇다", scores: { SCORE: 5 } },
    ]
  },
  {
    id: 4,
    category: "지속성",
    question: "정해진 루틴이나 계획을 포기하지 않고 끝까지 완수하는가?",
    options: [
      { text: "  전혀 아니다", scores: { SCORE: 1 } },
      { text: "  아니다", scores: { SCORE: 2 } },
      { text: "  보통이다", scores: { SCORE: 3 } },
      { text: "  그렇다", scores: { SCORE: 4 } },
      { text: "  매우 그렇다", scores: { SCORE: 5 } },
    ]
  },
  {
    id: 5,
    category: "메타인지",
    question: "자신의 강점과 약점을 객관적으로 파악하고 있는가?",
    options: [
      { text: "  전혀 아니다", scores: { SCORE: 1 } },
      { text: "  아니다", scores: { SCORE: 2 } },
      { text: "  보통이다", scores: { SCORE: 3 } },
      { text: "  그렇다", scores: { SCORE: 4 } },
      { text: "  매우 그렇다", scores: { SCORE: 5 } },
    ]
  }
];

export const PERSONALITY_TYPES: PersonalityType[] = [
  {
    id: "EO",
    testId: 'PERSONALITY',
    title: "모험가형",
    englishTitle: "The Adventurer",
    emoji: "🚀",
    oneLiner: "새로운 경험을 즐기는 자유로운 영혼",
    themeColor: "#f9a8d4",
    imagePath: "/images/personality_eo.png",
    characterPrompt: "Adorable chibi kitty with big sparkling eyes, wearing a cool futuristic rocket backpack, jumping with joy inside a bright circular background, kawaii pop-art sticker style, thick black outlines, vivid sky blue and hot pink color palette, flat vector illustration, super cute adventure vibe.",
    description: "당신은 일상의 틀을 벗어나 새로운 것을 시도하는 걸 좋아합니다. 변화를 두려워하지 않고 오히려 즐기며, 틀에 박힌 루틴보다는 예측 불가능한 모험을 선호합니다. 창의적 아이디어가 샘솟고 빠르게 행동으로 옮기는 당신은 주변에 활력을 불어넣습니다.",
    keywords: ["⚡ 창의적", "🎨 모험적", "🌟 열정적"],
    powers: [
      { emoji: "💪", title: "창의성", desc: "독창적 아이디어" },
      { emoji: "🎨", title: "적응력", desc: "유연한 사고" },
      { emoji: "⚡", title: "열정", desc: "에너지 넘침" },
      { emoji: "🌟", title: "개방성", desc: "새로운 시도" },
      { emoji: "🚀", title: "도전정신", desc: "두려움 없음" },
      { emoji: "🎯", title: "행동력", desc: "빠른 실행" }
    ],
    jobs: {
      top: [
        { title: "크리에이터", desc: "콘텐츠를 만드는 자유로운 일", icon: "💼" },
        { title: "스타트업 창업가", desc: "무에서 유를 창조하는 도전", icon: "🚀" },
        { title: "여행 작가", desc: "세계를 누비며 글을 쓰는 삶", icon: "🗺️" }
      ],
      others: ["프리랜서", "광고 기획자", "예술가"]
    },
    loveStyle: "데이트는 늘 새로워야 해! 루틴은 NO 🙅‍♀️",
    scarcity: 12,
    growth: "가끔은 계획도 필요해요. 작은 루틴을 만들어 실행력을 높여보세요!",
    celebs: ["일론 머스크", "레이디 가가가"],
    match: { good: "분석가형", complementary: "중재자형" },
    traits: ['E', 'O']
  },
  {
    id: "EC",
    testId: 'PERSONALITY',
    title: "리더형",
    englishTitle: "The Leader",
    emoji: "👑",
    themeColor: "#bae6fd",
    imagePath: "/images/personality_ec.png",
    characterPrompt: "Adorable chibi shiba inu dog wearing a tiny golden crown and a royal red cape, sitting proudly inside a perfect bright circular background, kawaii pop-art sticker style, thick black outlines, royal blue and gold colors, flat vector illustration, cute and confident leader look.",
    oneLiner: "목표를 향해 팀을 이끄는 타고난 리더",
    description: "사교적이면서도 체계적인 당신은 팀을 이끄는 데 타고난 재능이 있습니다. 명확한 목표를 세우고 효율적으로 달성하는 추진력이 강하며, 책임감 있게 일을 완수합니다. 사람들과 소통하며 함께 성장하는 걸 즐깁니다.",
    keywords: ["👑 리더십", "🎯 추진력", "📋 계획성"],
    powers: [
      { emoji: "👑", title: "리더십", desc: "사람을 이끄는 힘" },
      { emoji: "🎯", title: "추진력", desc: "목표 달성" },
      { emoji: "📋", title: "계획성", desc: "체계적 사고" },
      { emoji: "💬", title: "소통력", desc: "명확한 전달" },
      { emoji: "🤝", title: "책임감", desc: "끝까지 완수" },
      { emoji: "💪", title: "결단력", desc: "빠른 의사결정" }
    ],
    jobs: {
      top: [
        { title: "경영자", desc: "기업을 이끄는 선봉장", icon: "🏢" },
        { title: "프로젝트 매니저", desc: "일정을 관리하는 사령탑", icon: "📋" },
        { title: "컨설턴트", desc: "해답을 제시하는 전문가", icon: "🧠" }
      ],
      others: ["교육자", "정치인", "영업 리더"]
    },
    loveStyle: "계획적이고 진지한 관계를 선호해요",
    scarcity: 18,
    growth: "완벽주의를 내려놓고 팀원에게 더 많이 위임해보세요.",
    celebs: ["버락 오바마", "오프라 윈프리"],
    match: { good: "친화형", complementary: "수호자형" },
    traits: ['E', 'C']
  },
  {
    id: "EF",
    testId: 'PERSONALITY',
    title: "친화형",
    englishTitle: "The Sunshine",
    emoji: "🌻",
    themeColor: "#fee440",
    imagePath: "/images/personality_ef.png",
    characterPrompt: "Adorable round chibi sun monster with a bright yellow flower petal mane and a huge happy smile, inside a warm peach circular background, kawaii pop-art sticker style, thick black outlines, vibrant yellow and orange colors, flat vector illustration, joyful and friendly energy.",
    oneLiner: "따뜻한 마음으로 사람들을 끌어안는 햇살",
    description: "사람들과 함께 있을 때 가장 행복한 당신. 공감 능력이 뛰어나고 다른 사람의 감정을 잘 이해합니다. 자연스럽게 분위기를 밝게 만들고 주변 사람들에게 긍정적인 에너지를 전달합니다.",
    keywords: ["💝 공감", "🌻 친화력", "✨ 긍정"],
    powers: [
      { emoji: "💝", title: "공감능력", desc: "마음을 이해" },
      { emoji: "🌻", title: "친화력", desc: "누구와도 친해짐" },
      { emoji: "✨", title: "긍정성", desc: "밝은 에너지" },
      { emoji: "🤝", title: "협력", desc: "팀워크 중시" },
      { emoji: "💬", title: "경청", desc: "잘 들어줌" },
      { emoji: "🎨", title: "감수성", desc: "섬세한 마음" }
    ],
    jobs: {
      top: [
        { title: "상담사", desc: "마음을 치유하는 일", icon: "🛋️" },
        { title: "HR 담당자", desc: "사람을 성장시키는 일", icon: "🤝" },
        { title: "간호사", desc: "생명을 돌보는 숭고한 일", icon: "🏥" }
      ],
      others: ["서비스업", "유치원 교사", "소셜워커"]
    },
    loveStyle: "감정 교류가 풍부한 연애를 좋아해요 💕",
    scarcity: 16,
    growth: "타인의 감정도 중요하지만, 자신의 감정도 돌봐주세요.",
    celebs: ["엘렌 드제너러스", "지미 팰런"],
    match: { good: "중재자형", complementary: "리더형" },
    traits: ['E', 'F']
  },
  {
    id: "IO",
    testId: 'PERSONALITY',
    title: "사색가형",
    englishTitle: "The Thinker",
    emoji: "🎨",
    themeColor: "#9b5de5",
    imagePath: "/images/personality_io.png",
    characterPrompt: "Adorable chibi cosmic owl wearing a small artist beret and holding a paintbrush, feathers with nebula patterns, sitting inside a mystical purple circular background with tiny stars, kawaii pop-art sticker style, thick black outlines, deep indigo and violet colors, flat vector illustration, creative and deep thinker look.",
    oneLiner: "깊이 있는 내면 세계를 가진 예술가",
    description: "내면의 세계가 풍부한 당신은 독창적이고 철학적인 사고를 합니다. 혼자만의 시간을 통해 에너지를 충전하며, 깊이 있는 사색과 창의적 표현을 즐깁니다. 평범함보다는 의미 있는 것을 추구합니다.",
    keywords: ["🎨 창의성", "💭 통찰력", "🌙 독창성"],
    powers: [
      { emoji: "🎨", title: "창의성", desc: "예술적 감각" },
      { emoji: "💭", title: "통찰력", desc: "깊은 이해" },
      { emoji: "🌙", title: "독창성", desc: "차별화된 시각" },
      { emoji: "📚", title: "집중력", desc: "몰입의 힘" },
      { emoji: "🧘", title: "성찰", desc: "자기 이해" },
      { emoji: "✍️", title: "표현력", desc: "독특한 표현" }
    ],
    jobs: {
      top: [
        { title: "작가", desc: "글로 세상을 그리는 사람", icon: "✍️" },
        { title: "예술가", desc: "감각을 창조하는 사람", icon: "🎨" },
        { title: "연구원", desc: "진리를 탐구하는 사람", icon: "🧪" }
      ],
      others: ["디자이너", "철학자", "음악가"]
    },
    loveStyle: "깊고 의미 있는 관계를 원해요",
    scarcity: 10,
    growth: "가끔은 바깥 세상과 연결되는 시간을 가져보세요.",
    celebs: ["뱅크시", "하루키"],
    match: { good: "혁신가형", complementary: "분석가형" },
    traits: ['I', 'O']
  },
  {
    id: "IC",
    testId: 'PERSONALITY',
    title: "분석가형",
    englishTitle: "The Analyst",
    emoji: "🔬",
    themeColor: "#00f5d4",
    imagePath: "/images/personality_ic.png",
    characterPrompt: "Adorable chibi robotic kitty with large sparkling expressive eyes and cute glowing holographic glasses, sitting inside a perfect bright circular background with soft binary code patterns, kawaii pop-art sticker style, thick black outlines, mint green and silver metallic color palette, flat vector illustration, super cute and smart look.",
    oneLiner: "논리적이고 체계적인 문제 해결사",
    description: "신중하고 분석적인 당신은 논리와 데이터를 바탕으로 의사결정합니다. 체계적으로 계획을 세우고 정확하게 실행하는 걸 중요하게 생각합니다. 복잡한 문제를 차근차근 해결하는 능력이 뛰어납니다.",
    keywords: ["🔬 논리", "📊 체계", "🎯 정확성"],
    powers: [
      { emoji: "🔬", title: "분석력", desc: "정확한 판단" },
      { emoji: "📊", title: "체계성", desc: "구조화된 사고" },
      { emoji: "🎯", title: "정확성", desc: "꼼꼼함" },
      { emoji: "🧠", title: "논리", desc: "이성적 판단" },
      { emoji: "📚", title: "전문성", desc: "깊은 지식" },
      { emoji: "🔍", title: "신중함", desc: "철저한 검토" }
    ],
    jobs: {
      top: [
        { title: "데이터 분석가", desc: "숫자 속 의미를 찾는 일", icon: "📊" },
        { title: "회계사", desc: "정확함을 다루는 일", icon: "📉" },
        { title: "S/W 엔지니어", desc: "논리로 세상을 코딩함", icon: "💻" }
      ],
      others: ["연구원", "금융 전문가", "품질 관리자"]
    },
    loveStyle: "안정적이고 신뢰할 수 있는 관계 선호",
    scarcity: 20,
    growth: "때로는 직관도 중요해요. 분석만큼 느낌도 믿어보세요.",
    celebs: ["빌 게이츠", "마크 저커버그"],
    match: { good: "모험가형", complementary: "수호자형" },
    traits: ['I', 'C']
  },
  {
    id: "IA",
    testId: 'PERSONALITY',
    title: "수호자형",
    englishTitle: "The Guardian",
    emoji: "🛡️",
    themeColor: "#86efac",
    imagePath: "/images/personality_ia.png",
    characterPrompt: "Adorable chibi turtle with a tiny forest garden on its shell, peaceful and reliable expression, sitting inside a soft green circular background, kawaii pop-art sticker style, thick black outlines, forest green and earthy brown colors, flat vector illustration, calm and stable look.",
    oneLiner: "조용하지만 든든한 지원군",
    description: "신뢰할 수 있고 성실한 당신은 묵묵히 자기 역할을 다합니다. 화려하지 않지만 꾸준하고 책임감 있게 일을 완수하며, 주변 사람들을 조용히 지원합니다. 안정적이고 믿을 수 있는 존재입니다.",
    keywords: ["🛡️ 신뢰", "🌾 성실", "💙 헌신"],
    powers: [
      { emoji: "🛡️", title: "신뢰성", desc: "믿을 수 있음" },
      { emoji: "🌾", title: "성실함", desc: "꾸준한 노력" },
      { emoji: "💙", title: "헌신", desc: "책임감" },
      { emoji: "🤝", title: "협력", desc: "팀 지원" },
      { emoji: "📋", title: "체계", desc: "질서 유지" },
      { emoji: "🏠", title: "안정", desc: "평화 추구" }
    ],
    jobs: {
      top: [
        { title: "행정직", desc: "질서를 만드는 꼼꼼한 일", icon: "📑" },
        { title: "사서", desc: "지식을 정리하고 지키는 일", icon: "📚" },
        { title: "의료 기술자", desc: "정확한 기술로 돕는 일", icon: "🔬" }
      ],
      others: ["회계사", "공무원", "품질 관리"]
    },
    loveStyle: "오래 지속되는 안정적 관계를 원해요",
    scarcity: 15,
    growth: "당신의 의견도 중요해요. 더 적극적으로 표현해보세요.",
    celebs: ["팀 던컨", "케이트 미들턴"],
    match: { good: "리더형", complementary: "중재자형" },
    traits: ['I', 'A']
  },
  {
    id: "AF",
    testId: 'PERSONALITY',
    title: "중재자형",
    englishTitle: "The Mediator",
    emoji: "🕊️",
    themeColor: "#fecdd3",
    imagePath: "/images/personality_af.png",
    characterPrompt: "Adorable fluffy chibi cloud-sheep holding a tiny green leaf, peaceful closed eyes, sitting inside a soft pastel pink circular background, kawaii pop-art sticker style, thick black outlines, marshmallow white and mint green colors, flat vector illustration, gentle and harmonious look.",
    oneLiner: "평화와 조화를 만드는 중재자",
    description: "갈등을 싫어하고 모두가 행복한 조화를 추구합니다. 다른 사람의 입장을 이해하고 배려하며, 중간에서 균형을 맞추는 능력이 탁월합니다. 부드럽지만 강한 영향력을 발휘합니다.",
    keywords: ["🕊️ 조화", "💚 배려", "⚖️ 균형"],
    powers: [
      { emoji: "🕊️", title: "평화", desc: "갈등 해소" },
      { emoji: "💚", title: "배려", desc: "타인 존중" },
      { emoji: "⚖️", title: "균형", desc: "중립 유지" },
      { emoji: "🤝", title: "중재", desc: "의견 조율" },
      { emoji: "💝", title: "공감", desc: "마음을 이해" },
      { emoji: "🌸", title: "온화함", desc: "부드러운 접근" }
    ],
    jobs: {
      top: [
        { title: "중재자", desc: "갈등을 해결하는 조율가", icon: "⚖️" },
        { title: "카운슬러", desc: "이야기를 들어주는 이", icon: "🗣️" },
        { title: "외교관", desc: "평화의 다리를 놓는 이", icon: "🌍" }
      ],
      others: ["사회복지사", "코디네이터", "인사 담당자"]
    },
    loveStyle: "평화롭고 서로 존중하는 관계를 꿈꿔요",
    scarcity: 14,
    growth: "자신의 의견도 중요해요. NO라고 말하는 연습을 해보세요.",
    celebs: ["달라이 라마", "넬슨 만델라"],
    match: { good: "친화형", complementary: "사색가형" },
    traits: ['A', 'F']
  },
  {
    id: "NO",
    testId: 'PERSONALITY',
    title: "혁신가형",
    englishTitle: "The Innovator",
    emoji: "💡",
    themeColor: "#fef9c3",
    imagePath: "/images/personality_no.png",
    characterPrompt: "Adorable chibi visionary robot with a glowing glass lightbulb as its head, sparking lightning antennae, sitting inside a bright yellow circular background with light rays, kawaii pop-art sticker style, thick black outlines, electric yellow and white colors, flat vector illustration, curious and futuristic look.",
    oneLiner: "독립적으로 미래를 그리는 비전가",
    description: "독창적인 아이디어로 새로운 것을 만들어냅니다. 남들이 가지 않은 길을 개척하며, 독립적으로 일하는 걸 선호합니다. 미래 지향적이고 혁신적인 사고로 세상을 바꿉니다.",
    keywords: ["💡 혁신", "🚀 비전", "🎯 독립성"],
    powers: [
      { emoji: "💡", title: "혁신", desc: "새로운 발견" },
      { emoji: "🚀", title: "비전", desc: "미래 설계" },
      { emoji: "🎯", title: "독립성", desc: "주도적 해결" },
      { emoji: "🧠", title: "지적 호기심", desc: "끊임없는 질문" },
      { emoji: "🔥", title: "개척정신", desc: "새로운 길 개척" },
      { emoji: "🎨", title: "창의적 문제해결", desc: "독특한 해법" }
    ],
    jobs: {
      top: [
        { title: "발명가", desc: "없던 것을 만드는 삶", icon: "🛠️" },
        { title: "R&D 전문가", desc: "미래 기술을 연구함", icon: "🔬" },
        { title: "전략 기획가", desc: "큰 그림을 그리는 일", icon: "🗺️" }
      ],
      others: ["디자이너", "교수", "미래학자"]
    },
    loveStyle: "서로의 성장을 응원하는 지적인 관계",
    scarcity: 8,
    growth: "다른 사람의 협력도 큰 힘이 됩니다. 소통의 폭을 넓혀보세요.",
    celebs: ["니콜라 테슬라", "스티브 잡스"],
    match: { good: "사색가형", complementary: "모험가형" },
    traits: ['N', 'O']
  },
  // 성장 컬러 진단 유형
  {
    id: "SOFT_LAVENDER",
    testId: 'GROWTH',
    title: "소프트 라벤더",
    englishTitle: "Soft Lavender",
    emoji: "🧘",
    oneLiner: "잠재적 탐색가: 내면의 치유와 안정이 우선인 단계",
    themeColor: "#e9d5ff",
    imagePath: "/images/growth_lavender.svg",
    characterPrompt: "A cute lavender plant character with vertical purple stems and buds, featuring a small kawaii face at the base, set on a soft pastel purple circular background. Simple 2D flat vector graphic style.",
    description: "당신은 현재 깊은 내면의 목소리에 귀를 기울이고 있는 상태입니다. 큰 도약보다는 현재의 안정을 유지하며 자신을 돌보는 것이 가장 중요한 시기입니다. 당신 안에는 엄청난 잠재력이 숨겨져 있지만, 지금은 서두르지 않아도 괜찮습니다.",
    keywords: ["🌿 치유", "🧘 안정", "🔍 탐색"],
    powers: [
      { emoji: "🧘", title: "자기 성찰", desc: "깊은 내면 이해" },
      { emoji: "🌿", title: "회복력", desc: "치유의 힘" },
      { emoji: "🔎", title: "세밀함", desc: "작은 변화 감지" },
      { emoji: "🤍", title: "순수성", desc: "편견 없는 시각" }
    ],
    growth: "작은 것부터 하나씩 시도해보세요. 당신의 속도는 충분히 아름답습니다.",
    scarcity: 15,
    mentorVoice: "당신은 현재 내면의 에너지를 비축하고 있는 상태군요! 무리한 목표보다는 오늘의 나를 칭찬하는 5분을 가져보세요.",
    actionPlan: [
      { step: "Step 1", desc: "5분간 눈을 감고 오늘의 기분 관찰하기" },
      { step: "Step 2", desc: "방 안의 물건 하나를 정리하며 환경 정돈하기" },
      { step: "Step 3", desc: "매일 감사 일기 1줄 쓰기 습관 만들기" }
    ]
  },
  {
    id: "ENERGETIC_YELLOW",
    testId: 'GROWTH',
    title: "에너제틱 옐로우",
    englishTitle: "Energetic Yellow",
    emoji: "⚡",
    oneLiner: "열정적 시작가: 아이디어는 풍부하나 실행의 집중이 필요한 단계",
    themeColor: "#fef08a",
    imagePath: "/images/growth_yellow.svg",
    characterPrompt: "A cheerful sunflower character with bright yellow petals and a happy brown face in the center, set on a pale yellow circular background. Simple 2D flat vector graphic style.",
    description: "당신은 지금 새로운 아이디어와 열정으로 가득 차 있습니다! 무엇이든 시작할 준비가 되어 있지만, 때로는 너무 많은 생각 때문에 에너지가 분산되기도 합니다. 이제는 선택과 집중을 통해 결과를 만들어낼 때입니다.",
    keywords: ["⚡ 열정", "💡 아이디어", "🏃 실행"],
    powers: [
      { emoji: "⚡", title: "순발력", desc: "빠른 시작" },
      { emoji: "💡", title: "창의성", desc: "풍부한 상상" },
      { emoji: "🔥", title: "에너지", desc: "멈추지 않는 동기" },
      { emoji: "🌟", title: "낙천성", desc: "긍정적 전망" }
    ],
    growth: "아이디어를 실현하기 위해 딱 한 가지만 정해서 끝까지 해보세요.",
    scarcity: 22,
    mentorVoice: "넘치는 에너지가 멋져요! 하지만 모든 토끼를 다 잡을 수는 없답니다. 가장 가슴 뛰는 한 가지만 골라볼까요?",
    actionPlan: [
      { step: "Step 1", desc: "오늘 해야 할 일 중 가장 중요한 것 1개만 정하기" },
      { step: "Step 2", desc: "스마트폰 알람을 끄고 25분간 집중하는 뽀모도로 실천" },
      { step: "Step 3", desc: "주간 계획표를 만들어 실행 여부 체크하기" }
    ]
  },
  {
    id: "VIVID_GREEN",
    testId: 'GROWTH',
    title: "비비드 그린",
    englishTitle: "Vivid Green",
    emoji: "🌱",
    oneLiner: "균형 잡힌 성장가: 안정적 궤도에서 꾸준히 나아가는 단계",
    themeColor: "#bbf7d0",
    imagePath: "/images/growth_green.svg",
    characterPrompt: "A cute bean sprout character with two green leaves and a small face on the bean head, growing from a soil mound, set on a mint green circular background. Simple 2D flat vector graphic style.",
    description: "당신은 현재 아주 이상적인 성장 궤도에 올라와 있습니다. 계획한 대로 꾸준히 나아가고 있으며, 일과 삶의 균형을 잘 유지하고 있습니다. 지금의 루틴을 믿고 지속한다면 곧 큰 결실을 보게 될 것입니다.",
    keywords: ["🌱 꾸준함", "⚖️ 균형", "📈 성장"],
    powers: [
      { emoji: "📅", title: "성실함", desc: "일관된 루틴" },
      { emoji: "⚖️", title: "안정성", desc: "감정의 균형" },
      { emoji: "🌿", title: "적응력", desc: "환경에 유연함" },
      { emoji: "🛤️", title: "지속성", desc: "포기하지 않는 힘" }
    ],
    growth: "지루함이 느껴질 때는 아주 작은 변화만 주어 활력을 더해보세요.",
    scarcity: 30,
    mentorVoice: "지금처럼만 하면 완벽합니다! 이미 충분히 잘하고 있으니 자신을 믿고 뚜벅뚜벅 나아가세요.",
    actionPlan: [
      { step: "Step 1", desc: "현재의 루틴을 한 번 점검하고 칭찬하기" },
      { step: "Step 2", desc: "새로운 영감을 줄 수 있는 책이나 영상 한 편 보기" },
      { step: "Step 3", desc: "한 달 뒤의 나에게 응원 편지 쓰기" }
    ]
  },
  {
    id: "DYNAMIC_BLUE",
    testId: 'GROWTH',
    title: "딥 다이내믹 블루",
    englishTitle: "Deep Dynamic Blue",
    emoji: "🌊",
    oneLiner: "전략적 달성가: 데이터를 통해 효율적으로 목표를 쟁취하는 단계",
    themeColor: "#bfdbfe",
    imagePath: "/images/growth_blue.svg",
    characterPrompt: "A cute bluebell flower character hanging gently, with a simple smiling face on the bell, set on a light blue circular background. Simple 2D flat vector graphic style.",
    description: "당신은 매우 효율적이고 전략적인 사람입니다. 목표를 달성하기 위해 무엇이 필요한지 정확히 알고 있으며, 감정보다는 논리와 데이터를 바탕으로 움직입니다. 당신의 추진력은 타의 추종을 불허합니다.",
    keywords: ["📊 전략", "🎯 목표", "💻 효율"],
    powers: [
      { emoji: "🧠", title: "분석력", desc: "데이터 기반 사고" },
      { emoji: "🎯", title: "집중력", desc: "목표 지향" },
      { emoji: "⚡", title: "추진력", desc: "빠른 성과 도출" },
      { emoji: "🛠️", title: "시스템", desc: "자동화된 일 처리" }
    ],
    growth: "가끔은 목적지보다 과정을 즐겨보세요. 쉬어가는 것도 전략입니다.",
    scarcity: 20,
    mentorVoice: "당신의 완벽한 계획에 박수를 보냅니다! 하지만 때로는 계획에 없는 우연이 더 큰 행운을 가져다줄 수도 있어요.",
    actionPlan: [
      { step: "Step 1", desc: "성과 수치 외에 오늘 느낀 감정 하나 적어보기" },
      { step: "Step 2", desc: "평소와 다른 길로 산책하며 뇌에 새로운 자극 주기" },
      { step: "Step 3", desc: "타인과 함께 목표를 공유하고 협력하는 프로젝트 시도" }
    ]
  },
  {
    id: "ELECTRIC_MAGENTA",
    testId: 'GROWTH',
    title: "일렉트릭 마젠타",
    englishTitle: "Electric Magenta",
    emoji: "🔥",
    oneLiner: "창조적 변혁가: 독보적 영감으로 주변에 영향력을 끼치는 단계",
    themeColor: "#fbcfe8",
    imagePath: "/images/growth_magenta.svg",
    characterPrompt: "A happy magenta hibiscus flower character with five petals and a central smiley face, adorned with sparkles, set on a soft pink circular background. Simple 2D flat vector graphic style.",
    description: "당신은 이미 존재 자체로 빛나는 영향력을 가지고 있습니다! 남들과 다른 독창적인 시각으로 세상을 바라보며, 새로운 트렌드를 창조합니다. 당신의 성장은 이미 개인을 넘어 주변을 변화시키고 있습니다.",
    keywords: ["💡 영감", "🔥 영향력", "🎨 창조"],
    powers: [
      { emoji: "✨", title: "영향력", desc: "타인을 움직이는 힘" },
      { emoji: "🎨", title: "독창성", desc: "비교 불가능한 시각" },
      { emoji: "🚀", title: "변혁", desc: "새로운 패러다임" },
      { emoji: "📢", title: "표현력", desc: "강렬한 메시지" }
    ],
    growth: "당신의 영향력을 좋은 곳에 사용하세요. 나눔이 더 큰 성장을 가져옵니다.",
    scarcity: 13,
    mentorVoice: "당신의 빛나는 영감을 세상과 더 많이 공유해주세요. 당신은 이미 충분히 특별합니다!",
    actionPlan: [
      { step: "Step 1", desc: "떠오르는 창의적인 아이디어를 메모 앱에 기록하기" },
      { step: "Step 2", desc: "나의 노하우를 주변 사람 1명에게 나누어주기" },
      { step: "Step 3", desc: "더 큰 세상을 향한 나만의 비전 보드 만들기" }
    ]
  }
];
