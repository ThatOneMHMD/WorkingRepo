// 1) Where is carNoise stored?
//Global
const carNoise = "Honk";

// 2) Where is goFast stored?
// Global
const goFast = (speed) => {
  // 4) When is speed assigned a value? Where is this value stored?
  // when the func is called, a value is assigned

  // 5) Where is makeNoise stored?
  //in func.
  const makeNoise = (sound) => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  };

  // 6) What happens in the following statement?
  // Honks!
  makeNoise(carNoise);
};

// 3) What happens in the following statement?
// It console logs: My speed is at value(80), time to 'Honk'
if (confirm("Do you want to go fast?")) {
  goFast(80);
}
