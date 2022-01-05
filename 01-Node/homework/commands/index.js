let fs = require('fs');
const { request } = require('http');

module.exports = {
    echo: function(args, print){
      print(args.join(" "));
    },
    date: function(args, print){
        print(Date());
    },
    ls: function(args, print){
        fs.readdir('.', function(err, files){
            if(err) {throw err }
            print(files.join('\n'));
            /* let output = '';
            files.forEach(e => {output = output + e + '\n'});
            print(output); */
        })
    },
    pwd: function(args, print){
        //print working directory
        print(process.cwd());
    },
    cat: function(args, print){
        // args <= nombre del archivo
        fs.readFile(args[0], 'utf8', function(err, data){
            if(err){ throw err};
            print(data);
        })
    },
    head: function(args, print){
        fs.readFile(args[0], 'utf8', function(err, data){
            if(err){ throw err};
            print(data.split('\n').slice(0, args[1]).join('\n'));
        })
    },
    tail: function(args, print){
        fs.readFile(args[0], 'utf8', function(err, data){
            if(err){ throw err};
            print(data.split('\n').splice(-args[1]).join('\n'));
        })
    }, 
    curl: function(args, print){
        request(args[0], function(err, data){
            if(err){ throw err};
            print(data.body);
        })
    }
}