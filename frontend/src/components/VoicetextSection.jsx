import { useState, useEffect, useRef } from "react";
import API from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const VoiceToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [mood, setMood] = useState("Neutral 😐");
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const logoutsession = async () => {
    const response = await API.post(
      "/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );
    if (response.data.status === "success") {
      navigate("/");
    }
  };

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "Your browser does not support Speech Recognition. Please use Chrome."
      );
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }

      if (finalTranscript) {
        setTranscript(finalTranscript);
        detectMoodAI(finalTranscript); // call AI on final transcript
      }
    };

    recognitionRef.current = recognition;
  }, []);

  const detectMoodAI = async (text) => {
    try {
      const response = await API.post("/mood/detect", { text });
      setMood(response.data.mood);
    } catch (err) {
      console.error("Mood detection failed", err);
    }
  };

  const startRecording = () => {
    if (recognitionRef.current && !isRecording) {
      setTranscript("");
      setMood("Neutral 😐");
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="drawer-toggle"
        className="relative sr-only peer"
      />
      <label
        htmlFor="drawer-toggle"
        className="absolute top-4 left-4 inline-block p-3 transition-all duration-500 bg-green-600 rounded-lg cursor-pointer peer-checked:left-64 peer-checked:rotate-180 z-30"
      >
        <div className="w-6 h-1 mb-1.5 -rotate-45 bg-white rounded-lg"></div>
        <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
      </label>

      {/* Sidebar */}
      <div className="fixed top-0 left-0 z-20 w-64 h-full transform -translate-x-full transition-transform duration-500 ease-in-out bg-white shadow-lg peer-checked:translate-x-0">
        <div className="px-6 py-8 space-y-6">
          <h2 className="text-lg font-semibold">Dashboard Menu</h2>
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => navigate("/DashBoardPage")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Main Page
            </button>
            <button
              onClick={() => navigate("/DashBoardPage/VideosSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Videos Section
            </button>
            <button
              onClick={() => navigate("/DashBoardPage/ProductsSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Products Section
            </button>
            <button
              onClick={() => navigate("/DashBoardPage/GamesSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Games Section
            </button>
            <button
              onClick={() => navigate("/DashBoardPage/CoachSection")}
              className="text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Coach Section
            </button>
            <button
              onClick={logoutsession}
              className="text-left px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto transition-all duration-500 ease-in-out peer-checked:ml-64">
        <h2>🎙️ Voice to Text & AI Mood Detection</h2>
        <button onClick={isRecording ? stopRecording : startRecording}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>

        <div
          style={{
            marginTop: "20px",
            border: "1px solid gray",
            padding: "10px",
            minHeight: "100px",
          }}
        >
          <strong>Transcript:</strong>
          <p>{transcript || "Start speaking to see text here..."}</p>
        </div>

        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <strong>Mood:</strong> {mood}
        </div>
      </div>
    </>
  );
};

export default VoiceToText;
