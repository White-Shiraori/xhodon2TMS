// the language can be found on the 'Heroes' it is always avaiable 
// on every screen and is unique for every language

function setUserLanguage() {
    let herogray = document.getElementsByClassName("tab heroesTab grayGradientLeftAndRight")[0];
    let herogold = document.getElementsByClassName("tab heroesTab goldGradientLeftAndRight")[0];
    let hero = "";
    if (herogray != undefined) {
        hero = herogray.textContent;
    }
    if (herogold != undefined) {
        hero = herogold.textContent;
    }
    if (hero.indexOf("Heroes") >= 0) {
        GM_setValue("x2language", "en");
    }
    if (hero.indexOf("Helden") >= 0) {
        GM_setValue("x2language", "de");
    }
    if (hero.indexOf("Héroes") >= 0) {
        GM_setValue("x2language", "es");
    }
    if (hero.indexOf("Eroi") >= 0) {
        GM_setValue("x2language", "it");
    }
    if (hero.indexOf("Héros") >= 0) {
        GM_setValue("x2language", "fr");
    }
    if (hero.indexOf("Bohaterowie") >= 0) {
        GM_setValue("x2language", "pl");
    }
}

function setBattleLanguage(bannerString) {
    switch (bannerString) {
        case "VICTORIOUS":
            GM_setValue("x2blanguage", "en");            
            break;
        case "DEFEATED":
            GM_setValue("x2blanguage", "en");            
            break;
        case "GEWONNEN":
            GM_setValue("x2blanguage", "de");            
            break;
        case "VERLOREN":
            GM_setValue("x2blanguage", "de");            
            break;
        case "GANADO":
            GM_setValue("x2blanguage", "es");            
            break;
        case "PERDIDO":
            GM_setValue("x2blanguage", "es");            
            break;
        case "VINCITORE":
            GM_setValue("x2blanguage", "it");            
            break;
        case "SCONFITTE":
            GM_setValue("x2blanguage", "it");            
             break;
        case "GAGNÉ":
            GM_setValue("x2blanguage", "fr");            
            break;
        case "PERDU":
            GM_setValue("x2blanguage", "fr");            
            break;            
        case "WYGRANE":
            GM_setValue("x2blanguage", "pl");            
            break;
        case "STRACONE":
            GM_setValue("x2blanguage", "pl");            
            break;               
        default:
            GM_setValue("x2blanguage", "en");
            break;
    }
}

// Values for requests
GM_setValue("x2exp-en","Experience: +");

// Values for display
GM_setValue("x2rewards-en","Rewards:");
GM_setValue("x2rewards-de","Belohnungen:");
GM_setValue("x2rewards-es","Recompensas:");
GM_setValue("x2rewards-it","Premi:");
GM_setValue("x2rewards-fr","Récompenses:");
GM_setValue("x2rewards-pl","Nagrody:");

GM_setValue("x2attacker-en","Attacker");
GM_setValue("x2attacker-de","Angreifer");
GM_setValue("x2attacker-es","Atacante");
GM_setValue("x2attacker-it","Attaccante");
GM_setValue("x2attacker-fr","Assaillant");
GM_setValue("x2attacker-pl","Atakujący");

GM_setValue("x2defender-en","Defender");
GM_setValue("x2defender-de","Verteidiger");
GM_setValue("x2defender-es","Defensor");
GM_setValue("x2defender-it","Difensore");
GM_setValue("x2defender-fr","Défenseur");
GM_setValue("x2defender-pl","Obrońca");

GM_setValue("x2hero-en","Hero");
GM_setValue("x2hero-de","Held");
GM_setValue("x2hero-es","Héroe");
GM_setValue("x2hero-it","Eroe");
GM_setValue("x2hero-fr","Héros");
GM_setValue("x2hero-pl","Bohater");

GM_setValue("x2palace-en","Palace");
GM_setValue("x2palace-de","Palast");
GM_setValue("x2palace-es","Palacio");
GM_setValue("x2palace-it","Palazzo");
GM_setValue("x2palace-fr","Palais");
GM_setValue("x2palace-pl","Pałac");

GM_setValue("x2sentinel-en","Sentinel");
GM_setValue("x2sentinel-de","Wächter");
GM_setValue("x2sentinel-es","Guardianes");
GM_setValue("x2sentinel-it","Guardie");
GM_setValue("x2sentinel-fr","Gardiens");
GM_setValue("x2sentinel-pl","Strażnik");

GM_setValue("x2resurrect-en","Resurrect");
GM_setValue("x2resurrect-de","Konvertiert");
GM_setValue("x2resurrect-es","Conversiones");
GM_setValue("x2resurrect-it","Convertito");
GM_setValue("x2resurrect-fr","Converti");
GM_setValue("x2resurrect-pl","Zmienione");

