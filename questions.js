// ═══════════════════════════════════════════════════
//  QUESTIONS DU QUIZ  — À personnaliser !
//  correct: 0=A  1=B  2=C  3=D
// ═══════════════════════════════════════════════════

const QUIZ_CONFIG = {
  timerSeconds: 20,
  maxPoints: 1000,   // points si réponse immédiate
  minPoints: 500     // points minimum si réponse en toute fin de chrono
};

const QUESTIONS = [
  {
    question: "Combien y avait-il de témoins au mariage ?",
    options: ["2", "4", "6", "8"],
    correct: 1
  },
  {
    question: "Quelle était la couleur dominante de la décoration ?",
    options: ["Blanc et or", "Bleu et blanc", "Rose et beige", "Vert et blanc"],
    correct: 0
  },
  {
    question: "Qui a attrapé le bouquet ?",
    options: ["Marie", "Sophie", "Julie", "Camille"],
    correct: 2
  },
  {
    question: "Quel était le plat principal du menu ?",
    options: ["Magret de canard", "Filet de bœuf", "Saumon en croûte", "Pintade rôtie"],
    correct: 1
  },
  {
    question: "Quelle a été la première chanson de danse des mariés ?",
    options: ["Perfect – Ed Sheeran", "All of Me – John Legend", "La Vie en Rose", "Can't Help Falling in Love"],
    correct: 0
  },
  {
    question: "Qui est arrivé en retard ?",
    options: ["Le père de la mariée", "Le DJ", "Le photographe", "Les parents du marié"],
    correct: 2
  },
  {
    question: "Combien de pièces montées / gâteaux y avait-il ?",
    options: ["1", "2", "3", "4"],
    correct: 1
  }
];
