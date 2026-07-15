import type { Athlete } from "./types";

export const stephenCurry: Athlete = {
  slug: "stephen-curry",
  name: "Curry",
  signature: "LE CHEF",
  years: 16,
  quote:
    "Bon, reprenons depuis le début. Mon nom est Stephen Curry. J'ai été mordu par le doute sur mon tir, et depuis 16 saisons, je suis le seul et unique Chef. Je pense que vous connaissez la suite.",
  facts: [
    {
      title: "La punition des tirs manqués",
      body: "Lors de ses entraînements intensifs, Curry ne se contente pas de marquer des paniers. S'il rate deux tirs d'affilée à 3 points, son préparateur lui impose de courir un sprint complet en moins de 10 secondes, puis de shooter immédiatement alors que son cœur bat à 180 pulsations par minute. S'il rate encore, la séance recommence à zéro.",
    },
    {
      title: "L'arrogance souriante",
      body: "Contrairement aux provocations sombres de Jordan ou Kobe, la mentalité de Curry est basée sur une joie destructrice. Il mâche son protège-dents, danse et célèbre ses tirs avant même qu'ils ne rentrent dans le panier. Cette décontraction totale en plein milieu de matchs à haute tension est une arme psychologique majeure.",
    },
    {
      title: "Le refus d'abandonner sa mécanique de tir brisée",
      body: "Au lycée, son père a constaté que la mécanique de tir de Steph était trop basse et se faisait contrer. Pendant tout un été, Curry a dû détruire son geste pour en rebâtir un nouveau plus haut. Il a raconté avoir pleuré de frustration chaque jour pendant deux mois car il ne marquait plus un seul panier, mais il a refusé d'abandonner le processus jusqu'à obtenir le tir le plus rapide de l'histoire.",
    },
  ],
  impacts: [
    {
      title: "La mort du basket traditionnel à mi-distance",
      body: "Curry a mathématiquement prouvé à la planète entière qu'un tir à 3 points à 40% de réussite était plus rentable que deux points à 50%. En faisant cela, il a fait disparaître le jeu à mi-distance de la NBA et a forcé toutes les équipes du monde (des jeunes aux pros) à s'écarter derrière la ligne.",
    },
    {
      title: "L'élargissement géométrique du terrain (Gravity Effect)",
      body: "En étant capable de shooter dès qu'il passe la ligne médiane, Curry a forcé les défenses à venir le chercher à 11 mètres du panier. Cet impact invisible (la « gravité ») libère un espace immense à l'intérieur pour ses coéquipiers, changeant la gestion géométrique de l'espace en défense.",
    },
    {
      title: "La démocratisation du basket pour les physiques normaux",
      body: "Avant Curry, le basket d'élite exigeait des critères physiques exceptionnels (taille, muscles, détente). Curry a prouvé qu'avec de la coordination, de l'adresse et de l'endurance, un homme au physique « normal » pouvait dominer des géants, transformant la formation des jeunes à l'échelle mondiale.",
    },
  ],
  stats: [
    { value: "4", label: "Titres NBA" },
    { value: "2", label: "Saisons MVP (1 unanime)" },
    { value: "11", label: "All-Star Games" },
    { value: "3 700+", label: "Tirs à 3 points (record NBA)" },
  ],
};
