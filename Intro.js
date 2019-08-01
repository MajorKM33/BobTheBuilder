function Intro() {

    this.create = function(){
        var textGeometry = new THREE.TextGeometry(
            "bob", {
                font: "western",
                height : 70,
                width: 70
            });

            var material = new THREE.MeshPhongMaterial({
                color: 0x000000,
                specular: 0xffffff,
                shininess: 50,
                side: THREE.DoubleSide
            })

            textMesh = new THREE.Mesh(textGeometry, material);
            textMesh.name = "startGame";
            return textMesh;
        }

        this.lightsUp = function(scene){

            var lightR = new THREE.PointLight(0xff0000, 100000000, 0);
            lightR.position.set(-100, 50, 200);
            scene.add(lightR);
            var lightG = new THREE.PointLight(0x00ff00, 100000000, 0);
            lightG.position.set(300, 50, 200);
            scene.add(lightG);
            var lightB = new THREE.PointLight(0x0000ff, 100000000, 0);
            lightB.position.set(200, 50, 200);
            scene.add(lightB);

            lightR.lookAt(new THREE.Vector3(0,0,0));
            lightG.lookAt(new THREE.Vector3(0,0,0));
            lightB.lookAt(new THREE.Vector3(0,0,0));
            console.log("światła");

        }

    }
