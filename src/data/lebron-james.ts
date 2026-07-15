import type { Athlete } from "./types";

export const lebronJames: Athlete = {
  slug: "lebron-james",
  name: "LeBron",
  signature: "LE ROI",
  years: 22,
  quote:
    "Bon, reprenons depuis le début. Mon nom est LeBron James. J'ai été mordu par le poids de Chosen 1, et depuis 22 saisons, je suis le seul et unique King. Je pense que vous connaissez la suite.",
  facts: [
    {
      title: "Le refus du repos face au boycott des fans",
      body: "En 2010, après son départ à Miami, LeBron était devenu l'homme le plus détesté d'Amérique. Lors de ses déplacements à Cleveland, l'hôtel de l'équipe recevait des alertes à la bombe et des insultes constantes. Au lieu de se cacher, LeBron passait ses nuits à regarder les vidéos des supporters brûlant son maillot pour s'imprégner de leur haine, utilisant cette colère pour jouer 48 minutes par match sans jamais demander à souffler.",
    },
    {
      title: "La dictature tactique en plein match",
      body: "LeBron ne se contente pas de suivre les consignes de ses coachs, il les supplante. Plusieurs de ses anciens entraîneurs ont révélé qu'en plein milieu d'un match de playoffs, LeBron arrêtait l'action pour replacer les joueurs de l'équipe adverse qui s'étaient trompés dans leur propre système de jeu, prouvant qu'il connaissait leur cahier tactique mieux qu'eux.",
    },
    {
      title: "L'auto-pression de l'Élu (Chosen 1)",
      body: "À 17 ans, LeBron s'est fait tatouer « CHOSEN 1 » en immense sur tout le haut du dos. Porter une telle affirmation avant même d'avoir joué une seule seconde en NBA montre une confiance psychologique qui frôle l'anomalie. Il s'est volontairement mis une cible sur le dos pour s'interdire l'échec.",
    },
  ],
  impacts: [
    {
      title: "L'ère de l'empowerment des joueurs",
      body: "En signant des contrats courts d'un ou deux ans (les fameux contrats 1+1), LeBron a retiré le pouvoir des mains des propriétaires de franchises pour le donner aux athlètes. Il a forcé les dirigeants à construire constamment des équipes compétitives sous peine de le voir partir, changeant à jamais les négociations salariales dans le sport mondial.",
    },
    {
      title: "La destruction des barrières de postes (Positionless Basketball)",
      body: "LeBron est le premier joueur capable de jouer et de défendre efficacement sur les 5 postes du terrain (du meneur au pivot) au cours d'un même match. Cette polyvalence physique a redéfini les critères de formation des jeunes joueurs, où l'on cherche désormais des athlètes totaux plutôt que des spécialistes.",
    },
    {
      title: "Le modèle de l'athlète-milliardaire en activité",
      body: "Avant lui, les sportifs attendaient la retraite pour bâtir leur empire commercial. LeBron a structuré sa propre agence de management (Klutch Sports) et sa société de production (SpringHill) dès le début de sa carrière, prouvant qu'un joueur pouvait contrôler Hollywood et le business tout en restant le meilleur sur le terrain.",
    },
  ],
  stats: [
    { value: "4", label: "Titres NBA" },
    { value: "4", label: "Finales MVP" },
    { value: "21", label: "All-Star Games" },
    { value: "42 000+", label: "Points (record NBA)" },
  ],
};
