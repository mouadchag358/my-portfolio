// ============================================================
// THREE.JS SCENE
// ============================================================

const container = document.getElementById("webgl-container");

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x17120f);

scene.fog = new THREE.FogExp2(
    0x17120f,
    0.018
);


// ============================================================
// CAMERA
// ============================================================

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 2, 11);

const cameraBase = new THREE.Vector3(
    0,
    2,
    11
);

const cameraOpen = new THREE.Vector3(
    0,
    1.35,
    7
);

const cameraLook = new THREE.Vector3(
    0,
    0.1,
    0
);


// ============================================================
// RENDERER
// ============================================================

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance"
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.shadowMap.enabled = true;

renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;

// Three.js 0.180+
renderer.outputColorSpace =
    THREE.SRGBColorSpace;

renderer.toneMapping =
    THREE.ACESFilmicToneMapping;

renderer.toneMappingExposure = 1.05;

container.appendChild(
    renderer.domElement
);


// ============================================================
// BEDROOM WALL
// ============================================================

const wallGeometry =
    new THREE.PlaneGeometry(
        35,
        22
    );

const wallMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x715c4b,
        roughness: 0.92,
        metalness: 0
    });

const wall =
    new THREE.Mesh(
        wallGeometry,
        wallMaterial
    );

wall.position.set(
    0,
    1,
    -1.42
);

wall.receiveShadow = true;

scene.add(wall);


// ============================================================
// WALL SIDE PANELS
// ============================================================

const panelMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x59463a,
        roughness: 0.88
    });

const leftPanel =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            0.12,
            18,
            0.12
        ),
        panelMaterial
    );

leftPanel.position.set(
    -7,
    1,
    -1.32
);

scene.add(leftPanel);


const rightPanel =
    leftPanel.clone();

rightPanel.position.x = 7;

scene.add(rightPanel);


// ============================================================
// WINDOW
// ============================================================

const windowFrameMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x30251f,
        roughness: 0.65
    });


const windowGlassMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x8faeb4,
        roughness: 0.18,
        metalness: 0.05,
        transparent: true,
        opacity: 0.72
    });


const windowGroup =
    new THREE.Group();

windowGroup.position.set(
    6.3,
    3.2,
    -1.30
);

scene.add(windowGroup);


// Glass

const windowGlass =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            3.2,
            2.6,
            0.08
        ),
        windowGlassMaterial
    );

windowGlass.castShadow = false;

windowGroup.add(
    windowGlass
);


// Outer frame

const frameTop =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            3.45,
            0.16,
            0.16
        ),
        windowFrameMaterial
    );

frameTop.position.y = 1.4;

windowGroup.add(frameTop);


const frameBottom =
    frameTop.clone();

frameBottom.position.y = -1.4;

windowGroup.add(frameBottom);


const frameLeft =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            0.16,
            2.8,
            0.16
        ),
        windowFrameMaterial
    );

frameLeft.position.x = -1.65;

windowGroup.add(frameLeft);


const frameRight =
    frameLeft.clone();

frameRight.position.x = 1.65;

windowGroup.add(frameRight);


// Vertical center

const frameCenterVertical =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            0.10,
            2.65,
            0.18
        ),
        windowFrameMaterial
    );

windowGroup.add(
    frameCenterVertical
);


// Horizontal center

const frameCenterHorizontal =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            3.25,
            0.10,
            0.18
        ),
        windowFrameMaterial
    );

windowGroup.add(
    frameCenterHorizontal
);


// ============================================================
// WINDOW LIGHT
// ============================================================

const windowLight =
    new THREE.PointLight(
        0xffd6a3,
        2.2,
        10
    );

windowLight.position.set(
    5.5,
    3.5,
    2
);

scene.add(windowLight);


// ============================================================
// FLOOR
// ============================================================

const floorGeometry =
    new THREE.PlaneGeometry(
        35,
        25
    );

const floorMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x30231c,
        roughness: 0.88
    });

const floor =
    new THREE.Mesh(
        floorGeometry,
        floorMaterial
    );

floor.rotation.x =
    -Math.PI / 2;

