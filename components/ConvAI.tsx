// // "use client";

// // import { Button } from "@/components/ui/button";
// // import * as React from "react";
// // import { useCallback } from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { useConversation } from "@11labs/react";
// // import { cn } from "@/lib/utils";
// // import { Phone, PhoneOff, Mic, MicOff, Bot } from 'lucide-react'


// // async function requestMicrophonePermission() {

// //   try {
// //     await navigator.mediaDevices.getUserMedia({ audio: true });
// //     return true;
// //   } catch {
// //     console.error("Microphone permission denied");
// //     return false;
// //   }
// // }

// // async function getSignedUrl(): Promise<string> {
// //   const response = await fetch("/api/signed-url");
// //   if (!response.ok) {
// //     throw Error("Failed to get signed url");
// //   }
// //   const data = await response.json();
// //   return data.signedUrl;
// // }

// // export function ConvAI() {
// //   const [isCallActive, setIsCallActive] = React.useState(false)

// //   const conversation = useConversation({
// //     onConnect: () => {
// //       console.log("connected");
// //     },
// //     onDisconnect: () => {
// //       console.log("disconnected");
// //     },
// //     onError: error => {
// //       console.log(error);
// //       alert("An error occurred during the conversation");
// //     },
// //     onMessage: message => {
// //       console.log(message);
// //     },
// //   });

// //   async function startConversation() {
// //     const hasPermission = await requestMicrophonePermission();
// //     if (!hasPermission) {
// //       alert("No permission");
// //       return;
// //     }
// //     const signedUrl = await getSignedUrl();
// //     const conversationId = await conversation.startSession({ signedUrl });
// //     console.log(conversationId);
// //   }

// //   const stopConversation = useCallback(async () => {
// //     await conversation.endSession();
// //   }, [conversation]);

// //   const handleStartCall = () => {
// //     setIsCallActive(true)
   
// //   }

// //   const handleEndCall = () => {
// //     setIsCallActive(false)

// //   }

// //   return (
// //     <div className={"flex justify-center items-center  bg-transparent"}>
// //       <Card className={" bg-transparent border-none"}>
// //         <CardContent>
// //           <CardHeader>
// //             {/* <CardTitle className={"text-center"}>
// //               {conversation.status === "connected"
// //                 ? conversation.isSpeaking
// //                   ? `Agent is speaking`
// //                   : "Agent is listening"
// //                 : "Disconnected"}
// //             </CardTitle> */}
// //           </CardHeader>
// //           <div className={"flex flex-col gap-y-4 text-center"}>
// //             <div
// //               className={cn(
// //                 "orb my-16 mx-12",
// //                 conversation.status === "connected" && conversation.isSpeaking
// //                   ? "orb-active animate-orb"
// //                   : conversation.status === "connected"
// //                   ? "animate-orb-slow orb-inactive"
// //                   : "orb-inactive"
// //               )}
// //             ></div>

// // <div className="text-center mb-8">
// //             <div className={`
// //               inline-flex items-center space-x-3 px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm
// //               ${isCallActive 
// //                 ? 'bg-green-500/20 text-green-300 border-green-400/40 shadow-lg shadow-green-500/20' 
// //                 : 'bg-white/10 text-purple-200 border-white/20'
// //               }
// //             `}>
// //               <div className={`w-2 h-2 rounded-full ${
// //                 isCallActive ? 'bg-green-400 animate-pulse shadow-lg shadow-green-400/50' : 'bg-purple-400'
// //               }`} />
// //               <span>{isCallActive ? 'Connected & Listening' : 'Ready to Connect'}</span>
// //             </div>
// //           </div>
            
// //               <div className="flex justify-center space-x-8 mb-6">
// //             {/* Start Call Button */}
// //             <button
// //               onClick={handleStartCall}
// //               disabled={isCallActive}
// //               className={`
// //                 relative p-5 rounded-full transition-all duration-300 transform shadow-2xl
// //                 ${isCallActive 
// //                   ? 'bg-gray-600/50 cursor-not-allowed opacity-50 scale-95' 
// //                   : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 hover:scale-110 active:scale-95 shadow-green-500/30 hover:shadow-green-400/50'
// //                 }
// //               `}
// //             >
// //               <Phone className="w-7 h-7 text-white" />
// //               {!isCallActive && (
// //                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 hover:opacity-20 transition-opacity duration-300" />
// //               )}
// //             </button>

// //             {/* End Call Button */}
// //             <button
// //               onClick={handleEndCall}
// //               disabled={!isCallActive}
// //               className={`
// //                 relative p-5 rounded-full transition-all duration-300 transform shadow-2xl
// //                 ${!isCallActive 
// //                   ? 'bg-gray-600/50 cursor-not-allowed opacity-50 scale-95' 
// //                   : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 hover:scale-110 active:scale-95 shadow-red-500/30 hover:shadow-red-400/50'
// //                 }
// //               `}
// //             >
// //               <PhoneOff className="w-7 h-7 text-white" />
// //               {isCallActive && (
// //                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-pink-400 opacity-0 hover:opacity-20 transition-opacity duration-300" />
// //               )}
// //             </button>
// //           </div>

