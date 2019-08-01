function Element(){

    this.create = function(i, j){
        var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccc00, side: THREE.DoubleSide });
        var plangeometry = new THREE.PlaneBufferGeometry(50, 50);


        var lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
        var geometry = new THREE.Geometry();

        // teraz ustalamy wierzchołki wielokąta (kwadratu)

        geometry.vertices.push(new THREE.Vector3(0, 0, 0));
        geometry.vertices.push(new THREE.Vector3(50, 0, 0));
        geometry.vertices.push(new THREE.Vector3(50, 0, 50));
        geometry.vertices.push(new THREE.Vector3(0, 0, 50));

        var line = new THREE.Line(geometry, lineMaterial);
        var square = new THREE.Mesh(plangeometry, planeMaterial);

        square.rotateX(Math.PI / 2);
        square.position.y = -25;
        square.name = "p_" + i + "_" + j;
        var container = new THREE.Object3D();
        container.add(line);
        container.add(square);

        return container;
    }

}
