const Generator = require('yeoman-generator');
const path = require('path')
const fs = require('fs');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.log('Initializing app generators..')
    }

    copyingFiles() {
        let files = fs.readdirSync(path.resolve(__dirname, this.templatePath()));
        // const folder = __dirname.split('\\').pop()
        // this.log(`files from folder ${folder} to copy: `)
        this.log(files)
        for (let fileName of files) {
            this.fs.copyTpl(
                this.templatePath(fileName),
                this.destinationPath(path.resolve(fileName))
            );
        }
        // this.log(`successfully copied files from ${folder}.`)
    }
};
