// The three.js scene: the 3D world where you put objects
const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
  60,
1,
  2,
  10000
);

// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xaaaaaa, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);


// A cube we are going to animate
const cube = {
  // The geometry: the shape & size of the object
  geometry: new THREE.BoxGeometry(2, 2.8, 1),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial({ color: 0x077 })
};

// A cube we are going to animate
const cube2 = {
  // The geometry: the shape & size of the object
  geometry: new THREE.BoxGeometry(2, 2.5, 2),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial({ color: 0x0f3 })
};

// The mesh: the geometry and material combined, and something we can directly add into the scene (I had to put this line outside of the object literal, so that I could use the geometry and material properties)
cube.mesh = new THREE.Mesh(cube.geometry, cube.material);

// Add the cube into the scene
scene.add(cube.mesh);

cube2.mesh = new THREE.Mesh(cube2.geometry, cube2.material);

// Add the cube into the scene
scene.add(cube2.mesh);


// Make the camera further from the cube so we can see it better
camera.position.z = 12 ;

function render() {
  cube.mesh.position.x = Math.sin(cube.mesh.rotation.y/2)*7;
  cube2.mesh.position.y = Math.sin(cube.mesh.rotation.z*3/2)*3;
  cube2.mesh.position.z = -3;
  // Render the scene and the camera
  renderer.render(scene, camera);

  // Rotate the cube every frame
  cube.mesh.rotation.x += 0.03;
  cube.mesh.rotation.y -= 0.05;
  cube.mesh.rotation.z -= 0.02;
  cube.mesh.scale.z = Math.sin(cube.mesh.rotation.y)*7;
  cube2.mesh.scale.z = Math.sin(cube.mesh.rotation.z*3)*2.4;
  cube2.mesh.rotation.x += 0.02;
  cube2.mesh.rotation.y -= 0.04;
  cube2.mesh.rotation.z -= 0.04

  // Make it call the render() function about every 1/60 second
  requestAnimationFrame(render);
}

render();