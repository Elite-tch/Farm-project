import React from 'react';

const currentDate= new Date()
const currentYear  = currentDate.getFullYear()

function Footer() {
   return(

<div>
      <p className="pt-3 pb-3   footer-text text-center">&copy; {currentYear} <span>Elite-tech</span>. All Rights Reserved.</p>
</div>
     



     )
}


export default Footer;
