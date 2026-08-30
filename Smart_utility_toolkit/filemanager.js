//  . fs Module

const fs = require("fs");

const filename = "test.txt";


// / Read operation

fs.writeFile("test.txt", "welcome to jungle", (err) => {

    if (err) {

        console.log("Something went wrong");

    } else {

        console.log("file write succesfully");


        fs.readFile("test.txt", "utf-8", (err, data) => {

            if (err) {

                console.log("Something went wrong");

            } else {

                console.log("file read succesfully", (data));


                // update sucessfully

                fs.appendFile("test.txt", "\n kese ho tum", (err) => {

                    if (err) {

                        console.log("something went wrong");

                    } else {

                        console.log("file updated sucessfully");


                        // rename operation

                        fs.rename("test.txt", "new.txt", (err) => {

                            if (err) {

                                console.log("something went wrong");

                            } else {

                                console.log("file rename sucessfully");


                                // delete operation

                                fs.unlink("new.txt", (err) => {

                                    if (err) {

                                        console.log("something went wrong");

                                    } else {

                                        console.log("file deleted sucessfully");

                                    }

                                });

                            }

                        });

                    }

                });

            }

        });

    }

});