floor.position.y =
    -3.1;

floor.receiveShadow = true;

scene.add(floor);


// ============================================================
// BASEBOARD
// ============================================================

const baseboardMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x3b2a20,
        roughness: 0.72
    });

const baseboard =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            34,
            0.28,
            0.16
        ),
        baseboardMaterial
    );

baseboard.position.set(
    0,
    -2.82,
    -1.30
);

scene.add(baseboard);



const ambientLight =
    new THREE.AmbientLight(
        0xffedd0,
        0.8
    );

scene.add(ambientLight);


const mainLight =
    new THREE.DirectionalLight(
        0xfff5ea,
        1.7
    );

mainLight.position.set(
    5,
    8,
    7
);

mainLight.castShadow = true;

mainLight.shadow.mapSize.width = 2048;
mainLight.shadow.mapSize.height = 2048;

mainLight.shadow.bias = -0.0001;

scene.add(mainLight);


const warmFill =
    new THREE.PointLight(
        0xff7b54,
        1.5,
        15
    );

warmFill.position.set(
    -4,
    3,
    4
);

scene.add(warmFill);


const rimLight =
    new THREE.PointLight(
        0x73c2fb,
        1.15,
        15
    );

rimLight.position.set(
    4,
    -2,
    -2
);

scene.add(rimLight);

// ============================================================
// DUST
// ============================================================

const particleCount = 180;

const particleGeometry =
    new THREE.BufferGeometry();

const particlePositions =
    new Float32Array(
        particleCount * 3
    );

for (
    let i = 0;
    i < particleCount * 3;
    i += 3
) {

    particlePositions[i] =
        (Math.random() - 0.5) * 14;

    particlePositions[i + 1] =
        (Math.random() - 0.5) * 9 + 1;

    particlePositions[i + 2] =
        (Math.random() - 0.5) * 9;
}

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        particlePositions,
        3
    )
);

const particleMaterial =
    new THREE.PointsMaterial({

        color: 0xffedd0,

        size: 0.035,

        transparent: true,

        opacity: 0.45,

        blending:
            THREE.AdditiveBlending

    });

const dustParticles =
    new THREE.Points(
        particleGeometry,
        particleMaterial
    );

scene.add(
    dustParticles
);


// ============================================================
// BOOKSHELF
// ============================================================

const shelfGroup =
    new THREE.Group();

scene.add(
    shelfGroup
);


const woodMaterial =
    new THREE.MeshStandardMaterial({

        color: 0x6b4630,

        roughness: 0.55,

        metalness: 0.05

    });


const darkWoodMaterial =
    new THREE.MeshStandardMaterial({

        color: 0x382217,

        roughness: 0.75

    });


const shelfWidth = 8.8;
const shelfHeight = 6.2;
const shelfDepth = 2.5;
const woodThickness = 0.28;


// ============================================================
// BACK
// ============================================================

const backGeometry =
    new THREE.BoxGeometry(
        shelfWidth,
        shelfHeight,
        woodThickness
    );

const back =
    new THREE.Mesh(
        backGeometry,
        darkWoodMaterial
    );

back.position.set(
    0,
    0,
    -shelfDepth / 2
);

back.castShadow = true;
back.receiveShadow = true;

shelfGroup.add(back);


// ============================================================
// SIDES
// ============================================================

const sideGeometry =
    new THREE.BoxGeometry(
        woodThickness,
        shelfHeight,
        shelfDepth
    );

const leftSide =
    new THREE.Mesh(
        sideGeometry,
        woodMaterial
    );

leftSide.position.set(
    -shelfWidth / 2,
    0,
    0
);

leftSide.castShadow = true;
leftSide.receiveShadow = true;

shelfGroup.add(leftSide);


const rightSide =
    leftSide.clone();

rightSide.position.x =
    shelfWidth / 2;

shelfGroup.add(
    rightSide
);


// ============================================================
// TOP / BOTTOM
// ============================================================

const horizontalGeometry =
    new THREE.BoxGeometry(
        shelfWidth + 0.2,
        woodThickness,
        shelfDepth + 0.15
    );