// //             {/* <Button
// //               variant={"outline"}
// //               className={"rounded-full"}
// //               size={"lg"}
// //               disabled={
// //                 conversation !== null && conversation.status === "connected"
// //               }
// //               onClick={startConversation}
// //             >
// //               Start conversation
// //             </Button>
// //             <Button
// //               variant={"outline"}
// //               className={"rounded-full"}
// //               size={"lg"}
// //               disabled={conversation === null}
// //               onClick={stopConversation}
// //             >
// //               End conversation
// //             </Button> */}
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }

// "use client";

// import { Button } from "@/components/ui/button";
// import * as React from "react";
// import { useCallback } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useConversation } from "@11labs/react";
// import { cn } from "@/lib/utils";

// async function requestMicrophonePermission() {
//   try {
//     await navigator.mediaDevices.getUserMedia({ audio: true });
//     return true;
//   } catch {
//     console.error("Microphone permission denied");
//     return false;
//   }
// }

// async function getSignedUrl(): Promise<string> {
//   const response = await fetch("/api/signed-url");
//   if (!response.ok) {
//     throw Error("Failed to get signed url");
//   }
//   const data = await response.json();
//   return data.signedUrl;
// }

// export function ConvAI() {
//   const conversation = useConversation({
//     onConnect: () => {
//       console.log("connected");
//     },
//     onDisconnect: () => {
//       console.log("disconnected");
//     },
//     onError: error => {
//       console.log(error);
//       alert("An error occurred during the conversation");
//     },
//     onMessage: message => {
//       console.log(message);
//     },
//   });

//   async function startConversation() {
//     const hasPermission = await requestMicrophonePermission();
//     if (!hasPermission) {
//       alert("No permission");
//       return;
//     }
//     const signedUrl = await getSignedUrl();
//     const conversationId = await conversation.startSession({ signedUrl });
//     console.log(conversationId);
//   }

//   const stopConversation = useCallback(async () => {
//     await conversation.endSession();
//   }, [conversation]);

//   const getStatusText = () => {
//     if (conversation.status === "connected") {
//       return conversation.isSpeaking ? "AI Speaking" : "Connected & Listening";
//     }
//     return "Disconnected";
//   };

//   const getOrbClasses = () => {
//     const baseClasses = "w-48 h-48 rounded-full relative transition-all duration-1000 ease-in-out";
//     const gradientBase = "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600";
//     const shadow = "shadow-2xl";
    
//     if (conversation.status === "connected") {
//       if (conversation.isSpeaking) {
//         return `${baseClasses} ${gradientBase} ${shadow} shadow-cyan-400/50 animate-pulse scale-110`;
//       } else {
//         return `${baseClasses} ${gradientBase} ${shadow} shadow-blue-400/40 animate-bounce`;
//       }
//     }
//     return `${baseClasses} bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 ${shadow} shadow-slate-500/20`;
//   };
//   return (
//     <div className="flex justify-center items-center min-h-screen px-4">
//       <Card className="backdrop-blur-xl bg-slate-900/80 border-cyan-500/30 rounded-3xl max-w-md w-full shadow-2xl shadow-cyan-500/20">
//         <CardContent className="p-8">
//           <CardHeader className="p-0 mb-8">
//             <CardTitle className="text-center">
//               <div className="flex items-center justify-center mb-4">
//                 {conversation.status === "connected" && (
//                   <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50" />
//                 )}
//                 <span className="text-cyan-300 font-bold text-xl tracking-wider uppercase">
//                   {getStatusText()}
//                 </span>
//               </div>
//             </CardTitle>
//           </CardHeader>
          
//           <div className="flex flex-col items-center gap-8">
//             {/* Animated Orb */}
//             <div className="relative">
//               <div className={getOrbClasses()}>
//                 {/* Inner glow effect */}
//                 <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
//                 {/* Outer ring for connected state */}
//                 {conversation.status === "connected" && (
//                   <div className="absolute -inset-2 rounded-full border-2 border-cyan-400/50 animate-spin" 
//                        style={{ animationDuration: '3s' }} />
//                 )}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col gap-4 w-full">
//               <Button
//                 className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full py-3 px-8 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105 disabled:from-slate-600 disabled:to-slate-700 disabled:shadow-none disabled:scale-100"
//                 size="lg"
//                 disabled={
//                   conversation !== null && conversation.status === "connected"
//                 }
//                 onClick={startConversation}
//               >
//                 Initialize Connection
//               </Button>
//               <Button
//                 className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-semibold rounded-full py-3 px-8 shadow-lg shadow-red-500/25 hover:shadow-red-400/40 transition-all duration-300 hover:scale-105 disabled:from-slate-600 disabled:to-slate-700 disabled:shadow-none disabled:scale-100"
//                 size="lg"
//                 disabled={conversation === null || conversation.status !== "connected"}
//                 onClick={stopConversation}
//               >
//                 Terminate Session
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
    
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import { useCallback } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useConversation } from "@11labs/react";
import { cn } from "@/lib/utils";
import { Phone, PhoneOff } from "lucide-react";
import { GlobeWave } from "./globe";
import Image from "next/image";

