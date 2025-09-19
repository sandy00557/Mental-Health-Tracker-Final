// import { useState, useRef } from "react";
// import API from "../api/axios";

// const EmotionRecorder = () => {
//   const [recording, setRecording] = useState(false);
//   const [detectedEmotion, setDetectedEmotion] = useState("");
//   const [loading, setLoading] = useState(false);

//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   // 🎙️ Start recording
//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       mediaRecorderRef.current = new MediaRecorder(stream);

//       audioChunksRef.current = [];
//       mediaRecorderRef.current.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           audioChunksRef.current.push(event.data);
//         }
//       };

//       mediaRecorderRef.current.onstop = async () => {
//         const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
//         audioChunksRef.current = [];

//         const formData = new FormData();
//         formData.append("file", blob, "recording.webm");

//         try {
//           setLoading(true);
//           const res = await API.post("/emotion", formData, {
//             headers: { "Content-Type": "multipart/form-data" },
//           });

//           console.log("✅ Emotion detected:", res.data);
//           setDetectedEmotion(
//             `${res.data.emotion} (${(res.data.confidence * 100).toFixed(1)}%)`
//           );
//         } catch (error) {
//           console.error("❌ Error detecting emotion:", error);
//           setDetectedEmotion("Error detecting emotion. Try again.");
//         } finally {
//           setLoading(false);
//         }
//       };

//       mediaRecorderRef.current.start();
//       setRecording(true);
//     } catch (err) {
//       console.error("Microphone access denied:", err);
//       alert("Please allow microphone access.");
//     }
//   };

//   // ⏹️ Stop recording
//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//       setRecording(false);
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col items-center gap-4">
//       <h2 className="text-xl font-semibold">🎤 Emotion Recognition</h2>

//       <div className="flex gap-4">
//         {!recording ? (
//           <button
//             onClick={startRecording}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg"
//           >
//             Start Recording
//           </button>
//         ) : (
//           <button
//             onClick={stopRecording}
//             className="px-4 py-2 bg-red-600 text-white rounded-lg"
//           >
//             Stop Recording
//           </button>
//         )}
//       </div>

//       {loading && <p className="text-blue-600">⏳ Detecting emotion...</p>}

//       {detectedEmotion && !loading && (
//         <p className="text-lg font-medium">
//           Detected Emotion: <span className="font-bold">{detectedEmotion}</span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default EmotionRecorder;

import { useState, useRef } from "react";
import API from "../api/axios";
import "../assets/animations/CoachSection.css";

const EmotionRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [detectedEmotion, setDetectedEmotion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      setError("");
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      });
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      mediaRecorderRef.current.onerror = (e) => {
        console.error("MediaRecorder error:", e.error);
        setError("Recording error occurred.");
        setRecording(false);
      };
      mediaRecorderRef.current.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        audioChunksRef.current = [];
        const formData = new FormData();
        formData.append("file", blob, "recording.webm");
        try {
          setLoading(true);
          const res = await API.post("/emotion/", formData, {
            headers: { "Content-Type": "multipart/form-data" },
            timeout: 60000,
          });
          if (res.data.status === "success") {
            setDetectedEmotion(
              `${res.data.emotion} (${(res.data.confidence * 100).toFixed(1)}%)`
            );
          } else {
            setError("Failed to detect emotion.");
          }
        } catch (err) {
          console.error("❌ Error detecting emotion:", err);
          setError(
            err.response?.data?.error ||
              "Error detecting emotion. Please try again."
          );
        } finally {
          setLoading(false);
        }
      };
      mediaRecorderRef.current.start(1000);
      setRecording(true);
    } catch (err) {
      console.error("Microphone access denied:", err);
      setError("Please allow microphone access.");
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <>
      <div className="coach-section">
        <div className="floating-bg">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
        </div>
        <div className="p-6 flex flex-col items-center gap-4 max-w-md mx-auto">
          <h2 className="text-2xl font-bold">🎤 Emotion Recognition</h2>
          <div className="flex gap-4">
            {!recording ? (
              <button
                onClick={startRecording}
                disabled={loading}
                className="px-6 py-3 bg-green-600 disabled:bg-gray-400 text-white rounded-lg"
              >
                Start Recording
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="px-6 py-3 bg-red-600 text-white rounded-lg"
              >
                Stop Recording
              </button>
            )}
          </div>
          {loading && <p className="text-blue-600">⏳ Analyzing emotion...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {detectedEmotion && !loading && !error && (
            <p className="text-lg">
              Detected Emotion: <strong>{detectedEmotion}</strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default EmotionRecorder;
