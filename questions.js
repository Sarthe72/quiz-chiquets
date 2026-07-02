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
    question: "Quelle était la date complète du mariage ?",
    options: ["02/07/2023", "01/07/2023", "02/07/2024", "01/07/2024"],
    correct: 0
  },
  {
    question: "Quelle était la marque et la couleur de la voiture des mariés ?",
    options: ["Mazda rouge", "Ferrari rouge", "Lamborghini jaune", "Chevrolet jaune"],
    correct: 0
  },
  {
    question: "Quels étaient les rituels de la cérémonie laïque ?",
    options: ["bougies / rubans / pelote", "bougies / fleurs / pelote", "sable / rubans / pelote", "sable / fleurs / pelote"],
    correct: 0
  },
  {
    question: "Combien de discours y a-t-il eu à la cérémonie laïque ?",
    options: ["3", "4", "5", "6"],
    correct: 2
  },
  {
    question: "Qui a attrapé le bouquet de la mariée ?",
    options: ["Marine", "Amandine", "Alexia", "Julie"],
    correct: 2
  },
  {
    question: "Qui a attrapé la bouteille du marié ?",
    options: ["Vincent", "Jérôme", "Melvin", "Romain"],
    correct: 1
  },
  {
    question: "Quelle surprise, à l'initiative du caméraman, les invités ont-ils réalisé durant le vin d'honneur ?",
    options: ["une chanson", "des blagues", "des photos rigolotes", "des interviews"],
    correct: 3
  },
  {
    question: "Sur quelle musique les mariés et les témoins ont-ils ouvert la réception ?",
    options: ["\"Yeah\" – Usher", "\"Waka Waka\" – Shakira", "\"Give Me Everything\" – Pitbull", "\"Tout le bonheur du monde\" – Sinsemilia"],
    correct: 2
  },
  {
    question: "Combien d'animations ont été réalisées par la team témoin durant le repas ?",
    options: ["2", "3", "4", "5"],
    correct: 1
  },
  {
    question: "Quelle a été la destination du voyage de noce des mariés ?",
    options: ["Grèce", "Tanzanie", "Cuba", "République dominicaine"],
    correct: 1
  },
  {
    question: "Quel était le dessert proposé au repas ?",
    options: ["assortiment de gâteaux", "macarons", "choux", "fruits"],
    correct: 0
  },
  {
    question: "Quel était le thème du mariage ?",
    options: ["bohème", "champêtre", "chic", "romantique"],
    correct: 1
  },
  {
    question: "Quels ont été les derniers invités à se coucher ?",
    options: ["Melvin / Romain / Pierre", "Benji / Melvin / Pierre", "Benji / Jess / Romain", "Jess / Camille / Alexia"],
    correct: 0
  },
  {
    question: "De quelle couleur était la robe des témoins de la mariée ?",
    options: ["bleue", "rose", "bordeaux", "verte"],
    correct: 2
  },
  {
    question: "Qui a apporté les alliances lors de la cérémonie ?",
    options: ["Clémence", "Juliette", "Océane", "Adèle"],
    correct: 0
  },
  {
    question: "Avec qui la mariée a-t-elle ouvert le bal ?",
    options: ["son parrain", "son papa", "son frère", "son mari"],
    correct: 1
  },
  {
    question: "Qu'est-ce que les invités ont jeté aux mariés lors de la sortie de la mairie ?",
    options: ["des bulles", "des pétales de rose", "des confettis", "des grains de riz"],
    correct: 1
  },
  {
    question: "Combien de temps a duré l'ouverture du bal ?",
    options: ["10 min", "13 min", "15 min", "18 min"],
    correct: 1
  },
  {
    question: "Quel est le nom complet du lieu de la cérémonie ?",
    options: ["Domaine de Bissé", "Domaine de la Courbe", "Domaine d'Authion", "Domaine Brissac"],
    correct: 0
  },
  {
    question: "Sans qui ce mariage n'aurait pas pu être une réussite ?",
    options: ["La Team des témoins", "Les 4 fantastiques témoins", "Des personnes merveilleuses que l'on nomme témoins", "Melvin, on sait tous que sans lui les filles n'auraient pas faites grand chose."],
    correct: null
  }
];
