function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("in").value;
    // Afficher la valeur


var clan, elementaire, elements, ermite, l_elements, matrice_interdit, name, nb, r_clan, r_elementaire, r_elements, r_elements2, r_elements3, r_sexe, r_style, r_voie, sexe, style, voie;
  sexe = ["H", "F"];
  clan = ["Uchiwa", "Senju", "Hyuga", "Aburame", "Inuzuka", "Kamizuru", "Hikai", "Hozuki", "Hoshigaki", "Kaguya", "Denki", "Chinoike", "Bunraku", "Sabaku", "Kami", "Oni", "Uzumaki", "Ninshu (Sumie)", "Ninshu (Yosuga)", "Ermite", "Akimichi", "Hatake", "Gugen"];
  ermite = ["Okami", "Kame", "Ratto", "Tako", "Namekujin", "Raion", "Taka", "Gama", "Kumo", "Hebi", "Saru", "Oushiza"];
  voie = ["Ninjutsu", "Genjutsu", "Iryojutsu", "Fuinjutsu", "double-style"];
  style = ["Karate Aquatique", "Shorinji Kempo", "Juken", "Portes et Respirations C\u00e9lestes", "Ep\u00e9istes de la Brume", "Shugurejutsu", "Multiclonage", "Kata Ichi-Ry\u00fb", "Nodo no Oyayubi", "Tessen", "Kyujutsu", "B\u00f4 Jiei", "Shuryo Sasori", "Kari Sasori", "50 techniques de l ombre", "Hangu to Hugo"];
  matrice_interdit = [["Karate Aquatique", "Karate Aquatique"], ["Karate Aquatique", "Shorinji Kempo"], ["Karate Aquatique", "Juken"], ["Karate Aquatique", "Multiclonage"], ["Karate Aquatique", "Karate Aquatique"], ["Shorinji Kempo", "Shorinji Kempo"], ["Shorinji Kempo", "Juken"], ["Shorinji Kempo", "Portes et Respirations C\u00e9lestes"], ["Shorinji Kempo", "Ep\u00e9istes de la Brume"], ["Shorinji Kempo", "Multiclonage"], ["Shorinji Kempo", "Kyujutsu"], ["Shorinji Kempo", "50 techniques de l ombre"], ["Juken", "Juken"], ["Juken", "Portes et Respirations C\u00e9lestes"], ["Juken", "Multiclonage"], ["Juken", "Hangu to Hugo"], ["Portes et Respirations C\u00e9lestes", "Portes et Respirations C\u00e9lestes"], ["Portes et Respirations C\u00e9lestes", "Ep\u00e9istes de la Brume"], ["Portes et Respirations C\u00e9lestes", "Shugurejutsu"], ["Portes et Respirations C\u00e9lestes", "Multiclonage"], ["Portes et Respirations C\u00e9lestes", "Kata Ichi-Ry\u00fb"], ["Ep\u00e9istes de la Brume", "Ep\u00e9istes de la Brume"], ["Ep\u00e9istes de la Brume", "Multiclonage"], ["Ep\u00e9istes de la Brume", "Kata Ichi-Ry\u00fb"], ["Ep\u00e9istes de la Brume", "B\u00f4 Jiei"], ["Ep\u00e9istes de la Brume", "Hangu to Hugo"], ["Shugurejutsu", "Shugurejutsu"], ["Shugurejutsu", "Multiclonage"], ["Shugurejutsu", "Hangu to Hugo"], ["Multiclonage", "Multiclonage"], ["Multiclonage", "Kata Ichi-Ry\u00fb"], ["Multiclonage", "Nodo no Oyayubi"], ["Multiclonage", "Tessen"], ["Multiclonage", "Kyujutsu"], ["Multiclonage", "B\u00f4 Jiei"], ["Multiclonage", "Shuryo Sasori"], ["Multiclonage", "Kari Sasori"], ["Multiclonage", "50 techniques de l ombre"], ["Multiclonage", "Hangu to Hugo"], ["Kata Ichi-Ry\u00fb", "Kata Ichi-Ry\u00fb"], ["Kata Ichi-Ry\u00fb", "B\u00f4 Jiei"], ["Nodo no Oyayubi", "Nodo no Oyayubi"], ["Tessen", "Tessen"], ["Kyujutsu", "Kyujutsu"], ["Kyujutsu", "Hangu to Hugo"], ["B\u00f4 Jiei", "B\u00f4 Jiei"], ["Shuryo Sasori", "Shuryo Sasori"], ["Shuryo Sasori", "Hangu to Hugo"], ["Kari Sasori", "Kari Sasori"], ["Kari Sasori", "Hangu to Hugo"], ["50 techniques de l ombre", "50 techniques de l ombre"], ["50 techniques de l ombre", "Hangu to Hugo"], ["Hangu to Hugo", "Hangu to Hugo"]];

  elements = {};
  elements["Katon"] = {};
  elements["Futon"] = {};



  elements["Raiton"] = {};
  elements["Doton"] = {};
  elements["Suiton"] = {};
  elements["Katon"]["Katon"] = "Hamuraton";
  elements["Futon"]["Futon"] = "Heton";
  elements["Raiton"]["Raiton"] = "Hariton";
  elements["Doton"]["Doton"] = "Shoton";
  elements["Suiton"]["Suiton"] = "Sumiton";
  elements["Katon"]["Suiton"] = "Vuuton";
  elements["Katon"]["Doton"] = "Yoton";
  elements["Katon"]["Raiton"] = "Bakuton";
  elements["Katon"]["Futon"] = "Haiton";
  elements["Suiton"]["Futon"] = "Hyoton";
  elements["Suiton"]["Doton"] = "Nendoton";
  elements["Suiton"]["Raiton"] = "Ranton";
  elements["Doton"]["Raiton"] = "Jiton";
  elements["Doton"]["Futon"] = "Fuukaton";
  elements["Raiton"]["Futon"] = "Neton";

        l_elements = Object.keys(elements);

  elementaire = ["Triple", "Sublimation", "Fusion"];
  for (var i = 1; i < 4; i += 1) {

    r_sexe = _.sample(sexe);


    r_clan = _.sample(clan);
    r_voie = _.sample(voie);
    r_style = _.sample(style);
    r_elements = _.sample(l_elements);

    if (r_clan === "Uchiwa") {
      r_elements = "Katon";
    }

    if (r_clan === "Hozuki") {
      r_elements = "Suiton";
    }

    if (r_clan === "Hatake") {
      r_elements = "Raiton";
    }

    r_elements2 = "";
    r_elements3 = "";
    r_elementaire = _.sample(elementaire);

    if (r_clan === "Ermite") {
      r_clan = _.sample(ermite);
    }

    while (r_style === "Karate Aquatique" && r_clan !== "Hoshigaki" || r_style === "Shorinji Kempo" && r_clan.slice(0, 6) !== "Ninshu" || r_style === "Juken" && r_clan !== "Hyuga") {
      r_style = _.sample(style);
    }

    if (r_voie === "double-style") {
      r_voie = _.sample(style);

      while ([r_style, r_voie].includes(matrice_interdit) || [r_voie, r_style].includes(matrice_interdit) || r_voie === "Karate Aquatique" && r_clan !== "Hoshigaki" || r_voie === "Shorinji Kempo" && r_clan.slice(0, 6) !== "Ninshu" || r_voie === "Juken" && r_clan !== "Hyuga" || r_voie === r_style) {
        r_voie = _.sample(style);
      }
    }

    if (r_elementaire === "Triple") {
    l_elements=_.without(l_elements,r_elements);
      r_elements2 = _.sample(l_elements);
      l_elements=_.without(l_elements,r_elements2);
      r_elements3 = _.sample(l_elements);
    } else {
      if (r_elementaire === "Sublimation") {
        r_elements2 = r_elements;
        r_elements3 = elements[r_elements][r_elements2];
      } else {
        if (r_elementaire === "Fusion") {
          l_elements=_.without(l_elements,r_elements);
          r_elements2 = _.sample(l_elements);

          try {
            r_elements3 = elements[r_elements][r_elements2];
          } catch (e) {
            r_elements3 = elements[r_elements2][r_elements];
          }
        }
      }
    }

    l_elements = Object.keys(elements);

    if (r_clan === "Gugen") {
      r_elements = "multiple";
      r_elements2 = "pouvant fusionner";
      r_elements3 = "sublimer ses \u00e9l\u00e9ments selon son niveau";
    }
    balise=["name","firstclass","secondclass","firstnature","secondnature","thirdnature"];
    document.getElementById(balise[0]+i).innerHTML=input+' '+r_clan+' ('+r_sexe+')';
    document.getElementById(balise[1]+i).innerHTML=r_voie;
    document.getElementById(balise[2]+i).innerHTML=r_style;
    document.getElementById(balise[3]+i).innerHTML=r_elements;
    document.getElementById(balise[4]+i).innerHTML=r_elements2;
    document.getElementById(balise[5]+i).innerHTML=r_elements3;
  }
}
