let infos = [
  (info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  }),
  (info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178.",
    nota: "O último MacPatinhas",
  }),
];

info.recorrente = "Sim";
info2.recorrente = "Sim";

for (let index in info) {
  if (index === "recorrente" && info[index] === info2[index]) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[index] + " e " + info2[index]);
  };
};
