init_loading();
animate_loading();

function init_loading() {
    camera_loading = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 2, 10000);
    camera_loading.position.z = 100;
    camera_loading.position.y = 1000;
    scene_loading = new THREE.Scene();
    scene_loading.add(new THREE.HemisphereLight());
    var directionalLight = new THREE.AmbientLight(0xffffff, 1);
    directionalLight.position.set(100, 100, 100);
    scene_loading.add(directionalLight);
    light_loading = new THREE.AmbientLight(0x00B6F1, 1);
    directionalLight.position.set(100, 100, 0);
    scene_loading.add(directionalLight);
    renderer_loading = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer_loading.setPixelRatio(window.devicePixelRatio);
    renderer_loading.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas_loading").appendChild(renderer_loading.domElement);
    renderer_loading.setClearColor(0xffffff);
    window.addEventListener('resize', resize, false);
    var sky = new THREE.Sky();
    var uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = 10;
    uniforms['rayleigh'].value = 2;
    uniforms['luminance'].value = 1;
    uniforms['mieCoefficient'].value = 0.005;
    uniforms['mieDirectionalG'].value = 8;
    var parameters = {
        distance: 200,
        inclination: 0.49,
        azimuth: 0.205
    };
    var waterGeometry_intro = new THREE.PlaneBufferGeometry(10000, 10000);
    water_intro = new THREE.Water(waterGeometry_intro, {
        textureWidth: 2000,
        textureHeight: 2000,
        waterNormals: new THREE.TextureLoader().load('textures/waternormals.jpg', function(texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }),
        alpha: 1,
        sunDirection: directionalLight.position.clone().normalize(),
        sunColor: 0x00B6F1,
        waterColor: 0x00B6F1,
        distortionScale: 0,
        fog: scene_loading.fog !== undefined
    });
    water_intro.rotation.x = -45;
    water_intro.position.y = 0;
    scene_loading.add(water_intro);
}

function resize() {
    camera_loading.aspect = window.innerWidth / window.innerHeight;
    renderer_loading.setSize(window.innerWidth, window.innerHeight);
    camera_loading.updateProjectionMatrix();
}

function remove_everything(){
	scene_loading.remove(water_intro);
	scene_loading.remove(scene_loading);
	scene_loading.remove(camera_loading);
}

function animate_loading() {
	setTimeout( remove_everything, 7500);
    scene_loading.add(water_intro);
    renderer_loading.render(scene_loading, camera_loading);
    water_intro.material.uniforms['time'].value += 01 / 60.0;
    camera_loading.lookAt(scene_loading.position);
    renderer_loading.render(scene_loading, camera_loading);
    requestAnimationFrame(animate_loading);
}