const topShelf =
    new THREE.Mesh(
        horizontalGeometry,
        woodMaterial
    );

topShelf.position.y =
    shelfHeight / 2;

topShelf.castShadow = true;
topShelf.receiveShadow = true;

shelfGroup.add(
    topShelf
);


const bottomShelf =
    topShelf.clone();

bottomShelf.position.y =
    -shelfHeight / 2;

shelfGroup.add(
    bottomShelf
);


// ============================================================
// INTERNAL SHELVES
// ============================================================

const innerShelfGeometry =
    new THREE.BoxGeometry(
        shelfWidth - 0.35,
        woodThickness,
        shelfDepth
    );


const middleShelf =
    new THREE.Mesh(
        innerShelfGeometry,
        woodMaterial
    );

middleShelf.position.y =
    -0.85;

middleShelf.castShadow = true;
middleShelf.receiveShadow = true;

shelfGroup.add(
    middleShelf
);


const upperShelf =
    new THREE.Mesh(
        innerShelfGeometry,
        woodMaterial
    );

upperShelf.position.y =
    1.35;

upperShelf.castShadow = true;
upperShelf.receiveShadow = true;

shelfGroup.add(
    upperShelf
);


// ============================================================
// PLANT
// ============================================================

const potGeometry =
    new THREE.CylinderGeometry(
        0.32,
        0.24,
        0.5,
        20
    );

const potMaterial =
    new THREE.MeshStandardMaterial({

        color: 0xd9c7b5,

        roughness: 0.6

    });

const pot =
    new THREE.Mesh(
        potGeometry,
        potMaterial
    );

pot.position.set(
    -3.4,
    shelfHeight / 2 + 0.35,
    0
);

pot.castShadow = true;

shelfGroup.add(
    pot
);


const plantGroup =
    new THREE.Group();

plantGroup.position.set(
    -3.4,
    shelfHeight / 2 + 0.65,
    0
);


for (
    let i = 0;
    i < 7;
    i++
) {

    const leafGeometry =
        new THREE.SphereGeometry(
            0.18,
            10,
            10
        );

    const leafMaterial =
        new THREE.MeshStandardMaterial({
            color: 0x52796f,
            roughness: 0.5
        });

    const leaf =
        new THREE.Mesh(
            leafGeometry,
            leafMaterial
        );

    leaf.scale.set(
        0.55,
        1.5,
        0.55
    );

    leaf.position.set(
        (Math.random() - 0.5) * 0.45,
        Math.random() * 0.35,
        (Math.random() - 0.5) * 0.25
    );

    leaf.rotation.z =
        (Math.random() - 0.5) * 0.8;

    leaf.rotation.x =
        (Math.random() - 0.5) * 0.5;

    leaf.castShadow = true;

    plantGroup.add(
        leaf
    );
}

shelfGroup.add(
    plantGroup
);


// ============================================================
// BOOK DATA
// ============================================================

const bookData = [

    {
        title: "ABOUT ME",
        color: 0xe63946,
        subtitle: "Full-Stack Developer"
    },

    {
        title: "PROJECTS",
        color: 0x2a9d8f,
        subtitle: "GitHub Repositories"
    },

    {
        title: "SKILLS",
        color: 0x457b9d,
        subtitle: "Technologies & Tools"
    },

    {
        title: "EXPERIENCE",
        color: 0x871f6b,
        subtitle: "Career & Timeline"
    },

    {
        title: "EDUCATION",
        color: 0x9b5de5,
        subtitle: "Academic Background"
    },

    {
        title: "CONTACT",
        color: 0xff006e,
        subtitle: "Get In Touch"
    }

];


// ============================================================
// BOOK GROUP
// ============================================================

const booksGroup =
    new THREE.Group();

shelfGroup.add(
    booksGroup
);

const books = [];

const bookWidth = 0.78;
const bookHeight = 1.5;
const bookDepth = 2.0;

const startX = -2.45;
const spacing = 0.98;


// ============================================================
// CREATE BOOKS
// ============================================================

