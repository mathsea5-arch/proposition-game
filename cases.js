// 사건 데이터 (학생에게 보이는 내용만 — 정답은 answers.js에 따로 있음)
// 기호: A→p, B→q, C→r, D→s, E→t
export const SYMBOL = { A: "p", B: "q", C: "r", D: "s", E: "t" };

export const CASES = [
  {
    id: "c1",
    title: "사건 1. 사라진 급식실 푸딩",
    level: "★☆☆☆",
    story: "점심시간, 급식실 냉장고에 넣어 둔 선생님의 푸딩이 사라졌다. CCTV를 확인한 결과 용의자는 3명. 세 사람 모두 진실만 말했다.",
    rule: "모든 용의자는 진실만 말한다.",
    suspects: ["A", "B", "C"],
    statements: [
      { who: "A", text: "범인은 1명이에요." },
      { who: "B", text: "C가 범인이라면 나도 범인이에요.",
        options: ["q ⇒ r", "r ⇒ q", "~r ⇒ ~q", "~q ⇒ ~r"] },
      { who: "C", text: "A가 범인이 아니라면 B도 범인이 아니에요.",
        options: ["q ⇒ p", "~q ⇒ ~p", "p ⇒ q", "~p ⇒ ~q"] },
    ],
    askLiar: false,
  },
  {
    id: "c2",
    title: "사건 2. 미술실 물감 실종",
    level: "★★☆☆",
    story: "전시회 전날, 미술실에서 비싼 유화 물감 세트가 사라졌다. 용의자는 4명. 네 사람 모두 진실만 말했다.",
    rule: "모든 용의자는 진실만 말한다.",
    suspects: ["A", "B", "C", "D"],
    statements: [
      { who: "A", text: "C가 범인이라면 D도 범인이에요.",
        options: ["~s ⇒ ~r", "s ⇒ r", "r ⇒ s", "~r ⇒ ~s"] },
      { who: "B", text: "A가 범인이 아니라면 나도 범인이 아니에요.",
        options: ["p ⇒ q", "~p ⇒ ~q", "~q ⇒ ~p", "q ⇒ p"] },
      { who: "C", text: "내가 범인이 아니라면 A도 범인이 아니에요.",
        options: ["~r ⇒ ~p", "r ⇒ p", "p ⇒ r", "~p ⇒ ~r"] },
      { who: "D", text: "범인은 2명이에요." },
    ],
    askLiar: false,
  },
  {
    id: "c3",
    title: "사건 3. 음악실 악보 도난",
    level: "★★★☆",
    story: "합창 대회 악보 원본이 음악실에서 사라졌다. 경찰 조사 결과 범인은 1명. 그런데 용의자 4명 중 정확히 1명이 거짓말을 하고 있다!",
    rule: "범인은 1명, 4명 중 정확히 1명만 거짓말을 한다.",
    suspects: ["A", "B", "C", "D"],
    statements: [
      { who: "A", text: "나와 B는 범인이 아니에요.",
        options: ["~p 또는 ~q", "~p 그리고 ~q", "~(p 그리고 q)", "~(p 또는 q)"] },
      { who: "B", text: "D가 범인이라면 나도 범인이에요.",
        options: ["~q ⇒ ~s", "q ⇒ s", "s ⇒ q", "~s ⇒ ~q"] },
      { who: "C", text: "A가 범인이에요." },
      { who: "D", text: "C의 말은 거짓이에요." },
    ],
    askLiar: true,
  },
  {
    id: "c4",
    title: "사건 4. 과학실 실험 노트 실종 (최종)",
    level: "★★★★",
    story: "과학 탐구 대회 하루 전, 과학실에서 1등 후보 팀의 실험 노트가 사라졌다. 용의자는 5명. 다섯 사람 모두 진실만 말했다.",
    rule: "모든 용의자는 진실만 말한다.",
    suspects: ["A", "B", "C", "D", "E"],
    statements: [
      { who: "A", text: "C가 범인이기 위한 필요조건은 B가 범인인 거예요.",
        options: ["q ⇒ r", "~q ⇒ ~r", "~r ⇒ ~q", "r ⇒ q"] },
      { who: "B", text: "내가 범인이면 E도 범인이에요.",
        options: ["q ⇒ t", "t ⇒ q", "~t ⇒ ~q", "~q ⇒ ~t"] },
      { who: "C", text: "E가 범인이면 D는 범인이 아니에요.",
        options: ["~s ⇒ t", "s ⇒ ~t", "~t ⇒ s", "t ⇒ ~s"] },
      { who: "D", text: "범인은 3명이에요." },
      { who: "E", text: "A와 D 중 적어도 한 명은 범인이에요.",
        options: ["p 그리고 s", "~p ⇒ s", "p 또는 s", "~p 그리고 ~s"] },
    ],
    askLiar: false,
  },
];

export const PHASES = {
  lobby: "대기",
  intro: "사건 소개",
  translate: "증언 해독",
  deduce: "범인 추리",
  reveal: "정답 공개",
  reflect: "마무리 성찰",
};