GM_setValue("x2raided-en","Raided");
GM_setValue("x2raided-de","Geplündert");
GM_setValue("x2raided-es","Saqueado");
GM_setValue("x2raided-it","Saccheggiato");
GM_setValue("x2raided-fr","Pillé");
GM_setValue("x2raided-pl","Łup");

GM_setValue("x2stonemantle-en","Stone Mantle"); // Stone Mantle
GM_setValue("x2stonemantle-de","Steinmantel");
GM_setValue("x2stonemantle-es","de Piedra"); // Manto de Piedra
GM_setValue("x2stonemantle-it","pietroso"); // Manto pietroso
GM_setValue("x2stonemantle-fr","Manteau pierreux"); // Manteau pierreux
GM_setValue("x2stonemantle-pl","Kamienny Płaszcz"); // Kamienny Płaszcz

GM_setValue("x2crystaltower-en","Crystal Tower"); // Crystal Tower
GM_setValue("x2crystaltower-de","Kristallturm");
GM_setValue("x2crystaltower-es","de Cristal"); // Torre de Cristal
GM_setValue("x2crystaltower-it","cristallina"); // Torre cristallina
GM_setValue("x2crystaltower-fr","Tour de cristal"); // Tour de cristal
GM_setValue("x2crystaltower-pl","Kryształowa Wieża"); // Kryształowa Wieża

GM_setValue("x2item-en","Item");
GM_setValue("x2item-de","Item"); // Der Wächter hat dir ein Item hinterlassen!
GM_setValue("x2item-es","objeto"); // ¡El guardián te ha dejado un objeto!
GM_setValue("x2item-it","");
GM_setValue("x2item-fr","");
GM_setValue("x2item-pl","przedmiot"); // Strażnik pozostawił na polu walki jeden przedmiot(Item)!

GM_setValue("x2rune-en","Rune");
GM_setValue("x2rune-de","Rune");
GM_setValue("x2rune-es","runa"); // ¡El guardián te ha dejado una runa!
GM_setValue("x2rune-it","");
GM_setValue("x2rune-fr","");
GM_setValue("x2rune-pl","runę"); // Strażnik pozostawił na polu walki 1 runę!

GM_setValue("x2attacked-en","attacked"); // You attacked at xx:xx:x
GM_setValue("x2attacked-de","Angriff"); // Du hast einen Angriff auf xx:xx:x geführt
GM_setValue("x2attacked-es","ataque"); // Has dirigido un ataque en x:xx:x
GM_setValue("x2attacked-it","attacco"); // Hai effettutato un attacco in x:xx:x
GM_setValue("x2attacked-fr","attaque"); // Tu as exécuté une attaque sur: x:xx:x
GM_setValue("x2attacked-pl","Atakowałeś"); // Atakowałeś/-aś na xx:xx:x

GM_setValue("x2defended-en","defended"); // You defended at xx:xx:x
GM_setValue("x2defended-de","verteidigt"); // DU hast einen Angriff auf xx:xx:x verteidigt
GM_setValue("x2defended-es","defendido"); // Has defendido en xx:x:x
GM_setValue("x2defended-it","difeso"); // Hai difeso in xx:x:x
GM_setValue("x2defended-fr","défendu"); // Tu t'es défendu sur xx:x:x
GM_setValue("x2defended-pl","Broniłeś"); // Broniłeś/-aś się xx:x:x

GM_setValue("x2rounds-en","Rounds");
GM_setValue("x2rounds-de","Runden");
GM_setValue("x2rounds-es","Vueltas");
GM_setValue("x2rounds-it","Turni"); // Turni di Battaglia
GM_setValue("x2rounds-fr","Tours");
GM_setValue("x2rounds-pl","Runda");

// Values for the new results
GM_setValue("x2mana-en","Mana");
GM_setValue("x2mana-de","Mana");
GM_setValue("x2mana-es","Mana");
GM_setValue("x2mana-it","Mana");
GM_setValue("x2mana-fr","Mana");
GM_setValue("x2mana-pl","Mana");

GM_setValue("x2attack-en","Attack");
GM_setValue("x2attack-de","Angriff");
GM_setValue("x2attack-es","Ataque");
GM_setValue("x2attack-it","Attacco");
GM_setValue("x2attack-fr","Attaque");
GM_setValue("x2attack-pl","Atak");

