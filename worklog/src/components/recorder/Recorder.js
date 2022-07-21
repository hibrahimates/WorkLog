import Content from "./Content.js";
import Project from "./Project.js";
import Tag from "./Tag.js";
import StartTime from "./time/StartTime.js";
import FinishTime from "./time/FinishTime.js";
import Date from "./time/Date.js";
import Duration from "./time/Duration.js";
import { Box } from "@mui/system";

export default function Recorder() {
  return (
    <Box
      sx={{
        // Flexbox

        // flexbox'u aktif eder
        display: "flex", // flex | inline-flex | block-flex

        // Container icin ***********************************************

        // yatay mi dikey mi dizilecegini belirtir
        //flexDirection: "row", // row | column | reverse-row | reverse-column

        // sadece flexDirection:'row' iken aktif
        // tasarsa alta alayim mi diye soruyor
        //flexWrap: "wrap", // wrap | nowrap | wrap-reverse
        // nowrap yapinca sigmayinca tasiyor cok cirkin, aman dikkat!

        // flex-direction ve flex-wrap bir arada kullanilir
         flexFlow: 'row wrap',

        // icerigin tamami icin ayar yapar, icerik komple saga, komple sola vs. hizalanir, birbirine gore degil.
        alignContent: "center", // flex-start | flex-end | center | space-between | space-around | stretch

        // sadece flexDirection:'row' iken aktif
        // componentlerin birbirine gore yatayda nasil dizilecegini ayarlar
        justifyContent: "space-between", // flex-start | flex-end | center | space-between | space-around | space-evenly

        // componentlerin birbirine gore yatayda nasil dizilecegini ayarlar
        alignItems: "center", // flex-start | flex-end | center | stretch | baseline

        // Item icin ***********************************************

        // parent componentin soyledigi dizilimden bireysel olarak farkli davranmayi temsil eder,
        //  herkes saga yasli iken bu sola yaslanabilir
        // alignSelf: 'center', // auto | flex-start | flex-end | center | baseline | stretch

        // flexGrowun tam tersi, default 1 dir, 2 olan daha cok kuculur
        // flexShrink: '2',

        // bu oge genisligin yarisini kapsar
        // flexBasis: '%50',

        // flex-grow, flex-shrink ve flex-basis ozelliklerinin kisaltmasidir
        // flex: '0 1 auto',

        // olabildigince genislemeyi temsil eder, bu 1 yanindaki 2 ise, ekranin 1/(1+2) sini kaplar
        flexGrow: "1",
        
        m: 1, // dis
        p: 1, // ic
        gap: 5, // icindeki componentler arasi
        boxShadow: 24, // max 24
        borderRadius: 3,

        bgcolor: "#d2d2d2",
        color: "#2d2d2d",
      }}
    >
      <Content />
      <Project />
      <Tag />
      <StartTime />
      <FinishTime />
      <Date />
      <Duration />
    </Box>
  );
}
