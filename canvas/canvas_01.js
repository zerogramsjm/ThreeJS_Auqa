THREE.Cache.enabled = true;
$(window).on("load", function() {
    setTimeout(function() {
        $(window).scrollTop(0), $.scrollify.update()
    })
});
var time_rotation, lastFrameTime = 0,
    maxFrameTime = .03,
    elapsedTime = 0,
    windowHidden = !1,
    hideTime = null;
window.ImageBitmap = window.ImageBitmap || function() {
    return null
};
var material_phone_01, material_phone_02, material_phone_03, material_phone_04, container, controls, camera, scene, renderer, water, sphere, group_text_01, group_text_02, group_text_03, group_text_04, textMesh1, textMesh2, textGeo, group_full_phone = new THREE.Group,
    group_objectphone_01_cover = new THREE.Group,
    group_objectphone_01_case = new THREE.Group,
    group_objectphone_01_back = new THREE.Group,
    group_objectphone_01_left_buttons = new THREE.Group,
    group_objectphone_01_right_buttons = new THREE.Group,
    group_objectphone_01_bottoms = new THREE.Group,
    group_objectphone_01_bar = new THREE.Group,
    group_objectphone_01_face = new THREE.Group,
    group_objectphone_01_white_button = new THREE.Group,
    group_objectphone_01_grey_button_01 = new THREE.Group,
    group_objectphone_01_grey_button_02 = new THREE.Group,
    group_objectphone_01_grey_button_03 = new THREE.Group,
    group_objectphone_01_ant = new THREE.Group,
    group_objectphone_01_icon = new THREE.Group,
    group_objectphone_02_face = new THREE.Group,
    group_objectphone_02_white_button = new THREE.Group,
    group_objectphone_02_grey_button_01 = new THREE.Group,
    group_objectphone_02_grey_button_02 = new THREE.Group,
    group_objectphone_02_grey_button_03 = new THREE.Group,
    group_objectphone_02_icon = new THREE.Group,
    group_objectphone_03_face = new THREE.Group,
    group_objectphone_03_white_button = new THREE.Group,
    group_objectphone_03_grey_button_01 = new THREE.Group,
    group_objectphone_03_grey_button_02 = new THREE.Group,
    group_objectphone_03_grey_button_03 = new THREE.Group,
    group_objectphone_03_icon = new THREE.Group,
    group_objectphone_03_icon_image_01 = new THREE.Group,
    group_objectphone_03_icon_image_02 = new THREE.Group,
    group_objectphone_03_icon_image_03 = new THREE.Group,
    group_objectphone_03_icon_image_04 = new THREE.Group,
    group_objectphone_03_icon_image_05 = new THREE.Group,
    group_objectphone_03_icon_image_06 = new THREE.Group,
    group_objectphone_03_ALL_icons = new THREE.Group,
    group_objectphone_04_face = new THREE.Group,
    group_objectphone_04_white_button = new THREE.Group,
    group_objectphone_04_grey_button_01 = new THREE.Group,
    group_objectphone_04_grey_button_02 = new THREE.Group,
    group_objectphone_04_grey_button_03 = new THREE.Group,
    group_objectphone_04_icon = new THREE.Group,
    group_phone_1_buttons = new THREE.Group,
    group_phone_2_buttons = new THREE.Group,
    group_phone_3_buttons = new THREE.Group,
    group_phone_4_buttons = new THREE.Group,
    WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    r = 0,
    g = 183,
    b = 241,
    a = 255,
    col = "rgba(" + r + "," + g + "," + b + "," + a + ")",
    time = .1 * Date.now(),
    time_02 = .005 * Date.now(),
    height_text = 1,
    size_text = 9,
    hover_text = 0,
    curveSegments_text = 4,
    bevelThickness_text = 0,
    bevelSize_text = 0,
    height_text_02 = 1,
    size_text_02 = 9,
    hover_text_02 = 0,
    curveSegments_text_02 = 4,
    bevelThickness_text_02 = 0,
    bevelSize_text_02 = 0,
    height_text_body = 1,
    size_text_body = 4,
    hover_text_body = 0,
    curveSegments_text_body = 4,
    bevelThickness_text_body = 0,
    bevelSize_text_body = 0,
    height_text_body_02 = 1,
    size_text_body_02 = 4,
    hover_text_body_02 = 0,
    curveSegments_text_body_02 = 4,
    bevelThickness_text_body_02 = 0,
    bevelSize_text_body_02 = 0,
    INTRO = "WELCOME",
    TO = "TO",
    AUQA = "AUQA",
    header_text = "Water Delivered",
    header_text_02 = "to your doorstep",
    header_text_body = "In just a few clicks you can order",
    header_text_body_02 = "water to be delivered to you",
    header_text_P2 = "Recurring order",
    header_text_P2_02 = "made simple",
    header_text_P2_body = "Subscribe to get your delivery on",
    header_text_body_P2_02 = "weekly or monthly schedule",
    header_text_P3 = "Choose from your",
    header_text_02_P3 = "favourite brand",
    header_text_body_P3 = "Choose your favourite brand and buy",
    header_text_body_02_P3 = "in bulk or loose, repetitive or",
    header_text_body_03_P3 = "reocurring",
    header_text_P4 = "Easily track",
    header_text_02_P4 = "your order",
    header_text_body_P4 = "We made tracking your",
    header_text_body_02_P4 = "delivery easier with the app",
    font = null,
    mirror = !0,
    mouse = new THREE.Vector2,
    mouseX = 0,
    mouseY = 0,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2;
init(), animate();
var timeDiff;
time = .01, hideTime = null;

function init() {
    THREE.Cache.enabled = !0, document.addEventListener("mousedown", onDocumentMouseDown, !1), document.addEventListener("mouseup", onDocumentMouseUp, !1), document.addEventListener("mousemove", onDocumentMouseMove, !1), (camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 2, 1e4)).position.z = 100, camera.position.y = 1e3, (scene = new THREE.Scene).add(new THREE.HemisphereLight);
    var e, o = new THREE.AmbientLight(16777215, 1);
    o.position.set(100, 100, 100), scene.add(o), (new THREE.TTFLoader).load("fonts/Poppins-Bold.ttf", function(e) {
        font = new THREE.Font(e), createText()
    }), load_phone_01(), load_phone_02(), load_phone_03(), load_phone_04(), light = new THREE.AmbientLight(46833, 1), o.position.set(100, 100, 0), scene.add(o), (e = jQuery).fn.visible = function(o) {
        var t = e(this),
            n = e(window),
            _ = n.scrollTop(),
            i = _ + n.height(),
            r = t.offset().top,
            a = r + t.height();
        return (!0 === o ? r : a) <= i && (!0 === o ? a : r) >= _
    }
}
var time_scale = .001 * Date.now();

