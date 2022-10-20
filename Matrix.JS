const lienzo = document.getElementById( "LienzoMatrix" )
const ctx = lienzo.getContext( "2d" )

let cw = window.innerWidth
let ch = window.innerHeight

let arregloCaracteres = [ 
   'a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',
   '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'þ', 'ÿ', 'Ħ','Ę','Ğ','Ŀ','Ķ','ΰ','Γ','Θ','Λ','Ξ','ζ','Φ',
   'Ψ','έ','Σ','Ω','β','Ѝ','Џ','Б','Д','Ж','ф','Щ','Ы','й','Э','Ѣ','Џ','ђ','љ','Җ','Ӂ','ҡ','Ṝ','ẞ','‡','‰','₤','₩','₮','₹'
] ;

let conteoMaximoCaracteres = 1000
let arregloCaracteresCaida = []
let tamanioFuente = 15
let columnasMaximo = cw / tamanioFuente

lienzo.width = cw
lienzo.height = ch

let marcos = 0

class caidaCaracter{

   constructor( x, y ){
      this.x = x ;
      this.y = y ;
   }

   dibujar( ctx ){
      this.value = arregloCaracteres[ Math.floor( Math.random() * ( arregloCaracteres.length - 1 ) ) ].toUpperCase()
      this.speed = Math.random() * tamanioFuente * 3 /4 + tamanioFuente * 3/4
      
      ctx.fillStyle = "rgba(0,255,0)"
      ctx.font = tamanioFuente + "px san-serif"
      ctx.fillText( this.value, this.x, this.y )

      this.y += this.speed ;

      if( this.y > ch ){
         this.y = Math.random() * ch/2 - 50 ;
         this.x = Math.floor( Math.random() * columnasMaximo ) * tamanioFuente ;
         this.speed = ( - Math.random() * tamanioFuente * 3 ) / 4 + ( tamanioFuente * 3 ) / 4 ;
      }
   }
}

let actualiza = () =>{
   if( arregloCaracteresCaida.length < conteoMaximoCaracteres ){
      let cc = new caidaCaracter( Math.floor( Math.random() * columnasMaximo ) * tamanioFuente, Math.random() * ch/2 - 50 ) ;
      arregloCaracteresCaida.push( cc )
   }

   ctx.fillStyle = "rgba(0,0,0, 0.04)"
   ctx.fillRect( 0, 0, cw, ch )

   for( let i = 0; i < arregloCaracteresCaida.length && marcos % 6 == 0; i++ ){
      arregloCaracteresCaida[ i ].dibujar( ctx );
   }

   requestAnimationFrame( actualiza );
   marcos++ ;
} ;
actualiza();