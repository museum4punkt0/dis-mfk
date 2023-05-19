import { mockDataType } from "types";

//TODO: Version with sketchfab. Should remove after finish implementation with @smb/display
// export const mockData: mockDataType = [
//   {
//     id: "1",
//     type: 1,
//     startDate: "1800",
//     title: {
//       en: "Voltaic Pile",
//       de: "Voltasche Säule",
//     },
//     description: {
//       en: `Alessandro Volta develops the prototype of today’s batteries – the voltaic pile.`,
//       de: `Alessandro Volta entwickelt den Prototyp unserer heutigen Batterien – die voltasche Säule.`,
//     },
//   },
//   {
//     id: "2",
//     type: 2,
//     startDate: "1808",
//     title: {
//       en: "Sotzmann Globe",
//       de: "Sotzmann-Globus",
//     },
//     description: {
//       en: `Sotzmann Globe shows the voyages of discovery complementing the European view of the
//         world.`,
//       de: `Sotzmann-Globus und die Vervollständigung des europäischen Weltbilds durch Schifffahrten`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/sotzmann-globus-2715570423754e1eac8926051a51d768/embed?autostart=1",
//   },
//   {
//     id: "3",
//     type: 1,
//     startDate: "1831",
//     title: {
//       en: "Electromagnetic Induction",
//       de: "Elektromagnetische Induktion",
//     },
//     description: {
//       en: `Michael Faraday discovers electromagnetic induction, paving the way for electrical engineering.`,
//       de: `Michael Faraday entdeckt elektromagnetische Induktion und ebnet somit den Weg für die Elektrotechnik.`,
//     },
//   },
//   {
//     id: "4",
//     type: 1,
//     startDate: "1836",
//     title: {
//       en: "Copper-Zinc Battery",
//       de: "Kupfer-Zink-Batterie",
//     },
//     description: {
//       en: `John Frederic Daniell (1790–1845) builds the first practical version of an electric battery
//         (copper-zinc battery).`,
//       de: `John Frederic Daniell (1790–1845) baut die erste technisch geeignete elektrische Batterie
// (Kupfer-Zink-Batterie).`,
//     },
//   },
//   {
//     id: "5",
//     type: 1,
//     startDate: "1846",
//     title: {
//       en: "Werner von Siemens develops the first insulated cable, allowing submarine and underground cables to be laid.",
//       de: "Werner von Siemens isoliert erstmals Kabel und ermöglicht deren Verlegung in der Erde und unter Wasser.",
//     },
//     description: {
//       en: `Werner von Siemens develops the first insulated cable, allowing submarine and underground cables to be laid.`,
//       de: `Werner von Siemens isoliert erstmals Kabel und ermöglicht deren Verlegung in der Erde und unter Wasser.`,
//     },
//   },
//   {
//     id: "6",
//     type: 2,
//     startDate: "1850",
//     endDate: "1852",
//     title: {
//       en: "Telegraph station with Morse key and ink writer",
//       de: "Telegrafenstation mit Stiftschreiber und Morsetaste",
//     },
//     description: {
//       en: `Telegraph station with Morse key and ink writer`,
//       de: `Telegrafenstation mit Stiftschreiber und Morsetaste`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/telegraphenstation-c1aef782d03b4d39a3984feefd4fae04/embed?autostart=1",
//   },
//   {
//     id: "7",
//     type: 2,
//     startDate: "1863",
//     title: {
//       en: "Philipp Reis’s telephone",
//       de: "Telefon von Philipp Reis",
//     },
//     description: {
//       en: `Philipp Reis’s telephone`,
//       de: `Telefon von Philipp Reis`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/philip-reis-telefon-f9f2ddc7f14b439ebf6122e0288ea98f/embed?autostart=1",
//   },
//   {
//     id: "8",
//     type: 2,
//     startDate: "1877",
//     title: {
//       en: "Alexander Graham Bell’s telephone",
//       de: "Telefon von Alexander Graham Bell",
//     },
//     description: {
//       en: `Alexander Graham Bell’s telephone`,
//       de: `Telefon von Alexander Graham Bell`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/bell-hoerer-9fe1571acd3a40f1ac65f43fe71a4782/embed?autostart=1",
//   },
//   {
//     id: "9",
//     type: 1,
//     startDate: "1879",
//     title: {
//       en: "Thomas Alva Edison builds his first electric light bulb.",
//       de: "Thomas Alva Edison führt die Glühlampe ein.",
//     },
//     description: {
//       en: `Thomas Alva Edison builds his first electric light bulb.`,
//       de: `Thomas Alva Edison führt die Glühlampe ein.`,
//     },
//   },
//   {
//     id: "10",
//     type: 1,
//     startDate: "1882",
//     title: {
//       en: "Thomas Alva Edison opens his first electric power station.",
//       de: "Erstes elektrisches Kraftwerk von Thomas Alva Edison",
//     },
//     description: {
//       en: `Thomas Alva Edison opens his first electric power station.`,
//       de: `Erstes elektrisches Kraftwerk von Thomas Alva Edison`,
//     },
//   },
//   {
//     id: "11",
//     type: 1,
//     startDate: "1884",
//     title: {
//       en: "Invention of the ‘electric telescope’ system with a Nipkow disc.",
//       de: "Erfindung des elektrischen Teleskops mit Nipkow-Scheibe",
//     },
//     description: {
//       en: `Invention of the ‘electric telescope’ system with a Nipkow disc.`,
//       de: `Erfindung des elektrischen Teleskops mit Nipkow-Scheibe`,
//     },
//   },
//   {
//     id: "12",
//     type: 2,
//     startDate: "1886",
//     title: {
//       en: "Switchboard for 100 telephone lines",
//       de: "Klappenschrank für 100 Telefonanschlüsse",
//     },
//     description: {
//       en: `Switchboard for 100 telephone lines`,
//       de: `Klappenschrank für 100 Telefonanschlüsse`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/klappenschrank-anim-v01-bcc1aab0afa04a20a894a8980eecf799/embed?autostart=1",
//   },
//   {
//     id: "13",
//     type: 1,
//     startDate: "1887",
//     title: {
//       en: "Emil Berliner invents the gramophone record.",
//       de: "Emil Berliner erfindet die Schallplatte.",
//     },
//     description: {
//       en: `Emil Berliner invents the gramophone record.`,
//       de: `Emil Berliner erfindet die Schallplatte.`,
//     },
//   },
//   {
//     id: "14",
//     type: 2,
//     startDate: "1890",
//     title: {
//       en: "Tinfoil phonograph after Thomas Alva Edison",
//       de: "Zinnfolienphonograph nach Thomas Alva Edison",
//     },
//     description: {
//       en: `Tinfoil phonograph after Thomas Alva Edison`,
//       de: `Zinnfolienphonograph nach Thomas Alva Edison`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/zinnfolienphonograph-50b95f2960be4248a01aa84430d93b65/embed?autostart=1",
//   },
//   {
//     id: "15",
//     type: 2,
//     startDate: "1904",
//     title: {
//       en: "The Cable Steamship Stephan",
//       de: "Kabeldampfer „Stephan“",
//     },
//     description: {
//       en: `The Cable Steamship Stephan`,
//       de: `Kabeldampfer „Stephan“`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/kabeldampfer-90dcf376042a4f038b52604df6121f6d/embed?autostart=1",
//   },
//   {
//     id: "16",
//     type: 2,
//     startDate: "1928",
//     title: {
//       en: "Telehor television receiver with a Nipkow disc",
//       de: "Fernsehempfänger mit Nipkow-Scheibe „Telehor“",
//     },
//     description: {
//       en: `Telehor television receiver with a Nipkow disc`,
//       de: `Fernsehempfänger mit Nipkow-Scheibe „Telehor“`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/nipkow-fernseher-anim-8d16f026a3b049e4805a3c2283fc24e4/embed?autostart=1",
//   },
//   {
//     id: "17",
//     type: 1,
//     startDate: "1940",
//     title: {
//       en: "Peter Goldmark develops a prototype colour television.",
//       de: "Peter Goldmark entwickelt einen Prototyp eines Farbfernsehers.",
//     },
//     description: {
//       en: `Peter Goldmark develops a prototype colour television.`,
//       de: `Peter Goldmark entwickelt einen Prototyp eines Farbfernsehers.`,
//     },
//   },
//   {
//     id: "18",
//     type: 1,
//     startDate: "1941",
//     title: {
//       en: "Konrad Zuse builds the first computer.",
//       de: "Konrad Zuse baut den ersten Computer.",
//     },
//     description: {
//       en: `Konrad Zuse builds the first computer.`,
//       de: `Konrad Zuse baut den ersten Computer.`,
//     },
//   },
//   {
//     id: "19",
//     type: 2,
//     startDate: "1944",
//     title: {
//       en: "Enigma M4 rotor cipher machine",
//       de: "Rotor-Chiffriermaschine Enigma M4",
//     },
//     description: {
//       en: `Enigma M4 rotor cipher machine`,
//       de: `Rotor-Chiffriermaschine Enigma M4`,
//     },
//     sketchfab:
//       "https://sketchfab.com/3d-models/enigma-anim-fbx-4cb134e8ee2f4f1f8dd1f1dd18666df4/embed?autostart=1",
//   },
//   {
//     id: "20",
//     type: 1,
//     startDate: "1962",
//     title: {
//       en: "Communications satellites",
//       de: "Kommunikationssatteliten",
//     },
//     description: {
//       en: `Die USA bringen den ersten Kommunikationssatelliten, mit dem Telefongespräche und
//         Fernsehprogramme übertragen werden können, ins All.`,
//       de: `The USA launches the first communications satellites into space allowing telephone calls and TV
//         programmes to be relayed.`,
//     },
//   },
//   {
//     id: "21",
//     type: 1,
//     startDate: "1963",
//     title: {
//       en: "Digital Camera",
//       de: "Digitalkamera",
//     },
//     description: {
//       en: `David Paul Gregg invents the digital camera.`,
//       de: `David Paul Gregg erfindet die Digitalkamera.`,
//     },
//   },
//   {
//     id: "22",
//     type: 1,
//     startDate: "1970",
//     title: {
//       en: "The first commercial pocket calculator appears on the market.",
//       de: "Der erste Taschenrechner kommt auf den Markt.",
//     },
//     description: {
//       en: `The first commercial pocket calculator appears on the market.`,
//       de: `Der erste Taschenrechner kommt auf den Markt.`,
//     },
//   },
//   {
//     id: "23",
//     type: 1,
//     startDate: "1971",
//     title: {
//       en: "Ray Tomlinson sends the first email.",
//       de: "Ray Tomlinson versendet die erste E-Mail.",
//     },
//     description: {
//       en: `Ray Tomlinson sends the first email.`,
//       de: `Ray Tomlinson versendet die erste E-Mail.`,
//     },
//   },
//   {
//     id: "24",
//     type: 1,
//     startDate: "1973",
//     title: {
//       en: "The Handheld Cellular",
//       de: "Das Handy",
//     },
//     description: {
//       en: `Martin Cooper develops the first handheld cellular phone for the US company Motorola.`,
//       de: `Martin Cooper entwickelt für den US-Hersteller Motorola das erste Handy.`,
//     },
//   },
// ];

