// import { useState, useEffect, useRef } from "react";
// import axios from "../api/axios.js";

// const VoiceToText = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [transcript, setTranscript] = useState("");
//   const [mood, setMood] = useState("Neutral 😐");
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert(
//         "Your browser does not support Speech Recognition. Please use Chrome."
//       );
//       return;
//     }

//     const SpeechRecognition = window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = true;
//     recognition.interimResults = true;

//     recognition.onresult = (event) => {
//       let finalTranscript = "";

//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         if (event.results[i].isFinal) {
//           finalTranscript += event.results[i][0].transcript;
//         }
//       }

//       if (finalTranscript) {
//         setTranscript(finalTranscript);
//         detectMoodAI(finalTranscript); // call AI on final transcript
//       }
//     };

//     recognitionRef.current = recognition;
//   }, []);

//   const detectMoodAI = async (text) => {
//     try {
//       const response = await axios.post("/mood/detect", { text });
//       setMood(response.data.mood);
//     } catch (err) {
//       console.error("Mood detection failed", err);
//     }
//   };

//   const startRecording = () => {
//     if (recognitionRef.current && !isRecording) {
//       setTranscript("");
//       setMood("Neutral 😐");
//       recognitionRef.current.start();
//       setIsRecording(true);
//     }
//   };

//   const stopRecording = () => {
//     if (recognitionRef.current && isRecording) {
//       recognitionRef.current.stop();
//       setIsRecording(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🎙️ Voice to Text & AI Mood Detection</h2>
//       <button onClick={isRecording ? stopRecording : startRecording}>
//         {isRecording ? "Stop Recording" : "Start Recording"}
//       </button>

//       <div
//         style={{
//           marginTop: "20px",
//           border: "1px solid gray",
//           padding: "10px",
//           minHeight: "100px",
//         }}
//       >
//         <strong>Transcript:</strong>
//         <p>{transcript || "Start speaking to see text here..."}</p>
//       </div>

//       <div style={{ marginTop: "20px", fontSize: "18px" }}>
//         <strong>Mood:</strong> {mood}
//       </div>
//     </div>
//   );
// };

// export default VoiceToText;

import { useState, useEffect, useRef } from "react";
import axios from "../api/axios.js";
import Orb from "../assets/animations/Orb.jsx";

const VoiceToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [mood, setMood] = useState("Neutral 😐");
  const recognitionRef = useRef(null);

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
      const response = await axios.post("/mood/detect", { text });
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
    <div
      className="relative w-full h-[600px] overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Orb Background — absolute and behind content */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Content with padding and z-index to be above orb */}
      <div className="relative z-10 p-6 h-full overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">
          🎙️ Voice to Text & AI Mood Detection
        </h2>

        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`mb-4 px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg ${
            isRecording
              ? "bg-red-600 hover:bg-red-700 text-white animate-pulse"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>

        <div className="mb-6 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 p-4 min-h-[120px] text-white">
          <strong>Transcript:</strong>
          <p className="whitespace-pre-wrap mt-2">
            {transcript || "Start speaking to see text here..."}
          </p>
        </div>

        <div className="text-white text-lg font-semibold">
          <strong>Mood:</strong> {mood}
        </div>
      </div>
    </div>
  );
};

export default VoiceToText;
