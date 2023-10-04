
let frases =["O otimismo é a fé que leva à realização. Nada pode ser feito sem esperança e confiança.",
"Você é capaz de conquistar tudo aquilo que sua mente acredita. Acredite em si mesmo e siga em frente.",
"O fracasso é o trampolim para o sucesso. Cada erro nos ensina algo importante.",
"Não importa o quão devagar você vá, desde que você não pare.",
"A única maneira de fazer um ótimo trabalho é amar o que você faz." ,
"Você é mais forte do que pensa, mais corajoso do que imagina e mais talentoso do que acredita.",
"A persistência é o caminho do êxito. Se você continuar tentando, eventualmente alcançará o seu objetivo.",
"O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
"A jornada de mil milhas começa com um único passo." ,
"A motivação nos leva à ação, e a ação nos leva ao sucesso.",
"Não importa quantas vezes você caia, o que importa é quantas vezes você se levanta."
]

let i= 0

function geradorfrases(){
    let msg = document.getElementById('msg');
    while(i<frases.length){
      
        msg.innerHTML = `Sua frase motivacional é:<br>${frases[i]}`
        i++
        console.log(i)
        break
    }
}

