import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const countries = ["United States of America", "Turkey", "Syria", "Yemen", "Kenya", "Jordan", "Palestine", "Sierra Leone", "Lebanon", "Sudan", "Chad", "Cameroon", "Ghana", "Mali"]

const MapChart = ({ setTooltipContent }) => {
    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <>
                                    {/* geo.properties.NAME !== "United States of America" */}
                                    {!countries.includes(geo.properties.NAME) ? (
                                        <>
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                // onMouseEnter={() => {
                                                //     const { NAME, POP_EST } = geo.properties;
                                                //     setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                                // }}
                                                // onMouseLeave={() => {
                                                //     setTooltipContent("");
                                                // }}
                                                style={{
                                                    default: {
                                                        fill: "white",
                                                        stroke: "#e3e3e3"
                                                    },
                                                    hover: {
                                                        fill: "#386ae8",
                                                        outline: "none"
                                                    },
                                                    pressed: {
                                                        fill: "#E42",
                                                        outline: "none"
                                                    }
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <>

                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => {
                                                    const { NAME, POP_EST } = geo.properties;
                                                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                                    // <Testcomp />
                                                }}
                                                onMouseLeave={() => {
                                                    setTooltipContent("");
                                                    <></>
                                                }}
                                                className="country"
                                                style={{
                                                    default: {
                                                        fill: "#29842a",
                                                        outline: "none"
                                                    },
                                                    hover: {
                                                        fill: "#386ae8",
                                                        outline: "none",
                                                    },
                                                    pressed: {
                                                        fill: "#E42",
                                                        outline: "none"
                                                    }
                                                }}
                                            >
                                                {/* <h1>AAAAAAAAAAAAAA</h1> */}
                                            </Geography>
                                        </>
                                    )}
                                </>
                            ))
                        }
                    </Geographies>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
