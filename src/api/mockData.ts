import { mockDataType } from "types";

const mockData: mockDataType = [
  {
    id: "1",
    type: 1,
    startDate: "1800",
    title: {
      en: "Voltaic Pile",
      de: "Voltasche Säule",
      ge: "Voltasche Säule",
    },
    description: {
      en: `Alessandro Volta develops the prototype of today’s batteries – the voltaic pile.`,
      de: `Alessandro Volta entwickelt den Prototyp unserer heutigen Batterien – die voltasche Säule.`,
      ge: `Alessandro Volta entwickelt den Prototyp unserer heutigen Batterien – die voltasche Säule.`,
    },
  },
  {
    id: "2",
    type: 2,
    startDate: "1808",
    title: {
      en: "Sotzmann Globe",
      de: "Sotzmann-Globus",
      ge: "Sotzmann-Globus",
    },
    description: {
      en: `Sotzmann Globe shows the voyages of discovery complementing the European view of the
        world.`,
      de: `Sotzmann-Globus und die Vervollständigung des europäischen Weltbilds durch Schifffahrten`,
      ge: `Sotzmann-Globus und die Vervollständigung des europäischen Weltbilds durch Schifffahrten`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "3",
    type: 1,
    startDate: "1831",
    title: {
      en: "Electromagnetic Induction",
      de: "Elektromagnetische Induktion",
      ge: "Elektromagnetische Induktion",
    },
    description: {
      en: `Michael Faraday discovers electromagnetic induction, paving the way for electrical engineering.`,
      de: `Michael Faraday entdeckt elektromagnetische Induktion und ebnet somit den Weg für die Elektrotechnik.`,
      ge: `Michael Faraday entdeckt elektromagnetische Induktion und ebnet somit den Weg für die Elektrotechnik.`,
    },
  },
  {
    id: "4",
    type: 1,
    startDate: "1836",
    title: {
      en: "Copper-Zinc Battery",
      de: "Kupfer-Zink-Batterie",
      ge: "Kupfer-Zink-Batterie",
    },
    description: {
      en: `John Frederic Daniell (1790–1845) builds the first practical version of an electric battery
        (copper-zinc battery).`,
      de: `John Frederic Daniell (1790–1845) baut die erste technisch geeignete elektrische Batterie
(Kupfer-Zink-Batterie).`,
      ge: `John Frederic Daniell (1790–1845) baut die erste technisch geeignete elektrische Batterie
(Kupfer-Zink-Batterie).`,
    },
  },
  {
    id: "5",
    type: 1,
    startDate: "1846",
    title: {
      en: "Werner von Siemens develops the first insulated cable, allowing submarine and underground cables to be laid.",
      de: "Werner von Siemens isoliert erstmals Kabel und ermöglicht deren Verlegung in der Erde und unter Wasser.",
      ge: "Werner von Siemens isoliert erstmals Kabel und ermöglicht deren Verlegung in der Erde und unter Wasser.",
    },
    description: {
      en: `Werner von Siemens develops the first insulated cable, allowing submarine and underground cables to be laid.`,
      de: `Werner von Siemens isoliert erstmals Kabel und ermöglicht deren Verlegung in der Erde und unter Wasser.`,
      ge: `Werner von Siemens isoliert erstmals Kabel und ermöglicht deren Verlegung in der Erde und unter Wasser.`,
    },
  },
  {
    id: "6",
    type: 2,
    startDate: "1850",
    endDate: "1852",
    title: {
      en: "Telegraph station with Morse key and ink writer",
      de: "Telegrafenstation mit Stiftschreiber und Morsetaste",
      ge: "Telegrafenstation mit Stiftschreiber und Morsetaste",
    },
    description: {
      en: `Telegraph station with Morse key and ink writer`,
      de: `Telegrafenstation mit Stiftschreiber und Morsetaste`,
      ge: `Telegrafenstation mit Stiftschreiber und Morsetaste`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "7",
    type: 2,
    startDate: "1863",
    title: {
      en: "Philipp Reis’s telephone",
      de: "Telefon von Philipp Reis",
      ge: "Telefon von Philipp Reis",
    },
    description: {
      en: `Philipp Reis’s telephone`,
      de: `Telefon von Philipp Reis`,
      ge: `Telefon von Philipp Reis`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "8",
    type: 2,
    startDate: "1877",
    title: {
      en: "Alexander Graham Bell’s telephone",
      de: "Telefon von Alexander Graham Bell",
      ge: "Telefon von Alexander Graham Bell",
    },
    description: {
      en: `Alexander Graham Bell’s telephone`,
      de: `Telefon von Alexander Graham Bell`,
      ge: `Telefon von Alexander Graham Bell`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "9",
    type: 1,
    startDate: "1879",
    title: {
      en: "Thomas Alva Edison builds his first electric light bulb.",
      de: "Thomas Alva Edison führt die Glühlampe ein.",
      ge: "Thomas Alva Edison führt die Glühlampe ein.",
    },
    description: {
      en: `Thomas Alva Edison builds his first electric light bulb.`,
      de: `Thomas Alva Edison führt die Glühlampe ein.`,
      ge: `Thomas Alva Edison führt die Glühlampe ein.`,
    },
  },
  {
    id: "10",
    type: 1,
    startDate: "1882",
    title: {
      en: "Thomas Alva Edison opens his first electric power station.",
      de: "Erstes elektrisches Kraftwerk von Thomas Alva Edison",
      ge: "Erstes elektrisches Kraftwerk von Thomas Alva Edison",
    },
    description: {
      en: `Thomas Alva Edison opens his first electric power station.`,
      de: `Erstes elektrisches Kraftwerk von Thomas Alva Edison`,
      ge: `Erstes elektrisches Kraftwerk von Thomas Alva Edison`,
    },
  },
  {
    id: "11",
    type: 1,
    startDate: "1884",
    title: {
      en: "Invention of the ‘electric telescope’ system with a Nipkow disc.",
      de: "Erfindung des elektrischen Teleskops mit Nipkow-Scheibe",
      ge: "Erfindung des elektrischen Teleskops mit Nipkow-Scheibe",
    },
    description: {
      en: `Invention of the ‘electric telescope’ system with a Nipkow disc.`,
      de: `Erfindung des elektrischen Teleskops mit Nipkow-Scheibe`,
      ge: `Erfindung des elektrischen Teleskops mit Nipkow-Scheibe`,
    },
  },
  {
    id: "12",
    type: 2,
    startDate: "1886",
    title: {
      en: "Switchboard for 100 telephone lines",
      de: "Klappenschrank für 100 Telefonanschlüsse",
      ge: "Klappenschrank für 100 Telefonanschlüsse",
    },
    description: {
      en: `Switchboard for 100 telephone lines`,
      de: `Klappenschrank für 100 Telefonanschlüsse`,
      ge: `Klappenschrank für 100 Telefonanschlüsse`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "13",
    type: 1,
    startDate: "1887",
    title: {
      en: "Emil Berliner invents the gramophone record.",
      de: "Emil Berliner erfindet die Schallplatte.",
      ge: "Emil Berliner erfindet die Schallplatte.",
    },
    description: {
      en: `Emil Berliner invents the gramophone record.`,
      de: `Emil Berliner erfindet die Schallplatte.`,
      ge: `Emil Berliner erfindet die Schallplatte.`,
    },
  },
  {
    id: "14",
    type: 2,
    startDate: "1890",
    title: {
      en: "Tinfoil phonograph after Thomas Alva Edison",
      de: "Zinnfolienphonograph nach Thomas Alva Edison",
      ge: "Zinnfolienphonograph nach Thomas Alva Edison",
    },
    description: {
      en: `Tinfoil phonograph after Thomas Alva Edison`,
      de: `Zinnfolienphonograph nach Thomas Alva Edison`,
      ge: `Zinnfolienphonograph nach Thomas Alva Edison`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "15",
    type: 2,
    startDate: "1904",
    title: {
      en: "The Cable Steamship Stephan",
      de: "Kabeldampfer „Stephan“",
      ge: "Kabeldampfer „Stephan“",
    },
    description: {
      en: `The Cable Steamship Stephan`,
      de: `Kabeldampfer „Stephan“`,
      ge: `Kabeldampfer „Stephan“`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "16",
    type: 2,
    startDate: "1928",
    title: {
      en: "Telehor television receiver with a Nipkow disc",
      de: "Fernsehempfänger mit Nipkow-Scheibe „Telehor“",
      ge: "Fernsehempfänger mit Nipkow-Scheibe „Telehor“",
    },
    description: {
      en: `Telehor television receiver with a Nipkow disc`,
      de: `Fernsehempfänger mit Nipkow-Scheibe „Telehor“`,
      ge: `Fernsehempfänger mit Nipkow-Scheibe „Telehor“`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "17",
    type: 1,
    startDate: "1940",
    title: {
      en: "Peter Goldmark develops a prototype colour television.",
      de: "Peter Goldmark entwickelt einen Prototyp eines Farbfernsehers.",
      ge: "Peter Goldmark entwickelt einen Prototyp eines Farbfernsehers.",
    },
    description: {
      en: `Peter Goldmark develops a prototype colour television.`,
      de: `Peter Goldmark entwickelt einen Prototyp eines Farbfernsehers.`,
      ge: `Peter Goldmark entwickelt einen Prototyp eines Farbfernsehers.`,
    },
  },
  {
    id: "18",
    type: 1,
    startDate: "1941",
    title: {
      en: "Konrad Zuse builds the first computer.",
      de: "Konrad Zuse baut den ersten Computer.",
      ge: "Konrad Zuse baut den ersten Computer.",
    },
    description: {
      en: `Konrad Zuse builds the first computer.`,
      de: `Konrad Zuse baut den ersten Computer.`,
      ge: `Konrad Zuse baut den ersten Computer.`,
    },
  },
  {
    id: "19",
    type: 2,
    startDate: "1944",
    title: {
      en: "Enigma M4 rotor cipher machine",
      de: "Rotor-Chiffriermaschine Enigma M4",
      ge: "Rotor-Chiffriermaschine Enigma M4",
    },
    description: {
      en: `Enigma M4 rotor cipher machine`,
      de: `Rotor-Chiffriermaschine Enigma M4`,
      ge: `Rotor-Chiffriermaschine Enigma M4`,
    },
    glbJson: {
      en: "2.glb-en.json",
      de: "2.glb-de.json",
      ge: "2.glb-ge.json",
    },
  },
  {
    id: "20",
    type: 1,
    startDate: "1962",
    title: {
      en: "Communications satellites",
      de: "Kommunikationssatteliten",
      ge: "Kommunikationssatteliten",
    },
    description: {
      en: `Die USA bringen den ersten Kommunikationssatelliten, mit dem Telefongespräche und
        Fernsehprogramme übertragen werden können, ins All.`,
      de: `The USA launches the first communications satellites into space allowing telephone calls and TV
        programmes to be relayed.`,
      ge: `The USA launches the first communications satellites into space allowing telephone calls and TV
        programmes to be relayed.`,
    },
  },
  {
    id: "21",
    type: 1,
    startDate: "1963",
    title: {
      en: "Digital Camera",
      de: "Digitalkamera",
      ge: "Digitalkamera",
    },
    description: {
      en: `David Paul Gregg invents the digital camera.`,
      de: `David Paul Gregg erfindet die Digitalkamera.`,
      ge: `David Paul Gregg erfindet die Digitalkamera.`,
    },
  },
  {
    id: "22",
    type: 1,
    startDate: "1970",
    title: {
      en: "The first commercial pocket calculator appears on the market.",
      de: "Der erste Taschenrechner kommt auf den Markt.",
      ge: "Der erste Taschenrechner kommt auf den Markt.",
    },
    description: {
      en: `The first commercial pocket calculator appears on the market.`,
      de: `Der erste Taschenrechner kommt auf den Markt.`,
      ge: `Der erste Taschenrechner kommt auf den Markt.`,
    },
  },
  {
    id: "23",
    type: 1,
    startDate: "1971",
    title: {
      en: "Ray Tomlinson sends the first email.",
      de: "Ray Tomlinson versendet die erste E-Mail.",
      ge: "Ray Tomlinson versendet die erste E-Mail.",
    },
    description: {
      en: `Ray Tomlinson sends the first email.`,
      de: `Ray Tomlinson versendet die erste E-Mail.`,
      ge: `Ray Tomlinson versendet die erste E-Mail.`,
    },
  },
  {
    id: "24",
    type: 1,
    startDate: "1973",
    title: {
      en: "The Handheld Cellular",
      de: "Das Handy",
      ge: "Das Handy",
    },
    description: {
      en: `Martin Cooper develops the first handheld cellular phone for the US company Motorola.`,
      de: `Martin Cooper entwickelt für den US-Hersteller Motorola das erste Handy.`,
      ge: `Martin Cooper entwickelt für den US-Hersteller Motorola das erste Handy.`,
    },
  },
];

export const getData = (): Promise<mockDataType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockData) {
        resolve(mockData);
      } else {
        reject({ message: "Error" });
      }
    }, 1000);
  });
};
