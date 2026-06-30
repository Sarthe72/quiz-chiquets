// ═══════════════════════════════════════════════════
//  QUESTIONS DU QUIZ  — À personnaliser !
//  correct: 0=A  1=B  2=C  3=D
// ═══════════════════════════════════════════════════

const QUIZ_CONFIG = {
  timerSeconds: 15,
  pointsCorrect: 1,   // point pour bonne réponse
  pointsBonus: 1,     // bonus pour les 3 plus rapides
  bonusCount: 3       // nombre de joueurs qui reçoivent le bonus
};

const QUESTIONS = [
  {
    question: "Quel temps faisait-il ?",
    options: ["Grand soleil", "Quelques nuages", "Pluie battante", "Orageux"],
    correct: 0
  },
  {
    question: "Combien de personnes y avait-il au mariage ?",
    options: ["50", "80", "120", "150"],
    correct: 2
  },
  {
    question: "Nombre de discours ?",
    options: ["2", "4", "6", "8"],
    correct: 1
  },
  {
    question: "Comment était la chemise du papa de la mariée ?",
    options: ["Blanche classique", "À fleurs", "Bleu ciel", "Rayée"],
    correct: 1
  },
  {
    question: "Qu'est-ce qui était écrit sur la structure dans le jardin du domaine ?",
    options: ["Les prénoms des mariés", "La date du mariage", "\"Love\"", "\"Mr & Mrs\""],
    correct: 0
  },
  {
    question: "Quels étaient les rituels/animations de la cérémonie laïque ?",
    options: ["Le sablier des sables mêlés", "La cérémonie des cadenas", "Le lâcher de ballons", "L'arbre à empreintes"],
    correct: 0
  },
  {
    question: "Qui était le maître de cérémonie ?",
    options: ["Un des témoins", "Le père du marié", "Un ami du couple", "Un officiant professionnel"],
    correct: 0
  }
];
