// let handPose;
// let video;
// let hands = [];
// let circles = [];

// function preload() {
//   handPose = ml5.handPose();
// }

// function setup() {
//   createCanvas(640, 480);
//   video = createCapture(VIDEO, { flipped: true });
//   video.size(640, 480);
//   video.hide();
//   handPose.detectStart(video, gotHands);
// }

// function draw() {
//   image(video, 0, 0, width, height);

//   for (let c of circles) {
//     fill(255, 0, 0);
//     noStroke();
//     circle(c.x, c.y, 10);
//   }

//   if (hands.length > 0) {
//     for (let hand of hands) {
//       if (hand.confidence > 0.1) {
//         for (let i = 0; i < hand.keypoints.length; i++) {
//           let keypoint = hand.keypoints[i];
//           if (hand.handedness == "Left" && i === 8) {
//             let drawcircle = { x: width - keypoint.x, y: keypoint.y };
//             circles.push(drawcircle);
//           }
//         }
//       }
//     }
//   }
// }

// function gotHands(results) {
//   hands = results;
// }

//---------------------------------------------

// let model;
// let maxPredictions;
// let circleColor = null; // No default color
// let handPose;
// let video;
// let hands = [];
// let circles = [];

// function preload() {
//   handPose = ml5.handPose();
// }

// function loadModel(modelPath) {
//   tmImage
//     .load(
//       modelPath + "../../../my_model/model.json",
//       modelPath + "../../../my_model/metadata.json"
//     )
//     .then((loadedModel) => {
//       model = loadedModel;
//       maxPredictions = model.getTotalClasses();
//       startPredictionLoop(); // Start predictions once the model is ready
//     })
//     .catch((err) => {
//       console.error("Error loading the model:", err);
//     });
// }

// function setup() {
//   createCanvas(640, 480);
//   video = createCapture(VIDEO, { flipped: true });
//   video.size(640, 480);
//   video.hide();

//   handPose.detectStart(video, gotHands);
//   loadModel("../../../my_model/model.json"); // Pass the correct model path
// }

// function startPredictionLoop() {
//   window.requestAnimationFrame(predict);
// }

// function predict() {
//   if (!model || !video) return; // Ensure model and video are loaded

//   model.predict(video.elt).then((prediction) => {
//     let highestProb = 0;
//     let detectedClass = "";

//     for (let i = 0; i < maxPredictions; i++) {
//       if (prediction[i].probability > highestProb) {
//         highestProb = prediction[i].probability;
//         detectedClass = prediction[i].className;
//       }
//     }

//     console.log("Detected gesture:", detectedClass); // Debugging

//     // Change circle color based on detected gesture
//     if (detectedClass === "0_stop") {
//       circleColor = null; // Stop drawing when "stop" gesture is detected
//     } else if (detectedClass === "1_white") {
//       circleColor = [255, 255, 255]; // White
//     } else if (detectedClass === "2_black") {
//       circleColor = [0, 0, 0]; // Black
//     } else if (detectedClass === "3_red") {
//       circleColor = [255, 0, 0]; // Red
//     } else if (detectedClass === "4_blue") {
//       circleColor = [0, 0, 255]; // Blue
//     } else if (detectedClass === "5_yellow") {
//       circleColor = [255, 255, 0]; // Yellow
//     }

//     window.requestAnimationFrame(predict); // Keep looping
//   });
// }

// function draw() {
//   image(video, 0, 0, width, height);

//   if (circleColor !== null) {
//     // Only draw when a valid color is detected
//     for (let c of circles) {
//       fill(circleColor[0], circleColor[1], circleColor[2]);
//       noStroke();
//       circle(c.x, c.y, 10);
//     }
//   }

//   if (hands.length > 0) {
//     for (let hand of hands) {
//       if (hand.confidence > 0.1) {
//         for (let i = 0; i < hand.keypoints.length; i++) {
//           let keypoint = hand.keypoints[i];
//           if (hand.handedness == "Left" && i === 8) {
//             let drawcircle = { x: width - keypoint.x, y: keypoint.y };
//             circles.push(drawcircle);
//           }
//         }
//       }
//     }
//   }

