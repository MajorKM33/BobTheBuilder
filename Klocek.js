function Klocek(){

    var materialRed = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        specular: 0xffffff,
        shininess: 50,
        side: THREE.DoubleSide
    })

    var materialBlue = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
        specular: 0xffffff,
        shininess: 50,
        side: THREE.DoubleSide
    })

    var materialGreen = new THREE.MeshLambertMaterial({
        color: 0x00ff00,
        specular: 0xffffff,
        shininess: 50,
        side: THREE.DoubleSide
    })

    var materialYellow = new THREE.MeshLambertMaterial({
        color: 0xffff00,
        specular: 0xffffff,
        shininess: 50,
        side: THREE.DoubleSide
    })

    this.create = function(i,j,k,d,c,r,nickname){

        var singleGeometry = new THREE.Geometry();

        var geometryA = new THREE.BoxGeometry(50, 40, 50*d);
        var geometryB = new THREE.CylinderGeometry(12.5, 12.5, 10, 32);

        if( d == 1 )
        {

            var meshA = new THREE.Mesh(geometryA)
            var meshC1 = new THREE.Mesh(geometryB)
            var meshC2 = new THREE.Mesh(geometryB)
            var meshC3 = new THREE.Mesh(geometryB)
            var meshC4 = new THREE.Mesh(geometryB)

            //ustawiamy ich pozycje
            meshA.position.set(0,0,0)
            meshC1.position.set(-12.5, 25, -12.5)
            meshC2.position.set(12.5, 25, -12.5)
            meshC3.position.set(-12.5, 25, 12.5)
            meshC4.position.set(12.5, 25, 12.5)

            meshA.updateMatrix(); // bez tego pozycja geometrii jest zawsze 0,0,0
            singleGeometry.merge(meshA.geometry, meshA.matrix);

            meshC1.updateMatrix();
            singleGeometry.merge(meshC1.geometry, meshC1.matrix);
            meshC2.updateMatrix();
            singleGeometry.merge(meshC2.geometry, meshC2.matrix);
            meshC3.updateMatrix();
            singleGeometry.merge(meshC3.geometry, meshC3.matrix);
            meshC4.updateMatrix();
            singleGeometry.merge(meshC4.geometry, meshC4.matrix);
        }

        if( d == 2 )
        {

            var meshA = new THREE.Mesh(geometryA)
            var meshC1 = new THREE.Mesh(geometryB)
            var meshC2 = new THREE.Mesh(geometryB)
            var meshC3 = new THREE.Mesh(geometryB)
            var meshC4 = new THREE.Mesh(geometryB)
            var meshC5 = new THREE.Mesh(geometryB)
            var meshC6 = new THREE.Mesh(geometryB)
            var meshC7 = new THREE.Mesh(geometryB)
            var meshC8 = new THREE.Mesh(geometryB)

            //ustawiamy ich pozycje
            meshA.position.set(0,0,0)
            meshC1.position.set(-12.5, 25, -12.5)
            meshC2.position.set(12.5, 25, -12.5)
            meshC3.position.set(-12.5, 25, 12.5)
            meshC4.position.set(12.5, 25, 12.5)
            meshC5.position.set(12.5, 25, -37.5)
            meshC6.position.set(-12.5, 25, -37.5)
            meshC7.position.set(-12.5, 25, 37.5)
            meshC8.position.set(12.5, 25, 37.5)

            meshA.updateMatrix(); // bez tego pozycja geometrii jest zawsze 0,0,0
            singleGeometry.merge(meshA.geometry, meshA.matrix);

            meshC1.updateMatrix();
            singleGeometry.merge(meshC1.geometry, meshC1.matrix);
            meshC2.updateMatrix();
            singleGeometry.merge(meshC2.geometry, meshC2.matrix);
            meshC3.updateMatrix();
            singleGeometry.merge(meshC3.geometry, meshC3.matrix);
            meshC4.updateMatrix();
            singleGeometry.merge(meshC4.geometry, meshC4.matrix);
            meshC5.updateMatrix();
            singleGeometry.merge(meshC5.geometry, meshC5.matrix);
            meshC6.updateMatrix();
            singleGeometry.merge(meshC6.geometry, meshC6.matrix);
            meshC7.updateMatrix();
            singleGeometry.merge(meshC7.geometry, meshC7.matrix);
            meshC8.updateMatrix();
            singleGeometry.merge(meshC8.geometry, meshC8.matrix);

            singleGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -25 ) );
        }

        if( d == 3 )
        {

            var meshA = new THREE.Mesh(geometryA)
            var meshC1 = new THREE.Mesh(geometryB)
            var meshC2 = new THREE.Mesh(geometryB)
            var meshC3 = new THREE.Mesh(geometryB)
            var meshC4 = new THREE.Mesh(geometryB)
            var meshC5 = new THREE.Mesh(geometryB)
            var meshC6 = new THREE.Mesh(geometryB)
            var meshC7 = new THREE.Mesh(geometryB)
            var meshC8 = new THREE.Mesh(geometryB)
            var meshC9 = new THREE.Mesh(geometryB)
            var meshC10 = new THREE.Mesh(geometryB)
            var meshC11 = new THREE.Mesh(geometryB)
            var meshC12 = new THREE.Mesh(geometryB)

            //ustawiamy ich pozycje
            meshA.position.set(0,0,0)
            meshC1.position.set(-12.5, 25, -12.5)
            meshC2.position.set(12.5, 25, -12.5)
            meshC3.position.set(-12.5, 25, 12.5)
            meshC4.position.set(12.5, 25, 12.5)
            meshC5.position.set(12.5, 25, -37.5)
            meshC6.position.set(-12.5, 25, -37.5)
            meshC7.position.set(-12.5, 25, 37.5)
            meshC8.position.set(12.5, 25, 37.5)
            meshC9.position.set(-12.5, 25, -62.5)
            meshC10.position.set(-12.5, 25, 62.5)
            meshC11.position.set(12.5, 25, -62.5)
            meshC12.position.set(12.5, 25, 62.5)

            meshA.updateMatrix(); // bez tego pozycja geometrii jest zawsze 0,0,0
            singleGeometry.merge(meshA.geometry, meshA.matrix);

            meshC1.updateMatrix();
            singleGeometry.merge(meshC1.geometry, meshC1.matrix);
            meshC2.updateMatrix();
            singleGeometry.merge(meshC2.geometry, meshC2.matrix);
            meshC3.updateMatrix();
            singleGeometry.merge(meshC3.geometry, meshC3.matrix);
            meshC4.updateMatrix();
            singleGeometry.merge(meshC4.geometry, meshC4.matrix);
            meshC5.updateMatrix();
            singleGeometry.merge(meshC5.geometry, meshC5.matrix);
            meshC6.updateMatrix();
            singleGeometry.merge(meshC6.geometry, meshC6.matrix);
            meshC7.updateMatrix();
            singleGeometry.merge(meshC7.geometry, meshC7.matrix);
            meshC8.updateMatrix();
            singleGeometry.merge(meshC8.geometry, meshC8.matrix);
            meshC9.updateMatrix();
            singleGeometry.merge(meshC9.geometry, meshC9.matrix);
            meshC10.updateMatrix();
            singleGeometry.merge(meshC10.geometry, meshC10.matrix);
            meshC11.updateMatrix();
            singleGeometry.merge(meshC11.geometry, meshC11.matrix);
            meshC12.updateMatrix();
            singleGeometry.merge(meshC12.geometry, meshC12.matrix);

            singleGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -50 ) );
        }

        if( d == 4 )
        {

            var meshA = new THREE.Mesh(geometryA)
            var meshC1 = new THREE.Mesh(geometryB)
            var meshC2 = new THREE.Mesh(geometryB)
            var meshC3 = new THREE.Mesh(geometryB)
            var meshC4 = new THREE.Mesh(geometryB)
            var meshC5 = new THREE.Mesh(geometryB)
            var meshC6 = new THREE.Mesh(geometryB)
            var meshC7 = new THREE.Mesh(geometryB)
            var meshC8 = new THREE.Mesh(geometryB)
            var meshC9 = new THREE.Mesh(geometryB)
            var meshC10 = new THREE.Mesh(geometryB)
            var meshC11 = new THREE.Mesh(geometryB)
            var meshC12 = new THREE.Mesh(geometryB)
            var meshC13 = new THREE.Mesh(geometryB)
            var meshC14 = new THREE.Mesh(geometryB)
            var meshC15 = new THREE.Mesh(geometryB)
            var meshC16 = new THREE.Mesh(geometryB)

            //ustawiamy ich pozycje
            meshA.position.set(0,0,0)
            meshC1.position.set(-12.5, 25, -12.5)
            meshC2.position.set(12.5, 25, -12.5)
            meshC3.position.set(-12.5, 25, 12.5)
            meshC4.position.set(12.5, 25, 12.5)
            meshC5.position.set(12.5, 25, -37.5)
            meshC6.position.set(-12.5, 25, -37.5)
            meshC7.position.set(-12.5, 25, 37.5)
            meshC8.position.set(12.5, 25, 37.5)
            meshC9.position.set(-12.5, 25, -62.5)
            meshC10.position.set(-12.5, 25, 62.5)
            meshC11.position.set(12.5, 25, -62.5)
            meshC12.position.set(12.5, 25, 62.5)
            meshC13.position.set(-12.5, 25, -87.5)
            meshC14.position.set(-12.5, 25, 87.5)
            meshC15.position.set(12.5, 25, -87.5)
            meshC16.position.set(12.5, 25, 87.5)

            meshA.updateMatrix(); // bez tego pozycja geometrii jest zawsze 0,0,0
            singleGeometry.merge(meshA.geometry, meshA.matrix);

            meshC1.updateMatrix();
            singleGeometry.merge(meshC1.geometry, meshC1.matrix);
            meshC2.updateMatrix();
            singleGeometry.merge(meshC2.geometry, meshC2.matrix);
            meshC3.updateMatrix();
            singleGeometry.merge(meshC3.geometry, meshC3.matrix);
            meshC4.updateMatrix();
            singleGeometry.merge(meshC4.geometry, meshC4.matrix);
            meshC5.updateMatrix();
            singleGeometry.merge(meshC5.geometry, meshC5.matrix);
            meshC6.updateMatrix();
            singleGeometry.merge(meshC6.geometry, meshC6.matrix);
            meshC7.updateMatrix();
            singleGeometry.merge(meshC7.geometry, meshC7.matrix);
            meshC8.updateMatrix();
            singleGeometry.merge(meshC8.geometry, meshC8.matrix);
            meshC9.updateMatrix();
            singleGeometry.merge(meshC9.geometry, meshC9.matrix);
            meshC10.updateMatrix();
            singleGeometry.merge(meshC10.geometry, meshC10.matrix);
            meshC11.updateMatrix();
            singleGeometry.merge(meshC11.geometry, meshC11.matrix);
            meshC12.updateMatrix();
            singleGeometry.merge(meshC12.geometry, meshC12.matrix);
            meshC13.updateMatrix();
            singleGeometry.merge(meshC13.geometry, meshC13.matrix);
            meshC14.updateMatrix();
            singleGeometry.merge(meshC14.geometry, meshC14.matrix);
            meshC15.updateMatrix();
            singleGeometry.merge(meshC15.geometry, meshC15.matrix);
            meshC16.updateMatrix();
            singleGeometry.merge(meshC16.geometry, meshC16.matrix);

            singleGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -75 ) );
        }

        if( c == 0 )
        {
            var tmpMaterial = materialRed;
        }
        if( c == 1 )
        {
            var tmpMaterial = materialBlue;
        }
        if( c == 2 )
        {
            var tmpMaterial = materialGreen;
        }
        if( c == 3 )
        {
            var tmpMaterial = materialYellow;
        }

        var singleMesh = new THREE.Mesh(singleGeometry, tmpMaterial);
        singleMesh.name = "k_" + i + "_" + j + "_" + k + "_" + d + "_" + c + "_" + r + "_" + nickname;

        if( r > 0 ){
            for( var rt = 0; rt < r; rt++ )
            {
                singleMesh.rotateY(Math.PI / 2);
            }
        }

        return singleMesh;
    }

    this.changeColor = function( color ){
        var r = color.r;
        var g = color.g;
        var b = color.b;

        if( r == 1 && g != 1 )
        return materialBlue;
        if( b == 1 )
        return materialGreen;
        if( g == 1 &&  r == 0 )
        return materialYellow;
        if( r == 1 && g == 1 )
        return materialRed;
    }

}
