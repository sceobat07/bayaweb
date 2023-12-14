import Image from 'next/image'
import profil from '../public/slika profil 2.png';
import film1 from '../public/slika  crvena.png';
import film2 from '../public/slika film 3.png';
import film3 from '../public/slika film 4.png';
import film4 from '../public/slika film 2.png';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function Home() {
  return (
    <main >
      <section className=' grid grid-cols-10  min-h-screen bg-[#f2f2f2] '>
       
        
          <div className=' z-30  max-y-min border-2 border-slate-500 mb-16 mt-16 mr-10 col-span-3 position relative left-[250px]'>
            
            <h1 className='  [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-200 bg-white-100" text-left font-Oswald-Light text-6xl text-gray-400 text-opacity-30 rotate-90 position relative top-[400px] right-[350px]'>mag.films.ent</h1>
          </div>
          <div className='  background-saturate-200 shadow-md bg-gradient-to-r from-[#cafffdf9]  to-[#4ff2e7c7]  max-5-min col-span-2 border-1 border-gray-600 position relative top-[50px] left-[80px] z-20'>
            
          </div>
        
          
          <div className='z-50 col-span-5 gap-5'>           
          <div className='flex space-x-2'>
            <div className=" scale-125 shadow-gray-600 shadow-md h-40 w-40 position relative right-[250px] drop-shadow-2xl  mt-[55px] "> 
             <Image
              src={profil}
              alt="Picture of the author" 
               layout="fill" // required
               objectFit="cover" // change to suit your needs
             />
          </div>
            <div className=' mt-[80px] pt-[50px] pl-[100px] position relative right-[170px] ' >
              <h1 className=' [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100  font-serif text-5xl text-gray-500 ' > JOHN VIC</h1>
              <h3 className='font-Oswald-Light text-gray-500 position relative left-[25px]  [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100 '> actor producer writer</h3>
            </div>
          </div>
        <div>

        



        
          <div className='  space-x-2 rtl-ms-8 grid grid-cols-10  position relative right-[200px] top-[120px]  [text-shadow:2px_2px_3px_var(--tw-shadow-color)] div'>

     

        <h4 className='   text-2xl color-[#707070] mr-0 pr-0 relative left-[55px] col-span-1box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.05) font-Oswald-Light items-center text-gray-500 '>01</h4>
  
      <div className="  shadow-gray-600 shadow-md brightness-75 col-span-4 h-30 w-40 relative position left-[20 px]   mt-5 mb-5 ;
     "> 
       <Image
        src={film1}
        alt="Picture of the author"
        layout="fill" // required
        objectFit="object-scale-down" // change to suit your needs
        /> 
     </div>
    <div className='  col-span-5  relative position right-[120px] '>
      <h1 className=' [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100 text-left ml-6 mt-8 font-Oswald-Regular relative bottom-2 font  '> "Sketch"</h1>
      <h3 className='  [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100 text-left text-xs ml-5 mr-[100px] mb-4 color-[#707070]  font-Oswald-Light items-center '> 
      Every vowel is converted to its neighboring vowel, 
      in five different varitations, resulting in scrambled
      words that resemble the original yet take on an entirely 
      new flavor.Srkite ej bayo,ej i told old man not 
      to talk!
      </h3>
    </div>
    
    
  </div>
  </div>   
  





          <div className='   space-x-2 rtl-ms-8 grid grid-cols-10 position relative top-[130px] right-[30px]'>
          <h4 className='   text-2xl color-[#707070] mr-0 pr-0 relative left-[55px] col-span-1box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.05) font-Oswald-Light items-center text-gray-500 '>02</h4>
  
          <div className="  shadow-gray-600 shadow-md  col-span-4 h-30 w-40 relative position left-[20 px]   mt-5 mb-5 ;
     "> 
       <Image
        src={film4}
        alt="Picture of the author"
        layout="fill" // required
        objectFit="object-scale-down" // change to suit your needs
        />
     </div>
    <div className='col-span-5 relative position right-[120px]'>
      <h1 className=' [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100 text-left ml-8 mt-8 font-Oswald-Regular relative bottom-4'> "Crowd"</h1>
      <h3 className='text-left text-xs ml-5 mr-[120px] mb-4 color-[#707070]  [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100" font-Oswald-Light items-center drop-shadow-lg '> 
      Every vowel is converted to its neighboring vowel, 
      in five different varitations, resulting in scrambled
      words that resemble the original yet take on an entirely 
      new flavor.Srkite ej duvaj racku,ej i told old man not 
      to talk!
      </h3>
    </div>
    </div>


    <div className='   space-x-2 rtl-ms-8 grid grid-cols-10 relative position right-[200px] top-[130px]'>
        <h4 className='  text-2xl color-[#707070] mr-0 pr-0 relative left-[55px] col-span-1 font-Oswald-Light items-center text-gray-500 '>03</h4>
  
      <div className=" shadow-gray-600 shadow-md  col-span-4 h-30 w-40 relative position left-[20 px]   mt-5 mb-5  ;
     "> 
       <Image
        src={film2}
        alt="Picture of the author"
        layout="fill" // required
        objectFit="object-scale-down" // change to suit your needs
        /> 
     </div>
    <div className='  col-span-5  relative position right-[120px]'>
      <h1 className='text-left ml-8 mt-5 font-Oswald-Regular relative bottom-2 [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100"'> "Adicted"</h1>
      <h3 className=' [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100" text-left text-xs ml-5 mr-[100px] mb-4 color-[#707070] ) font-Oswald-Light items-center  '> 
      Every vowel is converted to its neighboring vowel, 
      in five different varitations, resulting in scrambled
      words that resemble the original yet take on an entirely 
      new flavor.Srkite ej bayo,ej i told old man not 
      to talk!
      </h3>
    </div>
    
    
  </div>
  
  
   <div className='   space-x-2 rtl-ms-8 grid grid-cols-10 position relative top-[130px] right-[30px] '>
        <h4 className='   text-2xl color-[#707070] mr-0 pr-0 relative left-[55px] col-span-1 font-Oswald-Light items-center text-gray-500 '>04</h4>
  
      <div className="   shadow-gray-600 shadow-md col-span-4 h-30 w-40 relative position left-[20 px]   mt-5 mb-5  ;
     "> 
       <Image
        src={film3}
        alt="Picture of the author"
        layout="fill" // required
        objectFit="object-scale-down" // change to suit your needs
        /> 
     </div>
    <div className='  col-span-5  relative position right-[120px]'>
      <h1 className='text-left ml-8 mt-8 font-Oswald-Regular relative bottom-4  [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100" '> "The Clown"</h1>
      <h3 className='  text-left text-xs ml-5 mr-[100px] mb-4 color-[#707070]  font-Oswald-Light items-center [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100 '> 
      Every vowel is converted to its neighboring vowel, 
      in five different varitations, resulting in scrambled
      words that resemble the original yet take on an entirely 
      new flavor.Srkite ej bayo,ej i told old man not 
      to talk!
      </h3>
    </div>
    
    
  </div>
  </div>
  




      

  </section>
  <section className=' bg-[#f2f2f2] h-[450px]  [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-slate-300 bg-white-100'>
  <div className=' bg-white-100 position relative top-[300px] flex justify-center gap-9 text-4xl text-gray-500 'div >
    

    <FaFacebook/>
  
    
      
    <FaInstagram/> 
    
    
    <FaSquareTwitter/>

  <h5 className='text-gray-500 position relative left-[400px] top-[90px] font-Oswald-ExtraLight text-xs'>made by RoBog08</h5>
      
    
      
    </div>
    
  </section>
      
    </main>
  )
}
