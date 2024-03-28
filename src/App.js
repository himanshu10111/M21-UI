import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Index";
import IndexLogin from "./pages/login/IndexLogin";

import Routenest from "./pages/routes/Routenest";

import IntroductoryFeedback from "./pages/participantfeedback/pages/introductoryFeedback";
import IntroductoryFeedbackStudent from "./pages/participantfeedback/pages/introductoryFeedbackStudent";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<IndexLogin />} />
      <Route path="/auth/login/register" element={<Register />} />

      <Route path="/*" element={<Routenest />} />

      <Route path="/" element={<Navigate to="/auth/login" replace />} />

      <Route
        path="/auth/login/introductoryparticipantfeedback"
        element={<IntroductoryFeedback />}
      />
      <Route
        path="/auth/login/introductoryparticipantstudentfeedback"
        element={<IntroductoryFeedbackStudent />}
      />
    </Routes>
  );
}

export default App;
