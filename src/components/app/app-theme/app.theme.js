import { createTheme } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500]
        },
        secondary: {
            main: orange[500]
        }
    }
});

export default theme;