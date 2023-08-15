const fs = require("fs")

fs.readdir("testFolder", (error, content) => {
    if (error) {
        console.error(error)
        return
    }
    console.log(content)
})