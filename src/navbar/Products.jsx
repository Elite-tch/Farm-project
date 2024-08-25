import React from 'react';
import StemProductPage from './product/productpage.jsx';

import FruitsProductPage from './product/fruitpage.jsx';
import Footer from './landingpage/footer.jsx';





function Products() {
  return (
    <div className=" slide shadow-lg mt-5 pt-5 ">


    
    <StemProductPage
      title="Explore Our Premium Stems/Fruits"
      titlepara="Discover our standout products, carefully selected for their quality and freshness. These farm favorites are the best of CeciFarm, grown with care and ready to enhance your home and garden."
      slidetitle="Top Stem Products:"
      
      firstImg="pamtree1.jpg"
      firstImgtitle="Malaysia Palm Tree Stems"
      firstImgprice="₦2000.00"
      
      secondImg="bananap.jpg"
      secondImgtitle="Banana Tree Stems"
      secondImgprice="₦1500.00"
      
      thirdImg="plantain.jpg"
      thirdImgtitle="Plantain Tree Stems"
      thirdImgprice="₦1800.00"
      
      fourthImg="coconutr.jpg"
      fourthImgtitle="Coconut Tree Stems"
      fourthImgprice="₦2200.00"



       
      seventhImg="shop.jpg"
      seventhImgtitle="Sharashop Tree Stems"
      seventhImgprice="₦1700.00"
      
      sixthImg="pamtree2.jpg"
      sixthImgtitle="Pine Tree Stems"
      sixthImgprice="₦2500.00"

      button="Buy Now"
    />

       <FruitsProductPage
         
         fslidetitle="Top Fruit Picks for Your Kitchen & Beyond:"
      
      ffirstImg="shara.jpg"
      firstImgtitle="Premium Sharashop Fruits"
      ffirstImgprice="₦500.00 per head"
      
      fsecondImg="fruit.jpg"
      fsecondImgtitle="Unipe Plantains"
      fsecondImgprice="₦1200.00 per Bunch"
      
      fthirdImg="cocohead.jpg"
      fthirdImgtitle="Sweet Coconut head"
      fthirdImgprice="₦500.00 per Coconut Head"
      
      ffourthImg="cucu.jpg"
      ffourthImgtitle="Fresh  Cucumbers"
      ffourthImgprice="₦2500.00 per 50kg bag"



       
      fseventhImg="water.jpg"
      fseventhImgtitle="Sweet Watermelons"
      fseventhImgprice="₦1500.00 per Bunch"
      
      fsixthImg="tomato.jpg"
      fsixthImgtitle="Farm-Fresh Tomatoes"
      fsixthImgprice="₦2000.00 per Basket"

      button="Buy Now"
    />
         
         
         
<div className="pt-5 ">
<Footer />
</div>



      

</div>
      
  );
}

export default Products;