bookData.forEach(
    (data, index) => {

        const bookContainer =
            new THREE.Group();


        const geometry =
            new THREE.BoxGeometry(
                bookWidth,
                bookHeight,
                bookDepth
            );


        const canvas =
            document.createElement(
                "canvas"
            );

        canvas.width = 1024;
        canvas.height = 2048;

        const ctx =
            canvas.getContext("2d");


        const colorHex =
            "#" +
            data.color
                .toString(16)
                .padStart(6, "0");


        ctx.fillStyle =
            colorHex;

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.strokeStyle =
            "rgba(255,255,255,.75)";

        ctx.lineWidth = 24;

        ctx.strokeRect(
            60,
            60,
            904,
            1928
        );


        ctx.strokeStyle =
            "rgba(255,255,255,.22)";

        ctx.lineWidth = 10;

        ctx.beginPath();

        ctx.moveTo(
            140,
            0
        );

        ctx.lineTo(
            140,
            2048
        );

        ctx.stroke();


        ctx.save();

        ctx.translate(
            512,
            1024
        );

        ctx.rotate(
            Math.PI / 2
        );

        ctx.fillStyle =
            "#ffffff";

        ctx.font =
            '900 170px "Plus Jakarta Sans", Arial';

        ctx.textAlign =
            "center";

        ctx.textBaseline =
            "middle";

        ctx.fillText(
            data.title,
            0,
            0
        );

        ctx.restore();


        const spineTexture =
            new THREE.CanvasTexture(
                canvas
            );

        spineTexture.minFilter =
            THREE.LinearFilter;

        spineTexture.magFilter =
            THREE.LinearFilter;

        spineTexture.anisotropy =
            renderer.capabilities.getMaxAnisotropy();

        spineTexture.needsUpdate = true;


        const materials = [

            new THREE.MeshStandardMaterial({
                color: 0xf4efe9,
                roughness: 0.75
            }),

            new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.4
            }),

            new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.4
            }),

            new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.4
            }),

            new THREE.MeshStandardMaterial({
                map: spineTexture,
                roughness: 0.38
            }),

            new THREE.MeshStandardMaterial({
                color: 0x291a11,
                roughness: 0.9
            })

        ];


        const bookMesh =
            new THREE.Mesh(
                geometry,
                materials
            );

        bookMesh.castShadow = true;
        bookMesh.receiveShadow = true;

        bookContainer.add(
            bookMesh
        );


        const xPos =
            startX +
            index * spacing +
            (Math.random() - 0.5) * 0.06;

        const zPos =
            (Math.random() - 0.5) * 0.12;


        const shelfY = [

            -2.30,
            -2.26,

             0.02,
            -0.02,

             2.17,
             2.13

        ];


        let rotZ;

        if (index === 4) {

            rotZ = -0.11;

        }
        else if (index === 5) {

            rotZ = 0.11;

        }
        else {

            rotZ =
                (Math.random() - 0.5) * 0.035;

        }


        bookContainer.position.set(
            xPos,
            shelfY[index],
            zPos
        );

        bookContainer.rotation.z =
            rotZ;


        booksGroup.add(
            bookContainer
        );


        books.push({

            group: bookContainer,

            mesh: bookMesh,

            index,

            data,

            basePos: {

                x: xPos,

                y: shelfY[index],

                z: zPos

            },

            baseRot: {

                x: 0,

                y: 0,

                z: rotZ

            },

            phase:
                index * 0.8 +
                Math.random() * 0.4,

            selected: false

        });

    }
);


// ============================================================
// POINTER
// ============================================================

const raycaster =
    new THREE.Raycaster();

const mouse =
    new THREE.Vector2();

const pointer = {

    x: 0,
    y: 0,

    tx: 0,
    ty: 0

};


let hoveredBook = null;

let selectedBookIndex = null;

let isAnimating = false;


// ============================================================
// INACTIVITY
// ============================================================

let inactivityTimer = null;
let attentionAnimating = false;


function resetInactivityTimer() {

    clearTimeout(
        inactivityTimer
    );

    inactivityTimer =
        setTimeout(
            () => {

                animateAttentionBook();

            },
            15000
        );

}