//   // Limit the number of circles drawn to prevent overload
//   if (circles.length > 50) {
//     circles.shift();
//   }
// }

// function gotHands(results) {
//   hands = results;
// }

// --------draw line with right hand------------------
// help from https://editor.p5js.org/enickles/sketches/6EG2mVfWY

// let handPose;
// let video;
// let hands = [];
// let lines = [];

// let pg;
// let previousX;
// let previousY;

// function preload() {
//   handPose = ml5.handPose();
// }

// function setup() {
//   createCanvas(640, 480);
//   video = createCapture(VIDEO, { flipped: true });
//   video.size(640, 480);
//   video.hide();
//   handPose.detectStart(video, gotHands);

//   pg = createGraphics(width, height);
//   pg.stroke(255, 0, 0);
//   pg.strokeWeight(5);
// }

// function draw() {
//   image(video, 0, 0, width, height);
//   image(pg, 0, 0);

//   if (hands.length > 0) {
//     for (let hand of hands) {
//       if (hand.confidence > 0.1) {
//         for (let i = 0; i < hand.keypoints.length; i++) {
//           let keypoint = hand.keypoints[i];
//           if (hand.handedness == "Left" && i === 8) {
//             let newX = width - keypoint.x;
//             let newY = keypoint.y;

//             if (previousX !== undefined && previousY !== undefined) {
//               pg.line(newX, newY, previousX, previousY);
//             }

//             previousX = newX;
//             previousY = newY;
//           }
//         }
//       }
//     }
//   }
// }

// function gotHands(results) {
//   hands = results;
// }
//-----------------WHY IS THIS TAKING FOREVER-----------------------
// let handPose;
// let video;
// let hands = [];
// let lines = [];

// let pg;
// let previousX;
// let previousY;

// let model;
// let maxPredictions;
// let strokeColor = [255, 0, 0]; // Default stroke color (red)

// // Load the Teachable Machine model
// async function loadModel() {
//   const modelURL = "../../../my_model/model.json";
//   const metadataURL = "../../../my_model/metadata.json";

//   // Load the model and metadata
//   model = await tmImage.load(modelURL, metadataURL);
//   maxPredictions = model.getTotalClasses();
// }

// // Predict the gesture and set the stroke color
// async function predict() {
//   if (!model || !video) return; // Ensure model and video are loaded

//   const prediction = await model.predict(video.elt);
//   let highestProb = 0;
//   let detectedClass = "";

//   for (let i = 0; i < maxPredictions; i++) {
//     if (prediction[i].probability > highestProb) {
//       highestProb = prediction[i].probability;
//       detectedClass = prediction[i].className;
//     }
//   }

//   console.log("Detected gesture:", detectedClass); // Debugging

//   // Change stroke color based on detected gesture
//   if (detectedClass === "0_stop") {
//     strokeColor = null; // Stop drawing when "stop" gesture is detected
//   } else if (detectedClass === "1_white") {
//     strokeColor = [255, 255, 255]; // White
//   } else if (detectedClass === "2_black") {
//     strokeColor = [0, 0, 0]; // Black
//   } else if (detectedClass === "3_red") {
//     strokeColor = [255, 0, 0]; // Red
//   } else if (detectedClass === "4_blue") {
//     strokeColor = [0, 0, 255]; // Blue
//   } else if (detectedClass === "5_yellow") {
//     strokeColor = [255, 255, 0]; // Yellow
//   }

//   window.requestAnimationFrame(predict); // Keep looping
// }

// function preload() {
//   handPose = ml5.handPose();
//   loadModel(); // Load the Teachable Machine model
// }

// function setup() {
//   createCanvas(640, 480);
//   video = createCapture(VIDEO, { flipped: true });
//   video.size(640, 480);
//   video.hide();
//   handPose.detectStart(video, gotHands);

