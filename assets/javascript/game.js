/*jshint esversion: 6 */

window.onload = function () {
    //Global variables
    var wins = 0;
    var losses = 0;
    var gemTotal;
    var compRandNum;
    console.log("after window load");

    function start_reset() {
        //this will reset the computers number and display it
        compRandNum = Math.floor(Math.random() * 121) + 26;
        $('#random_number').html("<h1>" + compRandNum + "</h1>");
        console.log(compRandNum + " comp rand");
        //this will reset the gem total to 0 and display it
        gemTotal = 0;
        $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
        console.log(gemTotal + " gemTot");

        for (i = 0; i < 4; i++) {
            crystalRandNum[i] = Math.floor(Math.random() * 13) + 1;
            console.log(crystalRandNum);
        }
    }
    start_reset();
    console.log("After reset called");

    $(document).on('click', ".thumbnail", function () {




    });

    console.log("Before window load");

};

/*
    window.onload = function () {
        //Global variables
        var compRandNum;
        var wins = 0;
        var losses = 0;
        var gemTotal = 0;
        var ruby;
        var sapphire;
        var sapphireYellow;
        var emerald;
        let rubyFirstClick = true;
        let sapphireFirstClick = true;
        let yellow_sapphireFirstClick = true;
        let emeraldFirstClick = true;

        $('#ruby').on('click', rubyClick);
        $('#sapphire').on('click', sapphireClick);
        $('#yellow_sapphire').on('click', yellow_sapphireClick);
        $('#emerald').on('click', emeraldClick);

        compNum();

        function rubyClick() {
            if (rubyFirstClick === true) {
                ruby = Math.floor(Math.random() * 13) + 1;
                rubyFirstClick = false;
                gemTotal += ruby;
                $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
                console.log(ruby + " rubyClick");
                win();
                lose();
            } else {
                gemTotal += ruby;
                $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
                console.log(ruby + " else");
                win();
                lose();
            }
        }

        function sapphireClick() {
            if (sapphireFirstClick === true) {
                sapphire = Math.floor(Math.random() * 13) + 1;
                sapphireFirstClick = false;
                gemTotal += sapphire;
                $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
                console.log(sapphire + " sapphireClick");
                win();
                lose();
            } else {
                gemTotal += sapphire;
                $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
                console.log(sapphire + " else");
                win();
                lose();
            }
        }

        function yellow_sapphireClick() {
            if (yellow_sapphireFirstClick === true) {
                sapphireYellow = Math.floor(Math.random() * 13) + 1;
                yellow_sapphireFirstClick = false;
                gemTotal += sapphireYellow;
                $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
                console.log(sapphireYellow + " sapphirYelloweFirstClick");
                win();
                lose();
            } else {
                gemTotal += sapphireYellow;
                $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
                console.log(sapphireYellow + " else");
                win();
                lose();
            }
        }

        function emeraldClick() {
            if (emeraldFirstClick === true) {
                emerald = Math.floor(Math.random() * 13) + 1;
                emeraldFirstClick = false;
                gemTotal += emerald;
                $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
                console.log(emerald + " emeraldClick");
                win();
                lose();
            } else {
                gemTotal += emerald;
                $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
                console.log(emerald + " else");
                win();
                lose();
            }
        }

        //Functions to be resude by the crystal functions
        function compNum() {
            //this will generate a random number and then display it at #random_number
            compRandNum = Math.floor(Math.random() * 121) + 26;
            $('#random_number').html("<h1>" + compRandNum + "</h1>");
            console.log(compRandNum + " function");
        }
        function reset() {
            //this will reset the computers number and display it
            var compRandNum = Math.floor(Math.random() * 121) + 26;
            $('#random_number').html("<h1>" + compRandNum + "</h1>");
            //this will reset the gem total to 0 and display it
            gemTotal = 0;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            //this resets the ruby first click boolean
            rubyFirstClick = false;
            console.log("reset");
        }

        function win() {
            if (gemTotal == compRandNum) {
                //add to win counter and disaply
                wins++;
                $("#wins").html("<h3>" + wins + "</h3>");
                console.log(gemTotal + " win");
                console.log(compRandNum + " win");
                //call reset and comp randum number functions
                reset();
                compNum();
            }
        }
        function lose() {
            if (gemTotal > compRandNum) {
                //adds to losses counter and displays it
                losses++;
                $("#losses").html("<h3>" + losses + "</h3>");
                console.log(gemTotal + " lose");
                console.log(compRandNum + " lose");
                //call reset and comp randum number functions
                reset();
                compNum();
            }
        }
    };
    */