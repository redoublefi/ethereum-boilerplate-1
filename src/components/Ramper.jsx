// import React, { useState, useEffect } from "react";
// import { useMoralis } from "react-moralis";

// function Ramper() {
//   const [ramper, setRamper] = useState();
//   const { Moralis } = useMoralis();
//   useEffect(() => {
//     if (!Moralis?.["Plugins"]?.["fiat"]) return null;
//     async function initPlugin() {
//       Moralis.Plugins.fiat
//         .buy({}, { disableTriggers: true })
//         .then((data) => setRamper(data.data));
//     }
//     initPlugin();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [Moralis.Plugins]);

//   return (
//     <iframe
//       src={ramper}
//       title="ramper"
//       frameBorder="no"
//       allow="accelerometer; autoplay; camera; gyroscope; payment;"
//       style={{
//         width: "420px",
//         height: "625px",
//         boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
//         border: "1px solid #e7eaf3",
//         borderRadius: "1rem",
//         backgroundColor: "white",
//       }}
//     />
//   );
// }

// import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";

// function Ramper() {

// new RampInstantSDK({
//      hostAppName: "Ramp Demo",
//      hostLogoUrl:
//        "https://i.ibb.co/fFd9p97/redouble-logo-dotted-png-1000x1000.png",
//   variant: "auto",
//       containerNode: document.getElementById('root')
// }).show()

// }

function Ramper() {
  return (
    <div className="Ramp">
      <iframe
        src="https://buy.ramp.network/?hostAppName=Ramp_Demo&hostLogoUrl=https://i.ibb.co/fFd9p97/redouble-logo-dotted-png-1000x1000.png&variant=auto"
        target="blank"
        width={400}
        height={650}
        frameBorder="0"
      ></iframe>

      {/* <a href="https://buy.ramp.network/?hostAppName=Ramp_Demo&hostLogoUrl=https://i.ibb.co/fFd9p97/redouble-logo-dotted-png-1000x1000.png&variant=auto
" target='blank'>Go to Ramp</a> */}
    </div>
  );
}
export default Ramper;