GM_setValue("x2defense-en","Defense");
GM_setValue("x2defense-de","Verteidigung");
GM_setValue("x2defense-es","Defensa");
GM_setValue("x2defense-it","Difesa");
GM_setValue("x2defense-fr","Défense");
GM_setValue("x2defense-pl","Obrona");

GM_setValue("x2life-en","Life");
GM_setValue("x2life-de","Leben");
GM_setValue("x2life-es","La vida");
GM_setValue("x2life-it","Vita");
GM_setValue("x2life-fr","Vie");
GM_setValue("x2life-pl","Życie");

GM_setValue("x2trooppoints-en","Troops");
GM_setValue("x2trooppoints-de","Truppenpunkte");
GM_setValue("x2trooppoints-es","Los puntos de la tropa");
GM_setValue("x2trooppoints-it","Punti truppa");
GM_setValue("x2trooppoints-fr","Points de troupes");
GM_setValue("x2trooppoints-pl","Punkty za wojsko");

GM_setValue("x2attackerwon-en","Attacker has won");
GM_setValue("x2attackerwon-de","Angreifer hat gewonnen");
GM_setValue("x2attackerwon-es","El atacante ha ganado");
GM_setValue("x2attackerwon-it","L'attaccante ha vinto");
GM_setValue("x2attackerwon-fr","L'agresseur a gagné");
GM_setValue("x2attackerwon-pl","Atakujący wygrał");

GM_setValue("x2defenderwon-en","Defender has won");
GM_setValue("x2defenderwon-de","Verteidiger hat gewonnen");
GM_setValue("x2defenderwon-es","El defensor ha ganado");
GM_setValue("x2defenderwon-it","Il difensore ha vinto");
GM_setValue("x2defenderwon-fr","Le défenseur a gagné");
GM_setValue("x2defenderwon-pl","Obrońca wygrał");

GM_setValue("x2attackerlost-en","Attacker has lost");
GM_setValue("x2attackerlost-de","Angreifer hat verloren");
GM_setValue("x2attackerlost-es","El atacante ha perdido");
GM_setValue("x2attackerlost-it","L'aggressore ha perso");
GM_setValue("x2attackerlost-fr","L'agresseur a perdu");
GM_setValue("x2attackerlost-pl","Atakujący przegrał");

GM_setValue("x2defenderlost-en","Defender has lost");
GM_setValue("x2defenderlost-de","Verteidiger hat verloren");
GM_setValue("x2defenderlost-es","El Defensor ha perdido");
GM_setValue("x2defenderlost-it","Il difensore ha perso");
GM_setValue("x2defenderlost-fr","Le défenseur a perdu");
GM_setValue("x2defenderlost-pl","Obrońca przegrał");

GM_setValue("x2experience-en","Experience (XP)");
GM_setValue("x2experience-de","Erfahrung (EP)");
GM_setValue("x2experience-es","Experiencia (EXP)");
GM_setValue("x2experience-it","Esperienza (ESP)");
GM_setValue("x2experience-fr","Expérience (EXP)");
GM_setValue("x2experience-pl","Doświadczenie (XP)");

GM_setValue("x2investedxp-en","Invested XP");
GM_setValue("x2investedxp-de","Investierte EP");
GM_setValue("x2investedxp-es","Invertido EXP");
GM_setValue("x2investedxp-it","Investito ESP");
GM_setValue("x2investedxp-fr","Investis EXP");
GM_setValue("x2investedxp-pl","Zainwestowane XP");

GM_setValue("x2stonecosts-en","Stones");
GM_setValue("x2stonecosts-de","Steinkosten");
GM_setValue("x2stonecosts-es","La piedra cuesta");
GM_setValue("x2stonecosts-it","Costi della pietra");
GM_setValue("x2stonecosts-fr","Coûts de la pierre");
GM_setValue("x2stonecosts-pl","Koszty w kamieniu");

GM_setValue("x2mushroomcosts-en","Mushrooms");
GM_setValue("x2mushroomcosts-de","Pilzkosten");
GM_setValue("x2mushroomcosts-es","Los costos de los hongos");
GM_setValue("x2mushroomcosts-it","Costi dei funghi");
GM_setValue("x2mushroomcosts-fr","Coûts des champignons");
GM_setValue("x2mushroomcosts-pl","Koszty w grzybach");

GM_setValue("x2detailedreport-en","Full Battle Report");
GM_setValue("x2detailedreport-de","Detaillierter Kampfbericht");
GM_setValue("x2detailedreport-es","Informe detallado de combate");
GM_setValue("x2detailedreport-it","Rapporto di combattimento dettagliato");
GM_setValue("x2detailedreport-fr","Rapport de combat détaillé");
GM_setValue("x2detailedreport-pl","Szczegółowy raport bojowy");