async function requestMicrophonePermission() {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    return true;
  } catch {
    console.error("Microphone permission denied");
    return false;
  }
}

async function getSignedUrl(): Promise<string> {
  const response = await fetch("/api/signed-url");
  if (!response.ok) {
    throw Error("Failed to get signed url");
  }
  const data = await response.json();
  return data.signedUrl;
}

export function ConvAI() {
  const [isCallActive, setIsCallActive] = React.useState(false);
  const conversation = useConversation({
    onConnect: () => {
      console.log("connected");
    },
    onDisconnect: () => {
      console.log("disconnected");
    },
    onError: (error) => {
      console.log(error);
      alert("An error occurred during the conversation");
    },
    onMessage: (message) => {
      console.log(message);
    },
  });

  const getStatusText = () => {
    if (conversation.status === "connected") {
      return conversation.isSpeaking ? "AI Speaking" : "Connected & Listening";
    }
    return "Disconnected";
  };

  const getOrbClasses = () => {
    const base = "w-48 h-48 rounded-full relative flex items-center justify-center transition-all duration-700 ease-in-out shadow-2xl";

    if (isCallActive) {
      return "hidden";
    }

    if (conversation.status === "connected" && conversation.isSpeaking) {
      return '${base} bg-02b1c8/90 text-white';
    }

    return '${base} bg-02b1c8/90 text-white';
  };

  // Orb Inner Glow and Effects
  const getInnerGlowClasses = () => {
    if (isCallActive) {
      return "hidden";
    }

    return "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 opacity-70 blur-xl animate-pulse";
  };

  // Outer Ring for the Orb
  const getOuterRingClasses = () => {
    if (isCallActive) {
      return "hidden";
    }

    return "absolute inset-0 rounded-full border border-cyan-300/30 animate-ping";
  };

  const handleStartCall = async () => {
    setIsCallActive(true);
    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) {
      alert("No permission");
      return;
    }
    const signedUrl = await getSignedUrl();
    const conversationId = await conversation.startSession({ signedUrl });
    console.log(conversationId);
  };

  const handleEndCall = useCallback(async () => {
    await conversation.endSession();
    setIsCallActive(false);
  }, [conversation]);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-3xl shadow-2xl shadow-cyan-500/20 bg-white">
        <CardContent className="p-6 sm:p-8">
          <CardHeader className="p-0 mb-6 sm:mb-8">
            <CardTitle className="text-center">
              <div className="flex items-center justify-center mb-4">
                {conversation.status === "connected" && (
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse shadow-lg shadow-emerald-400/50" />
                )}
              </div>
            </CardTitle>
          </CardHeader>

          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {/* Video Section */}
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
                {!isCallActive ? (
                  <GlobeWave />
                ) : (
                  <div className="relative">
                                <div className={getOrbClasses()}>
                                  {/* Inner glow effect */}
                                   <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                                   {/* Outer ring for connected state */}
                                 {conversation.status === "connected" && (
                                    <div className="absolute -inset-2 rounded-full border-2 border-cyan-400/50 animate-spin" 
                                         style={{ animationDuration: '3s' }} />
                                  )}
                                </div>
                              </div>
                )}
              </div>

            {/* Status Text */}
            <div className="text-center mb-6 sm:mb-8">
              <div
                className={cn(
                  "inline-flex items-center space-x-3 px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm transition-all duration-500",
                  isCallActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"
                )}
              >
                <div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    isCallActive ? "bg-cyan-300 animate-pulse" : "bg-white"
                  )}
                />
                <span>{isCallActive ? "Connected & Listening" : "Ready to Connect"}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-6 flex-wrap">
              {/* Start Call */}
              <button
                onClick={handleStartCall}
                disabled={isCallActive}
                className={cn(
                  "relative p-5 rounded-full shadow-xl transition-all duration-300",
                  isCallActive
                    ? "bg-slate-600/40 cursor-not-allowed opacity-50 scale-95"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-110 active:scale-95 shadow-indigo-400/30"
                )}
              >
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </button>

              {/* End Call */}
              <button
                onClick={handleEndCall}
                disabled={!isCallActive}
                className={cn(
                  "relative p-5 rounded-full shadow-xl transition-all duration-300",
                  !isCallActive
                    ? "bg-slate-600/40 cursor-not-allowed opacity-50 scale-95"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-110 active:scale-95 shadow-indigo-400/30"
                )}
              >
                <PhoneOff className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