function animateAttentionBook() {

    if (
        selectedBookIndex !== null ||
        isAnimating ||
        hoveredBook ||
        attentionAnimating
    ) {

        resetInactivityTimer();

        return;

    }


    attentionAnimating = true;


    const randomIndex =
        Math.floor(
            Math.random() *
            books.length
        );


    const book =
        books[randomIndex];


    gsap.timeline({

        onComplete: () => {

            attentionAnimating = false;

            resetInactivityTimer();

        }

    })

    // Sort du rayon
    .to(
        book.group.position,
        {

            y:
                book.basePos.y + 0.28,

            z:
                book.basePos.z + 0.25,

            duration: 0.35,

            ease:
                "power2.out"

        }
    )

    // Inclinaison
    .to(
        book.group.rotation,
        {

            z:
                book.baseRot.z +
                (
                    randomIndex % 2 === 0
                        ? -0.10
                        : 0.10
                ),

            duration: 0.25,

            ease:
                "power2.out"

        },
        "<"
    )

    // Petit rebond
    .to(
        book.group.position,
        {

            y:
                book.basePos.y + 0.12,

            duration: 0.18,

            ease:
                "power2.inOut"

        }
    )

    // Retour
    .to(
        book.group.position,
        {

            y:
                book.basePos.y,

            z:
                book.basePos.z,

            duration: 0.45,

            ease:
                "back.out(1.5)"

        }
    )

    .to(
        book.group.rotation,
        {

            z:
                book.baseRot.z,

            duration: 0.4,

            ease:
                "power3.out"

        },
        "<"
    );

}


// ============================================================
// UI
// ============================================================

const tooltip =
    document.getElementById(
        "tooltip"
    );

const closeBtn =
    document.getElementById(
        "close-btn"
    );

const bottomNavButtons =
    document.querySelectorAll(
        "#bottom-nav button"
    );


// ============================================================
// POINTER POSITION
// ============================================================

function setPointer(
    clientX,
    clientY
) {

    pointer.tx =
        (
            clientX /
            window.innerWidth -
            0.5
        ) * 2;

    pointer.ty =
        (
            clientY /
            window.innerHeight -
            0.5
        ) * 2;

    mouse.x =
        pointer.tx;

    mouse.y =
        -pointer.ty;

}


// ============================================================
// GET BOOK
// ============================================================

function getBookFromIntersection(
    intersection
) {

    if (!intersection)
        return null;

    return books.find(
        book =>
            book.mesh ===
            intersection.object
    );

}


// ============================================================
// RESET HOVER
// ============================================================

function resetHoverState() {

    if (
        !hoveredBook ||
        selectedBookIndex !== null
    )
        return;


    document.body.style.cursor =
        "default";

    tooltip.style.opacity =
        "0";


    books.forEach(
        book => {

            gsap.killTweensOf(
                book.group.position
            );

            gsap.killTweensOf(
                book.group.rotation
            );

            gsap.killTweensOf(
                book.group.scale
            );


            gsap.to(
                book.group.position,
                {

                    x:
                        book.basePos.x,

                    y:
                        book.basePos.y,

                    z:
                        book.basePos.z,

                    duration: 0.55,

                    ease:
                        "power3.out"

                }
            );


            gsap.to(
                book.group.rotation,
                {

                    x:
                        book.baseRot.x,

                    y:
                        book.baseRot.y,

                    z:
                        book.baseRot.z,

                    duration: 0.5,

                    ease:
                        "power3.out"

                }
            );


            gsap.to(
                book.group.scale,
                {

                    x: 1,

                    y: 1,

                    z: 1,

                    duration: 0.45,

                    ease:
                        "power2.out"

                }
            );

        }
    );


    hoveredBook = null;

}


// ============================================================
// MOUSE MOVE
// ============================================================