function createText() {
    var e = new THREE.MeshBasicMaterial({
        color: 47089,
        side: THREE.DoubleSide
    });
    textGeo_INTRO_01 = new THREE.TextBufferGeometry(INTRO, {
        font: font,
        size: size_text,
        height: height_text,
        curveSegments: curveSegments_text,
        bevelThickness: bevelThickness_text,
        bevelSize: bevelSize_text,
        bevelEnabled: !0
    }), textGeo_INTRO_01.computeBoundingBox(), textGeo_INTRO_01.computeVertexNormals(), group_text_01_INTRO = new THREE.Group, scene.remove(group_text_01_INTRO);
    var o = -0 * (textGeo_INTRO_01.boundingBox.max.x - textGeo_INTRO_01.boundingBox.min.x);
    textMesh_INTRO = new THREE.Mesh(textGeo_INTRO_01, e), textMesh_INTRO.scale.set(5, 5, 5), textMesh_INTRO.position.y = -10, textMesh_INTRO.position.x = -180, textMesh_INTRO.position.z = 0, group_text_01_INTRO.add(textMesh_INTRO), textGeo_TO_01 = new THREE.TextBufferGeometry(TO, {
        font: font,
        size: size_text,
        height: height_text,
        curveSegments: curveSegments_text,
        bevelThickness: bevelThickness_text,
        bevelSize: bevelSize_text,
        bevelEnabled: !0
    }), textGeo_TO_01.computeBoundingBox(), textGeo_TO_01.computeVertexNormals(), group_text_01_TO = new THREE.Group, scene.remove(group_text_01_TO);
    o = -0 * (textGeo_TO_01.boundingBox.max.x - textGeo_TO_01.boundingBox.min.x);
    textMesh_TO = new THREE.Mesh(textGeo_TO_01, e), textMesh_TO.scale.set(5, 5, 5), textMesh_TO.position.y = -75, textMesh_TO.position.x = -160, textMesh_TO.position.z = 100, group_text_01_TO.add(textMesh_TO), textGeo_AUQA_01 = new THREE.TextBufferGeometry(AUQA, {
        font: font,
        size: size_text,
        height: height_text,
        curveSegments: curveSegments_text,
        bevelThickness: bevelThickness_text,
        bevelSize: bevelSize_text,
        bevelEnabled: !0
    }), textGeo_AUQA_01.computeBoundingBox(), textGeo_AUQA_01.computeVertexNormals(), group_text_01_AUQA = new THREE.Group, scene.remove(group_text_01_AUQA);
    o = -0 * (textGeo_AUQA_01.boundingBox.max.x - textGeo_AUQA_01.boundingBox.min.x);
    textMesh_AUQA = new THREE.Mesh(textGeo_AUQA_01, e), textMesh_AUQA.scale.set(5, 5, 5), textMesh_AUQA.position.y = -110, textMesh_AUQA.position.x = -120, textMesh_AUQA.position.z = 200, group_text_01_AUQA.add(textMesh_AUQA), textGeo = new THREE.TextBufferGeometry(header_text, {
        font: font,
        size: size_text,
        height: height_text,
        curveSegments: curveSegments_text,
        bevelThickness: bevelThickness_text,
        bevelSize: bevelSize_text,
        bevelEnabled: !0
    }), textGeo_02 = new THREE.TextBufferGeometry(header_text_02, {
        font: font,
        size: size_text_02,
        height: height_text_02,
        curveSegments: curveSegments_text_02,
        bevelThickness: bevelThickness_text_02,
        bevelSize: bevelSize_text_02,
        bevelEnabled: !0
    }), textGeo_03 = new THREE.TextBufferGeometry(header_text_body, {
        font: font,
        size: size_text_body,
        height: height_text_body,
        curveSegments: curveSegments_text_body,
        bevelThickness: bevelThickness_text_body,
        bevelSize: bevelSize_text_body,
        bevelEnabled: !0
    }), textGeo_04 = new THREE.TextBufferGeometry(header_text_body_02, {
        font: font,
        size: size_text_body_02,
        height: height_text_body_02,
        curveSegments: curveSegments_text_body_02,
        bevelThickness: bevelThickness_text_body_02,
        bevelSize: bevelSize_text_body_02,
        bevelEnabled: !0
    }), textGeo_P2 = new THREE.TextBufferGeometry(header_text_P2, {
        font: font,
        size: size_text,
        height: height_text,
        curveSegments: curveSegments_text,
        bevelThickness: bevelThickness_text,
        bevelSize: bevelSize_text,
        bevelEnabled: !0
    }), textGeo_P2_02 = new THREE.TextBufferGeometry(header_text_P2_02, {
        font: font,
        size: size_text_02,
        height: height_text_02,
        curveSegments: curveSegments_text_02,
        bevelThickness: bevelThickness_text_02,
        bevelSize: bevelSize_text_02,
        bevelEnabled: !0
    }), textGeo_P2_03 = new THREE.TextBufferGeometry(header_text_P2_body, {
        font: font,
        size: size_text_body,
        height: height_text_body,
        curveSegments: curveSegments_text_body,
        bevelThickness: bevelThickness_text_body,
        bevelSize: bevelSize_text_body,
        bevelEnabled: !0
    }), textGeo_P2_04 = new THREE.TextBufferGeometry(header_text_body_P2_02, {
        font: font,
        size: size_text_body_02,
        height: height_text_body_02,
        curveSegments: curveSegments_text_body_02,
        bevelThickness: bevelThickness_text_body_02,
        bevelSize: bevelSize_text_body_02,
        bevelEnabled: !0
    }), textGeo_P3 = new THREE.TextBufferGeometry(header_text_P3, {
        font: font,
        size: size_text,
        height: height_text,
        curveSegments: curveSegments_text,
        bevelThickness: bevelThickness_text,
        bevelSize: bevelSize_text,
        bevelEnabled: !0
    }), textGeo_P3_02 = new THREE.TextBufferGeometry(header_text_02_P3, {
        font: font,
        size: size_text_02,
        height: height_text_02,
        curveSegments: curveSegments_text_02,
        bevelThickness: bevelThickness_text_02,
        bevelSize: bevelSize_text_02,
        bevelEnabled: !0
    }), textGeo_P3_03 = new THREE.TextBufferGeometry(header_text_body_P3, {
        font: font,
        size: size_text_body,
        height: height_text_body,
        curveSegments: curveSegments_text_body,
        bevelThickness: bevelThickness_text_body,
        bevelSize: bevelSize_text_body,
        bevelEnabled: !0
    }), textGeo_P3_04 = new THREE.TextBufferGeometry(header_text_body_02_P3, {
        font: font,
        size: size_text_body_02,
        height: height_text_body_02,
        curveSegments: curveSegments_text_body_02,
        bevelThickness: bevelThickness_text_body_02,
        bevelSize: bevelSize_text_body_02,
        bevelEnabled: !0
    }), textGeo_P3_05 = new THREE.TextBufferGeometry(header_text_body_03_P3, {
        font: font,
        size: size_text_body_02,
        height: height_text_body_02,
        curveSegments: curveSegments_text_body_02,
        bevelThickness: bevelThickness_text_body_02,
        bevelSize: bevelSize_text_body_02,
        bevelEnabled: !0
    }), textGeo_P4 = new THREE.TextBufferGeometry(header_text_P4, {
        font: font,
        size: size_text,
        height: height_text,
        curveSegments: curveSegments_text,
        bevelThickness: bevelThickness_text,
        bevelSize: bevelSize_text,
        bevelEnabled: !0
    }), textGeo_P4_02 = new THREE.TextBufferGeometry(header_text_02_P4, {
        font: font,
        size: size_text_02,
        height: height_text_02,
        curveSegments: curveSegments_text_02,
        bevelThickness: bevelThickness_text_02,
        bevelSize: bevelSize_text_02,
        bevelEnabled: !0
    }), textGeo_P4_03 = new THREE.TextBufferGeometry(header_text_body_P4, {
        font: font,
        size: size_text_body,
        height: height_text_body,
        curveSegments: curveSegments_text_body,
        bevelThickness: bevelThickness_text_body,
        bevelSize: bevelSize_text_body,
        bevelEnabled: !0
    }), textGeo_P4_04 = new THREE.TextBufferGeometry(header_text_body_02_P4, {
        font: font,
        size: size_text_body_02,
        height: height_text_body_02,
        curveSegments: curveSegments_text_body_02,
        bevelThickness: bevelThickness_text_body_02,
        bevelSize: bevelSize_text_body_02,
        bevelEnabled: !0
    }), textGeo.computeBoundingBox(), textGeo.computeVertexNormals, textGeo_02.computeBoundingBox(), textGeo_02.computeVertexNormals(), textGeo_03.computeBoundingBox(), textGeo_03.computeVertexNormals(), textGeo_04.computeBoundingBox(), textGeo_04.computeVertexNormals(), (group_text_01 = new THREE.Group).position.z = 1e3, scene.remove(group_text_01), textGeo_P2.computeBoundingBox(), textGeo_P2.computeVertexNormals(), textGeo_P2_02.computeBoundingBox(), textGeo_P2_02.computeVertexNormals(), textGeo_P2_03.computeBoundingBox(), textGeo_P2_03.computeVertexNormals(), textGeo_P2_04.computeBoundingBox(), textGeo_P2_04.computeVertexNormals(), (group_text_02 = new THREE.Group).position.z = 1e3, scene.remove(group_text_02), textGeo_P3.computeBoundingBox(), textGeo_P3.computeVertexNormals(), textGeo_P3_02.computeBoundingBox(), textGeo_P3_02.computeVertexNormals(), textGeo_P3_03.computeBoundingBox(), textGeo_P3_03.computeVertexNormals(), textGeo_P3_04.computeBoundingBox(), textGeo_P3_04.computeVertexNormals(), textGeo_P3_05.computeBoundingBox(), textGeo_P3_05.computeVertexNormals(), (group_text_03 = new THREE.Group).position.z = 1e3, scene.remove(group_text_03), textGeo_P4.computeBoundingBox(), textGeo_P4.computeVertexNormals(), textGeo_P4_02.computeBoundingBox(), textGeo_P4_02.computeVertexNormals(), textGeo_P4_03.computeBoundingBox(), textGeo_P4_03.computeVertexNormals(), textGeo_P4_04.computeBoundingBox(), textGeo_P4_04.computeVertexNormals(), (group_text_04 = new THREE.Group).position.z = 1e3, scene.remove(group_text_04);
    o = -0 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);
    (textMesh1 = new THREE.Mesh(textGeo, material)).position.x = o, textMesh1.position.y = hover_text, textMesh1.position.z = 78, textMesh1.position.x = -51, textMesh1.position.y = 78, textMesh1.rotation.y = 2 * Math.PI, group_text_01.add(textMesh1);
    o = -0 * (textGeo_02.boundingBox.max.x - textGeo_02.boundingBox.min.x);
    (textMesh2 = new THREE.Mesh(textGeo_02, material)).position.x = o, textMesh2.position.y = hover_text_02, textMesh2.position.z = 78, textMesh2.position.x = -52, textMesh2.position.y = 60, textMesh2.rotation.y = 2 * Math.PI, group_text_01.add(textMesh2);
    o = -0 * (textGeo_03.boundingBox.max.x - textGeo_03.boundingBox.min.x);
    textMesh3 = new THREE.Mesh(textGeo_03, material), textMesh3.position.x = o, textMesh3.position.y = hover_text_body, textMesh3.position.z = 78, textMesh3.position.x = -45, textMesh3.position.y = 47, textMesh3.rotation.y = 2 * Math.PI, group_text_01.add(textMesh3);
    o = -0 * (textGeo_04.boundingBox.max.x - textGeo_04.boundingBox.min.x);
    textMesh4 = new THREE.Mesh(textGeo_04, material), textMesh4.position.x = o, textMesh4.position.y = hover_text_body, textMesh4.position.z = 78, textMesh4.position.x = -38, textMesh4.position.y = 37, textMesh4.rotation.y = 2 * Math.PI, group_text_01.add(textMesh4);
    o = -0 * (textGeo_P2.boundingBox.max.x - textGeo_P2.boundingBox.min.x);
    textMesh_P2 = new THREE.Mesh(textGeo_P2, material), textMesh_P2.position.x = o, textMesh_P2.position.y = hover_text, textMesh_P2.position.z = 78, textMesh_P2.position.x = -48, textMesh_P2.position.y = 78, textMesh_P2.rotation.y = 2 * Math.PI, group_text_02.add(textMesh_P2);
    o = -0 * (textGeo_P2_02.boundingBox.max.x - textGeo_P2_02.boundingBox.min.x);
    textMesh_P22 = new THREE.Mesh(textGeo_P2_02, material), textMesh_P22.position.x = o, textMesh_P22.position.y = hover_text_02, textMesh_P22.position.z = 78, textMesh_P22.position.x = -40, textMesh_P22.position.y = 60, textMesh_P22.rotation.y = 2 * Math.PI, group_text_02.add(textMesh_P22);
    o = -0 * (textGeo_P2_03.boundingBox.max.x - textGeo_P2_03.boundingBox.min.x);
    textMesh_P23 = new THREE.Mesh(textGeo_P2_03, material), textMesh_P23.position.x = o, textMesh_P23.position.y = hover_text_body, textMesh_P23.position.z = 78, textMesh_P23.position.x = -46, textMesh_P23.position.y = 47, textMesh_P23.rotation.y = 2 * Math.PI, group_text_02.add(textMesh_P23);
    o = -0 * (textGeo_P2_04.boundingBox.max.x - textGeo_P2_04.boundingBox.min.x);
    textMesh_P24 = new THREE.Mesh(textGeo_P2_04, material), textMesh_P24.position.x = o, textMesh_P24.position.y = hover_text_body, textMesh_P24.position.z = 78, textMesh_P24.position.x = -40, textMesh_P24.position.y = 35, textMesh_P24.rotation.y = 2 * Math.PI, group_text_02.add(textMesh_P24);
    o = -0 * (textGeo_P3.boundingBox.max.x - textGeo_P3.boundingBox.min.x);
    textMesh_P3 = new THREE.Mesh(textGeo_P3, material), textMesh_P3.position.x = o, textMesh_P3.position.y = hover_text, textMesh_P3.position.z = 78, textMesh_P3.position.x = -50, textMesh_P3.position.y = 78, textMesh_P3.rotation.y = 2 * Math.PI, textMesh_P3.scale.set(.9, .9, .9), group_text_03.add(textMesh_P3);
    o = -0 * (textGeo_P3_02.boundingBox.max.x - textGeo_P3_02.boundingBox.min.x);
    textMesh_P32 = new THREE.Mesh(textGeo_P3_02, material), textMesh_P32.position.x = o, textMesh_P32.position.y = hover_text_02, textMesh_P32.position.z = 78, textMesh_P32.position.x = -49, textMesh_P32.position.y = 60, textMesh_P32.rotation.y = 2 * Math.PI, textMesh_P3.scale.set(.9, .9, .9), group_text_03.add(textMesh_P32);
    o = -0 * (textGeo_P3_03.boundingBox.max.x - textGeo_P3_03.boundingBox.min.x);
    textMesh_P33 = new THREE.Mesh(textGeo_P3_03, material), textMesh_P33.position.x = o, textMesh_P33.position.y = hover_text_body, textMesh_P33.position.z = 78, textMesh_P33.position.x = -52, textMesh_P33.position.y = 47, textMesh_P33.rotation.y = 2 * Math.PI, group_text_03.add(textMesh_P33);
    o = -0 * (textGeo_P3_04.boundingBox.max.x - textGeo_P3_04.boundingBox.min.x);
    textMesh_P34 = new THREE.Mesh(textGeo_P3_04, material), textMesh_P34.position.x = o, textMesh_P34.position.y = hover_text_body, textMesh_P34.position.z = 78, textMesh_P34.position.x = -40, textMesh_P34.position.y = 39, textMesh_P34.rotation.y = 2 * Math.PI, group_text_03.add(textMesh_P34);
    o = -0 * (textGeo_P3_05.boundingBox.max.x - textGeo_P3_05.boundingBox.min.x);
    textMesh_P35 = new THREE.Mesh(textGeo_P3_05, material), textMesh_P35.position.x = o, textMesh_P35.position.y = hover_text_body, textMesh_P35.position.z = 78, textMesh_P35.position.x = -14, textMesh_P35.position.y = 31, textMesh_P35.rotation.y = 2 * Math.PI, group_text_03.add(textMesh_P35);
    o = -0 * (textGeo_P4.boundingBox.max.x - textGeo_P4.boundingBox.min.x);
    textMesh_P4 = new THREE.Mesh(textGeo_P4, material), textMesh_P4.position.x = o, textMesh_P4.position.y = hover_text, textMesh_P4.position.z = 78, textMesh_P4.position.x = -37, textMesh_P4.position.y = 78, textMesh_P4.rotation.y = 2 * Math.PI, group_text_04.add(textMesh_P4);
    o = -0 * (textGeo_P4_02.boundingBox.max.x - textGeo_P4_02.boundingBox.min.x);
    textMesh_P42 = new THREE.Mesh(textGeo_P4_02, material), textMesh_P42.position.x = o, textMesh_P42.position.y = hover_text_02, textMesh_P42.position.z = 78, textMesh_P42.position.x = -35, textMesh_P42.position.y = 60, textMesh_P42.rotation.y = 2 * Math.PI, group_text_04.add(textMesh_P42);
    o = -0 * (textGeo_P4_03.boundingBox.max.x - textGeo_P4_03.boundingBox.min.x);
    textMesh_P43 = new THREE.Mesh(textGeo_P4_03, material), textMesh_P43.position.x = o, textMesh_P43.position.y = hover_text_body, textMesh_P43.position.z = 78, textMesh_P43.position.x = -34, textMesh_P43.position.y = 47, textMesh_P43.rotation.y = 2 * Math.PI, group_text_04.add(textMesh_P43);
    o = -0 * (textGeo_P4_04.boundingBox.max.x - textGeo_P4_04.boundingBox.min.x);
    textMesh_P44 = new THREE.Mesh(textGeo_P4_04, material), textMesh_P44.position.x = o, textMesh_P44.position.y = hover_text_body, textMesh_P44.position.z = 78, textMesh_P44.position.x = -39, textMesh_P44.position.y = 38, textMesh_P44.rotation.y = 2 * Math.PI, group_text_04.add(textMesh_P44)
}

