function Main() {

    var scene;
    var camera;
    var renderer;
    var axis;

    var showBricks = document.getElementById('showBricks');

    var nickname = "";

    var client = io();
    client.on("onconnect", function (data) {
        console.log(data.clientName);
        //nickname = data.clientName;
    })

    var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
    var mouseVector = new THREE.Vector2() // wektor (x,y) wykorzystany bedzie do określenie pozycji myszy na ekranie
    var clickedMesh;
    var kl;
    var kl2;
    var len = 0;

    function initEngine(){

        scene = new THREE.Scene();
        camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            -5000,
            5000);

            renderer = new THREE.WebGLRenderer();
            axis = new THREE.AxisHelper(1500);
            scene.add(axis);

            renderer.setClearColor(0xffffff);
            renderer.setSize(window.innerWidth, window.innerHeight);

            document.getElementById("gameZone").appendChild(renderer.domElement);
            camera.position.x = 100;
            camera.position.y = 100;
            camera.position.z = 100;
            camera.lookAt(new THREE.Vector3(0,0,0));
        };

        function initObjects(){

            intro = new Intro();
            var introText = intro.create();
            introText.position.set(0,0,0);
            scene.add(introText);
            intro.lightsUp(scene);
            introText.updateProjectionMatrix;
        }

        function initEvents(){
            document.addEventListener("mousedown", onMouseDown, false);
            document.addEventListener("keydown", onKeyDown, false);
        }

        function animateScene(){
            requestAnimationFrame(animateScene);
            renderer.render(scene, camera);
        }

        initEngine();
        initObjects();
        initEvents();
        animateScene();

        console.log("działa");

        function onMouseDown(event) {

            mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouseVector, camera);

            var intersects = raycaster.intersectObjects(scene.children,true);

            if (intersects.length > 0) {

                // zerowy czyli najbliższy kamery jest tek którego potrzebujemy
                clickedMesh = intersects[0].object;
                console.log(clickedMesh);
                ui.click( clickedMesh, nickname );
            }
        }

        function onKeyDown(event) {
            console.log(event);
            var tmpname = kl.name;
            var ti = parseInt(kl.name.split("_")[1]);
            var tj = parseInt(kl.name.split("_")[2]);
            var tk = parseInt(kl.name.split("_")[3]);
            var td = parseInt(kl.name.split("_")[4]);
            var tc = parseInt(kl.name.split("_")[5]);
            var tr = parseInt(kl.name.split("_")[6]);

            switch(event.code){
                case "KeyQ":
                kl.material = klocek.changeColor(kl.material.color);
                tc++;
                if(tc==4)
                tc = 0;
                kl.name = "k_" + ti + "_" + tj + "_" + tk + "_" + td + "_" + tc + "_" + tr + "_" + nickname;
                newname = kl.name;
                client.emit("editPlans", {
                    oldName: tmpname,
                    newName: newname
                })
                client.emit("changeColor", {
                    change: "yes"
                })
                client.emit("sendBrick", {
                    coords: kl.name
                })
                break;

                case "KeyW":
                kl.position.x -= 50;
                ti--;
                kl.name = "k_" + ti + "_" + tj + "_" + tk + "_" + td + "_" + tc + "_" + tr + "_" + nickname;
                newname = kl.name;
                client.emit("editPlans", {
                    oldName: tmpname,
                    newName: newname
                })
                client.emit("brickClickStep", {
                    dr: "up"
                })
                client.emit("sendBrick", {
                    coords: kl.name
                })
                break;

                case "KeyS":
                kl.position.x += 50;
                ti++;
                kl.name = "k_" + ti + "_" + tj + "_" + tk + "_" + td + "_" + tc + "_" + tr + "_" + nickname;
                newname = kl.name;
                client.emit("editPlans", {
                    oldName: tmpname,
                    newName: newname
                })
                client.emit("brickClickStep", {
                    dr: "down"
                })
                client.emit("sendBrick", {
                    coords: kl.name
                })
                break;

                case "KeyA":
                kl.position.z += 50;
                tj++;
                kl.name = "k_" + ti + "_" + tj + "_" + tk + "_" + td + "_" + tc + "_" + tr + "_" + nickname;
                newname = kl.name;
                client.emit("editPlans", {
                    oldName: tmpname,
                    newName: newname
                })
                client.emit("brickClickStep", {
                    dr : "left"
                })
                client.emit("sendBrick", {
                    coords: kl.name
                })
                break;

                case "KeyD":
                kl.position.z -= 50;
                tj--;
                kl.name = "k_" + ti + "_" + tj + "_" + tk + "_" + td + "_" + tc + "_" + tr + "_" + nickname;
                newname = kl.name;
                client.emit("editPlans", {
                    oldName: tmpname,
                    newName: newname
                })
                client.emit("brickClickStep", {
                    dr : "right"
                })
                client.emit("sendBrick", {
                    coords: kl.name
                })
                break;

                case "KeyE":
                kl.rotateY(Math.PI / 2);
                tr++;
                if(tr==4)
                tr=0;
                kl.name = "k_" + ti + "_" + tj + "_" + tk + "_" + td + "_" + tc + "_" + tr + "_" + nickname;
                newname = kl.name;
                client.emit("editPlans", {
                    oldName: tmpname,
                    newName: newname
                })
                client.emit("brickClickRotate", {
                    ki: ti,
                    kj: tj,
                    kk: tk,
                    kd: len,
                })
                client.emit("sendBrick", {
                    coords: kl.name
                })
                break;

                case "KeyR":
                len++;
                if(len>4)
                len = 1;
                kl2 = klocek.create(ti,tj,tk,len,tc,tr,nickname);
                scene.remove(kl);
                kl = kl2
                scene.add(kl);
                kl.position.set(ti*50,tk*40-10,tj*50);
                kl.updateProjectionMatrix;

                kl.name = "k_" + ti + "_" + tj + "_" + tk + "_" + len + "_" + tc + "_" + tr + "_" + nickname;
                newname = kl.name;
                client.emit("editPlans", {
                    oldName: tmpname,
                    newName: newname
                })
                client.emit("brickClickMove", {
                    ki: ti,
                    kj: tj,
                    kk: tk,
                    kd: len,
                })
                client.emit("sendBrick", {
                    coords: kl.name
                })
                break;

                default:
                break;
            }
        }

        this.startGame = function(){
            var textObject = scene.getObjectByName("startGame");
            scene.remove(textObject);

            camera.position.x = 450;
            camera.position.y = 100;
            camera.position.z = 450;

            for( var i = 0; i < 15; i++ )
            {
                for( var j = 0; j < 15; j++ )
                {
                    var piece = element.create(i, j);
                    scene.add(piece);
                    piece.position.set(i*50,0,j*50);
                }
            }

            var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
            directionalLight.position.set( 400, 800, 400 );
            directionalLight.lookAt(new THREE.Vector3(400,0,400))
            scene.add( directionalLight );

            nickname = prompt("Nickname:");

            client.emit("askForPlans", {
                login: nickname
            })

            if(nickname == "Admin")
            {
                showBricks.style.opacity = 1;
            }

        }

        showBricks.addEventListener("mousedown", function(){
            var gainAccess = prompt("Czyje budowle chcesz zobaczyc?");

            if( gainAccess == "ALL")
            {
                client.emit("askForAllPlans", {
                })
            }
            else{
            client.emit("askForPlans", {
                login: gainAccess
            })
        }
    },false)

        this.postaw = function(i,j,k,d,c,r,nickname,sending){
            kl = klocek.create(i,j,k,d,c,r,nickname);
            scene.add(kl);
            kl.position.set(i*50,k*40-10,j*50);
            kl.updateProjectionMatrix;
            len = 1;

            client.emit("brickClick", {
                ki: i,
                kj: j,
                kk: k,
                kd: 1,
                nickname: nickname
            })

            if( sending == 1 )
            {
            client.emit("savePlans", {
                login: nickname,
                plany: kl.name
            })
            client.emit("sendBrick", {
                coords: kl.name
            })
        }
            //console.log(kl.name + " " + kl.position.x + " " + kl.position.y + " " + kl.position.z + " ");
        }

        this.postawd = function(i,j,k,d,nickname){
            kl = klocek.create(i,j,k,d,0,0,nickname);
            scene.add(kl);
            kl.position.set(i*50,k*40-10,j*50);
            kl.updateProjectionMatrix;
            len = 1;
        }

        this.postawm = function(i,j,k,d){
            scene.remove(kl);
            kl2 = klocek.create(i,j,k,d);
            kl = kl2;
            scene.add(kl);
            kl.position.set(i*50,k*40-10,j*50);
            kl.updateProjectionMatrix;
        }

        client.on("netBrick", function (data) {
            if( data.coords.split("_")[7] != nickname)
                scene.remove(kl);
            var coords = data.coords;
                var ni = parseInt(coords.split("_")[1]);
                var nj = parseInt(coords.split("_")[2]);
                var nd = parseInt(coords.split("_")[4]);
                var nk = parseInt(coords.split("_")[3]);
                var nc = parseInt(coords.split("_")[5]);
                var nr = parseInt(coords.split("_")[6]);
                var nn = coords.split("_")[7];
                main.postaw(ni,nj,nk,nd,nc,nr,nn,0);

        })
