# Wellen Codes und Kabel(salat) – Wie die Kommunikation in die Hosentasche kamEin Tandemprojekt der Staatlichen Museen zu Berlin – Preußischer Kulturbesitz (SMB) und der Museumsstiftung Post und Telekommunikation (MSPT)

Die Web App-Anwendung ermöglicht den Nutzer:innen mit Hilfe von 3D-Modellen
und Animationen technische Sammlungs-Objekte neu zu erfahren. Objekte
drehen, aus allen Richtungen betrachten und winzige Bauteile und Details
erkennen, bietet einen Mehrwert in der digitalen Vermittlung. Dadurch wird die
bloße physische Präsenz der Objekte, meist unzugänglich in der Vitrine, um die
multiperspektivische Ansicht erweitert. Je nach Interesse lassen sich am Objekt
die Kapitel Nutzungsgeschichte, technische Funktionsweise oder Bezug zur
Gegenwart auswählen. Wichtige Meilensteine der Kommunikationsgeschichte
können dadurch sowohl im Museum als auch von zu Hause aus erkundet werden.
So wird die Bedeutung der Objekte für die Geschichte der Kommunikation noch
deutlicher.

## Kurzbeschreibung

Mit Hilfe der Web App lassen sich anhand von Objekten aus der Sammlung der
MSPT Meilensteine der Kommunikationsgeschichte erkunden. Das geht sowohl
vor Ort im Museum durch an den Objektvitrinen angebrachten QR-Codes als auch
mobil und außerhalb der Öffnungszeiten. Den Nutzer:innen wird dadurch ein
völlig neuer Zugang zu ausgewählten Sammlungsobjekten ermöglicht

## Installation

[Node.js](https://nodejs.org/en) version 18.0.0 is needed for the Project and needs to be installed.

### `npm i`

It will install all needed pacjages to `node_modules` folder

## File Structure

### Timeline

Entries for the generated Timeline can be created by editing the file `src/api/data.ts` corresponding images are stored in the `public/assets` folder of the project.\
Images have to be named after the Timeline entries. Language are contained in the language specific `src/locales/[LANGUAGE_NAME]` folder.

### 3D Objects

3D objects in `glb` format are stored in the `public/glb/[FOLDER_WITH_THE_NAME_AS_ID]` folder, ID refers to the corresponding Timeline entry name.
Each 3D object folder contains the according language files following the naming: `glb-[LANG_NAME].json` and the actual `glb` file.

## Usage

Run `npm start` to start application locally. This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

Run `npm run build`, it builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
Copy the contents of the /build folder to a webserver.

## Entstehungskontext

Die Progressive Web App Wellen, Codes und Kabel(salat) – Wie die
Kommunikation in die Hosentasche kam ist im Rahmen des
museum4punkt0-Projekts „(De-)Coding Culture Extended. Digitale Kompetenzen
in kulturellen Räumen“ im Tandem mit den SMB entstanden. Das Ziel war die
Nachnutzung und Weiterentwicklung des von den SMB entwickelten Web App
Baukastens „display“. Dieses für Kunstmuseen entwickelte Framework soll dabei
an die Bedürfnisse eines technikhistorischen Museums angepasst werden, das
die Objektspezifika berücksichtigt und aus dem Entwicklungsprozess heraus
dokumentiert.

## Förderung
Diese native Anwendung ist entstanden im Verbundprojekt museum4punkt0 – Digitale Strategien für das Museum der Zukunft,
Teilprojekt "(De-)Coding Culture extended. Digitale Kompetenz in kulturellen Räumen". Das Projekt museum4punkt0 wird gefördert durch die Beauftragte der Bundesregierung für Kultur
und Medien aufgrund eines Beschlusses des Deutschen Bundestages. Weitere Informationen:\
www.museum4punkt0.de

![alt text](https://github.com/museum4punkt0/media_storage/blob/2c46af6cb625a2560f39b01ecb8c4c360733811c/BKM_Fz_2017_Web_de.gif) ![alt text](https://github.com/museum4punkt0/media_storage/blob/e87f37973c3d91e2762d74d51bed81de5026e06e/BKM_Neustart_Kultur_Wortmarke_pos_RGB_RZ_web.jpg)

## Credits

Auftraggeber/Rechteinhaber: Museumsstiftung Post und Telekommunikation
Texte: Sara Oslislo, Johanna Geßner, Dr. Tina Kubot, Frank Gnegel, Lioba Nägele\
Scan 3D-Modelle und Animationen: Scanmore GmbH, Scanmotion\
Konzept, Programmierung & Gestaltung der Web App: Playersjourney UG und das
Team der MSPT\
Projektleitung: Anja Schaluschke und Sara Oslislo \
Projektassistenz: Johanna Geßner und Lena Katharina Streckert\
Unter Mitwirkung von museum4punkt0 und Staatliche Museen zu Berlin –
Preußischer Kulturbesitz\
Kontaktinformation: museum4punkt0 / Museumsstiftung Post und
Telekommunikation:
Lena Katharina Streckert mfk-berlin@mspt.de\
