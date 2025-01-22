// The three.js scene: the 3D world where you put objects
const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);


// A cube we are going to animate
const cube = {
  // The geometry: the shape & size of the object
  geometry: new THREE.BoxGeometry(26, 2, 3),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial({ color: 0x999 })
};

// The mesh: the geometry and material combined, and something we can directly add into the scene (I had to put this line outside of the object literal, so that I could use the geometry and material properties)
cube.mesh = new THREE.Mesh(cube.geometry, cube.material);

// Add the cube into the scene
scene.add(cube.mesh);
const cube2 = {
  // The geometry: the shape & size of the object
  geometry: new THREE.BoxGeometry(23, 2, 3),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial({ color: 0x909080 })
};

// The mesh: the geometry and material combined, and something we can directly add into the scene (I had to put this line outside of the object literal, so that I could use the geometry and material properties)
cube2.mesh = new THREE.Mesh(cube2.geometry, cube2.material);

// Add the cube into the scene
scene.add(cube2.mesh);

// Make the camera further from the cube so we can see it better
camera.position.z = 50;
camera.position.y = 23;
camera.rotation.x = -0.41
cube.mesh.position.y = 2
var step = 0;
function render() {
  // Render the scene and the camera
  renderer.render(scene, camera);
/*camera.rotation.x += 0.019
   camera.rotation.y += 0.03
  camera.rotation.z += 0.095*/
  cube2.mesh.position.z = Math.sin(step/17)*20.4+8
  cube2.mesh.position.
  x = Math.sin(step/15)*11.4+0.3
  cube2.mesh.position.
  y = Math.cos(step/19)*11.4+0.3
  cube.mesh.position.x = Math.sin(step/12)*5.4+8
  step++
  cube.mesh.rotation.y +=0.04
  cube.mesh.rotation.z +=0.055
  cube2.mesh.rotation.z += cube2.mesh.position.z = Math.sin(step/12)*0.19

  // Make it call the render() function about every 1/60 second
  requestAnimationFrame(render);
}

render();