/*
        client.on("brickClick", function (data) {
            console.log( data.ki + " - " + data.kj + " - " + data.kk + " - " + data.kd )
            main.postawd(data.ki,data.kj,data.kk,data.kd,data.knickname);
        })

        client.on("brickClickMove", function (data) {
            console.log( data.ki + " - " + data.kj + " - " + data.kk + " - " + data.kd )
            main.postawm(data.ki,data.kj,data.kk,data.kd);
        })

        client.on("brickClickStep", function (data) {
            switch(data.dr){
                case "up":
                kl.position.x -= 50;
                i--;
                kl.name = "k_" + i + "_" + j + "_" + k;

                break;

                case "down":
                kl.position.x += 50;
                i++;
                kl.name = "k_" + i + "_" + j + "_" + k;

                break;

                case "left":
                kl.position.z += 50;
                j++;
                kl.name = "k_" + i + "_" + j + "_" + k;

                break;

                case "right":
                kl.position.z -= 50;
                j--;
                kl.name = "k_" + i + "_" + j + "_" + k;

                break;
            }
        })

        client.on("brickClickRotate", function (data) {
            kl.rotateY(Math.PI / 2);
        })

        client.on("changeColor", function (data) {
            kl.material = klocek.changeColor(kl.material.color);
        })
*/
        client.on("plant", function (data) {
            var plans = JSON.parse(data.klocki);
            var ni;
            var nj;
            var nk;
            var nd;
            var nc;
            var nr;
            for( var l = 0; l < plans.length; l++ )
            {
                ni = parseInt(plans[l].split("_")[1]);
                nj = parseInt(plans[l].split("_")[2]);
                nk = parseInt(plans[l].split("_")[3]);
                nd = parseInt(plans[l].split("_")[4]);
                nc = parseInt(plans[l].split("_")[5]);
                nr = parseInt(plans[l].split("_")[6]);
                main.postaw(ni,nj,nk,nd,nc,nr,nickname,0);
            }
        })

        /////////////////////
    }
