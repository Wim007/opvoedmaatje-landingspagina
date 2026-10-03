"use strict";
const examples = {
  "grenzen": [
    [
      "ouder",
      "Mijn zoon van 7 stopt niet met gamen. Ik word boos en dan hebben we ruzie."
    ],
    [
      "maatje",
      "Dat klinkt vermoeiend. Je wilt duidelijk zijn, zonder dat jullie steeds botsen. Wat gebeurt er meestal vlak voordat je zegt dat hij moet stoppen?"
    ],
    [
      "ouder",
      "Ik ben aan het koken en zeg ineens dat hij moet stoppen. Dan zegt hij dat zijn spel nog niet klaar is."
    ],
    [
      "maatje",
      "Dan komt het stopmoment voor hem onverwacht, terwijl jij weinig ruimte hebt om te overleggen. Je kunt vooraf samen een eindtijd afspreken, of een vast moment kiezen waarop hij zijn spel afrondt. Wat is voor jou haalbaar?"
    ],
    [
      "ouder",
      "Vooraf een eindtijd afspreken. Ik wil niet steeds onderhandelen terwijl ik kook."
    ],
    [
      "maatje",
      "Je kunt vóór het gamen zeggen: “We spreken nu af wanneer je stopt. Wat heb je nodig om dan af te ronden?” Geef vlak voor die tijd een korte herinnering. Zo blijft de grens duidelijk. Probeer dit één keer en kijk daarna wat wel en niet hielp."
    ]
  ],
  "boos": [
    [
      "ouder",
      "Mijn dochter van 6 wordt na school om de kleinste dingen boos. Ik weet niet wat ik moet doen."
    ],
    [
      "maatje",
      "Dat kan een zwaar moment zijn, voor haar en voor jou. Hoe gaat het eerste halfuur na school meestal?"
    ],
    [
      "ouder",
      "Ik stel vragen over haar dag. Zij wil niets vertellen en begint soms te huilen. Ik ben zelf ook moe."
    ],
    [
      "maatje",
      "De vragen kunnen op dat moment veel van haar vragen. Je hoeft haar dag niet meteen te begrijpen. Je kunt eerst rustig samen iets eten en later praten, of haar laten kiezen tussen even alleen zijn en bij je zitten. Wat past vandaag?"
    ],
    [
      "ouder",
      "Eerst iets eten. Dan hoef ik ook niet meteen een gesprek te voeren."
    ],
    [
      "maatje",
      "Houd het vandaag klein: “Fijn dat je er bent. We eten eerst iets; je hoeft nu niets te vertellen.” Kijk daarna of er ruimte komt voor contact. Blijft de boosheid je zorgen geven, bespreek dat dan met school of de jeugdgezondheidszorg."
    ]
  ],
  "twijfel": [
    [
      "ouder",
      "Gisteren schreeuwde ik tegen mijn zoon van 9. Nu voel ik me schuldig."
    ],
    [
      "maatje",
      "Je baalt van hoe het ging. Laten we kijken wat je nu kunt doen. Wat gebeurde er vlak voordat je schreeuwde?"
    ],
    [
      "ouder",
      "Hij wilde zijn schoenen niet aantrekken en we waren te laat. Hij werd stil toen ik schreeuwde."
    ],
    [
      "maatje",
      "Je stond onder tijdsdruk. Je kunt op je reactie terugkomen zonder je grens los te laten. Wil je eerst het contact herstellen, of nadenken over een rustigere ochtend?"
    ],
    [
      "ouder",
      "Eerst met hem praten. Ik wil niet dat hij denkt dat het zijn schuld is."
    ],
    [
      "maatje",
      "Op een rustig moment kun je zeggen: “Ik schreeuwde gisteren. Dat was niet fijn voor jou en dat had ik anders willen doen. Het is mijn verantwoordelijkheid om rustig te praten.” Geef hem ruimte om te reageren. Een volgende keer kunnen jullie samen kijken hoe de ochtend makkelijker wordt."
    ]
  ]
};
function choose(key) {
  if (!Object.prototype.hasOwnProperty.call(examples, key)) return;
  const container = document.getElementById("chat-messages");
  const fragment = document.createDocumentFragment();
  examples[key].forEach(([speaker, text]) => {
    const message = document.createElement("div");
    message.className = speaker === "ouder" ? "message message-parent" : "message message-assistant";
    const label = document.createElement("span");
    label.className = "speaker-label";
    label.textContent = speaker === "ouder" ? "Ouder" : "Opvoedmaatje";
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    message.append(label, paragraph);
    fragment.append(message);
  });
  container.replaceChildren(fragment);
  document.querySelectorAll("button[data-topic]").forEach(button => {
    const selected = button.dataset.topic === key;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}
document.querySelectorAll("[data-topic]").forEach(element => {
  element.addEventListener("click", () => choose(element.dataset.topic));
});
choose("grenzen");

// Herkomst van campagne-aanmeldingen; alleen bekende kanalen doorgeven.
const campaignSource = new URLSearchParams(window.location.search).get("source");
if (["facebook", "instagram", "linkedin", "tiktok"].includes(campaignSource)) {
  document.querySelectorAll('a[href="https://opvoedmaatje-productie-live-versie.up.railway.app/testouders"]').forEach(link => {
    link.href += "?source=" + encodeURIComponent(campaignSource);
  });
}
