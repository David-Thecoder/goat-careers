import type { Athlete } from "./types";

export const michaelJordan: Athlete = {
  slug: "michael-jordan",
  name: "Jordan",
  signature: "THE GOAT",
  years: 15,
  quote:
    "Bon, reprenons depuis le début. Mon nom est Michael Jordan. J'ai été mordu par l'obsession de gagner, et depuis 6 Finales NBA, je suis le seul et unique GOAT. Je pense que vous connaissez la suite.",
  facts: [
    {
      title: "La destruction psychologique ciblée en interne",
      body: "Jordan ne cherchait pas à motiver ses coéquipiers, il cherchait à les briser pour voir s'ils survivaient. Lors des entraînements des Bulls, il ciblait volontairement le joueur le plus fragile mentalement et l'insultait pendant des heures. Si le joueur pleurait ou abandonnait, Jordan exigeait son transfert, affirmant qu'un homme qui craque à l'entraînement causera la défaite en Finales.",
    },
    {
      title: "L'invention de faux scénarios pour se venger",
      body: "En 1993, un joueur inconnu nommé LaBradford Smith a marqué 37 points contre Jordan. MJ a raconté à la presse que Smith lui avait glissé un arrogant « Beau match, Michael » en sortant du terrain. Le lendemain, Jordan a détruit le joueur en marquant 36 points en une seule mi-temps. Des années plus tard, Jordan a avoué avoir totalement inventé cette phrase dans sa tête pour se forcer à atteindre un niveau de rage pure.",
    },
    {
      title: "Le chantage contractuel pour la liberté du jeu",
      body: "Lors de la signature de son contrat, Jordan a exigé la clause exclusive « Love of the Game ». Elle lui donnait le droit légal de jouer au basket n'importe où, n'importe quand (sur des terrains de rue ou des playgrounds universitaires), sans l'accord des Bulls. Pour lui, la victoire ne devait pas être limitée par les règles d'une franchise ou des assurances à plusieurs millions.",
    },
  ],
  impacts: [
    {
      title: "La fin de l'ère des pivots en NBA",
      body: "Avant Jordan, le dogme de la NBA stipulait qu'une équipe ne pouvait pas gagner de titre sans un pivot dominant (comme Kareem ou Chamberlain). En gagnant 6 bagues en tant qu'arrière marqueur extérieur, Jordan a brisé ce modèle vieux de 40 ans et a forcé toutes les franchises à restructurer leur recrutement mondial autour des extérieurs.",
    },
    {
      title: "La création de l'économie de la Sneaker Culture",
      body: "Avant Nike et Jordan, les athlètes portaient des chaussures blanches basiques. Jordan a accepté de payer des amendes de 5 000 $ par match à la NBA (qui interdisait ses chaussures colorées) pour imposer sa marque. Ce sacrifice financier a transformé la chaussure de sport en un produit de luxe et un art de rue à l'échelle planétaire.",
    },
    {
      title: "La mondialisation de la NBA",
      body: "Avant 1992 et la Dream Team, la NBA était une ligue principalement diffusée et consommée aux États-Unis. L'aura et le style de jeu de Jordan ont forcé les télévisions européennes, asiatiques et sud-américaines à acheter les droits de diffusion, internationalisant le basket moderne.",
    },
  ],
  stats: [
    { value: "6", label: "Titres NBA" },
    { value: "6-0", label: "Finales (0 défaite)" },
    { value: "5", label: "Saisons MVP" },
    { value: "32 292", label: "Points en carrière" },
  ],
};