//   pg = createGraphics(width, height);
//   pg.stroke(255, 0, 0); // Default stroke color (red)
//   pg.strokeWeight(5);

//   // Start predicting gestures
//   predict();
// }

// function draw() {
//   image(video, 0, 0, width, height);
//   image(pg, 0, 0);

//   if (strokeColor !== null) {
//     pg.stroke(strokeColor[0], strokeColor[1], strokeColor[2]); // Set stroke color
//   }

//   if (hands.length > 0) {
//     for (let hand of hands) {
//       if (hand.confidence > 0.1) {
//         for (let i = 0; i < hand.keypoints.length; i++) {
//           let keypoint = hand.keypoints[i];
//           if (hand.handedness == "Left" && i === 8) {
//             let newX = width - keypoint.x;
//             let newY = keypoint.y;

//             if (previousX !== undefined && previousY !== undefined) {
//               pg.line(newX, newY, previousX, previousY);
//             }

//             previousX = newX;
//             previousY = newY;
//           }
//         }
//       }
//     }
//   }
// }

// function gotHands(results) {
//   hands = results;
// }

// --------------------------------

// let handPose;
// let video;
// let hands = [];
// let lines = [];

// let pg;
// let previousX;
// let previousY;

// function preload() {
//   handPose = ml5.handPose();
// }

// function setup() {
//   createCanvas(640, 480);
//   video = createCapture(VIDEO, { flipped: true });
//   video.size(640, 480);
//   video.hide();
//   handPose.detectStart(video, gotHands);

//   pg = createGraphics(width, height);
//   pg.stroke(r, g, b);
//   pg.strokeWeight(5);
// }

// function draw() {
//   image(video, 0, 0, width, height);
//   image(pg, 0, 0);

//   let r;
//   let g;
//   let b;

//   // 0 = stop
//   // 1 = white
//   // 2 = black
//   // 3 = red
//   // 4 = blue
//   // 5 = yellow

//   // space = clear

//   const XPos1 = video.width - positions[8][0];
//   const YPos1 = positions[8][1];

//   const XPos2 = video.width - positions[12][0];
//   const YPos2 = positions[12][1];

//   const XPos3 = video.width - positions[16][0];
//   const YPos3 = positions[16][1];

//   const XPos4 = video.width - positions[20][0];
//   const YPos4 = positions[20][1];

//   const XPos5 = video.width - positions[4][0];
//   const YPos5 = positions[4][1];

//   const XPos6 = video.width - positions[0][0];
//   const YPos6 = positions[0][1];

//   const distance1 = dist(XPos1, YPos1, XPos6, YPos6);
//   const distance2 = dist(XPos2, YPos2, XPos6, YPos6);
//   const distance3 = dist(XPos3, YPos3, XPos6, YPos6);
//   const distance4 = dist(XPos4, YPos4, XPos6, YPos6);
//   const distance5 = dist(XPos5, YPos5, XPos6, YPos6);

//   if (hands.length > 0) {
//     for (let hand of hands) {
//       if (hand.confidence > 0.1) {
//         for (let i = 0; i < hand.keypoints.length; i++) {
//           let keypoint = hand.keypoints[i];
//           if (hand.handedness == "Left" && i === 8) {
//             let newX = width - keypoint.x;
//             let newY = keypoint.y;

//             if (previousX !== undefined && previousY !== undefined) {
//               pg.line(newX, newY, previousX, previousY);
//             }

//             previousX = newX;
//             previousY = newY;
//           }
//           if (hand.handedness == "Right") {
//             if (distance1 < 10) {
//               r = 255;
//               g = 255;
//               b = 255;
//             } else if (distance2 < 10) {
//               r = 0;
//               g = 0;
//               b = 0;
//             } else if (distance3 < 10) {
//               r = 255;
//               g = 0;
//               b = 0;
//             } else if (distance4 < 10) {
//               r = 0;
//               g = 0;
//               b = 255;
//             } else if (distance5 < 10) {
//               r = 255;
//               g = 255;
//               b = 0;
//             } else {
//               r = clear;
//               g = clear;
//               b = clear;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// function gotHands(results) {
//   hands = results;
// }