function onMouseMove(event) {

    resetInactivityTimer();


    setPointer(
        event.clientX,
        event.clientY
    );


    if (
        selectedBookIndex !== null ||
        isAnimating
    )
        return;


    raycaster.setFromCamera(
        mouse,
        camera
    );


    const intersections =
        raycaster.intersectObjects(
            books.map(
                book => book.mesh
            ),
            false
        );


    const matched =
        getBookFromIntersection(
            intersections[0]
        );


    if (!matched) {

        resetHoverState();

        return;

    }


    if (
        hoveredBook !== matched
    ) {

        resetHoverState();

        hoveredBook =
            matched;


        document.body.style.cursor =
            "pointer";


        tooltip.textContent =
            `${matched.data.title} — ${matched.data.subtitle}`;

        tooltip.style.opacity =
            "1";


        gsap.killTweensOf(
            matched.group.position
        );

        gsap.killTweensOf(
            matched.group.rotation
        );

        gsap.killTweensOf(
            matched.group.scale
        );


        gsap.to(
            matched.group.position,
            {

                x:
                    matched.basePos.x,

                y:
                    matched.basePos.y +
                    0.30,

                z:
                    matched.basePos.z +
                    0.35,

                duration: 0.6,

                ease:
                    "back.out(1.8)"

            }
        );


        gsap.to(
            matched.group.rotation,
            {

                x: -0.08,

                y: 0.12,

                z:
                    matched.baseRot.z,

                duration: 0.6,

                ease:
                    "power3.out"

            }
        );


        gsap.to(
            matched.group.scale,
            {

                x: 1.06,

                y: 1.06,

                z: 1.06,

                duration: 0.5,

                ease:
                    "power2.out"

            }
        );


        books.forEach(
            book => {

                if (
                    book === matched
                )
                    return;


                const distance =
                    book.index -
                    matched.index;


                const direction =
                    Math.sign(
                        distance
                    );


                const absDistance =
                    Math.abs(
                        distance
                    );


                let push;

                if (
                    absDistance === 1
                ) {

                    push =
                        direction *
                        0.15;

                }
                else {

                    push =
                        direction *
                        0.05;

                }


                gsap.to(
                    book.group.position,
                    {

                        x:
                            book.basePos.x +
                            push,

                        duration: 0.5,

                        ease:
                            "power3.out"

                    }
                );


                gsap.to(
                    book.group.rotation,
                    {

                        y:
                            -direction *
                            0.03,

                        duration: 0.5,

                        ease:
                            "power3.out"

                    }
                );

            }
        );

    }


    tooltip.style.left =
        `${event.clientX}px`;

    tooltip.style.top =
        `${event.clientY}px`;

}


// ============================================================
// NAV
// ============================================================

function updateNav(
    activeIndex
) {

    bottomNavButtons.forEach(
        button => {

            button.classList.toggle(
                "active",

                Number(
                    button.dataset.index
                ) === activeIndex
            );

        }
    );

}


// ============================================================
// SELECT BOOK
// ============================================================

