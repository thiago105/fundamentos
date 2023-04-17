// const login = (email) => {
//     return new Promise((resolve, reject) => {
//         const error = false;
//         if(error){
//             reject(new Error('erro de login'));
//         }else{
//             console.log("e-mail correto")
//             resolve(email);
//         }
//     });
// };
// const userVideos = (email) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('userVideos')
//             resolve ("videos1", "videos2", "videos3");
//         }, 2500)
//     })
// }
// const videosDetails = (video)=> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('videosDatails')
//             resolve({title: "video title"});
//         }, 2500)
//     });
// };

// login('thiisantos00@gmail.com')
//     .then((user) => userVideos(user.email))
//     .then((videos) => videosDetails(videos[1]))
//     .catch((error) => console.log(error));


// // PROMISE.ALL 
// //execulta todas promises em uma unica chamada
//  const you = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("videos do youtube")
//     }, 2000)
//  });
//  const face = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("app facebook")
//     }, 3000)
//  });

//  Promise.all([you, face])
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// ///////////////////////////////////////////////////////////////////////////////
// // OUTRA AULA DE PROMISE
// const promessa =  new Promise((resolve, reject) => {
//     const nome = 'Thiago'

//     if( nome === 'Thiago'){
//         resolve(`eu sou ${nome}`)
//     }else{
//         reject(`nao sou ${nome}`)
//     }
// })
// promessa.then((meuNome) => {
// console.log(meuNome)
// })

// // .THEN
// const promessa2 =  new Promise((resolve, reject) => {
// const nome = 'Thiago'

// if( nome === 'Thiago'){
//     resolve(`eu sou ${nome}`)
// }else{
//     reject(`nao sou ${nome}`)
// }
// })
// promessa2
// .then((meuNome) => meuNome.toLowerCase())
// .then((novoThen) => console.log(novoThen))

// // .CATCH
// const promessa3 =  new Promise((resolve, reject) => {
//     const nome = 'Paulo'
    
//     if( nome === 'Thiago'){
//         resolve(`eu sou ${nome}`)
//     }else{
//         reject(`nao sou ${nome}`)
//     }
//     })
//     promessa3
//     .then((meuNome) => meuNome.toLowerCase())
//     .then((novoThen) => console.log(novoThen))
//     .catch((reject) => console.log('ouve um erro: '+ reject))
    
// // RESOLVE VARIAS PROMESSAS 
// //Promise.all -> resolve todas promise e retorno-as, caso haja tempo, é retornada todas promise apos o tempo passado
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve ('p1 ok')
//     }, 2000)
// });
// const p2 = new Promise((resolve, reject) => {
//     resolve ('p2 ok')
// });
// const p3 = new Promise((resolve, reject) => {
//     resolve ('p3 ok')
// });
// const p4 = new Promise((resolve, reject) => {
//     resolve ('p4 ok')
// });
// Promise.all([p1, p2, p3, p4])
//     .then((user) => console.log(user))
 
// // RESOLVE VARIAS PROMESSAS 
//Promise.race -> resolve varias promessar, porem somente a primeira que for resolvida sera enviada, como uma corrida
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve ('p5 ok'), 2000)
});
const p6 = new Promise((resolve, reject) => {
    resolve ('p6 ok')
});
const p7 = new Promise((resolve, reject) => {
    resolve ('p7 ok')
});
const p8 = new Promise((resolve, reject) => {
    resolve ('p8 ok')
});
const variasRace = Promise.race([p5, p6, p7, p8]).then((user) => {
    console.log(user)
})
////////////////////////////////////////////////////////////////////////////
//OUTRA AULA
const myPromessa = new Promise((resolve, reject) => {
    let soma = 2 + 3
    if(soma === 3){
        resolve('correto')
    } else{
        reject('deu erro parça')
    }
})
console.log('aguardando promise...');

myPromessa
    .then((resposta) => console.log(`valor de resolve: ${resposta}`))
    .catch((err) => console.error(`valor de reject: ${err}`))
    .finally(() => console.log('retorna o resultado indepente'))