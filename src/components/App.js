import "./TableData.js";
import styles from "../styles/app.module.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import TableData from "./TableData.js";
import { Button } from "@mantine/core";
import { useState } from "react";

function App() {
  const [calculateGamma, setCalculateGamma] = useState(false);
  function toggleCalculations() {
    setCalculateGamma(!calculateGamma);
  }
  return (
    <MantineProvider>
      <div className={styles.display}>
        <Button style={{ width: "30%" }} onClick={toggleCalculations}>
          Toggle Calculations
        </Button>
        <TableData isGamma={calculateGamma} />
      </div>
    </MantineProvider>
  );
}

export default App;
