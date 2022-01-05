  const commands = require('./commands/index')
  //commands = {echo, date, ls, pwd, ...}

  const print = function(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  }

  // Output un prompt
  process.stdout.write('prompt > ');
  // El evento stdin 'data' se dispara cuando el user escribe una línea
  process.stdin.on('data', function (data) {

    // 'echo hola como andas?'
    let args = data.toString().trim().split(" "); // remueve la nueva línea

    // args = ['echo', 'hola', 'como', 'andas', '?']
    let cmd = args.shift(); // 'echo'
    //args = ['hola', 'como', 'andas', '?']
    
    if(commands[cmd]){
        commands[cmd](args, print);
    } else {
        print('cmd not found')
    }

    
    /* if(cmd === 'echo'){
        process.stdout.write(args.join(" "));
    } else if(cmd === 'ls'){
        
    } else if(cmd === 'pwd'){
        
    } else if(cmd === 'date'){
        
    } else {
        process.stdout.write('commant not found');
    } */
  });