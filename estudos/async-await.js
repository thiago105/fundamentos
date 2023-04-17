// const login = (email, senha) => {
//     return new Promise((resolve, reject) => {
//         const error = false;

//         if(error){
//             reject(new Error("erro de login"));
//         }else{
//             console.log("conectado ao seu e-mail")
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

// //PROMISE USANDO ASYNC / AWAIT
// const  teste = async() => {
//     try{
//         const user = await login('thiisantos00@gmail.com');
//         const videos = await userVideos(user.email);
//         const videosDatails = await videosDetails(videos);
    
//         console.log(videosDatails)
//         } catch(error){
//         console.log(error)
//         }
//     };
//     teste()
//////////////////////  
// function primeiraEspera() {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             console.log('esperar isso aqui')
//             resolve()
//         }, 2000)
//     })
// };
// async function segundaEspera() {
//     console.log('iniciou')//execulta imediato
//         await primeiraEspera()// executa apos 2seg
//     console.log('terminou')//executa junto await
// }
// segundaEspera()

//////////
const a = () => new Promise ((resolve, reject) => {
    setTimeout(() => resolve( 'promessa a resolvida'),5000)
});
const b = () => new Promise((resolve) => {
    setTimeout(() => resolve('promessa b resolvida'),2000)
});
const c = () => new Promise((resolve) => {
    setTimeout(() => resolve('promessa c resolvida'),1000)
});

const resolvendo = async () => {
    const resultado1 = await a();
    const resultado2 = await b();
    const resultado3 = await c();
    console.log(` \n${resultado1} \n${resultado2} \n${resultado3} `)
}
resolvendo()