function selectBook(index) {

    if (
        isAnimating ||
        selectedBookIndex === index ||
        !books[index]
    )
        return;


    clearTimeout(
        inactivityTimer
    );


    isAnimating = true;

    resetHoverState();

    selectedBookIndex =
        index;


    document.body.classList.add(
        "book-open"
    );


    updateNav(index);


    const targetBook =
        books[index];


    targetBook.selected =
        true;


    gsap.to(
        camera.position,
        {

            x:
                index % 2
                    ? 0.55
                    : -0.55,

            y:
                cameraOpen.y,

            z:
                cameraOpen.z,

            duration: 1.25,

            ease:
                "power4.inOut"

        }
    );


    gsap.to(
        cameraLook,
        {

            x: 0,

            y: 0.25,

            z: 1.8,

            duration: 1.15,

            ease:
                "power3.inOut"

        }
    );


    const tl =
        gsap.timeline({

            defaults: {
                overwrite: "auto"
            },

            onComplete: () => {

                isAnimating =
                    false;

                closeBtn.classList.add(
                    "visible"
                );


                const panel =
                    document.getElementById(
                        `panel-${index}`
                    );


                if (panel) {

                    panel.classList.add(
                        "active"
                    );

                }

            }

        });


    tl.to(
        targetBook.group.position,
        {

            x:
                index % 2
                    ? 0.75
                    : -0.75,

            y: 0.05,

            z: 3.15,

            duration: 1.05,

            ease:
                "expo.inOut"

        },
        0
    );


    tl.to(
        targetBook.group.rotation,
        {

            x: -0.08,

            y:
                index % 2
                    ? -0.22
                    : 0.22,

            z: 0,

            duration: 1.05,

            ease:
                "power4.inOut"

        },
        0
    );


    tl.to(
        targetBook.group.scale,
        {

            x: 1.10,

            y: 1.10,

            z: 1.10,

            duration: 0.9,

            ease:
                "back.out(1.7)"

        },
        0.12
    );


    books.forEach(
        (book, bookIndex) => {

            if (
                bookIndex === index
            )
                return;


            const direction =
                Math.sign(
                    bookIndex - index
                ) || 1;


            gsap.to(
                book.group.position,
                {

                    x:
                        book.basePos.x +
                        direction *
                        0.65,

                    y:
                        book.basePos.y -
                        0.10,

                    z:
                        book.basePos.z -
                        0.18,

                    duration: 0.8,

                    ease:
                        "power3.inOut"

                }
            );


            gsap.to(
                book.group.scale,
                {

                    x: 0.88,

                    y: 0.88,

                    z: 0.88,

                    duration: 0.8,

                    ease:
                        "power2.out"

                }
            );

        }
    );

}


// ============================================================
// CLOSE BOOK
// ============================================================

function closeBook() {

    if (
        isAnimating ||
        selectedBookIndex === null
    )
        return;


    isAnimating = true;


    clearTimeout(
        inactivityTimer
    );


    const currentIndex =
        selectedBookIndex;


    const panel =
        document.getElementById(
            `panel-${currentIndex}`
        );


    if (panel)
        panel.classList.remove(
            "active"
        );


    closeBtn.classList.remove(
        "visible"
    );


    document.body.classList.remove(
        "book-open"
    );


    selectedBookIndex =
        null;


    updateNav(-1);


    gsap.to(
        camera.position,
        {

            x: cameraBase.x,

            y: cameraBase.y,

            z: cameraBase.z,

            duration: 1.15,

            ease:
                "power4.inOut"

        }
    );


    gsap.to(
        cameraLook,
        {

            x: 0,

            y: 0.1,

            z: 0,

            duration: 1.05,

            ease:
                "power3.inOut"

        }
    );


    books.forEach(
        book => {

            book.selected =
                false;


            gsap.to(
                book.group.position,
                {

                    x:
                        book.basePos.x,

                    y:
                        book.basePos.y,

                    z:
                        book.basePos.z,

                    duration: 0.95,

                    ease:
                        "back.out(1.2)"

                }
            );


            gsap.to(
                book.group.rotation,
                {

                    x:
                        book.baseRot.x,

                    y:
                        book.baseRot.y,

                    z:
                        book.baseRot.z,

                    duration: 0.85,

                    ease:
                        "power3.out"

                }
            );


            gsap.to(
                book.group.scale,
                {

                    x: 1,

                    y: 1,

                    z: 1,

                    duration: 0.85,

                    ease:
                        "power3.out"

                }
            );

        }
    );


    gsap.delayedCall(
        0.95,
        () => {

            isAnimating =
                false;

            resetInactivityTimer();

        }
    );

}


// ============================================================
// CLICK
// ============================================================

function onClick(event) {

    resetInactivityTimer();


    if (
        isAnimating ||
        selectedBookIndex !== null
    )
        return;


    setPointer(
        event.clientX,
        event.clientY
    );


    raycaster.setFromCamera(
        mouse,
        camera
    );


    const intersections =
        raycaster.intersectObjects(
            books.map(
                book => book.mesh
            ),
            false
        );


    const matched =
        getBookFromIntersection(
            intersections[0]
        );


    if (matched)
        selectBook(
            matched.index
        );

}


// ============================================================
// EVENTS
// ============================================================

window.addEventListener(
    "mousemove",
    onMouseMove,
    { passive: true }
);

window.addEventListener(
    "click",
    onClick
);

