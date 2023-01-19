import "./App.css";
import QrCode from "./components/qrCode";
function App() {
  return (
    <div className="h-screen w-screen bg-regal-blue-100 grid place-items-center">
      {/* <QrCode /> */}
      <div className="bg-white border rounded-lg">
        <QrCode />
      </div>
    </div>
  );
}

export default App;