function load_phone_01() {
    var e = new THREE.TextureLoader;
    (e = new THREE.TDSLoader).setResourcePath(""), e.load("models/phone_build/cover.3ds", function(e) {
        e.traverse(function(e) {}), e.scale.set(1, 1, 1);
        var o = new THREE.TextureLoader;
        (o = new THREE.TDSLoader).setResourcePath(""), o.load("models/phone_build/case.3ds", function(o) {
            o.traverse(function(e) {}), o.scale.set(1, 1, 1);
            var t = new THREE.TextureLoader;
            (t = new THREE.TDSLoader).setResourcePath(""), t.load("models/phone_build/back.3ds", function(t) {
                t.traverse(function(e) {}), t.scale.set(1, 1, 1);
                var n = new THREE.TextureLoader;
                (n = new THREE.TDSLoader).setResourcePath(""), n.load("models/phone_build/left_buttons.3ds", function(n) {
                    n.traverse(function(e) {}), n.scale.set(1, 1, 1);
                    var _ = new THREE.TextureLoader;
                    (_ = new THREE.TDSLoader).setResourcePath(""), _.load("models/phone_build/right_buttons.3ds", function(_) {
                        _.traverse(function(e) {}), _.scale.set(1, 1, 1);
                        var i = new THREE.TextureLoader;
                        (i = new THREE.TDSLoader).setResourcePath(""), i.load("models/phone_build/bottoms.3ds", function(i) {
                            i.traverse(function(e) {}), i.scale.set(1, 1, 1);
                            var r = new THREE.TextureLoader;
                            (r = new THREE.TDSLoader).setResourcePath(""), r.load("models/phone_build/bar.3ds", function(r) {
                                r.traverse(function(e) {}), r.scale.set(1, 1, 1);
                                var a = new THREE.TextureLoader;
                                (a = new THREE.TDSLoader).setResourcePath(""), a.load("models/phone_build/antena.3ds", function(a) {
                                    a.traverse(function(e) {}), a.scale.set(1, 1, 1);
                                    var p = new THREE.TextureLoader;
                                    //BASE END
                                    (p = new THREE.TDSLoader).setResourcePath(""), p.load("models/phones/face_blue.3ds", function(a) {
                                        a.traverse(function(e) {}), a.scale.set(1, 1, 1);
                                        var p = new THREE.TextureLoader;
                                        (p = new THREE.TDSLoader).setResourcePath(""), p.load("models/phones/white_button_blue.3ds", function(p) {
                                            p.traverse(function(e) {}), p.scale.set(1, 1, 1);
                                            var s = new THREE.TextureLoader;
                                            (s = new THREE.TDSLoader).setResourcePath(""), s.load("models/phones/grey_button_01_blue.3ds", function(s) {
                                                s.traverse(function(e) {}), s.scale.set(1, 1, 1);
                                                var c = new THREE.TextureLoader;
                                                (c = new THREE.TDSLoader).setResourcePath(""), c.load("models/phones/grey_button_02_blue.3ds", function(c) {
                                                    c.traverse(function(e) {}), c.scale.set(1, 1, 1);
                                                    var u = new THREE.TextureLoader;
                                                    (u = new THREE.TDSLoader).setResourcePath(""), u.load("models/phones/grey_button_03_blue.3ds", function(u) {
                                                        u.traverse(function(e) {}), u.scale.set(1, 1, 1);
                                                        var b = new THREE.TextureLoader;
                                                        (b = new THREE.TDSLoader).setResourcePath(""), b.load("models/icons/icon_blue.3ds", function(b) {
                                                            b.traverse(function(e) {}), b.scale.set(1, 1, 1);
                                                            var h = new THREE.TextureLoader,
                                                                l = new THREE.PlaneGeometry(493, 1e3);
                                                            material_phone_01 = new THREE.MeshBasicMaterial({
                                                                map: h.load("assets/phone1_cut_image_FLIP.png"),
                                                                transparent: !0
                                                            });
                                                            var g = new THREE.Mesh(l, material_phone_01);
                                                            material_phone_01.opacity = 0, g.position.set(0, -5, 85), g.scale.set(.27, -.27, .27), g.rotation.set(.03, 0, 3.14), scene.add(g), group_objectphone_01_cover.add(e), group_objectphone_01_cover.position.z = -500, group_objectphone_01_case.add(o), group_objectphone_01_case.position.y = -250, group_objectphone_01_back.add(t), group_objectphone_01_back.position.z = 250, group_objectphone_01_left_buttons.add(n), group_objectphone_01_left_buttons.position.x = -250, group_objectphone_01_right_buttons.add(_), group_objectphone_01_right_buttons.position.x = 250, group_objectphone_01_bottoms.add(i), group_objectphone_01_bottoms.position.y = -250, group_objectphone_01_bar.add(r), group_objectphone_01_bar.position.z = 250, group_objectphone_01_icon.add(b), group_objectphone_01_icon.position.y = -40, group_objectphone_01_icon.position.z = 100, group_objectphone_01_icon.position.x = 5, group_objectphone_01_icon.rotation.x = 1.5, group_full_phone.add(group_objectphone_01_cover, group_objectphone_01_case, group_objectphone_01_back, group_objectphone_01_left_buttons, group_objectphone_01_right_buttons, group_objectphone_01_bottoms, group_objectphone_01_bar, group_objectphone_01_ant), group_full_phone.traverse(function(e) {
                                                                e.material && (e.material.opacity = 0, e.material.transparent = !0)
                                                            }), group_objectphone_01_icon.traverse(function(e) {
                                                                e.material && (e.material.opacity = 0, e.material.transparent = !0)
                                                            }), group_objectphone_01_face.add(a), group_objectphone_01_face.position.z = 0, group_objectphone_01_white_button.add(p), group_objectphone_01_white_button.position.z = 1e3, group_objectphone_01_grey_button_01.add(s), group_objectphone_01_grey_button_01.position.z = 1100, group_objectphone_01_grey_button_02.add(c), group_objectphone_01_grey_button_02.position.z = 1200, group_objectphone_01_grey_button_03.add(u), group_objectphone_01_grey_button_03.position.z = 1300, group_objectphone_01_face.traverse(function(e) {
                                                                e.material && (e.material.opacity = 0, e.material.transparent = !0)
                                                            }), group_phone_1_buttons.add(group_objectphone_01_white_button, group_objectphone_01_grey_button_01, group_objectphone_01_grey_button_02, group_objectphone_01_grey_button_03)
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function load_phone_02() {
    var e = new THREE.TextureLoader;
    (e = new THREE.TDSLoader).setResourcePath(""), e.load("models/phones/face_purple.3ds", function(e) {
        e.traverse(function(e) {}), e.scale.set(1, 1, 1);
        var o = new THREE.TextureLoader;
        (o = new THREE.TDSLoader).setResourcePath(""), o.load("models/phones/white_button_purple.3ds", function(o) {
            o.traverse(function(e) {}), o.scale.set(1, 1, 1);
            var t = new THREE.TextureLoader;
            (t = new THREE.TDSLoader).setResourcePath(""), t.load("models/phones/grey_button_01_purple.3ds", function(t) {
                t.traverse(function(e) {}), t.scale.set(1, 1, 1);
                var n = new THREE.TextureLoader;
                (n = new THREE.TDSLoader).setResourcePath(""), n.load("models/phones/grey_button_02_purple.3ds", function(n) {
                    n.traverse(function(e) {}), n.scale.set(1, 1, 1);
                    var _ = new THREE.TextureLoader;
                    (_ = new THREE.TDSLoader).setResourcePath(""), _.load("models/phones/grey_button_03_purple.3ds", function(_) {
                        _.traverse(function(e) {}), _.scale.set(1, 1, 1);
                        var i = new THREE.TextureLoader;
                        (i = new THREE.TDSLoader).setResourcePath(""), i.load("models/icons/icon_purple.3ds", function(i) {
                            i.traverse(function(e) {}), i.scale.set(1, 1, 1);
                            var r = new THREE.TextureLoader,
                                a = new THREE.PlaneGeometry(493, 1e3);
                            material_phone_02 = new THREE.MeshBasicMaterial({
                                map: r.load("assets/phone2_cut_image_FLIP.png"),
                                transparent: !0
                            });
                            var p = new THREE.Mesh(a, material_phone_02);
                            material_phone_02.opacity = 0, p.position.set(0, -5, 85), p.scale.set(.27, -.27, .27), p.flip = !0, p.rotation.set(.03, 0, 3.14), scene.add(p), group_objectphone_02_face.add(e), group_objectphone_02_face.position.z = 0, group_objectphone_02_white_button.add(o), group_objectphone_02_white_button.position.z = 1e3, group_objectphone_02_grey_button_01.add(t), group_objectphone_02_grey_button_01.position.z = 1100, group_objectphone_02_grey_button_02.add(n), group_objectphone_02_grey_button_02.position.z = 1200, group_objectphone_02_grey_button_03.add(_), group_objectphone_02_grey_button_03.position.z = 1300, group_objectphone_02_face.traverse(function(e) {
                                e.material && (e.material.opacity = 0, e.material.transparent = !0)
                            }), group_objectphone_02_icon.add(i), group_objectphone_02_icon.position.y = -40, group_objectphone_02_icon.position.z = 100, group_objectphone_02_icon.position.x = 5, group_objectphone_02_icon.rotation.x = 1.5, group_phone_2_buttons.add(group_objectphone_02_white_button, group_objectphone_02_grey_button_01, group_objectphone_02_grey_button_02, group_objectphone_02_grey_button_03)
                        })
                    })
                })
            })
        })
    })
}

function load_phone_03() {
    var e = new THREE.TextureLoader;
    (e = new THREE.TDSLoader).setResourcePath(""), e.load("models/phones/face_pink.3ds", function(e) {
        e.traverse(function(e) {}), e.scale.set(1, 1, 1);
        var o = new THREE.TextureLoader;
        (o = new THREE.TDSLoader).setResourcePath(""), o.load("models/phones/white_button_pink.3ds", function(o) {
            o.traverse(function(e) {}), o.scale.set(1, 1, 1);
            var t = new THREE.TextureLoader;
            (t = new THREE.TDSLoader).setResourcePath(""), t.load("models/phones/grey_button_01_pink.3ds", function(t) {
                t.traverse(function(e) {}), t.scale.set(1, 1, 1);
                var n = new THREE.TextureLoader;
                (n = new THREE.TDSLoader).setResourcePath(""), n.load("models/phones/grey_button_02_pink.3ds", function(n) {
                    n.traverse(function(e) {}), n.scale.set(1, 1, 1);
                    var _ = new THREE.TextureLoader;
                    (_ = new THREE.TDSLoader).setResourcePath(""), _.load("models/phones/grey_button_03_pink.3ds", function(_) {
                        _.traverse(function(e) {}), _.scale.set(1, 1, 1);
                        var i = new THREE.TextureLoader;
                        (i = new THREE.TDSLoader).setResourcePath(""), i.load("models/icons/icon_pink.3ds", function(i) {
                            i.traverse(function(e) {}), i.scale.set(1, 1, 1);
                            var r = new THREE.TextureLoader,
                                a = new THREE.PlaneGeometry(493, 1e3);
                            material_phone_03 = new THREE.MeshBasicMaterial({
                                map: r.load("assets/phone3_cut_image_FLIP.png"),
                                transparent: !0
                            });
                            var p = new THREE.Mesh(a, material_phone_03);
                            material_phone_03.opacity = 0, p.position.set(0, -5, 85), p.scale.set(.27, -.27, .27), p.flip = !0, p.rotation.set(.03, 0, 3.14), scene.add(p);
                            var s = new THREE.TextureLoader,
                                c = new THREE.PlaneGeometry(100, 100);
                            material_phone_icon_01 = new THREE.MeshBasicMaterial({
                                map: s.load("models/icons/1.png"),
                                transparent: !0
                            });
                            var u = new THREE.Mesh(c, material_phone_icon_01);
                            material_phone_icon_01.opacity = 1, u.position.set(0, -5, 85), u.scale.set(.27, -.27, .27), u.flip = !0, u.rotation.set(.03, 0, 3.14);
                            var b = new THREE.TextureLoader,
                                h = new THREE.PlaneGeometry(100, 100);
                            material_phone_icon_02 = new THREE.MeshBasicMaterial({
                                map: b.load("models/icons/2.png"),
                                transparent: !0
                            });
                            var l = new THREE.Mesh(h, material_phone_icon_02);
                            material_phone_icon_02.opacity = 1, l.position.set(0, -5, 85), l.scale.set(.27, -.27, .27), l.flip = !0, l.rotation.set(.03, 0, 3.14), scene.add(l);
                            var g = new THREE.TextureLoader,
                                d = new THREE.PlaneGeometry(100, 100);
                            material_phone_icon_03 = new THREE.MeshBasicMaterial({
                                map: g.load("models/icons/3.png"),
                                transparent: !0
                            });
                            var x = new THREE.Mesh(d, material_phone_icon_03);
                            material_phone_icon_03.opacity = 1, x.position.set(0, -5, 85), x.scale.set(.27, -.27, .27), x.flip = !0, x.rotation.set(.03, 0, 3.14), scene.add(x);
                            var m = new THREE.TextureLoader,
                                y = new THREE.PlaneGeometry(100, 100);
                            material_phone_icon_04 = new THREE.MeshBasicMaterial({
                                map: m.load("models/icons/4.png"),
                                transparent: !0
                            });
                            var E = new THREE.Mesh(y, material_phone_icon_04);
                            material_phone_icon_04.opacity = 1, E.position.set(0, -5, 85), E.scale.set(.27, -.27, .27), E.flip = !0, E.rotation.set(.03, 0, 3.14), scene.add(E);
                            var T = new THREE.TextureLoader,
                                f = new THREE.PlaneGeometry(100, 100);
                            material_phone_icon_05 = new THREE.MeshBasicMaterial({
                                map: T.load("models/icons/5.png"),
                                transparent: !0
                            });
                            var v = new THREE.Mesh(f, material_phone_icon_05);
                            material_phone_icon_05.opacity = 1, v.position.set(0, -5, 85), v.scale.set(.27, -.27, .27), v.flip = !0, v.rotation.set(.03, 0, 3.14), scene.add(v);
                            var j = new THREE.TextureLoader,
                                w = new THREE.PlaneGeometry(100, 100);
                            material_phone_icon_06 = new THREE.MeshBasicMaterial({
                                map: j.load("models/icons/6.png"),
                                transparent: !0
                            });
                            var z = new THREE.Mesh(w, material_phone_icon_06);
                            material_phone_icon_06.opacity = 1, z.position.set(0, -5, 85), z.scale.set(.27, -.27, .27), z.flip = !0, z.rotation.set(.03, 0, 3.14), scene.add(z), group_objectphone_03_face.add(e), group_objectphone_03_face.position.z = 0, group_objectphone_03_white_button.add(o), group_objectphone_03_white_button.position.z = 10, group_objectphone_03_grey_button_01.add(t), group_objectphone_03_grey_button_01.position.z = 20, group_objectphone_03_grey_button_02.add(n), group_objectphone_03_grey_button_02.position.z = 30, group_objectphone_03_grey_button_03.add(_), group_objectphone_03_grey_button_03.position.z = 40, group_objectphone_03_face.traverse(function(e) {
                                e.material && (e.material.opacity = 0, e.material.transparent = !0)
                            }), group_objectphone_03_icon.add(i), group_objectphone_03_icon.position.y = -40, group_objectphone_03_icon.position.z = 100, group_objectphone_03_icon.position.x = 0, group_objectphone_03_icon.rotation.x = 1.5, group_objectphone_03_icon_image_01.add(u), group_objectphone_03_icon_image_01.position.z = 60, group_objectphone_03_icon_image_02.add(l), group_objectphone_03_icon_image_02.position.z = 62, group_objectphone_03_icon_image_03.add(x), group_objectphone_03_icon_image_03.position.z = 64, group_objectphone_03_icon_image_04.add(E), group_objectphone_03_icon_image_04.position.z = 66, group_objectphone_03_icon_image_05.add(v), group_objectphone_03_icon_image_05.position.z = 68, group_objectphone_03_icon_image_06.add(z), group_objectphone_03_icon_image_06.position.z = 70, group_objectphone_03_ALL_icons.add(group_objectphone_03_icon_image_01, group_objectphone_03_icon_image_02, group_objectphone_03_icon_image_03, group_objectphone_03_icon_image_04, group_objectphone_03_icon_image_05, group_objectphone_03_icon_image_06), group_objectphone_03_ALL_icons.traverse(function(e) {
                                e.material && (e.material.opacity = 0)
                            }), group_phone_3_buttons.add(group_objectphone_03_white_button, group_objectphone_03_grey_button_01, group_objectphone_03_grey_button_02, group_objectphone_03_grey_button_03)
                        })
                    })
                })
            })
        })
    })
}

function load_phone_04() {
    var e = new THREE.TextureLoader;
    (e = new THREE.TDSLoader).setResourcePath(""), e.load("models/phones/face_orange.3ds", function(e) {
        e.traverse(function(e) {}), e.scale.set(1, 1, 1);
        var o = new THREE.TextureLoader;
        (o = new THREE.TDSLoader).setResourcePath(""), o.load("models/phones/white_button_orange.3ds", function(o) {
            o.traverse(function(e) {}), o.scale.set(1, 1, 1);
            var t = new THREE.TextureLoader;
            (t = new THREE.TDSLoader).setResourcePath(""), t.load("models/phones/grey_button_01_orange.3ds", function(t) {
                t.traverse(function(e) {}), t.scale.set(1, 1, 1);
                var n = new THREE.TextureLoader;
                (n = new THREE.TDSLoader).setResourcePath(""), n.load("models/phones/grey_button_02_orange.3ds", function(n) {
                    n.traverse(function(e) {}), n.scale.set(1, 1, 1);
                    var _ = new THREE.TextureLoader;
                    (_ = new THREE.TDSLoader).setResourcePath(""), _.load("models/phones/grey_button_03_orange.3ds", function(_) {
                        _.traverse(function(e) {}), _.scale.set(1, 1, 1);
                        var i = new THREE.TextureLoader,
                            r = new THREE.PlaneGeometry(493, 1e3);
                        material_phone_04 = new THREE.MeshBasicMaterial({
                            map: i.load("assets/phone4_cut_image_FLIP.png"),
                            transparent: !0
                        });
                        var a = new THREE.Mesh(r, material_phone_04);
                        material_phone_04.opacity = 0, a.position.set(0, -5, 80), a.scale.set(.27, -.27, .27), a.flip = !0, a.rotation.set(.04, 0, 3.14), scene.add(a);
                        var p = new THREE.TextureLoader;
                        (p = new THREE.TDSLoader).setResourcePath(""), p.load("models/icons/icon_orange.3ds", function(i) {
                            i.traverse(function(e) {}), i.scale.set(1, 1, 1), group_objectphone_04_face.add(e), group_objectphone_04_face.position.z = 0, group_objectphone_04_white_button.add(o), group_objectphone_04_white_button.position.z = 1e3, group_objectphone_04_grey_button_01.add(t), group_objectphone_04_grey_button_01.position.z = 1100, group_objectphone_04_grey_button_02.add(n), group_objectphone_04_grey_button_02.position.z = 1200, group_objectphone_04_grey_button_03.add(_), group_objectphone_04_grey_button_03.position.z = 1300, group_objectphone_04_icon.add(i), group_objectphone_04_icon.position.y = -40, group_objectphone_04_icon.position.z = 100, group_objectphone_04_icon.position.x = 0, group_objectphone_04_icon.rotation.x = 1.5, group_objectphone_04_icon.traverse(function(e) {
                                e.material && (e.material.opacity = 0)
                            }), group_objectphone_04_face.traverse(function(e) {
                                e.material && (e.material.opacity = 0, e.material.transparent = !0)
                            }), group_phone_4_buttons.add(group_objectphone_04_white_button, group_objectphone_04_grey_button_01, group_objectphone_04_grey_button_02, group_objectphone_04_grey_button_03)
                        })
                    })
                })
            })
        })
    }), (renderer = new THREE.WebGLRenderer({
        antialias: !0
    })).setPixelRatio(window.devicePixelRatio), renderer.setSize(window.innerWidth, window.innerHeight), document.getElementById("canvas_01").appendChild(renderer.domElement), controls = new THREE.TrackballControls(camera, renderer.domElement), this.controls.noZoom = !0, this.controls.noRotate = !0, renderer.setClearColor(16777215), window.addEventListener("resize", resize, !1)
}

function resize() {
    camera.aspect = window.innerWidth / window.innerHeight, renderer.setSize(window.innerWidth, window.innerHeight), camera.updateProjectionMatrix()
    mouseX = 0, mouseY = 0;
}
var cubeCamera = new THREE.CubeCamera(.1, 1, 512);
cubeCamera.renderTarget.texture.generateMipmaps = !0, cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
var material = new THREE.MeshStandardMaterial({
        vertexColors: THREE.VertexColors,
        roughness: 4,
        flatShading: !0,
        envMap: cubeCamera.renderTarget.texture,
        side: THREE.DoubleSide
    }),
    Movement_speed_01 = 9,
    Movement_speed_02 = 8,
    Movement_speed_03 = 7,
    Rotation_speed_01 = .03,
    Rotation_speed_02 = .02,
    Rotation_speed_03 = .01;
mouseX = 0, mouseY = 0, windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;

function movement() {
    camera.position.x -= 1e-5 * (mouseX - camera.position.x)
}

function click_to_02() {
    $.scrollify.update(), $("#canvas_01").fadeOut(100).delay(500).fadeIn(100), $("html,body").animate({
        scrollTop: $("#page_02").offset().top
    }, 500), $.scrollify.update()
}

function click_to_03() {
    $.scrollify.update(), $("#canvas_01").fadeOut(100).delay(500).fadeIn(100), $("html,body").animate({
        scrollTop: $("#page_03").offset().top
    }, 500), $.scrollify.update()
}

function click_to_05() {
    $.scrollify.update(), $("#canvas_01").fadeOut(100).delay(500).fadeIn(100), $("html,body").animate({
        scrollTop: $("#page_05").offset().top
    }, 500), $.scrollify.update()
}

function click_to_07() {
    $.scrollify.update(), $("#canvas_01").fadeOut(100).delay(500).fadeIn(100), $("html,body").animate({
        scrollTop: $("#page_07").offset().top
    }, 500), $.scrollify.update()
}

function click_to_09() {
    $.scrollify.update(), $("#canvas_01").fadeOut(100).delay(500).fadeIn(100), $("html,body").animate({
        scrollTop: $("#page_09").offset().top
    }, 500), $.scrollify.update()
}

function click_to_11() {
    $.scrollify.update(), $("#canvas_01").fadeOut(100).delay(500).fadeIn(100), $("html,body").animate({
        scrollTop: $("#page_11").offset().top
    }, 500), $.scrollify.update()
}

function click_to_12() {
    $.scrollify.update(), $("#canvas_01").fadeOut(100).delay(500).fadeIn(100), $("html,body").animate({
        scrollTop: $("#page_12").offset().top
    }, 500), $.scrollify.update()
}
$("#click_l1").click(function() {
    click_to_02()
}), $("#click_l2").click(function() {
    click_to_03()
}), $("#click_l3").click(function() {
    click_to_12()
}), $("#click_l4").click(function() {
    click_to_11()
}), $("#line1").click(function() {
    click_to_02()
}), $("#line2").click(function() {
    click_to_03()
}), $("#line3").click(function() {
    click_to_05()
}), $("#line4").click(function() {
    click_to_07()
}), $("#line5").click(function() {
    click_to_09()
}), $("#line6").click(function() {
    click_to_11()
}), $("#line7").click(function() {
    click_to_12()
}), $(window).bind("mousewheel", function() {
    $("html, body").stop()
});
var angle2, angle3, angle4, angle5, angle6, radius = 20,
    angle = 0,
    speed = .005,
    centerX = -10,
    centerY = -33,
    down = (lastFrameTime = 0, maxFrameTime = .03, !1);

function onDocumentMouseDown(e) {
    down = !0
}

function onDocumentMouseUp(e) {
    down = !1, mouseX = 0, mouseY = 0
}

function onDocumentMouseMove(e) {
 $("#center_hover").hover(function(){
    down = !0},
    function(){
    down = !1
 })
    1 == down ? (mouseX = e.clientX - windowHalfX, mouseY = e.clientY - windowHalfY) : (mouseX = 0, mouseY = 0)
    // mouseX = e.clientX - windowHalfX, mouseY = e.clientY - windowHalfY
}

function animate(e) {
    camera.position.x += .1 * (mouseX - camera.position.x), camera.position.y += .1 * (-mouseY - camera.position.y);
    var o = window.performance.now(),
        t = (o - lastFrameTime) / 1e3;
    Math.min(t, maxFrameTime);
    lastFrameTime = o, scene.add(group_full_phone), camera.position.z = 500, scene.add(group_full_phone), group_full_phone.traverse(function(e) {
        e.material && (e.material.opacity += .01, e.material.transparent = !0, e.material.transparent > .5 && (e.material.transparent = .5))
    });
    var n = centerX + radius * Math.cos(angle),
        _ = centerX + radius * Math.cos(angle2),
        i = centerX + radius * Math.cos(angle3),
        r = centerX + radius * Math.cos(angle4),
        a = centerX + radius * Math.cos(angle5),
        p = centerX + radius * Math.cos(angle6),
        s = centerY + radius * Math.sin(angle),
        c = centerY + radius * Math.sin(angle2),
        u = centerY + radius * Math.sin(angle3),
        b = centerY + radius * Math.sin(angle4),
        h = centerY + radius * Math.sin(angle5),
        l = centerY + radius * Math.sin(angle6);

    function g() {
        group_objectphone_01_face.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0))
        }), group_objectphone_01_icon.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0, scene.remove(group_objectphone_01_icon)))
        }), group_objectphone_01_white_button.position.z += 10, group_objectphone_01_white_button.position.z > 1e3 && (group_objectphone_01_white_button.position.z = 1e3), group_objectphone_01_grey_button_01.position.z += 10, group_objectphone_01_grey_button_01.position.z > 1100 && (group_objectphone_01_grey_button_01.position.z = 1e3), group_objectphone_01_grey_button_02.position.z += 10, group_objectphone_01_grey_button_02.position.z > 1200 && (group_objectphone_01_grey_button_02.position.z = 1200), group_objectphone_01_grey_button_03.position.z += 10, group_objectphone_01_grey_button_03.position.z > 1300 && (group_objectphone_01_grey_button_03.position.z = 1300), group_text_01.position.z += 35, group_text_01.position.z > 1e3 && (group_text_01.position.z = 1e3)
    }

    function d() {
        material_phone_01.opacity -= .1, material_phone_01.opacity < 0 && (material_phone_01.opacity = 0)
    }

    function x() {
        group_objectphone_02_face.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0))
        }), group_objectphone_02_icon.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0, scene.remove(group_objectphone_02_icon)))
        }), group_objectphone_02_white_button.position.z += 10, group_objectphone_02_white_button.position.z > 1e3 && (group_objectphone_02_white_button.position.z = 1e3), group_objectphone_02_grey_button_01.position.z += 10, group_objectphone_02_grey_button_01.position.z > 1100 && (group_objectphone_02_grey_button_01.position.z = 1e3), group_objectphone_02_grey_button_02.position.z += 10, group_objectphone_02_grey_button_02.position.z > 1200 && (group_objectphone_02_grey_button_02.position.z = 1200), group_objectphone_02_grey_button_03.position.z += 10, group_objectphone_02_grey_button_03.position.z > 1300 && (group_objectphone_02_grey_button_03.position.z = 1300), group_text_02.position.z += 35, group_text_02.position.z > 1e3 && (group_text_02.position.z = 1e3)
    }

    function m() {
        material_phone_02.opacity -= .1, material_phone_02.opacity < 0 && (material_phone_02.opacity = 0)
    }

    function y() {
        group_objectphone_03_face.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0))
        }), group_objectphone_03_icon.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0, scene.remove(group_objectphone_03_icon)))
        }), group_objectphone_03_ALL_icons.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0, scene.remove(group_objectphone_03_ALL_icons)))
        }), group_objectphone_03_white_button.position.z += 10, group_objectphone_03_white_button.position.z > 1e3 && (group_objectphone_03_white_button.position.z = 1e3), group_objectphone_03_grey_button_01.position.z += 10, group_objectphone_03_grey_button_01.position.z > 1100 && (group_objectphone_03_grey_button_01.position.z = 1e3), group_objectphone_03_grey_button_02.position.z += 10, group_objectphone_03_grey_button_02.position.z > 1200 && (group_objectphone_03_grey_button_02.position.z = 1200), group_objectphone_03_grey_button_03.position.z += 10, group_objectphone_03_grey_button_03.position.z > 1300 && (group_objectphone_03_grey_button_03.position.z = 1300), group_text_03.position.z += 35, group_text_03.position.z > 1e3 && (group_text_03.position.z = 1e3)
    }

    function E() {
        material_phone_03.opacity -= .1, material_phone_03.opacity < 0 && (material_phone_03.opacity = 0)
    }

    function T() {
        group_objectphone_04_icon.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0, scene.remove(group_objectphone_04_icon)))
        }), group_objectphone_04_face.traverse(function(e) {
            e.material && (e.material.opacity -= .05, e.material.transparent = !0, e.material.opacity < 0 && (e.material.opacity = 0))
        }), group_objectphone_04_white_button.position.z += 10, group_objectphone_04_white_button.position.z > 1e3 && (group_objectphone_04_white_button.position.z = 1e3), group_objectphone_04_grey_button_01.position.z += 10, group_objectphone_04_grey_button_01.position.z > 1100 && (group_objectphone_04_grey_button_01.position.z = 1e3), group_objectphone_04_grey_button_02.position.z += 10, group_objectphone_04_grey_button_02.position.z > 1200 && (group_objectphone_04_grey_button_02.position.z = 1200), group_objectphone_04_grey_button_03.position.z += 10, group_objectphone_04_grey_button_03.position.z > 1300 && (group_objectphone_04_grey_button_03.position.z = 1300), group_text_04.position.z += 35, group_text_04.position.z > 1e3 && (group_text_04.position.z = 1e3)
    }

    function f() {
        material_phone_04.opacity -= .1, material_phone_04.opacity < 0 && (material_phone_04.opacity = 0)
    }

    function v() {
        group_objectphone_01_cover.position.z -= 14, group_objectphone_01_cover.position.z < -500 && (group_objectphone_01_cover.position.z = -500), group_objectphone_01_case.position.y -= 14, group_objectphone_01_case.position.y < -250 && (group_objectphone_01_case.position.y = -250), group_objectphone_01_back.position.z += 14, group_objectphone_01_back.position.z > 250 && (group_objectphone_01_back.position.z = 250), group_objectphone_01_left_buttons.position.x -= 14, group_objectphone_01_left_buttons.position.x < -250 && (group_objectphone_01_left_buttons.position.x = -250), group_objectphone_01_right_buttons.position.x += 14, group_objectphone_01_right_buttons.position.x > 250 && (group_objectphone_01_right_buttons.position.x = 250), group_objectphone_01_bottoms.position.y -= 14, group_objectphone_01_bottoms.position.y < -250 && (group_objectphone_01_bottoms.position.y = -250), group_objectphone_01_bar.position.z += 14, group_objectphone_01_bar.position.z > 250 && (group_objectphone_01_bar.position.z = 250), group_objectphone_01_ant.position.y += 14, group_objectphone_01_ant.position.y > 250 && (group_objectphone_01_ant.position.y = 250)
    }

    function j() {
        group_objectphone_01_cover.position.z += 16, group_objectphone_01_cover.position.z > 0 && (group_objectphone_01_cover.position.z = 0), group_objectphone_01_case.position.y += 16, group_objectphone_01_case.position.y > 0 && (group_objectphone_01_case.position.y = 0), group_objectphone_01_back.position.z -= 14, group_objectphone_01_back.position.z < 0 && (group_objectphone_01_back.position.z = 0), group_objectphone_01_left_buttons.position.x += 12, group_objectphone_01_left_buttons.position.x > 0 && (group_objectphone_01_left_buttons.position.x = 0), group_objectphone_01_right_buttons.position.x -= 12, group_objectphone_01_right_buttons.position.x < 0 && (group_objectphone_01_right_buttons.position.x = 0), group_objectphone_01_bottoms.position.y += 14, group_objectphone_01_bottoms.position.y > 0 && (group_objectphone_01_bottoms.position.y = 0), group_objectphone_01_bar.position.z -= 14, group_objectphone_01_bar.position.z < 0 && (group_objectphone_01_bar.position.z = 0), group_objectphone_01_ant.position.y -= 14, group_objectphone_01_ant.position.y < 0 && (group_objectphone_01_ant.position.y = 0)
    }
    angle2 = (angle += speed) + 10 * speed, angle3 = angle + 600 * speed, angle4 = angle + 1e3 * speed, angle5 = angle + 1400 * speed, angle6 = angle + 1800 * speed, group_objectphone_03_icon_image_01.position.x = 2 + n, group_objectphone_03_icon_image_01.position.y = 2 + s, group_objectphone_03_icon_image_02.position.x = 10 + _, group_objectphone_03_icon_image_02.position.y = 10 + c, group_objectphone_03_icon_image_03.position.x = 10 + i, group_objectphone_03_icon_image_03.position.y = 10 + u, group_objectphone_03_icon_image_04.position.x = 10 + r, group_objectphone_03_icon_image_04.position.y = 10 + b, group_objectphone_03_icon_image_05.position.x = 10 + a, group_objectphone_03_icon_image_05.position.y = 10 + h, group_objectphone_03_icon_image_06.position.x = 10 + p, group_objectphone_03_icon_image_06.position.y = 10 + l, time_rotation = .001 * Date.now(), time_movement = 7e-4 * Date.now(), group_objectphone_01_icon.rotation.z = -.3 * Math.cos(time_rotation) + .1, group_objectphone_01_icon.position.y = -37 - 5 * Math.cos(time_movement) + 5, group_objectphone_02_icon.rotation.z = -.3 * Math.cos(time_rotation) + .1, group_objectphone_02_icon.position.y = -37 - 5 * Math.cos(time_movement) + 5, group_objectphone_04_icon.rotation.z = -.3 * Math.cos(time_rotation) - .1, group_objectphone_04_icon.position.y = -37 - 5 * Math.cos(time_movement) + 5, setTimeout(movement, 15e3), camera.position.x < -200 && (camera.position.x = -200), camera.position.x > 200 && (camera.position.x = 200), $(".section_01").each(function(e, o) {
        (o = $(o)).visible(!0) && (v(), group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity = 0, e.material.transparent = !0)
        }))
    }), $(".section_02").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity = 0, e.material.transparent = !0)
        }), v(), x(), y(), T(), g(), d(), m(), E(), f(), $("#line1").animate({
            width: "55px"
        }, 50), $("#line1").css({
            backgroundColor: "#00B7F1"
        }), $("#line2").css({
            backgroundColor: "#bbb"
        }), $("#line3").css({
            backgroundColor: "#bbb"
        }), $("#line4").css({
            backgroundColor: "#bbb"
        }), $("#line5").css({
            backgroundColor: "#bbb"
        }), $("#line6").css({
            backgroundColor: "#bbb"
        }), $("#line7").css({
            backgroundColor: "#bbb"
        }))
    }), $(".section_03").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity = 1, e.material.transparent = !0)
        }), material_phone_01.opacity += .01, material_phone_01.opacity > 1 && (material_phone_01.opacity = 1), j(), function() {
            x(), y(), T(), scene.add(group_objectphone_01_icon), group_objectphone_01_icon.traverse(function(e) {
                e.material && (e.material.opacity += .5, e.material.transparent = !0, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_objectphone_01_face), group_objectphone_01_face.traverse(function(e) {
                e.material && (e.material.opacity += .05, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_phone_1_buttons), group_objectphone_01_white_button.position.z -= 10, group_objectphone_01_white_button.position.z < 0 && (group_objectphone_01_white_button.position.z = 0);
            group_objectphone_01_grey_button_01.position.z -= 10, group_objectphone_01_grey_button_01.position.z < 0 && (group_objectphone_01_grey_button_01.position.z = 0);
            group_objectphone_01_grey_button_02.position.z -= 10, group_objectphone_01_grey_button_02.position.z < 0 && (group_objectphone_01_grey_button_02.position.z = 0);
            group_objectphone_01_grey_button_03.position.z -= 10, group_objectphone_01_grey_button_03.position.z < 0 && (group_objectphone_01_grey_button_03.position.z = 0);
            scene.add(group_text_01), group_text_01.position.z -= 35, group_text_01.position.z < 0 && (group_text_01.position.z = 0)
        }(), $("#line2").animate({
            width: "55px"
        }, 50), $("#line1").css({
            backgroundColor: "#bbb"
        }), $("#line2").css({
            backgroundColor: "#00B7F1"
        }), $("#line3").css({
            backgroundColor: "#bbb"
        }), $("#line4").css({
            backgroundColor: "#bbb"
        }), $("#line5").css({
            backgroundColor: "#bbb"
        }), $("#line6").css({
            backgroundColor: "#bbb"
        }), $("#line7").css({
            backgroundColor: "#bbb"
        }))
    }), $(".section_04").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity = 0, e.material.transparent = !0)
        }), v(), g(), d(), x(), m())
    }), $(".section_05").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity = 1, e.material.transparent = !0)
        }), j(), function() {
            g(), y(), T(), scene.add(group_objectphone_02_icon), group_objectphone_02_icon.traverse(function(e) {
                e.material && (e.material.opacity += .5, e.material.transparent = !0, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_objectphone_02_face), group_objectphone_02_face.traverse(function(e) {
                e.material && (e.material.opacity += .05, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_phone_2_buttons), group_objectphone_02_white_button.position.z -= 10, group_objectphone_02_white_button.position.z < 0 && (group_objectphone_02_white_button.position.z = 0);
            group_objectphone_02_grey_button_01.position.z -= 10, group_objectphone_02_grey_button_01.position.z < 0 && (group_objectphone_02_grey_button_01.position.z = 0);
            group_objectphone_02_grey_button_02.position.z -= 10, group_objectphone_02_grey_button_02.position.z < 0 && (group_objectphone_02_grey_button_02.position.z = 0);
            group_objectphone_02_grey_button_03.position.z -= 10, group_objectphone_02_grey_button_03.position.z < 0 && (group_objectphone_02_grey_button_03.position.z = 0);
            scene.add(group_text_02), group_text_02.position.z -= 35, group_text_02.position.z < 0 && (group_text_02.position.z = 0)
        }(), material_phone_02.opacity += .01, material_phone_02.opacity > 1 && (material_phone_02.opacity = 1), $("#line3").animate({
            width: "55px"
        }, 50), $("#line1").css({
            backgroundColor: "#bbb"
        }), $("#line2").css({
            backgroundColor: "#bbb"
        }), $("#line3").css({
            backgroundColor: "#00B7F1"
        }), $("#line4").css({
            backgroundColor: "#bbb"
        }), $("#line5").css({
            backgroundColor: "#bbb"
        }), $("#line6").css({
            backgroundColor: "#bbb"
        }), $("#line7").css({
            backgroundColor: "#bbb"
        }))
    }), $(".section_06").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity = 0, e.material.transparent = !0)
        }), v(), x(), m(), y(), E())
    }), $(".section_07").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity += .01, e.material.transparent = !0, e.material.transparent > .5 && (e.material.transparent = .5))
        }), j(), function() {
            g(), x(), T(), scene.add(group_objectphone_03_icon), group_objectphone_03_icon.traverse(function(e) {
                e.material && (e.material.opacity += .5, e.material.transparent = !0, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_objectphone_03_ALL_icons), group_objectphone_03_ALL_icons.traverse(function(e) {
                e.material && (e.material.opacity += .5, e.material.transparent = !0, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_objectphone_03_face), group_objectphone_03_face.traverse(function(e) {
                e.material && (e.material.opacity += .05, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_phone_3_buttons), group_objectphone_03_white_button.position.z -= 10, group_objectphone_03_white_button.position.z < 0 && (group_objectphone_03_white_button.position.z = 0);
            group_objectphone_03_grey_button_01.position.z -= 10, group_objectphone_03_grey_button_01.position.z < 0 && (group_objectphone_03_grey_button_01.position.z = 0);
            group_objectphone_03_grey_button_02.position.z -= 10, group_objectphone_03_grey_button_02.position.z < 0 && (group_objectphone_03_grey_button_02.position.z = 0);
            group_objectphone_03_grey_button_03.position.z -= 10, group_objectphone_03_grey_button_03.position.z < 0 && (group_objectphone_03_grey_button_03.position.z = 0);
            scene.add(group_text_03), group_text_03.position.z -= 35, group_text_03.position.z < 0 && (group_text_03.position.z = 0)
        }(), material_phone_03.opacity += .01, material_phone_03.opacity > 1 && (material_phone_03.opacity = 1), $("#line4").animate({
            width: "55px"
        }, 50), $("#line1").css({
            backgroundColor: "#bbb"
        }), $("#line2").css({
            backgroundColor: "#bbb"
        }), $("#line3").css({
            backgroundColor: "#bbb"
        }), $("#line4").css({
            backgroundColor: "#00B7F1"
        }), $("#line5").css({
            backgroundColor: "#bbb"
        }), $("#line6").css({
            backgroundColor: "#bbb"
        }), $("#line7").css({
            backgroundColor: "#bbb"
        }))
    }), $(".section_08").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity += .01, e.material.transparent = !0, e.material.transparent > .5 && (e.material.transparent = .5))
        }), v(), y(), E(), T(), f())
    }), $(".section_09").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity += .01, e.material.transparent = !0, e.material.transparent > .5 && (e.material.transparent = .5))
        }), j(), function() {
            g(), x(), y(), scene.add(group_objectphone_04_icon), group_objectphone_04_icon.traverse(function(e) {
                e.material && (e.material.opacity += .5, e.material.transparent = !0, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_objectphone_04_face), group_objectphone_04_face.traverse(function(e) {
                e.material && (e.material.opacity += .05, e.material.transparent = !0, e.material.opacity > 1 && (e.material.opacity = 1))
            }), scene.add(group_phone_4_buttons), group_objectphone_04_white_button.position.z -= 10, group_objectphone_04_white_button.position.z < 0 && (group_objectphone_04_white_button.position.z = 0);
            group_objectphone_04_grey_button_01.position.z -= 10, group_objectphone_04_grey_button_01.position.z < 0 && (group_objectphone_04_grey_button_01.position.z = 0);
            group_objectphone_04_grey_button_02.position.z -= 10, group_objectphone_04_grey_button_02.position.z < 0 && (group_objectphone_04_grey_button_02.position.z = 0);
            group_objectphone_04_grey_button_03.position.z -= 10, group_objectphone_04_grey_button_03.position.z < 0 && (group_objectphone_04_grey_button_03.position.z = 0);
            scene.add(group_text_04), group_text_04.position.z -= 35, group_text_04.position.z < 0 && (group_text_04.position.z = 0)
        }(), material_phone_04.opacity += .01, material_phone_04.opacity > 1 && (material_phone_04.opacity = 1), $("#line5").animate({
            width: "55px"
        }, 50), $("#line1").css({
            backgroundColor: "#bbb"
        }), $("#line2").css({
            backgroundColor: "#bbb"
        }), $("#line3").css({
            backgroundColor: "#bbb"
        }), $("#line4").css({
            backgroundColor: "#bbb"
        }), $("#line5").css({
            backgroundColor: "#00B7F1"
        }), $("#line6").css({
            backgroundColor: "#bbb"
        }), $("#line7").css({
            backgroundColor: "#bbb"
        }))
    }), $(".section_10").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity += .01, e.material.transparent = !0, e.material.transparent > .5 && (e.material.transparent = .5))
        }), v(), T(), f())
    }), $(".section_11").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity += .01, e.material.transparent = !0, e.material.transparent > .5 && (e.material.transparent = .5))
        }), $("#line6").animate({
            width: "55px"
        }, 50), $("#line1").css({
            backgroundColor: "#bbb"
        }), $("#line2").css({
            backgroundColor: "#bbb"
        }), $("#line3").css({
            backgroundColor: "#bbb"
        }), $("#line4").css({
            backgroundColor: "#bbb"
        }), $("#line5").css({
            backgroundColor: "#bbb"
        }), $("#line6").css({
            backgroundColor: "#00B7F1"
        }), $("#line7").css({
            backgroundColor: "#bbb"
        }))
    }), $(".section_12").each(function(e, o) {
        (o = $(o)).visible(!0) && (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity += .01, e.material.transparent = !0, e.material.transparent > .5 && (e.material.transparent = .5))
        }), $("#line7").animate({
            width: "55px"
        }, 50), $("#line1").css({
            backgroundColor: "#bbb"
        }), $("#line2").css({
            backgroundColor: "#bbb"
        }), $("#line3").css({
            backgroundColor: "#bbb"
        }), $("#line4").css({
            backgroundColor: "#bbb"
        }), $("#line5").css({
            backgroundColor: "#bbb"
        }), $("#line6").css({
            backgroundColor: "#bbb"
        }), $("#line7").css({
            backgroundColor: "#00B7F1"
        }), $(".center_up").css({
            opacity: "0"
        }), $(".center").css({
            opacity: "1"
        }))
    }), $(".section_13").each(function(e, o) {
        (o = $(o)).visible(!0) ? (group_full_phone.traverse(function(e) {
            e.material && (e.material.opacity += .01, e.material.transparent = !0, e.material.transparent > .5 && (e.material.transparent = .5))
        }), $(".center_up").css({
            opacity: "1"
        }), $(".center").css({
            opacity: "0"
        }), $(".link-fb-black").css({
            filter: "invert(1)"
        }), $(".link-tw-black").css({
            filter: "invert(1)"
        }), $(".link-ig-black").css({
            filter: "invert(1)"
        }), $(".link-in-black").css({
            filter: "invert(1)"
        }), $(".link-gg-black").css({
            filter: "invert(1)"
        })) : ($(".link-fb-black").css({
            filter: "invert(0)"
        }), $(".link-tw-black").css({
            filter: "invert(0)"
        }), $(".link-ig-black").css({
            filter: "invert(0)"
        }), $(".link-in-black").css({
            filter: "invert(0)"
        }), $(".link-gg-black").css({
            filter: "invert(0)"
        }))
    }), renderer.render(scene, camera), camera.lookAt(scene.position), controls.update(), renderer.render(scene, camera), requestAnimationFrame(animate)
}
$(window).focus(function() {
    requestAnimationFrame(animate)
}), $.scrollify({
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1e3,
    offset: 0,
    scrollbars: !1,
    standardScrollElements: "",
    setHeights: !0,
    overflowScroll: !0,
    updateHash: !1,
    touchScroll: !0,
    before: function() {},
    after: function() {},
    afterResize: function() {},
    afterRender: function() {}
});