closeBtn.addEventListener(
    "click",
    closeBook
);


// ============================================================
// NAVIGATION
// ============================================================

bottomNavButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                resetInactivityTimer();


                const index =
                    Number(
                        button.dataset.index
                    );


                if (index === -1) {

                    if (
                        selectedBookIndex !==
                        null
                    ) {

                        closeBook();

                    }
                    else {

                        updateNav(-1);

                    }

                    return;
                }


                if (
                    selectedBookIndex !== null &&
                    selectedBookIndex !== index
                ) {

                    closeBook();


                    gsap.delayedCall(
                        0.9,
                        () =>
                            selectBook(index)
                    );

                }
                else {

                    selectBook(index);

                }

            }
        );

    }
);


// ============================================================
// RESIZE
// ============================================================

function handleResize() {

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            1.75
        )
    );

}

window.addEventListener(
    "resize",
    handleResize
);


// ============================================================
// ANIMATION
// ============================================================

const clock =
    new THREE.Clock();


function animate() {

    requestAnimationFrame(
        animate
    );


    const elapsed =
        clock.getElapsedTime();


    pointer.x +=
        (
            pointer.tx -
            pointer.x
        ) * 0.055;


    pointer.y +=
        (
            pointer.ty -
            pointer.y
        ) * 0.055;


    shelfGroup.position.y = 0;

    shelfGroup.rotation.x = 0;

    shelfGroup.rotation.y = 0;


    const idle =
        selectedBookIndex === null &&
        !isAnimating &&
        !attentionAnimating;


    if (idle) {

        books.forEach(
            book => {

                if (
                    hoveredBook === book
                )
                    return;


                const wave =
                    Math.sin(
                        elapsed * 0.9 +
                        book.phase
                    );


                const wave2 =
                    Math.sin(
                        elapsed * 0.55 +
                        book.phase * 1.7
                    );


                const targetY =
                    book.basePos.y +
                    wave * 0.018;


                const targetRotZ =
                    book.baseRot.z +
                    wave2 * 0.006;


                const targetRotY =
                    wave * 0.008;


                book.group.position.y +=
                    (
                        targetY -
                        book.group.position.y
                    ) * 0.035;


                book.group.rotation.z +=
                    (
                        targetRotZ -
                        book.group.rotation.z
                    ) * 0.035;


                book.group.rotation.y +=
                    (
                        targetRotY -
                        book.group.rotation.y
                    ) * 0.035;

            }
        );

    }


    // --------------------------------
    // DUST
    // --------------------------------

    dustParticles.rotation.y =
        elapsed * 0.018;

    dustParticles.position.y =
        Math.sin(
            elapsed * 0.35
        ) * 0.08;


    // --------------------------------
    // PLANT
    // --------------------------------

    plantGroup.rotation.z =
        Math.sin(
            elapsed * 0.8
        ) * 0.025;


    // --------------------------------
    // LIGHT
    // --------------------------------

    warmFill.intensity =
        1.5 +
        Math.sin(
            elapsed * 1.2
        ) * 0.08;


    rimLight.intensity =
        1.15 +
        Math.sin(
            elapsed * 0.8 + 1
        ) * 0.06;


    // --------------------------------
    // CAMERA PARALLAX
    // --------------------------------

    const targetCameraX =
        selectedBookIndex === null
            ? cameraBase.x + pointer.x * 0.08
            : camera.position.x;

    const targetCameraY =
        selectedBookIndex === null
            ? cameraBase.y - pointer.y * 0.04
            : camera.position.y;


    if (
        selectedBookIndex === null &&
        !isAnimating
    ) {

        camera.position.x +=
            (
                targetCameraX -
                camera.position.x
            ) * 0.03;


        camera.position.y +=
            (
                targetCameraY -
                camera.position.y
            ) * 0.03;

    }


    // --------------------------------
    // CAMERA LOOK
    // --------------------------------

    camera.lookAt(
        cameraLook
    );


    // --------------------------------
    // RENDER
    // --------------------------------

    renderer.render(
        scene,
        camera
    );

}


resetInactivityTimer();

animate();