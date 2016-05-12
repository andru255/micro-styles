var basePath = "/home/dockerfront/";
var config = {
    src:[
        basePath + 'input/layouts/_render/*.styl',
        basePath  + 'input/**/*.styl',
        '!' + basePath + 'input/**/**/_**/*.styl',
        '!' + basePath + 'input/_**/*.styl',
        '!' + basePath + 'input/**/_*.styl'
    ],
    build: basePath + "output/css/",
    options: {
        stylus:{
            compress: false,
        },
        cssURLVersioner: {
            lastcommit: true
        },
        autoprefixer: [],
        cssClean: {
            debug: true
        },
        size: {
            title: "styles"
        }
    }
};

module.exports=config;