export const mockData: mockDataType = [
  {
    id: "1",
    type: 1,
    startDate: "1800",
    title: {
      en: "Voltaic Pile",
      de: "Voltasche Säule",
    },
    description: {
      en: `Alessandro Volta develops the prototype of today’s batteries – the voltaic pile.`,
      de: `Alessandro Volta entwickelt den Prototyp unserer heutigen Batterien – die voltasche Säule.`,
    },
  },
  {
    id: "2",
    type: 2,
    startDate: "1808",
    title: {
      en: "Sotzmann Globe",
      de: "Sotzmann-Globus",
    },
    description: {
      en: `Sotzmann Globe shows the voyages of discovery complementing the European view of the
        world.`,
      de: `Sotzmann-Globus und die Vervollständigung des europäischen Weltbilds durch Schifffahrten`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "3",
    type: 1,
    startDate: "1831",
    title: {
      en: "Electromagnetic Induction",
      de: "Elektromagnetische Induktion",
    },
    description: {
      en: `Michael Faraday discovers electromagnetic induction, paving the way for electrical engineering.`,
      de: `Michael Faraday entdeckt elektromagnetische Induktion und ebnet somit den Weg für die Elektrotechnik.`,
    },
  },
  {
    id: "4",
    type: 1,
    startDate: "1836",
    title: {
      en: "Copper-Zinc Battery",
      de: "Kupfer-Zink-Batterie",
    },
    description: {
      en: `John Frederic Daniell (1790–1845) builds the first practical version of an electric battery
        (copper-zinc battery).`,
      de: `John Frederic Daniell (1790–1845) baut die erste technisch geeignete elektrische Batterie
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
    },
    description: {
      en: `Werner von Siemens develops the first insulated cable, allowing submarine and underground cables to be laid.`,
      de: `Werner von Siemens isoliert erstmals Kabel und ermöglicht deren Verlegung in der Erde und unter Wasser.`,
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
    },
    description: {
      en: `Telegraph station with Morse key and ink writer`,
      de: `Telegrafenstation mit Stiftschreiber und Morsetaste`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "7",
    type: 2,
    startDate: "1863",
    title: {
      en: "Philipp Reis’s telephone",
      de: "Telefon von Philipp Reis",
    },
    description: {
      en: `Philipp Reis’s telephone`,
      de: `Telefon von Philipp Reis`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "8",
    type: 2,
    startDate: "1877",
    title: {
      en: "Alexander Graham Bell’s telephone",
      de: "Telefon von Alexander Graham Bell",
    },
    description: {
      en: `Alexander Graham Bell’s telephone`,
      de: `Telefon von Alexander Graham Bell`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "9",
    type: 1,
    startDate: "1879",
    title: {
      en: "Thomas Alva Edison builds his first electric light bulb.",
      de: "Thomas Alva Edison führt die Glühlampe ein.",
    },
    description: {
      en: `Thomas Alva Edison builds his first electric light bulb.`,
      de: `Thomas Alva Edison führt die Glühlampe ein.`,
    },
  },
  {
    id: "10",
    type: 1,
    startDate: "1882",
    title: {
      en: "Thomas Alva Edison opens his first electric power station.",
      de: "Erstes elektrisches Kraftwerk von Thomas Alva Edison",
    },
    description: {
      en: `Thomas Alva Edison opens his first electric power station.`,
      de: `Erstes elektrisches Kraftwerk von Thomas Alva Edison`,
    },
  },
  {
    id: "11",
    type: 1,
    startDate: "1884",
    title: {
      en: "Invention of the ‘electric telescope’ system with a Nipkow disc.",
      de: "Erfindung des elektrischen Teleskops mit Nipkow-Scheibe",
    },
    description: {
      en: `Invention of the ‘electric telescope’ system with a Nipkow disc.`,
      de: `Erfindung des elektrischen Teleskops mit Nipkow-Scheibe`,
    },
  },
  {
    id: "12",
    type: 2,
    startDate: "1886",
    title: {
      en: "Switchboard for 100 telephone lines",
      de: "Klappenschrank für 100 Telefonanschlüsse",
    },
    description: {
      en: `Switchboard for 100 telephone lines`,
      de: `Klappenschrank für 100 Telefonanschlüsse`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "13",
    type: 1,
    startDate: "1887",
    title: {
      en: "Emil Berliner invents the gramophone record.",
      de: "Emil Berliner erfindet die Schallplatte.",
    },
    description: {
      en: `Emil Berliner invents the gramophone record.`,
      de: `Emil Berliner erfindet die Schallplatte.`,
    },
  },
  {
    id: "14",
    type: 2,
    startDate: "1890",
    title: {
      en: "Tinfoil phonograph after Thomas Alva Edison",
      de: "Zinnfolienphonograph nach Thomas Alva Edison",
    },
    description: {
      en: `Tinfoil phonograph after Thomas Alva Edison`,
      de: `Zinnfolienphonograph nach Thomas Alva Edison`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "15",
    type: 2,
    startDate: "1904",
    title: {
      en: "The Cable Steamship Stephan",
      de: "Kabeldampfer „Stephan“",
    },
    description: {
      en: `The Cable Steamship Stephan`,
      de: `Kabeldampfer „Stephan“`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "16",
    type: 2,
    startDate: "1928",
    title: {
      en: "Telehor television receiver with a Nipkow disc",
      de: "Fernsehempfänger mit Nipkow-Scheibe „Telehor“",
    },
    description: {
      en: `Telehor television receiver with a Nipkow disc`,
      de: `Fernsehempfänger mit Nipkow-Scheibe „Telehor“`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "17",
    type: 1,
    startDate: "1940",
    title: {
      en: "Peter Goldmark develops a prototype colour television.",
      de: "Peter Goldmark entwickelt einen Prototyp eines Farbfernsehers.",
    },
    description: {
      en: `Peter Goldmark develops a prototype colour television.`,
      de: `Peter Goldmark entwickelt einen Prototyp eines Farbfernsehers.`,
    },
  },
  {
    id: "18",
    type: 1,
    startDate: "1941",
    title: {
      en: "Konrad Zuse builds the first computer.",
      de: "Konrad Zuse baut den ersten Computer.",
    },
    description: {
      en: `Konrad Zuse builds the first computer.`,
      de: `Konrad Zuse baut den ersten Computer.`,
    },
  },
  {
    id: "19",
    type: 2,
    startDate: "1944",
    title: {
      en: "Enigma M4 rotor cipher machine",
      de: "Rotor-Chiffriermaschine Enigma M4",
    },
    description: {
      en: `Enigma M4 rotor cipher machine`,
      de: `Rotor-Chiffriermaschine Enigma M4`,
    },
    glbJson: "1.glb.json",
  },
  {
    id: "20",
    type: 1,
    startDate: "1962",
    title: {
      en: "Communications satellites",
      de: "Kommunikationssatteliten",
    },
    description: {
      en: `Die USA bringen den ersten Kommunikationssatelliten, mit dem Telefongespräche und
        Fernsehprogramme übertragen werden können, ins All.`,
      de: `The USA launches the first communications satellites into space allowing telephone calls and TV
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
    },
    description: {
      en: `David Paul Gregg invents the digital camera.`,
      de: `David Paul Gregg erfindet die Digitalkamera.`,
    },
  },
  {
    id: "22",
    type: 1,
    startDate: "1970",
    title: {
      en: "The first commercial pocket calculator appears on the market.",
      de: "Der erste Taschenrechner kommt auf den Markt.",
    },
    description: {
      en: `The first commercial pocket calculator appears on the market.`,
      de: `Der erste Taschenrechner kommt auf den Markt.`,
    },
  },
  {
    id: "23",
    type: 1,
    startDate: "1971",
    title: {
      en: "Ray Tomlinson sends the first email.",
      de: "Ray Tomlinson versendet die erste E-Mail.",
    },
    description: {
      en: `Ray Tomlinson sends the first email.`,
      de: `Ray Tomlinson versendet die erste E-Mail.`,
    },
  },
  {
    id: "24",
    type: 1,
    startDate: "1973",
    title: {
      en: "The Handheld Cellular",
      de: "Das Handy",
    },
    description: {
      en: `Martin Cooper develops the first handheld cellular phone for the US company Motorola.`,
      de: `Martin Cooper entwickelt für den US-Hersteller Motorola das erste Handy.`,
    },
  },
];
