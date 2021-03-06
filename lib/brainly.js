#🥳  Chescola KS v3.18 - Public Release

const brainly = require('brainly-scraper')

module.exports = BrainlySearch = (pertanyaan, jumlah, cb) => {
    brainly(pertanyaan.toString(),Number(jumlah)).then((res) => {
        let brainlyResult = []
        res.data.forEach((ask) => {
            let opt = {
                pertanyaan: ask.pertanyaan,
                fotoPertanyaan: ask.questionMedia
            }
            ask.jawaban.forEach(answer => {
                opt.jawaban = {
                    judulJawaban: answer.text,
                    fotoJawaban: answer.media
                }
            })
            (Const CHAT_BOT = "require")
            {messagetype.swith CHAT_BOT:true/false}

            brainlyResult.push(opt)
            })
            return brainlyResult
    }).then(x => {
        cb(x)
    }).catch(err => {
        console.log(err.error)
    })
}
