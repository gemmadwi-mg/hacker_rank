function processData(input) {
    //Enter your code here
    class Player {
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }
    }

    class Checker {
        compare(a, b) {
            if (a.score === b.score) {
                // if score are equal, sort alphabetically by name
                return a.name.localeCompare(b.name);
            } else {
                // Sort by decreasing score
                return b.score - a.score;
            }
        }
    }

    // Example usage:
    const n = 3; // Number of players
    const players = [
        new Player("amy", 100),
        new Player("david", 100),
        new Player("heraldo", 50)
    ];

    const checker = new Checker();
    players.sort(checker.compare);
    console.log(players);

    /**
     * Explanation:

We define a Player class to represent each player, which has two fields: name and score.
We also define a Checker class that implements the compare method as required. This method compares two Player objects based on their scores and names.
If the scores of the two players are equal, it sorts them alphabetically by name using localeCompare().
Otherwise, it sorts them by decreasing score.
In the example usage, we create an array of Player objects, instantiate a Checker object, and then use the sort method with the compare function of the Checker object to sort the array of Player objects. Finally, we print the sorted array.
     */
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
