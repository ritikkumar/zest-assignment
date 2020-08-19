const axios = require('axios')

async function callUrl(url) {
    const response = await axios.get(url)
    return response.data
}

async function compare(fileText1, fileText2) {
    const listUrl1 = fileText1.toString("utf-8").split("\n")
    const listUrl2 = fileText2.toString("utf-8").split("\n")
    const lengthUrl = listUrl1.length > listUrl2.length ? listUrl1.length : listUrl2.length
    for (let i = 0; i < lengthUrl; i++) {
        const url1 = listUrl1[i]
        const url2 = listUrl2[i]
        const promise1 = callUrl(url1)
        const promise2 = callUrl(url2)
        const res = Promise.all([promise1, promise2]).then(res => {
            const response1 = JSON.stringify(res[0].data)
            const response2 = JSON.stringify(res[1].data)
            console.log(url1 + (response1 == response2 ? "" : " not") + " equals " + url2)
            return response1 == response2
        }).catch((e) => {
            console.log(e.message)
            return "Invalid"
        })
        return res;
    }
}

module.exports = compare