//---------The actual working one LETS GOOO--------------------
// 'if this was an artwork'_maybe change what's showing on canvas/video
//or even the page itself :3
let streamReady = false;
let handPose;
let video;
let hands = [];

let pg;
let previousX;
let previousY;

let r = 0;
let g = 0;
let b = 0;
let alpha = 0;

function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });

  video.size(640, 480);
  video.hide();
  handPose.detectStart(video, gotHands);

  noStroke();

  pg = createGraphics(width, height);
  pg.strokeWeight(5);
}

function draw() {
  image(video, 0, 0, width, height);

  video.loadPixels();
  drawPoints(video.width, video.height, 10);

  image(pg, 0, 0);

  if (hands.length > 0) {
    for (let hand of hands) {
      if (hand.confidence > 0.1) {
        let keypoints = hand.keypoints;
        if (hand.handedness === "Left") {
          let indexFinger = keypoints[8];
          let newX = width - indexFinger.x;
          let newY = indexFinger.y;

          // pg.stroke(r, g, b, alpha);
          // pg.line(newX, newY, previousX, previousY);
          if (previousX !== undefined && previousY !== undefined) {
            pg.stroke(r, g, b, alpha);
            pg.line(newX, newY, previousX, previousY);
          }

          previousX = newX;
          previousY = newY;
        }
        if (hand.handedness === "Right") {
          let wrist = keypoints[0];
          let thumb = keypoints[4];
          let indexFinger = keypoints[8];
          let middleFinger = keypoints[12];
          let ringFinger = keypoints[16];
          let pinky = keypoints[20];

          let distance1 = dist(indexFinger.x, indexFinger.y, wrist.x, wrist.y);
          let distance2 = dist(
            middleFinger.x,
            middleFinger.y,
            wrist.x,
            wrist.y
          );
          let distance3 = dist(ringFinger.x, ringFinger.y, wrist.x, wrist.y);
          let distance4 = dist(pinky.x, pinky.y, wrist.x, wrist.y);
          let distance5 = dist(thumb.x, thumb.y, wrist.x, wrist.y);

          if (distance1 > 150) {
            r = 255;
            g = 255;
            b = 255;
            alpha = 255;
          } else if (distance2 > 150) {
            r = 0;
            g = 0;
            b = 0;
            alpha = 255;
          } else if (distance3 > 150) {
            r = 255;
            g = 0;
            b = 0;
            alpha = 255;
          } else if (distance4 > 150) {
            r = 0;
            g = 0;
            b = 255;
            alpha = 255;
          } else if (distance5 > 130) {
            r = 255;
            g = 255;
            b = 0;
            alpha = 255;
          } else if (
            distance1 < 100 &&
            distance2 < 100 &&
            distance3 < 100 &&
            distance4 < 100 &&
            distance5 < 100
          ) {
            alpha = 0;
          }
        }
      }
    }
  }
}

function getColorFromPixelArray(pixelArray, x, y, w) {
  const index = (x + y * w) * 4;
  const r = pixelArray[index];
  const g = pixelArray[index + 1];
  const b = pixelArray[index + 2];
  const a = pixelArray[index + 3];

  return color(r, g, b, a);
}

function drawPoints(w, h, stepSize) {
  for (let x = 0; x < w; x += stepSize) {
    for (let y = 0; y < h; y += stepSize) {
      let col = getColorFromPixelArray(video.pixels, x, y, video.width);

      fill(col);

      circle(x, y, stepSize);
    }
  }
}

function gotHands(results) {
  hands = results;
}

function keyPressed() {
  if (key === " ") {
    pg.clear();
  }
}
