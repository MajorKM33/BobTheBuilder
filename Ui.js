function Ui(){

    this.click = function( clickedMesh, nickname ){

        var name = clickedMesh.name;
        console.log( name );

        if( name[0] == "p" )
        {
            name = "p";
        }
        if( name[0] == "k" )
        {
            name = "k";
        }

        switch(name){
            case "startGame":
                main.startGame();
            break;

            case "p":
                console.log("p");
                var i = parseInt(clickedMesh.name.split("_")[1]);
                var j = parseInt(clickedMesh.name.split("_")[2]);
                main.postaw(i,j,0,1,0,0,nickname,1);
            break;

            case "k":
                console.log("k");
                var i = parseInt(clickedMesh.name.split("_")[1]);
                var j = parseInt(clickedMesh.name.split("_")[2]);
                var k = parseInt(clickedMesh.name.split("_")[3]);
                var d = parseInt(clickedMesh.name.split("_")[4]);
                var c = parseInt(clickedMesh.name.split("_")[5]);
                var r = parseInt(clickedMesh.name.split("_")[6]);
                //var nickname = parseInt(clickedMesh.name.split("_")[7]);
                main.postaw(i,j,k+1,d,c,r,nickname,1);
            break;

            default:

            break;
        }

    }

}
