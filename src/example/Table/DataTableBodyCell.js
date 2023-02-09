/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import { Box } from "@mui/material"

function DataTableBodyCell({ noBorder, align, children }) {
  return (
    <Box
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm,
        borderBottom: noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`,
        maxWidth: "100px",
        // backgroundColor: "red",
      })}
    >
      <Box
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: "middle", maxWidth: "400px" }}
      >
        {children}
      </Box>
    </Box>
  );
}

// Setting default values for the props of DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: "left",
};


export default DataTableBodyCell;
