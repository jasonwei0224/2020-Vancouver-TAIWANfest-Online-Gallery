import React from 'react';
import SkyArtist from './skyArtist';
import huang_profile from '../assets/人物照 -黃約農.jpg';
import Slider from './img_slider_final_sky'
import sara_profile from '../assets/人物照-Sara.jpg';
import valerie_profile from '../assets/人物照-Valerie.jpg';
import peter_profile from '../assets/人物照-潘小俠.jpg';
import star_profile from '../assets/人物照-心星.jpg';
import p1_profile from '../assets/人物照-伊顯玲.jpg'
import sara1 from '../assets/Sara1.jpg';
import sara2 from '../assets/Sara2.jpg';
import valerie from '../assets/Valerie.jpg';
import star from '../assets/心星.jpg';
import peter from '../assets/潘小俠.jpg';
import p1 from '../assets/阿比1.jpg';
import p2 from '../assets/阿比2.jpg';
import huang from '../assets/黃約農.jpg'
function SkyArtist3() {

    var text =`This image was taken on a day where the sky was ever-changing.  It was a surreal moment of the clouds engulfing all of the sky except for the peak of a mountain.  An interpretation can be seen: of finding the peak in the storm and keeping your head high.  Although the weather is not always in our favour, it's amazing what we can find with the right attitude.
`
  var artistInfo=`As a Registered Nurse and Photographer, I am constantly reminded that we are all living under the same sky.  I have a huge passion for the outdoors and outdoor imagery as I feel it can bring us all together.`


  var images = [sara1, sara2]

      return (
      <div>
      <img src={sara1} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="HIDDEN IN THE CLOUDS"
        title="SARA BOYCHUK"
        location="CANADA"
        content={text}
        artistInfo={artistInfo}
        profile={sara_profile}
        artwork={sara1}
        fb=""
        ig="https://www.instagram.com/saraboychukphoto"
        yt=""
        tw=""
        other="https://www.saraboychuk.com"
        other1={huang_profile}
        other2={huang_profile}
        other3={huang_profile}
        othername1="DUMAS TEMU"
        othername2="DUMAS TEMU"
        othername3="DUMAS TEMU"
        url1=""
        url2=""
        url3=""
        name = "SARA BOYCHUK"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
