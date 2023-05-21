import React from 'react'

function PopContact() {
    function showQuoteForm() {
        const quoteFormContainer = document.getElementById('quoteFormContainer');
        quoteFormContainer.classList.remove('hidden');
      }
      
      function showContactForm() {
        const contactFormContainer = document.getElementById('contactFormContainer');
        contactFormContainer.classList.remove('hidden');
      }


      // Get the contact form and button elements
const contactForm = document.getElementById('contactForm');
const openContactFormBtn = document.getElementById('openContactFormBtn');

// Add event listener to the button to toggle the visibility of the contact form
openContactFormBtn.addEventListener('click', () => {
  contactForm.classList.toggle('show-contact-form');
});

// Add event listener to the form submission (you can handle the form submission logic here)
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Handle form submission logic (e.g., sending data to the server)
  // ...
});



  return (
    <div className='pop-contact'>
        <div className="pop-center">
            <div className="pop-items">
            <div class="sc-gScZFl jMjbqo">
  <div class="GetStarted__PrimaryBackgroundContainer-ca83ni-0 cFrPuz">
    <div class="GetStarted__Row-ca83ni-1 cTkvJm">
      <div class="GetStarted__ColumnContainer-ca83ni-2 GetStarted__TextContainer-ca83ni-3 hkbVEY iiiDAn">
        <h5 class="GetStarted__Text-ca83ni-4 dXCriY">We’re passionate about helping clients with empathy and transparency while giving them the best of service.</h5>
      </div>
      <div class="GetStarted__ColumnContainer-ca83ni-2 GetStarted__LinksContainer-ca83ni-5 hkbVEY kqkCnY">
        <button class="GetStarted__Link-ca83ni-6 GetStarted__PrimaryLink-ca83ni-9 gGrezg hSJErs" onclick={()=>showQuoteForm}>Get Quote</button>
        <button class="GetStarted__Link-ca83ni-6 GetStarted__SecondaryLink-ca83ni-10 gGrezg dieMBK" onclick={()=>showContactForm}>Contact Us</button>
      </div>
    </div>
    <div class="GetStarted__DecoratorBlobContainer-ca83ni-11 iZazWb">
      <span class="GetStarted__DecoratorBlob1-ca83ni-12 cFKVMx"><img src="example" alt="logo" /></span>
      <svg viewBox="0 0 600 600" class="GetStarted__DecoratorBlob2-ca83ni-13 eUiVdX">
        <g transform="translate(300,300)">
          <path d="M153.6,-239C199.1,-209.8,236,-167.2,258.4,-118C280.9,-68.9,288.9,-13.1,281.2,40.4C273.5,93.9,250.1,145.2,214.7,186.1C179.3,226.9,131.9,257.4,80,272.6C28.2,287.8,-28.2,287.8,-80,272.6C-131.9,257.4,-179.3,226.9,-214.7,186.1C-250.1,145.2,-273.5,93.9,-281.2,40.4C-288.9,-13.1,-280.9,-68.9,-258.4,-118C-236,-167.2,-199.1,-209.8,-153.6,-239C-108.1,-268.3,-54.1,-284.1,0,-284.1C54.1,-284.1,108.1,-268.3,153.6,-239Z" fill="currentColor"></path>
        </g>
      </svg>
    </div>
  </div>
</div>

<div class="quote-form-container hidden" id="quoteFormContainer">
  {/* <!-- Quote form content goes here --> */}
</div>

<div class="contact-form-container hidden" id="contactFormContainer">
  {/* <!-- Contact form content goes here --> */}
</div>


            </div>
        </div>
    </div>
  )
}


export default PopContact