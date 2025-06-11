import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert>
          <span></span>
          <strong>Alert!</strong> This is a custom alert component.
        </Alert>
      )}

      <Button onClick={() => setAlertVisible(!alertVisible)} color="primary">
        <strong>Click</strong>
      </Button>
    </div>
  );
}

export default App;
