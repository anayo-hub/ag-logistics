import React from 'react'

function ContactForm() {
  return (
    <div>

<div id="contactForm" class="contact-form-container">
  <h2>Contact Us</h2>
  <form>
    <div class="form-group">
      <input type="text" name="name" placeholder="Your Name" required />
    </div>
    <div class="form-group">
      <input type="email" name="email" placeholder="Your Email" required />
    </div>
    <div class="form-group">
      <input type="tel" name="phone" placeholder="Your Phone" required />
    </div>
    <div class="form-group">
      <textarea name="message" placeholder="Your Message" required></textarea>
    </div>
    <div class="form-group">
      <button type="submit">Submit</button>
    </div>
  </form>
</div>
<button id="openContactFormBtn" class="GetStarted__Link-ca83ni-6 GetStarted__SecondaryLink-ca83ni-10 gGrezg dieMBK">Contact Us</button>

    </div>
  )
}

export default ContactForm