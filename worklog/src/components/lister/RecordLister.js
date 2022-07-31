import { Box } from "@mui/system";

import { useEffect, useState } from "react";
import { Repository } from "./../../repository/Repository";
import ListDay from "./listDay/ListDay.js";

export const refreshList = () => {};

export default function RecordLister() {
  //
  const { records, setRecords } = useState([]);
  //const { reload, setReload } = useState(false);

  useEffect(() => {
    var allRecords = Repository.readAll();
    // console.log(JSON.stringify(allRecords));
    // console.log("");
  });

  function listCreate() {
    var allRecords = Repository.readAll();

    return (
      <>
        {allRecords.map((item) => {
          return <p>{item}</p>;
        })}
      </>
    );
  }

  return (
    <Box
      sx={{
        display: "flex", // flex | inline-flex | block-flex

        flexFlow: "row wrap",

        // icerigin tamami icin ayar yapar, icerik komple saga, komple sola vs. hizalanir, birbirine gore degil.
        alignContent: "center", // flex-start | flex-end | center | space-between | space-around | stretch

        // sadece flexDirection:'row' iken aktif
        // componentlerin birbirine gore yatayda nasil dizilecegini ayarlar
        justifyContent: "flex-start ", // flex-start | flex-end | center | space-between | space-around | space-evenly

        // componentlerin birbirine gore düşeyde nasil dizilecegini ayarlar
        alignItems: "stretch", // flex-start | flex-end | center | stretch | baseline

        // Item icin ***********************************************

        // parent componentin soyledigi dizilimden bireysel olarak farkli davranmayi temsil eder,
        //  herkes saga yasli iken bu sola yaslanabilir
        alignSelf: "auto", // auto | flex-start | flex-end | center | baseline | stretch

        // flexGrowun tam tersi, default 1 dir, 2 olan daha cok kuculur
        // flexShrink: '2',

        // bu oge genisligin yarisini kapsar
        // flexBasis: '%50',

        // flex-grow, flex-shrink ve flex-basis ozelliklerinin kisaltmasidir
        // flex: '0 1 auto',

        // olabildigince genislemeyi temsil eder, bu 1 yanindaki 2 ise, ekranin 1/(1+2) sini kaplar
        flexGrow: "1",

        m: 1, // dis
        mt: 5,
        p: 0.5, // ic
        gap: 5, // icindeki componentler arasi
        boxShadow: 24, // max 24
        borderRadius: 2,

        bgcolor: "#B2F0C3",
        color: "#6985B2",
        fontSize: 20,
      }}
    >
      <ListDay sx={{ alignSelf: "baseline" }} />
      <br />
      {listCreate()}
    </Box>
  );
}
