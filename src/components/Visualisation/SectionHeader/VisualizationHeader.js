import { Box, Button, IconButton, Link, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../../App";
import FlipButton from "./FlipButton";
import TickFontSizeControl from "./TickFontSizeControl";
import ScatterLegend from "../MultiChart/ScatterLegend";


const VisualizationHeader = ({ restoreCanvas, isPairwiseViz, downloadFileName, colorScale, width }) => {
  const { downloadPNG } = useContext(Context);
  const handleDownload = () => {
    if (isPairwiseViz) {
      downloadPNG(downloadFileName, "svgChart");
    } else {
      downloadPNG(downloadFileName, "scatter-chart");
    }
  };
  return (
    <Box sx={{ postion: "relative" }}>
      <Box display="flex" justifyContent="space-between">
        <Link
          href={isPairwiseViz 
            ? "https://kitab-project.org/data/viz#the-pairwise-text-reuse-visualisation"
            : "https://kitab-project.org/data/viz#scatter-viz"
          }
          target="_blank"
        >
          <IconButton
            sx={{
              color: "#2862a5",
            }}
          >
            <i
              className="fa-regular fa-circle-question"
              style={{ fontSize: "18px" }}
            ></i>
          </IconButton>
        </Link>
        <Box display="flex" alignItems="center">
          {isPairwiseViz ? "" : (
            <ScatterLegend 
              colorScale={colorScale}
              width={width/2}
              margin={50}
            />
          )}
        </Box>

        <Box display="flex" alignItems="center">
          
          <Tooltip title="Reset Chart" placement="top">
            <Button
              color="primary"
              variant="outlined"
              rel="noreferrer"
              target="_blank"
              onClick={restoreCanvas}
              sx={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                minWidth: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                color: "#2862a5",
                border: "1px solid #2862a5",
                mr: "10px",
              }}
            >
              <i className="fa-solid fa-arrows-rotate"></i>
            </Button>
          </Tooltip>
          {isPairwiseViz ? <FlipButton /> : ""}
          <Tooltip title="Download Chart as PNG" placement="top">
            <Button
              onClick={handleDownload}
              color="primary"
              variant="outlined"
              rel="noreferrer"
              target="_blank"
              sx={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                minWidth: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                color: "#2862a5",
                border: "1px solid #2862a5",
                mr: "10px",
              }}
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>
            </Button>
          </Tooltip>
          {isPairwiseViz ? <TickFontSizeControl svgSelector="#svgChart" /> : ""}
        </Box>
      </Box>
    </Box>
  );
};

export default VisualizationHeader;
